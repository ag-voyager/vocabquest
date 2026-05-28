/**
 * VocabQuest — script.js
 * =====================================================================
 * A fully-featured static vocabulary trainer for kids (age 8–12).
 *
 * Architecture:
 *   ┌─ State        : Single source of truth (currentWords, etc.)
 *   ├─ Storage      : localStorage helpers (anti-repetition + stats)
 *   ├─ Words        : fetch & selection logic
 *   ├─ Scramble     : word scrambling algorithm
 *   ├─ Learn View   : renders word cards
 *   ├─ Test View    : renders test rows, validates answers
 *   ├─ UI Helpers   : show/hide views, progress bar, stats chips
 *   └─ Confetti     : tiny canvas confetti for high scores
 * =====================================================================
 */

'use strict';

/* ─────────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────────── */
// words are loaded from words.js (global VOCAB_WORDS)
const WORDS_PER_SESSION   = 5;
const MEDIUM_COUNT        = 3;   // out of 5
const HARD_COUNT          = 2;   // out of 5
const ANTI_REPEAT_MS      = 72 * 60 * 60 * 1000; // 72 hours in ms
const LS_HISTORY_KEY      = 'vocabquest_history';   // localStorage key for shown words
const LS_STATS_KEY        = 'vocabquest_stats';     // localStorage key for game stats

/* ─────────────────────────────────────────────
   APPLICATION STATE
───────────────────────────────────────────── */
const state = {
  allWords:     [],         // full word list loaded from words.js
  currentWords: [],         // the 5 words chosen for this session
  testOrder:    [],         // currentWords in shuffled order for the test
  submitted:    false,      // has the current test been graded?
};

/* ─────────────────────────────────────────────
   DOM REFERENCES
   (All grabbed once at startup — no inline JS)
───────────────────────────────────────────── */
const dom = {
  // Views
  loadingView:    document.getElementById('loading-view'),
  learnView:      document.getElementById('learn-view'),
  testView:       document.getElementById('test-view'),

  // Learn view
  cardsGrid:      document.getElementById('cards-grid'),
  takeTestBtn:    document.getElementById('take-test-btn'),
  refreshBtn:     document.getElementById('refresh-btn'),

  // Test view
  testRows:       document.getElementById('test-rows'),
  progressBar:    document.getElementById('progress-bar'),
  submitBtn:      document.getElementById('submit-btn'),
  retryBtn:       document.getElementById('retry-btn'),
  backToLearnBtn: document.getElementById('back-to-learn-btn'),
  newWordsBtn:    document.getElementById('new-words-btn'),

  // Score summary
  scoreSummary:   document.getElementById('score-summary'),
  scoreBadge:     document.getElementById('score-badge'),
  scoreEmoji:     document.getElementById('score-emoji'),
  scoreNumber:    document.getElementById('score-number'),
  scoreLabel:     document.getElementById('score-label'),
  scoreMessage:   document.getElementById('score-message'),

  // Stats chips
  streakValue:     document.getElementById('streak-value'),
  totalCorrect:    document.getElementById('total-correct-value'),
  wordsSeen:       document.getElementById('words-seen-value'),

  // Confetti canvas
  confettiCanvas:  document.getElementById('confetti-canvas'),
};

/* ─────────────────────────────────────────────
   LOCAL STORAGE — ANTI-REPETITION SYSTEM
   ─────────────────────────────────────────────
   Structure stored in localStorage:
   {
     "word1": 1718200000000,   // Unix timestamp (ms) when shown
     "word2": 1718200000000,
     ...
   }

   Words are excluded from selection if their timestamp
   is less than 72 hours ago. Expired entries are cleaned
   on every load to keep storage tidy.
───────────────────────────────────────────── */

/**
 * loadHistory — Read shown-words history from localStorage.
 * @returns {Object} map of { word: timestamp }
 */
function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(LS_HISTORY_KEY) || '{}');
  } catch {
    return {};
  }
}

/**
 * saveHistory — Persist history map to localStorage.
 * @param {Object} history
 */
function saveHistory(history) {
  localStorage.setItem(LS_HISTORY_KEY, JSON.stringify(history));
}

/**
 * cleanHistory — Remove entries older than ANTI_REPEAT_MS.
 * Call this once per session load to keep storage lean.
 * @param {Object} history — mutable history map
 */
function cleanHistory(history) {
  const cutoff = Date.now() - ANTI_REPEAT_MS;
  for (const word in history) {
    if (history[word] < cutoff) delete history[word];
  }
}

/**
 * recordShownWords — Mark words as shown at current timestamp.
 * @param {string[]} words — list of word strings
 */
function recordShownWords(words) {
  const history = loadHistory();
  const now = Date.now();
  words.forEach(w => { history[w] = now; });
  saveHistory(history);
}

/**
 * getRecentlyUsed — Returns a Set of words seen < 72 h ago.
 * @returns {Set<string>}
 */
function getRecentlyUsed() {
  const history = loadHistory();
  cleanHistory(history);
  saveHistory(history); // persist cleaned version
  return new Set(Object.keys(history));
}

/* ─────────────────────────────────────────────
   LOCAL STORAGE — STATS
───────────────────────────────────────────── */
function loadStats() {
  try {
    return JSON.parse(localStorage.getItem(LS_STATS_KEY) || '{}');
  } catch {
    return {};
  }
}
function saveStats(stats) {
  localStorage.setItem(LS_STATS_KEY, JSON.stringify(stats));
}
/**
 * updateStats — Called after each test submission.
 * @param {number} correct — number of correct answers this round
 */
function updateStats(correct) {
  const stats = loadStats();
  stats.totalCorrect  = (stats.totalCorrect  || 0) + correct;
  stats.wordsSeen     = (stats.wordsSeen     || 0) + WORDS_PER_SESSION;
  // Streak: if all 5 correct, increment; otherwise reset
  stats.streak = correct === WORDS_PER_SESSION
    ? (stats.streak || 0) + 1
    : 0;
  saveStats(stats);
  renderStatsChips(stats);
}
/** Render the stats bar from saved stats. */
function renderStatsChips(stats) {
  dom.streakValue.textContent    = stats.streak       || 0;
  dom.totalCorrect.textContent   = stats.totalCorrect  || 0;
  dom.wordsSeen.textContent      = stats.wordsSeen     || 0;
}

/* ─────────────────────────────────────────────
   WORD SELECTION
───────────────────────────────────────────── */

/**
 * fetchWords — Returns the word list from the globally loaded VOCAB_WORDS
 * variable (defined in words.js, included via <script> tag).
 * This approach works when opening index.html directly as a local file
 * (file://) without needing any server, unlike fetch() which is blocked
 * by browsers on the file:// protocol.
 * @returns {Object[]}
 */
function fetchWords() {
  if (typeof VOCAB_WORDS === 'undefined' || !Array.isArray(VOCAB_WORDS)) {
    throw new Error(
      'VOCAB_WORDS not found. Make sure words.js is in the same folder as index.html.'
    );
  }
  return VOCAB_WORDS;
}

/**
 * pickRandom — Randomly pick `n` items from an array (no repeats).
 * Uses Fisher-Yates partial shuffle for efficiency.
 * @param {any[]} arr
 * @param {number} n
 * @returns {any[]}
 */
function pickRandom(arr, n) {
  const pool = [...arr];
  const result = [];
  n = Math.min(n, pool.length);
  for (let i = 0; i < n; i++) {
    const idx = Math.floor(Math.random() * (pool.length - i)) + i;
    [pool[i], pool[idx]] = [pool[idx], pool[i]];
    result.push(pool[i]);
  }
  return result;
}

/**
 * selectWords — Choose 3 medium + 2 hard words, avoiding recent ones.
 *
 * Anti-repetition strategy:
 *  1. Filter each difficulty pool into "fresh" (not recently used) words.
 *  2. Pick from fresh words first.
 *  3. If a pool doesn't have enough fresh words (fallback), allow reuse.
 *
 * @param {Object[]} allWords
 * @returns {Object[]} exactly 5 word objects
 */
function selectWords(allWords) {
  const recent = getRecentlyUsed();

  // Partition by difficulty
  const mediumAll = allWords.filter(w => w.difficulty === 'medium');
  const hardAll   = allWords.filter(w => w.difficulty === 'hard');

  // Fresh (not recently seen) sub-pools
  const mediumFresh = mediumAll.filter(w => !recent.has(w.word));
  const hardFresh   = hardAll.filter(w => !recent.has(w.word));

  /**
   * smartPick — picks n words preferring fresh, falling back to full pool.
   */
  function smartPick(fresh, full, n) {
    if (fresh.length >= n) return pickRandom(fresh, n);
    // Not enough fresh → use all fresh + fill remainder from full pool
    const fromFresh = [...fresh];
    const used = new Set(fromFresh.map(w => w.word));
    const fallback = full.filter(w => !used.has(w.word));
    const extra = pickRandom(fallback, n - fromFresh.length);
    return [...fromFresh, ...extra];
  }

  const chosen = [
    ...smartPick(mediumFresh, mediumAll, MEDIUM_COUNT),
    ...smartPick(hardFresh,   hardAll,   HARD_COUNT),
  ];

  // Shuffle the final 5 so medium/hard aren't always grouped
  return pickRandom(chosen, chosen.length);
}

/* ─────────────────────────────────────────────
   SCRAMBLE ALGORITHM
   ─────────────────────────────────────────────
   Algorithm:
   1. Split word into array of characters.
   2. Use Fisher-Yates full shuffle.
   3. If the result is identical to the original (can happen for
      very short or repeated-letter words), force a swap of two
      non-identical positions. Retry up to 10 times before giving
      up (edge-case: single-char words like "a").
   4. Rejoin to string.
───────────────────────────────────────────── */

/**
 * shuffleArray — In-place Fisher-Yates shuffle.
 * @param {any[]} arr
 * @returns {any[]} same array, shuffled
 */
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * scrambleWord — Scramble a word so it looks different from the original.
 * @param {string} word
 * @returns {string} scrambled word
 */
function scrambleWord(word) {
  if (word.length <= 1) return word; // nothing to scramble

  const letters = word.split('');
  const MAX_TRIES = 20;

  for (let attempt = 0; attempt < MAX_TRIES; attempt++) {
    const shuffled = shuffleArray([...letters]);
    const result = shuffled.join('');
    if (result !== word) return result;
  }

  // Fallback: force a swap of first two non-equal adjacent chars
  const chars = [...letters];
  for (let i = 0; i < chars.length - 1; i++) {
    if (chars[i] !== chars[i + 1]) {
      [chars[i], chars[i + 1]] = [chars[i + 1], chars[i]];
      return chars.join('');
    }
  }

  // Truly unscrambleable (e.g. "aaa") — return as-is
  return word;
}

/* ─────────────────────────────────────────────
   LEARN VIEW — RENDER
───────────────────────────────────────────── */

/**
 * renderLearnView — Build and display word cards.
 * @param {Object[]} words
 */
function renderLearnView(words) {
  dom.cardsGrid.innerHTML = '';
  words.forEach((wordObj, i) => {
    const card = document.createElement('article');
    card.className = `word-card difficulty-${wordObj.difficulty}`;
    card.setAttribute('aria-label', `Word ${i + 1}: ${wordObj.word}`);

    card.innerHTML = `
      <div class="card-top">
        <h3 class="card-word">${escapeHtml(wordObj.word)}</h3>
        <span class="difficulty-badge badge-${wordObj.difficulty}">
          ${wordObj.difficulty === 'medium' ? '⚡ Medium' : '🔥 Hard'}
        </span>
      </div>
      <p class="card-meaning">${escapeHtml(wordObj.meaning)}</p>
      <p class="card-sentence">"${escapeHtml(wordObj.sentence)}"</p>
    `;
    dom.cardsGrid.appendChild(card);
  });

  showView('learn');
}

/* ─────────────────────────────────────────────
   TEST VIEW — RENDER
───────────────────────────────────────────── */

/**
 * renderTestView — Build test rows from current words.
 * Each row: scrambled word | meaning | input | result icon
 */
function renderTestView() {
  dom.testRows.innerHTML = '';
  dom.scoreSummary.classList.add('hidden');
  dom.submitBtn.classList.remove('hidden');
  dom.submitBtn.disabled = false;
  dom.retryBtn.classList.add('hidden');
  dom.backToLearnBtn.classList.add('hidden');
  dom.newWordsBtn.classList.add('hidden');
  dom.progressBar.style.width = '0%';
  state.submitted = false;

  // Shuffle a copy of currentWords so test order differs from study order.
  // We store the shuffled order on state so submitAnswers can match answers
  // back to the correct original word regardless of display position.
  state.testOrder = pickRandom([...state.currentWords], state.currentWords.length);

  state.testOrder.forEach((wordObj, i) => {
    const scrambled = scrambleWord(wordObj.word);

    const row = document.createElement('div');
    row.className = 'test-row';
    // Store the word on the row so submitAnswers can read it directly
    row.dataset.answer = wordObj.word;

    row.innerHTML = `
      <span class="scrambled-word" title="Scrambled word">${escapeHtml(scrambled)}</span>
      <span class="row-meaning">${escapeHtml(wordObj.meaning)}</span>
      <input
        class="answer-input"
        type="text"
        placeholder="Type the word…"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="none"
        spellcheck="false"
        aria-label="Answer for: ${escapeHtml(wordObj.meaning)}"
      />
      <span class="result-icon" aria-live="polite"></span>
    `;
    dom.testRows.appendChild(row);

    // Update progress bar as user types
    const input = row.querySelector('.answer-input');
    input.addEventListener('input', updateProgressBar);
    // Allow pressing Enter to move to next row
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const inputs = [...dom.testRows.querySelectorAll('.answer-input')];
        const next = inputs[i + 1];
        if (next) next.focus();
        else dom.submitBtn.focus();
      }
    });
  });

  showView('test');
  // Focus first input after a moment
  setTimeout(() => {
    const first = dom.testRows.querySelector('.answer-input');
    if (first) first.focus();
  }, 400);
}

/**
 * updateProgressBar — Fills bar based on how many inputs have content.
 */
function updateProgressBar() {
  const inputs = [...dom.testRows.querySelectorAll('.answer-input')];
  const filled = inputs.filter(i => i.value.trim() !== '').length;
  dom.progressBar.style.width = `${(filled / WORDS_PER_SESSION) * 100}%`;
}

/* ─────────────────────────────────────────────
   ANSWER VALIDATION
───────────────────────────────────────────── */

/**
 * submitAnswers — Grade the test, show results, update stats.
 */
function submitAnswers() {
  if (state.submitted) return;
  state.submitted = true;

  const rows   = [...dom.testRows.querySelectorAll('.test-row')];
  let correct  = 0;

  rows.forEach((row) => {
    const input      = row.querySelector('.answer-input');
    const resultIcon = row.querySelector('.result-icon');
    const userAnswer = input.value.trim().toLowerCase();
    // Read the correct answer from the data attribute set during render —
    // this works correctly regardless of shuffled display order.
    const correctWord = row.dataset.answer;
    const isCorrect   = userAnswer === correctWord.toLowerCase();

    // Disable input
    input.disabled = true;

    // Apply visual feedback
    if (isCorrect) {
      row.classList.add('correct');
      resultIcon.textContent = '✅';
      resultIcon.setAttribute('aria-label', 'Correct!');
      correct++;
    } else {
      row.classList.add('incorrect');
      resultIcon.textContent = '❌';
      resultIcon.setAttribute('aria-label', `Incorrect. The answer was ${correctWord}`);
      // Show correct word in input as hint
      input.placeholder = `✏️ ${correctWord}`;
    }
  });

  // Update progress bar to 100%
  dom.progressBar.style.width = '100%';

  // Show score summary
  showScoreSummary(correct);

  // Update persistent stats
  updateStats(correct);

  // Confetti for perfect score or high score
  if (correct >= 4) launchConfetti();

  // Swap buttons
  dom.submitBtn.disabled = true;
  dom.submitBtn.classList.add('hidden');
  dom.retryBtn.classList.remove('hidden');
  dom.backToLearnBtn.classList.remove('hidden');
  dom.newWordsBtn.classList.remove('hidden');
}

/**
 * showScoreSummary — Render the score badge + message.
 * @param {number} correct
 */
function showScoreSummary(correct) {
  const total = WORDS_PER_SESSION;
  const pct   = correct / total;

  let emoji, label, message;
  if (pct === 1) {
    emoji   = '🎉';
    label   = 'PERFECT!';
    message = "Amazing! You got every single word right! You're a true Word Wizard! 🧙‍♂️";
  } else if (pct >= 0.8) {
    emoji   = '🌟';
    label   = 'Great job!';
    message = 'So close to perfect! Keep it up — you\'re almost there! 💪';
  } else if (pct >= 0.6) {
    emoji   = '😊';
    label   = 'Good try!';
    message = 'Nice work! Review the tricky ones and try again! 📚';
  } else if (pct >= 0.4) {
    emoji   = '🤔';
    label   = 'Keep going!';
    message = "Don't give up! Study the words again and retry! You've got this! 🔥";
  } else {
    emoji   = '💪';
    label   = 'Let\'s practice!';
    message = 'These words are tough — go back and study them, then try again! 📖';
  }

  dom.scoreEmoji.textContent  = emoji;
  dom.scoreNumber.textContent = `${correct}/${total}`;
  dom.scoreLabel.textContent  = label;
  dom.scoreMessage.textContent = message;
  dom.scoreSummary.classList.remove('hidden');
}

/* ─────────────────────────────────────────────
   VIEW CONTROLLER
───────────────────────────────────────────── */

/**
 * showView — Show one of: 'loading' | 'learn' | 'test'
 * @param {string} name
 */
function showView(name) {
  dom.loadingView.classList.add('hidden');
  dom.learnView.classList.add('hidden');
  dom.testView.classList.add('hidden');

  if      (name === 'loading') dom.loadingView.classList.remove('hidden');
  else if (name === 'learn')   dom.learnView.classList.remove('hidden');
  else if (name === 'test')    dom.testView.classList.remove('hidden');
}

/* ─────────────────────────────────────────────
   MAIN FLOW
───────────────────────────────────────────── */

/**
 * startSession — Load words, select 5, render learn view.
 * Called on page load and on "Refresh Words".
 * Fully synchronous — no fetch(), works by opening index.html directly.
 */
function startSession() {
  showView('loading');

  // Brief timeout so the loading spinner is visible before rendering
  setTimeout(() => {
    try {
      // Load from global VOCAB_WORDS defined in words.js
      if (state.allWords.length === 0) {
        state.allWords = fetchWords();
      }

      state.currentWords = selectWords(state.allWords);

      // Record these words as seen (anti-repetition)
      recordShownWords(state.currentWords.map(w => w.word));

      renderLearnView(state.currentWords);

      // Refresh stats display
      renderStatsChips(loadStats());

    } catch (err) {
      console.error('VocabQuest error:', err);
      dom.loadingView.querySelector('.loading-text').textContent =
        '⚠️ Could not load words. Make sure words.js is in the same folder as index.html.';
    }
  }, 350);
}

/**
 * retryTest — Reset inputs and icons without changing the words.
 */
function retryTest() {
  renderTestView();
}

/* ─────────────────────────────────────────────
   EVENT LISTENERS
   All wired here — no inline JS in HTML
───────────────────────────────────────────── */
function wireEvents() {
  dom.takeTestBtn.addEventListener('click',    renderTestView);
  dom.refreshBtn.addEventListener('click',     startSession);
  dom.submitBtn.addEventListener('click',      submitAnswers);
  dom.retryBtn.addEventListener('click',       retryTest);
  dom.backToLearnBtn.addEventListener('click', () => showView('learn'));
  dom.newWordsBtn.addEventListener('click',    startSession);
}

/* ─────────────────────────────────────────────
   CONFETTI (tiny canvas-based celebration)
   ─────────────────────────────────────────────
   No external library — pure canvas drawing.
   Creates colourful particles that fall from top.
───────────────────────────────────────────── */
function launchConfetti() {
  const canvas  = dom.confettiCanvas;
  const ctx     = canvas.getContext('2d');
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const COLOURS  = ['#ff6b35','#7c3aed','#06d6a0','#fbbf24','#ef4444','#3b82f6','#ec4899'];
  const PARTICLE_COUNT = 120;

  // Create particles
  const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
    x:     Math.random() * canvas.width,
    y:     Math.random() * -canvas.height * 0.5,  // start above viewport
    w:     6 + Math.random() * 10,
    h:     8 + Math.random() * 8,
    color: COLOURS[Math.floor(Math.random() * COLOURS.length)],
    rot:   Math.random() * Math.PI * 2,
    rotV:  (Math.random() - .5) * .15,
    vx:    (Math.random() - .5) * 3,
    vy:    2 + Math.random() * 4,
    alpha: 1,
  }));

  let animId;
  let elapsed = 0;

  function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    elapsed++;

    // Start fading after 120 frames
    const fade = elapsed > 120 ? Math.max(0, 1 - (elapsed - 120) / 60) : 1;

    particles.forEach(p => {
      p.x   += p.vx;
      p.y   += p.vy;
      p.rot += p.rotV;
      p.vy  += 0.08; // gravity

      ctx.save();
      ctx.globalAlpha = p.alpha * fade;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    });

    if (fade > 0) {
      animId = requestAnimationFrame(drawFrame);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animId);
    }
  }

  drawFrame();
}

/* ─────────────────────────────────────────────
   UTILITY HELPERS
───────────────────────────────────────────── */

/**
 * escapeHtml — Prevent XSS when inserting text into innerHTML.
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

/**
 * delay — Promise-based sleep.
 * @param {number} ms
 * @returns {Promise<void>}
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* ─────────────────────────────────────────────
   INITIALISE APP
───────────────────────────────────────────── */
(function init() {
  wireEvents();
  renderStatsChips(loadStats()); // show saved stats immediately
  startSession();                // kick off word loading
})();

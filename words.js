const VOCAB_WORDS = [
  {
    "word": "nebulous",
    "difficulty": "hard",
    "meaning": "not clearly defined; hazy",
    "sentence": "His plans were nebulous and hard to follow."
  },
  {
    "word": "condone",
    "difficulty": "hard",
    "meaning": "to accept or forgive behavior that is wrong",
    "sentence": "A good parent does not condone dishonesty."
  },
  {
    "word": "tenuous",
    "difficulty": "hard",
    "meaning": "very weak or slight",
    "sentence": "His link to the crime was tenuous at best."
  },
  {
    "word": "eliminate",
    "difficulty": "medium",
    "meaning": "to completely remove or get rid of",
    "sentence": "The vaccine helped eliminate the disease."
  },
  {
    "word": "parsimonious",
    "difficulty": "hard",
    "meaning": "very reluctant to spend money",
    "sentence": "The parsimonious man refused to buy a second coat."
  },
  {
    "word": "imagine",
    "difficulty": "medium",
    "meaning": "to picture something in your mind",
    "sentence": "Close your eyes and imagine a sunny beach."
  },
  {
    "word": "axiom",
    "difficulty": "hard",
    "meaning": "a statement accepted as obviously true",
    "sentence": "'You get what you give' is a common axiom."
  },
  {
    "word": "adequate",
    "difficulty": "medium",
    "meaning": "enough; satisfactory",
    "sentence": "She had adequate time to finish the project."
  },
  {
    "word": "tortuous",
    "difficulty": "hard",
    "meaning": "full of twists; excessively complicated",
    "sentence": "The mountain path was long and tortuous."
  },
  {
    "word": "differentiate",
    "difficulty": "medium",
    "meaning": "to show the difference between things",
    "sentence": "Can you differentiate between a crocodile and an alligator?"
  },
  {
    "word": "tempestuous",
    "difficulty": "hard",
    "meaning": "full of storms; very intense emotion",
    "sentence": "It was a tempestuous night with fierce wind and rain."
  },
  {
    "word": "deception",
    "difficulty": "hard",
    "meaning": "the act of making someone believe something false",
    "sentence": "The spy relied on deception to gather information."
  },
  {
    "word": "profound",
    "difficulty": "hard",
    "meaning": "very deep; requiring serious thought",
    "sentence": "She had a profound understanding of mathematics."
  },
  {
    "word": "miracle",
    "difficulty": "medium",
    "meaning": "an amazing event that seems impossible",
    "sentence": "It was a miracle that no one was hurt."
  },
  {
    "word": "heritage",
    "difficulty": "medium",
    "meaning": "traditions passed down from past generations",
    "sentence": "Music is part of our cultural heritage."
  },
  {
    "word": "tremendous",
    "difficulty": "medium",
    "meaning": "very large or impressive",
    "sentence": "She made a tremendous effort to finish the project."
  },
  {
    "word": "condense",
    "difficulty": "medium",
    "meaning": "to make something shorter or more concentrated",
    "sentence": "Condense your notes into a single page."
  },
  {
    "word": "diverse",
    "difficulty": "medium",
    "meaning": "including many different types",
    "sentence": "The city is home to a diverse community."
  },
  {
    "word": "advent",
    "difficulty": "medium",
    "meaning": "the arrival of something important",
    "sentence": "The advent of the internet changed the world."
  },
  {
    "word": "restore",
    "difficulty": "medium",
    "meaning": "to bring something back to its original state",
    "sentence": "Workers restored the old painting."
  },
  {
    "word": "integrity",
    "difficulty": "hard",
    "meaning": "the quality of being honest and having moral principles",
    "sentence": "A leader of integrity admits their own mistakes."
  },
  {
    "word": "contrast",
    "difficulty": "medium",
    "meaning": "a big difference between two things",
    "sentence": "The contrast between city and village life is large."
  },
  {
    "word": "cynical",
    "difficulty": "hard",
    "meaning": "believing that people always act selfishly",
    "sentence": "After being lied to, she grew cynical about politics."
  },
  {
    "word": "hamper",
    "difficulty": "medium",
    "meaning": "to hinder or obstruct progress",
    "sentence": "Heavy bags hampered their speed on the trail."
  },
  {
    "word": "creative",
    "difficulty": "medium",
    "meaning": "able to make new and imaginative things",
    "sentence": "The creative student painted a rainbow landscape."
  },
  {
    "word": "celebrate",
    "difficulty": "medium",
    "meaning": "to do something fun to mark a special event",
    "sentence": "We celebrate birthdays with cake and songs."
  },
  {
    "word": "enthusiastic",
    "difficulty": "medium",
    "meaning": "showing great excitement and interest",
    "sentence": "She was enthusiastic about learning to paint."
  },
  {
    "word": "obsequious",
    "difficulty": "hard",
    "meaning": "too eager to serve and please others",
    "sentence": "The obsequious assistant agreed with everything his boss said."
  },
  {
    "word": "deplete",
    "difficulty": "hard",
    "meaning": "to use up a resource until there is very little left",
    "sentence": "Mining can deplete natural mineral reserves."
  },
  {
    "word": "equal",
    "difficulty": "medium",
    "meaning": "the same in size, amount, or value",
    "sentence": "Each child received an equal share of candy."
  },
  {
    "word": "destiny",
    "difficulty": "medium",
    "meaning": "the idea that events are planned by fate",
    "sentence": "He believed winning was his destiny."
  },
  {
    "word": "magnificent",
    "difficulty": "medium",
    "meaning": "impressively beautiful or grand",
    "sentence": "The waterfall was magnificent to behold."
  },
  {
    "word": "compliant",
    "difficulty": "hard",
    "meaning": "willing to do what is asked",
    "sentence": "The compliant student followed all the school rules."
  },
  {
    "word": "intuitive",
    "difficulty": "medium",
    "meaning": "easy to understand without needing to think hard",
    "sentence": "The app has an intuitive design that anyone can use."
  },
  {
    "word": "stymie",
    "difficulty": "hard",
    "meaning": "to prevent or hinder progress",
    "sentence": "Lack of funding stymied the research project."
  },
  {
    "word": "discipline",
    "difficulty": "medium",
    "meaning": "training to follow rules and stay focused",
    "sentence": "Discipline is important for learning a sport."
  },
  {
    "word": "effrontery",
    "difficulty": "hard",
    "meaning": "rude and arrogant behavior",
    "sentence": "He had the effrontery to demand a refund with no receipt."
  },
  {
    "word": "domain",
    "difficulty": "medium",
    "meaning": "an area of knowledge or activity",
    "sentence": "Mathematics is an important academic domain."
  },
  {
    "word": "ethical",
    "difficulty": "medium",
    "meaning": "relating to moral principles",
    "sentence": "It is not ethical to copy someone else's work."
  },
  {
    "word": "coercion",
    "difficulty": "hard",
    "meaning": "using force or threats to make someone do something",
    "sentence": "The contract was signed under coercion."
  },
  {
    "word": "contain",
    "difficulty": "medium",
    "meaning": "to hold something inside",
    "sentence": "The jar can contain up to one liter of water."
  },
  {
    "word": "doleful",
    "difficulty": "hard",
    "meaning": "expressing sorrow; mournful",
    "sentence": "He gave a doleful sigh when he heard the bad news."
  },
  {
    "word": "friendly",
    "difficulty": "medium",
    "meaning": "kind and pleasant to others",
    "sentence": "The friendly dog greeted everyone at the door."
  },
  {
    "word": "uxorious",
    "difficulty": "hard",
    "meaning": "having excessive devotion to one's wife",
    "sentence": "His uxorious behaviour meant he never made a decision alone."
  },
  {
    "word": "result",
    "difficulty": "medium",
    "meaning": "what happens because of something",
    "sentence": "Regular practice leads to good results."
  },
  {
    "word": "grant",
    "difficulty": "medium",
    "meaning": "to give or allow something",
    "sentence": "The school granted permission for the field trip."
  },
  {
    "word": "rectify",
    "difficulty": "hard",
    "meaning": "to put something right",
    "sentence": "She worked to rectify the errors in her report."
  },
  {
    "word": "relevant",
    "difficulty": "medium",
    "meaning": "connected to what is being discussed",
    "sentence": "Make sure your examples are relevant to the topic."
  },
  {
    "word": "supercilious",
    "difficulty": "hard",
    "meaning": "showing an attitude of superiority",
    "sentence": "The supercilious student sneered at everyone else's work."
  },
  {
    "word": "meretricious",
    "difficulty": "hard",
    "meaning": "apparently attractive but having no real value",
    "sentence": "The meretricious advertisement hid the product's flaws."
  },
  {
    "word": "flaw",
    "difficulty": "medium",
    "meaning": "a fault or weakness",
    "sentence": "She noticed a flaw in the plan."
  },
  {
    "word": "denigrate",
    "difficulty": "hard",
    "meaning": "to unfairly criticize and belittle someone",
    "sentence": "It is wrong to denigrate people based on their background."
  },
  {
    "word": "trite",
    "difficulty": "hard",
    "meaning": "overused and therefore lacking originality",
    "sentence": "His trite advice added nothing to the discussion."
  },
  {
    "word": "safeguard",
    "difficulty": "medium",
    "meaning": "to protect from harm",
    "sentence": "Wearing a helmet is a way to safeguard your head."
  },
  {
    "word": "support",
    "difficulty": "medium",
    "meaning": "to give help or encouragement",
    "sentence": "His family supported him through the difficult time."
  },
  {
    "word": "execrable",
    "difficulty": "hard",
    "meaning": "extremely bad; appalling",
    "sentence": "The food at the canteen was execrable."
  },
  {
    "word": "altercation",
    "difficulty": "hard",
    "meaning": "a noisy argument or disagreement",
    "sentence": "A heated altercation broke out in the queue."
  },
  {
    "word": "empathy",
    "difficulty": "medium",
    "meaning": "understanding and sharing another person's feelings",
    "sentence": "She showed empathy by listening without interrupting."
  },
  {
    "word": "consistent",
    "difficulty": "medium",
    "meaning": "always behaving or happening in the same way",
    "sentence": "She is consistent in her hard work."
  },
  {
    "word": "venture",
    "difficulty": "medium",
    "meaning": "to go somewhere new or do something risky",
    "sentence": "He ventured into the dark forest alone."
  },
  {
    "word": "conceit",
    "difficulty": "hard",
    "meaning": "excessive pride in oneself",
    "sentence": "His conceit made him difficult to work with."
  },
  {
    "word": "survive",
    "difficulty": "medium",
    "meaning": "to continue to live after a dangerous event",
    "sentence": "Many animals can survive in the desert."
  },
  {
    "word": "media",
    "difficulty": "medium",
    "meaning": "ways of communicating information to many people",
    "sentence": "Social media is part of modern communication."
  },
  {
    "word": "insidious",
    "difficulty": "hard",
    "meaning": "acting harmfully in a slow and unnoticeable way",
    "sentence": "The insidious spread of misinformation damaged trust."
  },
  {
    "word": "evident",
    "difficulty": "medium",
    "meaning": "easy to see or understand",
    "sentence": "It was evident from her smile that she was happy."
  },
  {
    "word": "belligerent",
    "difficulty": "hard",
    "meaning": "hostile and aggressive",
    "sentence": "The belligerent student argued with every teacher."
  },
  {
    "word": "context",
    "difficulty": "medium",
    "meaning": "the circumstances around an event or idea",
    "sentence": "Read the whole sentence to get the context."
  },
  {
    "word": "fundamental",
    "difficulty": "medium",
    "meaning": "basic and most important",
    "sentence": "Freedom of speech is a fundamental right."
  },
  {
    "word": "foremost",
    "difficulty": "medium",
    "meaning": "most important; in the first position",
    "sentence": "Safety is the foremost concern on a building site."
  },
  {
    "word": "proclivity",
    "difficulty": "hard",
    "meaning": "a tendency to do something regularly",
    "sentence": "He had a proclivity for starting projects but never finishing them."
  },
  {
    "word": "ubiquitous",
    "difficulty": "hard",
    "meaning": "appearing everywhere; very common",
    "sentence": "Smartphones are now ubiquitous in modern society."
  },
  {
    "word": "literacy",
    "difficulty": "medium",
    "meaning": "the ability to read and write",
    "sentence": "Literacy is the key to unlocking education."
  },
  {
    "word": "impeccable",
    "difficulty": "hard",
    "meaning": "in accordance with the highest standards; faultless",
    "sentence": "Her impeccable manners impressed everyone."
  },
  {
    "word": "basic",
    "difficulty": "medium",
    "meaning": "the most essential and simple part",
    "sentence": "Reading is a basic skill for everyone."
  },
  {
    "word": "intransigent",
    "difficulty": "hard",
    "meaning": "refusing to change one's views or agree",
    "sentence": "The intransigent negotiator made the talks impossible."
  },
  {
    "word": "extenuating",
    "difficulty": "hard",
    "meaning": "reducing the seriousness of an offense",
    "sentence": "The judge considered the extenuating circumstances."
  },
  {
    "word": "facade",
    "difficulty": "hard",
    "meaning": "an outward appearance that hides reality",
    "sentence": "His cheerful facade hid his inner sadness."
  },
  {
    "word": "wanton",
    "difficulty": "hard",
    "meaning": "deliberate and unprovoked; reckless",
    "sentence": "The wanton destruction of the park shocked residents."
  },
  {
    "word": "serendipity",
    "difficulty": "hard",
    "meaning": "fortunate discoveries made by accident",
    "sentence": "Meeting her best friend on the train was pure serendipity."
  },
  {
    "word": "anachronistic",
    "difficulty": "hard",
    "meaning": "belonging to a different time in history",
    "sentence": "Sending a telegram in the digital age seems anachronistic."
  },
  {
    "word": "enormous",
    "difficulty": "medium",
    "meaning": "very large in size",
    "sentence": "An enormous whale swam past the boat."
  },
  {
    "word": "prevalent",
    "difficulty": "hard",
    "meaning": "widespread in a particular area at a time",
    "sentence": "The use of smartphones is prevalent among teenagers."
  },
  {
    "word": "ineffable",
    "difficulty": "hard",
    "meaning": "too great to be described in words",
    "sentence": "The beauty of the mountain view was ineffable."
  },
  {
    "word": "deserve",
    "difficulty": "medium",
    "meaning": "to be worthy of something",
    "sentence": "You deserve a gold medal for all your effort."
  },
  {
    "word": "mechanism",
    "difficulty": "medium",
    "meaning": "a process or system that produces a result",
    "sentence": "Breathing is the body's mechanism for taking in oxygen."
  },
  {
    "word": "demagogy",
    "difficulty": "hard",
    "meaning": "using emotional arguments to influence people",
    "sentence": "His speech was full of demagogy rather than fact."
  },
  {
    "word": "subjugate",
    "difficulty": "hard",
    "meaning": "to bring under control by force",
    "sentence": "The emperor sought to subjugate all neighboring kingdoms."
  },
  {
    "word": "earn",
    "difficulty": "medium",
    "meaning": "to get something by working hard",
    "sentence": "She earned a gold star for her good work."
  },
  {
    "word": "opprobrium",
    "difficulty": "hard",
    "meaning": "harsh criticism and public disgrace",
    "sentence": "The scandal brought opprobrium to the entire school."
  },
  {
    "word": "anxious",
    "difficulty": "medium",
    "meaning": "worried or nervous",
    "sentence": "She felt anxious before her big test."
  },
  {
    "word": "tolerate",
    "difficulty": "medium",
    "meaning": "to accept something you do not like",
    "sentence": "She could not tolerate the noise in the classroom."
  },
  {
    "word": "stubborn",
    "difficulty": "medium",
    "meaning": "refusing to change one's mind",
    "sentence": "The stubborn mule would not move."
  },
  {
    "word": "vindictive",
    "difficulty": "hard",
    "meaning": "seeking revenge; intending to harm",
    "sentence": "A vindictive person finds it hard to forgive."
  },
  {
    "word": "determine",
    "difficulty": "medium",
    "meaning": "to find out or decide something",
    "sentence": "We determined that the answer was correct."
  },
  {
    "word": "prudent",
    "difficulty": "hard",
    "meaning": "acting with care and thought for the future",
    "sentence": "It is prudent to save money for emergencies."
  },
  {
    "word": "affirmation",
    "difficulty": "medium",
    "meaning": "a statement that something is true",
    "sentence": "She repeated positive affirmations every morning."
  },
  {
    "word": "strategy",
    "difficulty": "medium",
    "meaning": "a plan for achieving a goal",
    "sentence": "She had a strategy for winning the game."
  },
  {
    "word": "aggrandize",
    "difficulty": "hard",
    "meaning": "to increase power, status or wealth",
    "sentence": "He sought to aggrandize himself at others' expense."
  },
  {
    "word": "counterpart",
    "difficulty": "medium",
    "meaning": "a person or thing with the same role in a different place",
    "sentence": "The French mayor met his counterpart from Italy."
  },
  {
    "word": "affable",
    "difficulty": "hard",
    "meaning": "friendly and easy to talk to",
    "sentence": "The affable teacher made every student feel welcome."
  },
  {
    "word": "boundary",
    "difficulty": "medium",
    "meaning": "a line that marks the edge of something",
    "sentence": "The fence marks the boundary of the garden."
  },
  {
    "word": "alert",
    "difficulty": "medium",
    "meaning": "quick to notice things; a warning signal",
    "sentence": "Stay alert while crossing the road."
  },
  {
    "word": "retribution",
    "difficulty": "hard",
    "meaning": "punishment inflicted as revenge",
    "sentence": "He feared retribution for his wrongdoing."
  },
  {
    "word": "lurid",
    "difficulty": "hard",
    "meaning": "unpleasantly vivid; sensationally shocking",
    "sentence": "The news story was written in lurid detail."
  },
  {
    "word": "accumulate",
    "difficulty": "medium",
    "meaning": "to gather or collect over time",
    "sentence": "Dust can accumulate on shelves if they are not cleaned."
  },
  {
    "word": "caustic",
    "difficulty": "hard",
    "meaning": "harshly critical; able to burn or corrode",
    "sentence": "Her caustic remarks hurt everyone in the room."
  },
  {
    "word": "confound",
    "difficulty": "hard",
    "meaning": "to surprise or baffle someone",
    "sentence": "The magician's trick confounded the audience."
  },
  {
    "word": "alter",
    "difficulty": "medium",
    "meaning": "to make a small change to something",
    "sentence": "She altered the recipe by adding more sugar."
  },
  {
    "word": "explicit",
    "difficulty": "hard",
    "meaning": "stated clearly and in detail; leaving nothing implied",
    "sentence": "The instructions were explicit and easy to follow."
  },
  {
    "word": "prove",
    "difficulty": "medium",
    "meaning": "to show that something is true",
    "sentence": "He proved his innocence with a video."
  },
  {
    "word": "integral",
    "difficulty": "medium",
    "meaning": "necessary to make something complete",
    "sentence": "Teamwork is an integral part of playing football."
  },
  {
    "word": "crucial",
    "difficulty": "medium",
    "meaning": "extremely important",
    "sentence": "It is crucial to study the night before the exam."
  },
  {
    "word": "pursue",
    "difficulty": "medium",
    "meaning": "to follow or chase after something",
    "sentence": "She pursued her dream of becoming a doctor."
  },
  {
    "word": "altruistic",
    "difficulty": "medium",
    "meaning": "showing unselfish concern for others",
    "sentence": "Her altruistic nature led her to donate her savings."
  },
  {
    "word": "achievement",
    "difficulty": "medium",
    "meaning": "something you have done successfully",
    "sentence": "Passing the exam was a great achievement."
  },
  {
    "word": "intuition",
    "difficulty": "medium",
    "meaning": "an understanding without conscious reasoning",
    "sentence": "She had an intuition that something was wrong."
  },
  {
    "word": "compare",
    "difficulty": "medium",
    "meaning": "to look at how things are similar or different",
    "sentence": "Compare the two paintings side by side."
  },
  {
    "word": "impetuous",
    "difficulty": "hard",
    "meaning": "acting quickly without thought",
    "sentence": "His impetuous decision to quit school was one he regretted."
  },
  {
    "word": "deficiency",
    "difficulty": "medium",
    "meaning": "a lack of something needed",
    "sentence": "A vitamin C deficiency can cause health problems."
  },
  {
    "word": "specific",
    "difficulty": "medium",
    "meaning": "clear and exact; not general",
    "sentence": "Be specific about what you need."
  },
  {
    "word": "extensive",
    "difficulty": "medium",
    "meaning": "covering a large area or many things",
    "sentence": "She has extensive knowledge of marine biology."
  },
  {
    "word": "concurrent",
    "difficulty": "medium",
    "meaning": "happening at the same time",
    "sentence": "She managed two concurrent projects at once."
  },
  {
    "word": "habit",
    "difficulty": "medium",
    "meaning": "something you do regularly",
    "sentence": "Reading before bed is a great habit."
  },
  {
    "word": "mediate",
    "difficulty": "medium",
    "meaning": "to help two sides reach an agreement",
    "sentence": "A teacher often mediates disputes between students."
  },
  {
    "word": "vacuous",
    "difficulty": "hard",
    "meaning": "having no meaning or intelligence; empty",
    "sentence": "The vacuous reply showed he hadn't understood the question."
  },
  {
    "word": "assuage",
    "difficulty": "hard",
    "meaning": "to make an unpleasant feeling less intense",
    "sentence": "Hot soup can assuage the misery of a cold winter day."
  },
  {
    "word": "contrition",
    "difficulty": "hard",
    "meaning": "genuine regret for having done something wrong",
    "sentence": "He showed deep contrition for hurting his friend."
  },
  {
    "word": "possess",
    "difficulty": "medium",
    "meaning": "to have or own something",
    "sentence": "He possesses a rare collection of stamps."
  },
  {
    "word": "irascible",
    "difficulty": "hard",
    "meaning": "easily made angry",
    "sentence": "The irascible old man shouted at every passerby."
  },
  {
    "word": "debilitate",
    "difficulty": "hard",
    "meaning": "to make someone very weak",
    "sentence": "A severe flu can debilitate even the strongest person."
  },
  {
    "word": "nihilism",
    "difficulty": "hard",
    "meaning": "the belief that life has no meaning",
    "sentence": "His nihilism made it hard to motivate him."
  },
  {
    "word": "impudent",
    "difficulty": "hard",
    "meaning": "rude and disrespectful",
    "sentence": "The impudent child interrupted the teacher repeatedly."
  },
  {
    "word": "direction",
    "difficulty": "medium",
    "meaning": "the way toward a place",
    "sentence": "Follow the direction of the arrow."
  },
  {
    "word": "vehement",
    "difficulty": "hard",
    "meaning": "showing strong feeling; forceful and intense",
    "sentence": "She made a vehement argument against the new rule."
  },
  {
    "word": "invective",
    "difficulty": "hard",
    "meaning": "insulting and abusive language",
    "sentence": "The angry letter was full of invective."
  },
  {
    "word": "discard",
    "difficulty": "medium",
    "meaning": "to throw away or get rid of something",
    "sentence": "She discarded the old magazines to clear space."
  },
  {
    "word": "milieu",
    "difficulty": "hard",
    "meaning": "a person's social environment",
    "sentence": "The artist thrived in the creative milieu of the city."
  },
  {
    "word": "nadir",
    "difficulty": "hard",
    "meaning": "the lowest point of something",
    "sentence": "Losing the final was the nadir of their season."
  },
  {
    "word": "method",
    "difficulty": "medium",
    "meaning": "a way of doing something",
    "sentence": "They found a new method to purify water."
  },
  {
    "word": "depend",
    "difficulty": "medium",
    "meaning": "to rely on someone or something",
    "sentence": "Plants depend on sunlight to grow."
  },
  {
    "word": "inspire",
    "difficulty": "medium",
    "meaning": "to fill someone with creative ideas",
    "sentence": "The artist's work inspired many young painters."
  },
  {
    "word": "enforce",
    "difficulty": "medium",
    "meaning": "to make sure a law or rule is obeyed",
    "sentence": "The referee enforced the rules strictly."
  },
  {
    "word": "civic",
    "difficulty": "medium",
    "meaning": "relating to a city or citizens",
    "sentence": "Voting is an important civic responsibility."
  },
  {
    "word": "represent",
    "difficulty": "medium",
    "meaning": "to be a symbol or example of something",
    "sentence": "The dove represents peace."
  },
  {
    "word": "routine",
    "difficulty": "medium",
    "meaning": "a regular set of actions",
    "sentence": "His morning routine includes a run in the park."
  },
  {
    "word": "uncertain",
    "difficulty": "medium",
    "meaning": "not sure what will happen",
    "sentence": "She was uncertain about which path to take."
  },
  {
    "word": "inherent",
    "difficulty": "hard",
    "meaning": "existing as a natural or permanent part",
    "sentence": "A love of adventure is inherent in many children."
  },
  {
    "word": "diatribe",
    "difficulty": "hard",
    "meaning": "a forceful and bitter verbal attack",
    "sentence": "The politician's diatribe shocked the audience."
  },
  {
    "word": "antediluvian",
    "difficulty": "hard",
    "meaning": "very old-fashioned and outdated",
    "sentence": "His antediluvian views were out of step with modern life."
  },
  {
    "word": "unscrupulous",
    "difficulty": "hard",
    "meaning": "having no moral principles; dishonest",
    "sentence": "The unscrupulous trader sold fake medicine."
  },
  {
    "word": "regard",
    "difficulty": "medium",
    "meaning": "to think of or consider something",
    "sentence": "She regarded the project as very important."
  },
  {
    "word": "involve",
    "difficulty": "medium",
    "meaning": "to include someone as part of something",
    "sentence": "The project involves all students in the class."
  },
  {
    "word": "auspicious",
    "difficulty": "hard",
    "meaning": "suggesting a good and successful future",
    "sentence": "The sunny weather seemed auspicious for the wedding day."
  },
  {
    "word": "participate",
    "difficulty": "medium",
    "meaning": "to take part in an activity",
    "sentence": "Every student participated in the school play."
  },
  {
    "word": "aspire",
    "difficulty": "hard",
    "meaning": "to have a strong desire to achieve something",
    "sentence": "He aspired to become a world-class surgeon."
  },
  {
    "word": "abjure",
    "difficulty": "hard",
    "meaning": "to formally give up a belief or practice",
    "sentence": "He abjured his past lifestyle and started fresh."
  },
  {
    "word": "obscure",
    "difficulty": "hard",
    "meaning": "not well known; unclear",
    "sentence": "The reference was too obscure for the young audience."
  },
  {
    "word": "primary",
    "difficulty": "medium",
    "meaning": "most important; first",
    "sentence": "The primary goal is to learn something new."
  },
  {
    "word": "aware",
    "difficulty": "medium",
    "meaning": "knowing that something exists",
    "sentence": "Be aware of traffic when crossing the road."
  },
  {
    "word": "ingenious",
    "difficulty": "hard",
    "meaning": "cleverly inventive and creative",
    "sentence": "She found an ingenious way to solve the leaking pipe problem."
  },
  {
    "word": "acronym",
    "difficulty": "medium",
    "meaning": "a word formed from the first letters of other words",
    "sentence": "NASA is an acronym for National Aeronautics and Space Administration."
  },
  {
    "word": "capable",
    "difficulty": "medium",
    "meaning": "having the ability to do something",
    "sentence": "She is capable of solving the hardest puzzles."
  },
  {
    "word": "astute",
    "difficulty": "hard",
    "meaning": "able to accurately assess a situation; clever",
    "sentence": "The astute investor noticed the opportunity early."
  },
  {
    "word": "depict",
    "difficulty": "medium",
    "meaning": "to represent or show through art or description",
    "sentence": "The mural depicts life in the ancient city."
  },
  {
    "word": "pundit",
    "difficulty": "hard",
    "meaning": "an expert who gives opinions publicly",
    "sentence": "The sports pundit predicted the correct result."
  },
  {
    "word": "abstruse",
    "difficulty": "hard",
    "meaning": "difficult to understand; obscure",
    "sentence": "The professor's lecture was so abstruse that few students followed."
  },
  {
    "word": "restive",
    "difficulty": "hard",
    "meaning": "unable to keep still; restless",
    "sentence": "The restive horse refused to stand at the starting gate."
  },
  {
    "word": "panacea",
    "difficulty": "hard",
    "meaning": "a solution for all problems",
    "sentence": "There is no panacea for climate change; many steps are needed."
  },
  {
    "word": "protect",
    "difficulty": "medium",
    "meaning": "to keep someone or something safe",
    "sentence": "Sunscreen protects your skin from the sun."
  },
  {
    "word": "detriment",
    "difficulty": "hard",
    "meaning": "harm or damage",
    "sentence": "Staying up too late is a detriment to your health."
  },
  {
    "word": "clarify",
    "difficulty": "medium",
    "meaning": "to make something easier to understand",
    "sentence": "Please clarify what you mean."
  },
  {
    "word": "insight",
    "difficulty": "medium",
    "meaning": "the ability to understand something deeply",
    "sentence": "Her insight helped the team solve the puzzle."
  },
  {
    "word": "vexatious",
    "difficulty": "hard",
    "meaning": "causing annoyance or trouble",
    "sentence": "The vexatious neighbour filed repeated complaints."
  },
  {
    "word": "honest",
    "difficulty": "medium",
    "meaning": "telling the truth; not lying",
    "sentence": "An honest person admits when they are wrong."
  },
  {
    "word": "cautious",
    "difficulty": "medium",
    "meaning": "careful to avoid danger",
    "sentence": "Be cautious when walking on ice."
  },
  {
    "word": "divide",
    "difficulty": "medium",
    "meaning": "to separate into equal parts",
    "sentence": "Divide the pizza into eight slices."
  },
  {
    "word": "volunteer",
    "difficulty": "medium",
    "meaning": "to offer to do something without being paid",
    "sentence": "She volunteered to help at the animal shelter."
  },
  {
    "word": "petulance",
    "difficulty": "hard",
    "meaning": "childish sulkiness and bad temper",
    "sentence": "Her petulance over losing the game embarrassed everyone."
  },
  {
    "word": "broad",
    "difficulty": "medium",
    "meaning": "wide; covering many topics",
    "sentence": "She has a broad knowledge of history."
  },
  {
    "word": "languid",
    "difficulty": "hard",
    "meaning": "relaxed and sluggish; showing little energy",
    "sentence": "The languid cat barely moved from its sunny spot."
  },
  {
    "word": "ebullient",
    "difficulty": "hard",
    "meaning": "cheerful and full of energy",
    "sentence": "She was ebullient after winning the science prize."
  },
  {
    "word": "incentive",
    "difficulty": "medium",
    "meaning": "something that motivates action",
    "sentence": "A prize was offered as an incentive to participate."
  },
  {
    "word": "ambition",
    "difficulty": "medium",
    "meaning": "a strong desire to achieve something",
    "sentence": "His ambition drove him to practice every day."
  },
  {
    "word": "comfort",
    "difficulty": "medium",
    "meaning": "a feeling of ease and well-being",
    "sentence": "The warm blanket brought her comfort."
  },
  {
    "word": "alleviate",
    "difficulty": "medium",
    "meaning": "to reduce pain or difficulty",
    "sentence": "Ice can alleviate the swelling from a bee sting."
  },
  {
    "word": "perspicacious",
    "difficulty": "hard",
    "meaning": "having a ready insight into things; shrewd",
    "sentence": "The perspicacious detective solved the crime in one day."
  },
  {
    "word": "adapt",
    "difficulty": "medium",
    "meaning": "to change to suit new conditions",
    "sentence": "Animals must adapt to survive in cold climates."
  },
  {
    "word": "desolate",
    "difficulty": "hard",
    "meaning": "empty and without life; utterly miserable",
    "sentence": "The war left many towns desolate."
  },
  {
    "word": "pernicious",
    "difficulty": "hard",
    "meaning": "having a very harmful effect, often gradually",
    "sentence": "Pernicious habits can damage health over time."
  },
  {
    "word": "different",
    "difficulty": "medium",
    "meaning": "not the same as something else",
    "sentence": "Every snowflake has a different shape."
  },
  {
    "word": "occur",
    "difficulty": "medium",
    "meaning": "to happen",
    "sentence": "Earthquakes can occur without warning."
  },
  {
    "word": "cynosure",
    "difficulty": "medium",
    "meaning": "the center of attention or admiration",
    "sentence": "The champion trophy was the cynosure of the room."
  },
  {
    "word": "anathema",
    "difficulty": "hard",
    "meaning": "something or someone greatly detested",
    "sentence": "Dishonesty is anathema to her."
  },
  {
    "word": "aversion",
    "difficulty": "hard",
    "meaning": "a strong feeling of dislike",
    "sentence": "She had a strong aversion to the smell of garlic."
  },
  {
    "word": "flagrant",
    "difficulty": "hard",
    "meaning": "obviously wrong or bad; blatant",
    "sentence": "His flagrant disregard for the rules shocked the referee."
  },
  {
    "word": "maintain",
    "difficulty": "medium",
    "meaning": "to keep something in good condition",
    "sentence": "She maintains her bicycle by cleaning it."
  },
  {
    "word": "cupidity",
    "difficulty": "hard",
    "meaning": "greed for money or possessions",
    "sentence": "His cupidity led him to embezzle company funds."
  },
  {
    "word": "philistine",
    "difficulty": "hard",
    "meaning": "hostile to culture and the arts",
    "sentence": "Only a philistine could ignore the beauty of that music."
  },
  {
    "word": "exacerbate",
    "difficulty": "hard",
    "meaning": "to make a problem worse",
    "sentence": "Using cold water exacerbated the skin irritation."
  },
  {
    "word": "fluctuate",
    "difficulty": "medium",
    "meaning": "to rise and fall irregularly",
    "sentence": "Temperatures in spring can fluctuate greatly."
  },
  {
    "word": "congenial",
    "difficulty": "hard",
    "meaning": "pleasant and agreeable",
    "sentence": "The congenial host made everyone feel comfortable."
  },
  {
    "word": "empirical",
    "difficulty": "medium",
    "meaning": "based on observation and experiment rather than theory",
    "sentence": "The scientist gathered empirical data over many months."
  },
  {
    "word": "necessary",
    "difficulty": "medium",
    "meaning": "needed; must be done or had",
    "sentence": "It is necessary to drink water every day."
  },
  {
    "word": "fortunate",
    "difficulty": "medium",
    "meaning": "having good luck",
    "sentence": "We were fortunate to find seats on the bus."
  },
  {
    "word": "encourage",
    "difficulty": "medium",
    "meaning": "to give someone confidence and support",
    "sentence": "Good teachers always encourage their students."
  },
  {
    "word": "pragmatism",
    "difficulty": "hard",
    "meaning": "dealing with things based on practical fact",
    "sentence": "She led the team with quiet pragmatism."
  },
  {
    "word": "benefit",
    "difficulty": "medium",
    "meaning": "something good that helps you",
    "sentence": "Exercise has many health benefits."
  },
  {
    "word": "sanguinary",
    "difficulty": "hard",
    "meaning": "involving or causing much bloodshed",
    "sentence": "The sanguinary battle lasted three days."
  },
  {
    "word": "interest",
    "difficulty": "medium",
    "meaning": "a feeling of wanting to know more",
    "sentence": "She has a great interest in astronomy."
  },
  {
    "word": "detain",
    "difficulty": "medium",
    "meaning": "to keep someone somewhere temporarily",
    "sentence": "The customs officer detained the traveler for questioning."
  },
  {
    "word": "refulgent",
    "difficulty": "hard",
    "meaning": "shining brilliantly; radiant",
    "sentence": "The refulgent sun reflected off the snow."
  },
  {
    "word": "chronic",
    "difficulty": "medium",
    "meaning": "lasting a long time; happening repeatedly",
    "sentence": "He suffered from chronic back pain."
  },
  {
    "word": "contentious",
    "difficulty": "hard",
    "meaning": "causing disagreement; argumentative",
    "sentence": "The proposal was contentious and divided the community."
  },
  {
    "word": "confuse",
    "difficulty": "medium",
    "meaning": "to mix up or puzzle someone",
    "sentence": "The directions confused the new student."
  },
  {
    "word": "antipathy",
    "difficulty": "hard",
    "meaning": "a strong feeling of dislike",
    "sentence": "He had a deep antipathy toward dishonesty."
  },
  {
    "word": "decisive",
    "difficulty": "medium",
    "meaning": "making decisions quickly and confidently",
    "sentence": "A decisive leader acts without hesitation."
  },
  {
    "word": "mission",
    "difficulty": "medium",
    "meaning": "an important task or purpose",
    "sentence": "The team's mission was to plant 100 trees."
  },
  {
    "word": "terse",
    "difficulty": "hard",
    "meaning": "using few words; brief and direct",
    "sentence": "His terse reply showed he was in no mood to talk."
  },
  {
    "word": "accomplish",
    "difficulty": "medium",
    "meaning": "to succeed in achieving something",
    "sentence": "She accomplished her goal of reading 20 books."
  },
  {
    "word": "argue",
    "difficulty": "medium",
    "meaning": "to disagree and discuss strongly",
    "sentence": "The brothers started to argue about the TV remote."
  },
  {
    "word": "didactic",
    "difficulty": "hard",
    "meaning": "intended to teach a moral lesson",
    "sentence": "The story had a didactic tone, clearly teaching about honesty."
  },
  {
    "word": "abhor",
    "difficulty": "hard",
    "meaning": "to hate something very strongly",
    "sentence": "She abhors any form of cruelty to animals."
  },
  {
    "word": "negative",
    "difficulty": "medium",
    "meaning": "bad or not helpful",
    "sentence": "Try to avoid negative thoughts."
  },
  {
    "word": "attract",
    "difficulty": "medium",
    "meaning": "to draw in or cause interest",
    "sentence": "Flowers attract bees with their bright colors."
  },
  {
    "word": "whimsical",
    "difficulty": "hard",
    "meaning": "playful and fanciful; not serious",
    "sentence": "The artist had a whimsical style full of magical creatures."
  },
  {
    "word": "sudden",
    "difficulty": "medium",
    "meaning": "happening quickly and without warning",
    "sentence": "There was a sudden flash of lightning."
  },
  {
    "word": "mendacious",
    "difficulty": "hard",
    "meaning": "not telling the truth; lying",
    "sentence": "His mendacious account of events misled investigators."
  },
  {
    "word": "oppose",
    "difficulty": "medium",
    "meaning": "to disagree with or resist something",
    "sentence": "He opposed the plan to cut down the trees."
  },
  {
    "word": "unctuous",
    "difficulty": "hard",
    "meaning": "excessively flattering; oily in manner",
    "sentence": "His unctuous praise made everyone suspicious of his motives."
  },
  {
    "word": "category",
    "difficulty": "medium",
    "meaning": "a group of similar things",
    "sentence": "Lions belong to the cat category."
  },
  {
    "word": "demise",
    "difficulty": "hard",
    "meaning": "death or ending of something",
    "sentence": "The demise of the old library saddened the community."
  },
  {
    "word": "predict",
    "difficulty": "medium",
    "meaning": "to say what will happen in the future",
    "sentence": "Can you predict the weather tomorrow?"
  },
  {
    "word": "source",
    "difficulty": "medium",
    "meaning": "the place where something comes from",
    "sentence": "The river's source is high in the mountains."
  },
  {
    "word": "unique",
    "difficulty": "medium",
    "meaning": "unlike anything else",
    "sentence": "Every fingerprint is unique."
  },
  {
    "word": "abundant",
    "difficulty": "medium",
    "meaning": "present in large quantities",
    "sentence": "Fish are abundant in this lake."
  },
  {
    "word": "tumultuous",
    "difficulty": "hard",
    "meaning": "making a loud and confused noise; disorderly",
    "sentence": "The tumultuous crowd cheered wildly after the goal."
  },
  {
    "word": "nuance",
    "difficulty": "hard",
    "meaning": "a subtle difference in meaning or feeling",
    "sentence": "Good writers understand the nuance of every word."
  },
  {
    "word": "mutual",
    "difficulty": "medium",
    "meaning": "shared by two or more people",
    "sentence": "They had a mutual love of art."
  },
  {
    "word": "sustain",
    "difficulty": "medium",
    "meaning": "to keep something going over time",
    "sentence": "She sustained her interest in science."
  },
  {
    "word": "ideology",
    "difficulty": "medium",
    "meaning": "a system of ideas and ideals",
    "sentence": "Freedom and equality are central to her ideology."
  },
  {
    "word": "querulous",
    "difficulty": "hard",
    "meaning": "complaining in a petty way",
    "sentence": "The querulous child complained about every small problem."
  },
  {
    "word": "material",
    "difficulty": "medium",
    "meaning": "the substance from which things are made",
    "sentence": "Wood is a natural material used in furniture."
  },
  {
    "word": "undulate",
    "difficulty": "hard",
    "meaning": "to move with a smooth wave-like motion",
    "sentence": "The golden fields undulated gently in the breeze."
  },
  {
    "word": "barrier",
    "difficulty": "medium",
    "meaning": "something that blocks the way",
    "sentence": "Language can be a barrier to communication."
  },
  {
    "word": "unwieldy",
    "difficulty": "hard",
    "meaning": "difficult to manage due to size or complexity",
    "sentence": "The unwieldy contract took hours to read."
  },
  {
    "word": "diplomat",
    "difficulty": "medium",
    "meaning": "a person who represents their country abroad",
    "sentence": "The diplomat attended the peace meeting."
  },
  {
    "word": "aptitude",
    "difficulty": "medium",
    "meaning": "a natural ability to learn something well",
    "sentence": "He showed great aptitude for mathematics."
  },
  {
    "word": "realistic",
    "difficulty": "medium",
    "meaning": "based on what is actually possible",
    "sentence": "Set realistic goals that you can achieve."
  },
  {
    "word": "feasible",
    "difficulty": "medium",
    "meaning": "possible and practical to do",
    "sentence": "It is feasible to walk to school from here."
  },
  {
    "word": "exhibit",
    "difficulty": "medium",
    "meaning": "to display something for people to see",
    "sentence": "The museum exhibits ancient artifacts."
  },
  {
    "word": "linear",
    "difficulty": "medium",
    "meaning": "progressing in a straight or sequential way",
    "sentence": "The timeline was presented in a linear format."
  },
  {
    "word": "include",
    "difficulty": "medium",
    "meaning": "to make something part of a group",
    "sentence": "Please include your name on the paper."
  },
  {
    "word": "gregarious",
    "difficulty": "hard",
    "meaning": "enjoying the company of others; sociable",
    "sentence": "She is gregarious and loves large gatherings."
  },
  {
    "word": "manage",
    "difficulty": "medium",
    "meaning": "to be in charge of something",
    "sentence": "He manages the school library well."
  },
  {
    "word": "citizen",
    "difficulty": "medium",
    "meaning": "a person who belongs to a country",
    "sentence": "Every citizen has the right to vote."
  },
  {
    "word": "complex",
    "difficulty": "medium",
    "meaning": "made of many parts; not simple",
    "sentence": "The puzzle was very complex."
  },
  {
    "word": "compensate",
    "difficulty": "medium",
    "meaning": "to make up for a loss or problem",
    "sentence": "He compensated by working extra hours."
  },
  {
    "word": "cumulative",
    "difficulty": "medium",
    "meaning": "increasing by adding new parts together",
    "sentence": "The cumulative effect of reading every day is huge."
  },
  {
    "word": "dichotomy",
    "difficulty": "hard",
    "meaning": "a division into two opposing things",
    "sentence": "There is a dichotomy between theory and practice."
  },
  {
    "word": "demonstrate",
    "difficulty": "medium",
    "meaning": "to show how something works",
    "sentence": "She demonstrated the science experiment."
  },
  {
    "word": "global",
    "difficulty": "medium",
    "meaning": "relating to the whole world",
    "sentence": "Climate change is a global problem."
  },
  {
    "word": "express",
    "difficulty": "medium",
    "meaning": "to show feelings or ideas",
    "sentence": "She expressed her happiness by smiling."
  },
  {
    "word": "facilitate",
    "difficulty": "medium",
    "meaning": "to make an action easier",
    "sentence": "Technology facilitates communication around the world."
  },
  {
    "word": "venerate",
    "difficulty": "hard",
    "meaning": "to regard with great respect",
    "sentence": "Children are taught to venerate their elders."
  },
  {
    "word": "reticent",
    "difficulty": "hard",
    "meaning": "not saying much; reserved",
    "sentence": "She was reticent about sharing her personal life."
  },
  {
    "word": "infrastructure",
    "difficulty": "medium",
    "meaning": "basic systems needed for a country to work",
    "sentence": "Good roads and bridges are part of a nation's infrastructure."
  },
  {
    "word": "graceful",
    "difficulty": "medium",
    "meaning": "moving in a smooth and beautiful way",
    "sentence": "The swan was graceful on the water."
  },
  {
    "word": "confiscate",
    "difficulty": "medium",
    "meaning": "to officially take something away",
    "sentence": "The teacher confiscated the phone during the exam."
  },
  {
    "word": "inform",
    "difficulty": "medium",
    "meaning": "to tell someone about something",
    "sentence": "Please inform me when the parcel arrives."
  },
  {
    "word": "excel",
    "difficulty": "medium",
    "meaning": "to be very good at something",
    "sentence": "She excels in science and maths."
  },
  {
    "word": "indignation",
    "difficulty": "hard",
    "meaning": "anger caused by unjust treatment",
    "sentence": "She felt great indignation at being accused unfairly."
  },
  {
    "word": "exempt",
    "difficulty": "medium",
    "meaning": "free from a duty or rule",
    "sentence": "Children under five are exempt from the ticket fee."
  },
  {
    "word": "turpitude",
    "difficulty": "hard",
    "meaning": "wickedness and evil",
    "sentence": "Moral turpitude led to his dismissal."
  },
  {
    "word": "dedicate",
    "difficulty": "medium",
    "meaning": "to give time and energy to something",
    "sentence": "He dedicated hours to perfecting his drawing."
  },
  {
    "word": "apathy",
    "difficulty": "hard",
    "meaning": "lack of interest, enthusiasm, or concern",
    "sentence": "The apathy of voters led to a very low turnout."
  },
  {
    "word": "anonymous",
    "difficulty": "medium",
    "meaning": "not identified by name",
    "sentence": "The donation was made by an anonymous supporter."
  },
  {
    "word": "equivalent",
    "difficulty": "medium",
    "meaning": "equal in value, amount, or meaning",
    "sentence": "A kilometer is roughly equivalent to 0.6 miles."
  },
  {
    "word": "iconoclast",
    "difficulty": "hard",
    "meaning": "a person who attacks popular beliefs",
    "sentence": "The iconoclast challenged traditions others never questioned."
  },
  {
    "word": "demand",
    "difficulty": "medium",
    "meaning": "to ask for something strongly",
    "sentence": "He demanded a refund for the broken toy."
  },
  {
    "word": "coveted",
    "difficulty": "hard",
    "meaning": "greatly desired",
    "sentence": "The coveted trophy sat at the center of the shelf."
  },
  {
    "word": "grandiose",
    "difficulty": "hard",
    "meaning": "appearing impressive but lacking real value",
    "sentence": "The grandiose speech promised too much."
  },
  {
    "word": "fragile",
    "difficulty": "medium",
    "meaning": "easily broken or damaged",
    "sentence": "The glass vase is very fragile — handle carefully."
  },
  {
    "word": "abate",
    "difficulty": "hard",
    "meaning": "to become less intense or widespread",
    "sentence": "The storm began to abate after midnight."
  },
  {
    "word": "ephemeral",
    "difficulty": "hard",
    "meaning": "lasting for a very short time",
    "sentence": "Fame can be ephemeral for some pop stars."
  },
  {
    "word": "knowledge",
    "difficulty": "medium",
    "meaning": "facts and information you have learned",
    "sentence": "Reading expands your knowledge."
  },
  {
    "word": "inimical",
    "difficulty": "hard",
    "meaning": "hostile and harmful",
    "sentence": "His attitude was inimical to teamwork."
  },
  {
    "word": "malcontent",
    "difficulty": "hard",
    "meaning": "a person who is persistently unhappy or rebellious",
    "sentence": "The malcontent complained about every decision made."
  },
  {
    "word": "propriety",
    "difficulty": "hard",
    "meaning": "conforming to accepted social standards",
    "sentence": "She always behaved with the utmost propriety at formal events."
  },
  {
    "word": "ribald",
    "difficulty": "hard",
    "meaning": "referring to sexual matters in an amusing way",
    "sentence": "The ribald jokes were not suitable for children."
  },
  {
    "word": "collateral",
    "difficulty": "medium",
    "meaning": "damage or harm caused indirectly",
    "sentence": "The flooding caused collateral damage to nearby roads."
  },
  {
    "word": "adventure",
    "difficulty": "medium",
    "meaning": "an exciting or unusual experience",
    "sentence": "The camping trip was a real adventure for the children."
  },
  {
    "word": "witness",
    "difficulty": "medium",
    "meaning": "a person who sees an event happen",
    "sentence": "He was a witness to the accident."
  },
  {
    "word": "induce",
    "difficulty": "medium",
    "meaning": "to cause something to happen",
    "sentence": "The medicine can induce sleep within minutes."
  },
  {
    "word": "credible",
    "difficulty": "medium",
    "meaning": "able to be trusted or believed",
    "sentence": "He was a credible witness to the event."
  },
  {
    "word": "nascent",
    "difficulty": "hard",
    "meaning": "just coming into existence",
    "sentence": "The nascent company had only three employees."
  },
  {
    "word": "propagate",
    "difficulty": "hard",
    "meaning": "to spread widely from one place to another",
    "sentence": "Plants propagate by scattering their seeds."
  },
  {
    "word": "melody",
    "difficulty": "medium",
    "meaning": "a sequence of musical notes that sounds pleasant",
    "sentence": "She hummed a beautiful melody."
  },
  {
    "word": "discreet",
    "difficulty": "hard",
    "meaning": "careful not to attract attention or reveal secrets",
    "sentence": "She was discreet about the surprise plans."
  },
  {
    "word": "process",
    "difficulty": "medium",
    "meaning": "a series of steps to achieve something",
    "sentence": "Baking bread involves a careful process."
  },
  {
    "word": "cooperate",
    "difficulty": "medium",
    "meaning": "to work together toward a goal",
    "sentence": "The teams cooperated to clean up the park."
  },
  {
    "word": "capitulate",
    "difficulty": "hard",
    "meaning": "to give in to an opponent",
    "sentence": "The army capitulated after weeks of battle."
  },
  {
    "word": "opportunity",
    "difficulty": "medium",
    "meaning": "a chance to do something good",
    "sentence": "She saw an opportunity to volunteer."
  },
  {
    "word": "bifurcate",
    "difficulty": "hard",
    "meaning": "to divide into two branches",
    "sentence": "The river bifurcates just before the city."
  },
  {
    "word": "default",
    "difficulty": "medium",
    "meaning": "to fail to do something required; the usual setting",
    "sentence": "The phone's default ringtone is a simple beep."
  },
  {
    "word": "garrulous",
    "difficulty": "hard",
    "meaning": "excessively talkative about unimportant things",
    "sentence": "The garrulous passenger talked for the entire flight."
  },
  {
    "word": "inevitable",
    "difficulty": "hard",
    "meaning": "certain to happen; unable to be avoided",
    "sentence": "Change is inevitable as time passes."
  },
  {
    "word": "benevolent",
    "difficulty": "hard",
    "meaning": "kind and generous",
    "sentence": "The benevolent king shared his wealth with the poor."
  },
  {
    "word": "migrate",
    "difficulty": "medium",
    "meaning": "to move from one place to another seasonally",
    "sentence": "Birds migrate south in winter."
  },
  {
    "word": "conspicuous",
    "difficulty": "hard",
    "meaning": "easily seen; obvious",
    "sentence": "The bright red hat was conspicuous in the crowd."
  },
  {
    "word": "purpose",
    "difficulty": "medium",
    "meaning": "the reason for doing something",
    "sentence": "The purpose of the meeting was to solve the problem."
  },
  {
    "word": "disaster",
    "difficulty": "medium",
    "meaning": "a terrible event that causes great harm",
    "sentence": "The earthquake was a terrible disaster."
  },
  {
    "word": "rescind",
    "difficulty": "hard",
    "meaning": "to officially cancel a law or agreement",
    "sentence": "The council voted to rescind the unpopular rule."
  },
  {
    "word": "trepidation",
    "difficulty": "hard",
    "meaning": "a feeling of fear or alarm about something",
    "sentence": "She approached the stage with trepidation."
  },
  {
    "word": "remind",
    "difficulty": "medium",
    "meaning": "to make someone remember something",
    "sentence": "Remind me to water the plants."
  },
  {
    "word": "bilateral",
    "difficulty": "hard",
    "meaning": "involving two parties or groups",
    "sentence": "The two countries signed a bilateral agreement."
  },
  {
    "word": "futile",
    "difficulty": "hard",
    "meaning": "producing no result; hopeless",
    "sentence": "It was futile to argue with the stubborn goat."
  },
  {
    "word": "aloof",
    "difficulty": "hard",
    "meaning": "not friendly; keeping a distance from others",
    "sentence": "She seemed aloof at first but was kind once you knew her."
  },
  {
    "word": "facetious",
    "difficulty": "hard",
    "meaning": "treating serious matters too lightly",
    "sentence": "His facetious joke fell flat during the solemn ceremony."
  },
  {
    "word": "consensus",
    "difficulty": "medium",
    "meaning": "general agreement among a group",
    "sentence": "The team reached a consensus on the best plan."
  },
  {
    "word": "typical",
    "difficulty": "medium",
    "meaning": "happening in the usual way",
    "sentence": "A typical school day starts at eight o'clock."
  },
  {
    "word": "transform",
    "difficulty": "medium",
    "meaning": "to change completely",
    "sentence": "The caterpillar transforms into a butterfly."
  },
  {
    "word": "amenity",
    "difficulty": "medium",
    "meaning": "a feature that provides comfort",
    "sentence": "The hotel had many amenities including a pool."
  },
  {
    "word": "grateful",
    "difficulty": "medium",
    "meaning": "feeling thankful for something",
    "sentence": "He was grateful for his teacher's help."
  },
  {
    "word": "simplify",
    "difficulty": "medium",
    "meaning": "to make something easier to understand",
    "sentence": "The teacher simplified the explanation."
  },
  {
    "word": "verbose",
    "difficulty": "hard",
    "meaning": "using more words than necessary",
    "sentence": "The verbose report could easily be cut in half."
  },
  {
    "word": "brief",
    "difficulty": "medium",
    "meaning": "lasting only a short time; short in length",
    "sentence": "She gave a brief summary of the chapter."
  },
  {
    "word": "incongruous",
    "difficulty": "hard",
    "meaning": "seeming out of place or inconsistent",
    "sentence": "A snowman in July looks incongruous."
  },
  {
    "word": "impervious",
    "difficulty": "hard",
    "meaning": "not affected by something",
    "sentence": "He was impervious to criticism."
  },
  {
    "word": "tradition",
    "difficulty": "medium",
    "meaning": "a custom passed from one generation to another",
    "sentence": "It is a tradition to eat turkey on Thanksgiving."
  },
  {
    "word": "anchor",
    "difficulty": "medium",
    "meaning": "something that gives stability; to fasten firmly",
    "sentence": "The anchor held the boat in place during the storm."
  },
  {
    "word": "torpor",
    "difficulty": "hard",
    "meaning": "a state of physical or mental inactivity",
    "sentence": "She fell into a torpor after the exhausting week."
  },
  {
    "word": "labor",
    "difficulty": "medium",
    "meaning": "hard physical or mental work",
    "sentence": "Building the bridge required months of labor."
  },
  {
    "word": "scarcity",
    "difficulty": "medium",
    "meaning": "a shortage of something needed",
    "sentence": "There was a scarcity of water during the drought."
  },
  {
    "word": "bias",
    "difficulty": "medium",
    "meaning": "an unfair preference for one side",
    "sentence": "A judge must be free of personal bias."
  },
  {
    "word": "tangential",
    "difficulty": "hard",
    "meaning": "slightly related; digressing from the main topic",
    "sentence": "His tangential comment distracted the class."
  },
  {
    "word": "climate",
    "difficulty": "medium",
    "meaning": "the typical weather of an area over a long time",
    "sentence": "The rainforest has a warm and wet climate."
  },
  {
    "word": "privilege",
    "difficulty": "medium",
    "meaning": "a special right given to some people",
    "sentence": "It is a privilege to study at this school."
  },
  {
    "word": "nostalgic",
    "difficulty": "hard",
    "meaning": "feeling a sentimental longing for the past",
    "sentence": "Old photographs made her feel nostalgic."
  },
  {
    "word": "concede",
    "difficulty": "medium",
    "meaning": "to admit something is true; to give up a point",
    "sentence": "He conceded that his rival had performed better."
  },
  {
    "word": "circumlocution",
    "difficulty": "hard",
    "meaning": "using too many words to express an idea",
    "sentence": "Avoid circumlocution and say what you mean clearly."
  },
  {
    "word": "connotation",
    "difficulty": "medium",
    "meaning": "an implied meaning of a word beyond its literal meaning",
    "sentence": "The word 'home' has warm connotations for most people."
  },
  {
    "word": "dogmatic",
    "difficulty": "hard",
    "meaning": "insisting one's own beliefs are correct",
    "sentence": "The dogmatic professor refused to consider new evidence."
  },
  {
    "word": "supine",
    "difficulty": "hard",
    "meaning": "lying face upward; failing to act",
    "sentence": "His supine acceptance of the injustice frustrated his friends."
  },
  {
    "word": "zealot",
    "difficulty": "hard",
    "meaning": "a fanatical and uncompromising follower",
    "sentence": "The zealot refused to listen to any other opinion."
  },
  {
    "word": "precious",
    "difficulty": "medium",
    "meaning": "of great value or importance",
    "sentence": "Fresh water is a precious resource."
  },
  {
    "word": "reduce",
    "difficulty": "medium",
    "meaning": "to make something smaller in size or amount",
    "sentence": "Turn off lights to reduce electricity use."
  },
  {
    "word": "deduce",
    "difficulty": "medium",
    "meaning": "to reach a conclusion through reasoning",
    "sentence": "From the clues, she deduced where the treasure was hidden."
  },
  {
    "word": "totalitarian",
    "difficulty": "hard",
    "meaning": "ruling with complete and centralized power",
    "sentence": "The totalitarian government suppressed free speech."
  },
  {
    "word": "visible",
    "difficulty": "medium",
    "meaning": "able to be seen",
    "sentence": "The stars are visible on a clear night."
  },
  {
    "word": "effort",
    "difficulty": "medium",
    "meaning": "energy used to do something",
    "sentence": "She put a lot of effort into her drawing."
  },
  {
    "word": "stagnant",
    "difficulty": "hard",
    "meaning": "not moving or developing",
    "sentence": "Without new ideas, a company can become stagnant."
  },
  {
    "word": "tentative",
    "difficulty": "hard",
    "meaning": "not certain; done without confidence",
    "sentence": "She gave a tentative answer, not sure if she was right."
  },
  {
    "word": "disdain",
    "difficulty": "hard",
    "meaning": "the feeling that something is unworthy or inferior",
    "sentence": "She looked at the poor attempt with disdain."
  },
  {
    "word": "assertion",
    "difficulty": "medium",
    "meaning": "a confident statement of fact or belief",
    "sentence": "He made the assertion that practice makes perfect."
  },
  {
    "word": "phenomenon",
    "difficulty": "hard",
    "meaning": "a fact or event that is remarkable or unusual",
    "sentence": "The rainbow was a beautiful natural phenomenon."
  },
  {
    "word": "hackneyed",
    "difficulty": "hard",
    "meaning": "a phrase used so often it has lost meaning",
    "sentence": "'Think outside the box' has become a hackneyed phrase."
  },
  {
    "word": "medium",
    "difficulty": "medium",
    "meaning": "in the middle; not extreme",
    "sentence": "The temperature was a comfortable medium."
  },
  {
    "word": "vitriolic",
    "difficulty": "hard",
    "meaning": "filled with bitter criticism",
    "sentence": "The vitriolic review destroyed the restaurant's reputation."
  },
  {
    "word": "subservient",
    "difficulty": "hard",
    "meaning": "prepared to obey without question",
    "sentence": "He refused to be subservient to an unjust authority."
  },
  {
    "word": "amiable",
    "difficulty": "hard",
    "meaning": "having a friendly and pleasant manner",
    "sentence": "The amiable host welcomed each guest with a smile."
  },
  {
    "word": "declare",
    "difficulty": "medium",
    "meaning": "to say something officially",
    "sentence": "He declared the meeting open."
  },
  {
    "word": "conscious",
    "difficulty": "medium",
    "meaning": "awake and aware of what is happening",
    "sentence": "She was conscious throughout the operation."
  },
  {
    "word": "avarice",
    "difficulty": "hard",
    "meaning": "extreme greed for wealth",
    "sentence": "His avarice led him to cheat his business partners."
  },
  {
    "word": "formal",
    "difficulty": "medium",
    "meaning": "following official rules and customs",
    "sentence": "He wore a formal suit to the ceremony."
  },
  {
    "word": "disdainful",
    "difficulty": "hard",
    "meaning": "showing contempt or scorn",
    "sentence": "She gave a disdainful look at his messy work."
  },
  {
    "word": "distribute",
    "difficulty": "medium",
    "meaning": "to give things out to a group",
    "sentence": "Volunteers distributed food to the families."
  },
  {
    "word": "bombastic",
    "difficulty": "hard",
    "meaning": "using long words to impress but saying little",
    "sentence": "His bombastic speech sounded impressive but meant nothing."
  },
  {
    "word": "convoluted",
    "difficulty": "hard",
    "meaning": "extremely complex and difficult to follow",
    "sentence": "The plot of the film was far too convoluted."
  },
  {
    "word": "rancorous",
    "difficulty": "hard",
    "meaning": "showing bitter resentment",
    "sentence": "The rancorous debate left both sides angrier than before."
  },
  {
    "word": "amplify",
    "difficulty": "hard",
    "meaning": "to make something larger, louder, or stronger",
    "sentence": "The speaker amplified her voice so everyone could hear."
  },
  {
    "word": "exonerate",
    "difficulty": "hard",
    "meaning": "to officially declare someone free from blame",
    "sentence": "New DNA evidence exonerated the wrongly jailed man."
  },
  {
    "word": "assurance",
    "difficulty": "medium",
    "meaning": "a positive declaration to give confidence",
    "sentence": "She gave the assurance that the work would be done."
  },
  {
    "word": "rhetoric",
    "difficulty": "hard",
    "meaning": "language used to persuade or impress",
    "sentence": "Politicians often rely on powerful rhetoric."
  },
  {
    "word": "sententious",
    "difficulty": "hard",
    "meaning": "using many pompous sayings to give moral lessons",
    "sentence": "His sententious lectures bored every student."
  },
  {
    "word": "diligence",
    "difficulty": "hard",
    "meaning": "careful and continued effort",
    "sentence": "Diligence and practice lead to excellence."
  },
  {
    "word": "contribute",
    "difficulty": "medium",
    "meaning": "to give or add to something",
    "sentence": "Every student contributed ideas to the project."
  },
  {
    "word": "essential",
    "difficulty": "medium",
    "meaning": "absolutely necessary",
    "sentence": "Sleep is essential for good health."
  },
  {
    "word": "perfidy",
    "difficulty": "hard",
    "meaning": "the act of betraying trust",
    "sentence": "His perfidy was discovered when the truth came to light."
  },
  {
    "word": "loquacious",
    "difficulty": "hard",
    "meaning": "tending to talk a great deal",
    "sentence": "The loquacious guide kept the tourists entertained all day."
  },
  {
    "word": "initiate",
    "difficulty": "medium",
    "meaning": "to begin something",
    "sentence": "He initiated the conversation by saying hello."
  },
  {
    "word": "dubious",
    "difficulty": "hard",
    "meaning": "hesitating and not trusting; doubtful",
    "sentence": "She was dubious about his claim of being an expert."
  },
  {
    "word": "approve",
    "difficulty": "medium",
    "meaning": "to agree that something is good",
    "sentence": "The teacher approved the new classroom rules."
  },
  {
    "word": "perpetuate",
    "difficulty": "hard",
    "meaning": "to make something continue indefinitely",
    "sentence": "Don't perpetuate harmful stereotypes."
  },
  {
    "word": "irreversible",
    "difficulty": "medium",
    "meaning": "impossible to change back",
    "sentence": "Some damage to the environment is irreversible."
  },
  {
    "word": "supply",
    "difficulty": "medium",
    "meaning": "to provide something needed",
    "sentence": "The river supplies water to the whole town."
  },
  {
    "word": "tractable",
    "difficulty": "hard",
    "meaning": "easy to manage or deal with",
    "sentence": "The tractable pupil always followed instructions."
  },
  {
    "word": "pathetic",
    "difficulty": "hard",
    "meaning": "causing feelings of sadness or pity",
    "sentence": "It was a pathetic sight to see the animal stranded."
  },
  {
    "word": "construct",
    "difficulty": "medium",
    "meaning": "to build or create something",
    "sentence": "Workers construct buildings out of bricks."
  },
  {
    "word": "convince",
    "difficulty": "medium",
    "meaning": "to make someone believe something",
    "sentence": "She convinced her brother to share his snack."
  },
  {
    "word": "hesitate",
    "difficulty": "medium",
    "meaning": "to pause before doing something",
    "sentence": "She hesitated before jumping into the pool."
  },
  {
    "word": "highlight",
    "difficulty": "medium",
    "meaning": "the most exciting part of something",
    "sentence": "The highlight of the trip was visiting the museum."
  },
  {
    "word": "sycophant",
    "difficulty": "hard",
    "meaning": "a person who flatters important people to gain favor",
    "sentence": "The sycophant praised every decision the boss made."
  },
  {
    "word": "glacial",
    "difficulty": "hard",
    "meaning": "extremely slow; relating to ice and glaciers",
    "sentence": "Progress on the deal was glacial."
  },
  {
    "word": "erroneous",
    "difficulty": "hard",
    "meaning": "wrong; based on incorrect information",
    "sentence": "The report contained several erroneous facts."
  },
  {
    "word": "maladroit",
    "difficulty": "hard",
    "meaning": "clumsy and awkward",
    "sentence": "The maladroit waiter dropped three plates in one night."
  },
  {
    "word": "rigid",
    "difficulty": "medium",
    "meaning": "not flexible; very strict",
    "sentence": "The rules were too rigid to allow any fun."
  },
  {
    "word": "resource",
    "difficulty": "medium",
    "meaning": "something useful or valuable",
    "sentence": "Water is Earth's most essential resource."
  },
  {
    "word": "nefarious",
    "difficulty": "hard",
    "meaning": "wicked and criminal",
    "sentence": "The nefarious plot to steal the jewels was uncovered."
  },
  {
    "word": "agile",
    "difficulty": "medium",
    "meaning": "able to move quickly and easily",
    "sentence": "The agile gymnast leaped across the mat."
  },
  {
    "word": "quandary",
    "difficulty": "hard",
    "meaning": "a state of uncertainty about what to do",
    "sentence": "She was in a quandary over which university to choose."
  },
  {
    "word": "allay",
    "difficulty": "hard",
    "meaning": "to reduce feelings of fear or worry",
    "sentence": "The teacher allayed the students' anxiety about the exam."
  },
  {
    "word": "metamorphosis",
    "difficulty": "hard",
    "meaning": "a change of form or character",
    "sentence": "The caterpillar's metamorphosis into a butterfly takes weeks."
  },
  {
    "word": "develop",
    "difficulty": "medium",
    "meaning": "to grow or improve over time",
    "sentence": "The city developed quickly over ten years."
  },
  {
    "word": "durable",
    "difficulty": "medium",
    "meaning": "able to last a long time",
    "sentence": "The durable boots survived years of hiking."
  },
  {
    "word": "reveal",
    "difficulty": "medium",
    "meaning": "to show something that was hidden",
    "sentence": "The magician revealed the hidden card."
  },
  {
    "word": "value",
    "difficulty": "medium",
    "meaning": "the importance or worth of something",
    "sentence": "She understood the value of hard work."
  },
  {
    "word": "exuberant",
    "difficulty": "hard",
    "meaning": "filled with lively energy and enthusiasm",
    "sentence": "The exuberant crowd cheered loudly."
  },
  {
    "word": "illuminate",
    "difficulty": "medium",
    "meaning": "to light up or make clear",
    "sentence": "The lamp illuminated the dark corner of the room."
  },
  {
    "word": "effective",
    "difficulty": "medium",
    "meaning": "producing the intended result",
    "sentence": "The medicine was effective in curing the cold."
  },
  {
    "word": "leverage",
    "difficulty": "medium",
    "meaning": "to use something to its maximum advantage",
    "sentence": "She leveraged her skills to land the role."
  },
  {
    "word": "comparable",
    "difficulty": "medium",
    "meaning": "similar and able to be compared",
    "sentence": "The two performances were comparable in quality."
  },
  {
    "word": "scarce",
    "difficulty": "medium",
    "meaning": "not enough of something; hard to find",
    "sentence": "Clean water is scarce in some parts of the world."
  },
  {
    "word": "visceral",
    "difficulty": "hard",
    "meaning": "relating to deep feelings rather than reason",
    "sentence": "Her visceral reaction to injustice made her an activist."
  },
  {
    "word": "harmless",
    "difficulty": "medium",
    "meaning": "not able to cause harm",
    "sentence": "Most spiders are completely harmless to humans."
  },
  {
    "word": "ignore",
    "difficulty": "medium",
    "meaning": "to pay no attention to something",
    "sentence": "He tried to ignore the noise outside."
  },
  {
    "word": "precipitate",
    "difficulty": "hard",
    "meaning": "to cause something to happen suddenly",
    "sentence": "His rude remark precipitated an argument."
  },
  {
    "word": "pusillanimous",
    "difficulty": "hard",
    "meaning": "lacking courage; timid",
    "sentence": "The pusillanimous leader refused to make any bold decision."
  },
  {
    "word": "acclaim",
    "difficulty": "medium",
    "meaning": "enthusiastic public praise",
    "sentence": "The young writer received widespread acclaim for her first novel."
  },
  {
    "word": "debacle",
    "difficulty": "hard",
    "meaning": "a sudden disastrous failure",
    "sentence": "The tournament was a complete debacle for the team."
  },
  {
    "word": "complacent",
    "difficulty": "hard",
    "meaning": "satisfied and not working to improve",
    "sentence": "After winning, the team became complacent and lost the next game."
  },
  {
    "word": "convenient",
    "difficulty": "medium",
    "meaning": "easy to use or suited to your needs",
    "sentence": "The shop is in a convenient location."
  },
  {
    "word": "winnow",
    "difficulty": "hard",
    "meaning": "to separate good from bad; to sift",
    "sentence": "She winnowed through hundreds of applications for the job."
  },
  {
    "word": "supplant",
    "difficulty": "hard",
    "meaning": "to take the place of something by force",
    "sentence": "New technology can supplant older methods."
  },
  {
    "word": "adversary",
    "difficulty": "hard",
    "meaning": "a person who actively opposes another; an enemy",
    "sentence": "The knight defeated his adversary in single combat."
  },
  {
    "word": "engage",
    "difficulty": "medium",
    "meaning": "to take part or get involved",
    "sentence": "Students engage more when lessons are fun."
  },
  {
    "word": "prevent",
    "difficulty": "medium",
    "meaning": "to stop something from happening",
    "sentence": "Wash your hands to prevent spreading germs."
  },
  {
    "word": "assume",
    "difficulty": "medium",
    "meaning": "to think something is true without proof",
    "sentence": "Don't assume everyone agrees with you."
  },
  {
    "word": "equanimity",
    "difficulty": "hard",
    "meaning": "calm and composed mental balance",
    "sentence": "She faced every challenge with remarkable equanimity."
  },
  {
    "word": "coherent",
    "difficulty": "hard",
    "meaning": "logical and consistent; easy to understand",
    "sentence": "His explanation was coherent and easy to follow."
  },
  {
    "word": "statement",
    "difficulty": "medium",
    "meaning": "something said or written officially",
    "sentence": "She made a statement to the newspaper."
  },
  {
    "word": "correlation",
    "difficulty": "medium",
    "meaning": "a connection between two things",
    "sentence": "There is a correlation between exercise and health."
  },
  {
    "word": "overcome",
    "difficulty": "medium",
    "meaning": "to succeed despite a difficulty",
    "sentence": "She overcame her fear of heights."
  },
  {
    "word": "obstruct",
    "difficulty": "hard",
    "meaning": "to block or prevent progress",
    "sentence": "Fallen rocks obstructed the path through the mountain."
  },
  {
    "word": "superior",
    "difficulty": "medium",
    "meaning": "higher in quality or rank",
    "sentence": "This brand is superior to the other one."
  },
  {
    "word": "amalgamate",
    "difficulty": "hard",
    "meaning": "to combine two or more things into one",
    "sentence": "The two small schools amalgamated into a single campus."
  },
  {
    "word": "narcissistic",
    "difficulty": "hard",
    "meaning": "having an excessive interest in oneself",
    "sentence": "His narcissistic tendencies made collaboration difficult."
  },
  {
    "word": "defunct",
    "difficulty": "hard",
    "meaning": "no longer existing or functioning",
    "sentence": "The defunct factory had been empty for decades."
  },
  {
    "word": "recognize",
    "difficulty": "medium",
    "meaning": "to know someone or something you have seen before",
    "sentence": "She recognized her old friend at the market."
  },
  {
    "word": "challenge",
    "difficulty": "medium",
    "meaning": "something difficult that tests your skills",
    "sentence": "Climbing the mountain was a great challenge."
  },
  {
    "word": "extreme",
    "difficulty": "medium",
    "meaning": "very great or intense",
    "sentence": "The extreme heat made everyone tired."
  },
  {
    "word": "underestimate",
    "difficulty": "medium",
    "meaning": "to think something is smaller than it is",
    "sentence": "Never underestimate the power of kindness."
  },
  {
    "word": "taciturn",
    "difficulty": "hard",
    "meaning": "reserved and saying very little",
    "sentence": "The taciturn professor never said more than necessary."
  },
  {
    "word": "alacrity",
    "difficulty": "hard",
    "meaning": "eager willingness and speed",
    "sentence": "She accepted the invitation with alacrity."
  },
  {
    "word": "embody",
    "difficulty": "medium",
    "meaning": "to be a representation of something",
    "sentence": "She embodies kindness in everything she does."
  },
  {
    "word": "cultivate",
    "difficulty": "medium",
    "meaning": "to grow plants or develop a skill",
    "sentence": "She cultivated a love of reading in her students."
  },
  {
    "word": "ominous",
    "difficulty": "hard",
    "meaning": "suggesting something bad is about to happen",
    "sentence": "Dark clouds were an ominous sign before the storm."
  },
  {
    "word": "aberration",
    "difficulty": "hard",
    "meaning": "something that is unusual or unexpected",
    "sentence": "The warm January was an aberration from normal weather patterns."
  },
  {
    "word": "reliable",
    "difficulty": "medium",
    "meaning": "can be trusted to do what is needed",
    "sentence": "She is a reliable friend who always keeps promises."
  },
  {
    "word": "quixotic",
    "difficulty": "hard",
    "meaning": "exceedingly idealistic and impractical",
    "sentence": "His quixotic plan to end all wars in one year was impossible."
  },
  {
    "word": "invest",
    "difficulty": "medium",
    "meaning": "to put money or effort into something for future gain",
    "sentence": "She invested in learning new languages."
  },
  {
    "word": "deliberation",
    "difficulty": "medium",
    "meaning": "long and careful thought",
    "sentence": "After much deliberation, she chose the red dress."
  },
  {
    "word": "tenacious",
    "difficulty": "hard",
    "meaning": "never giving up; holding firmly",
    "sentence": "The tenacious athlete trained despite every setback."
  },
  {
    "word": "lassitude",
    "difficulty": "hard",
    "meaning": "physical or mental weariness",
    "sentence": "After the long exam, she felt a deep lassitude."
  },
  {
    "word": "hierarchy",
    "difficulty": "medium",
    "meaning": "a system organized by rank or importance",
    "sentence": "The food chain is an example of a natural hierarchy."
  },
  {
    "word": "zenith",
    "difficulty": "hard",
    "meaning": "the highest point in development",
    "sentence": "At the zenith of her career, she won three awards."
  },
  {
    "word": "diligent",
    "difficulty": "medium",
    "meaning": "working hard and carefully",
    "sentence": "A diligent student always completes homework."
  },
  {
    "word": "animation",
    "difficulty": "medium",
    "meaning": "the state of being lively; moving images",
    "sentence": "The animation in the film was incredibly detailed."
  },
  {
    "word": "disappear",
    "difficulty": "medium",
    "meaning": "to stop being seen or found",
    "sentence": "The magician made the rabbit disappear."
  },
  {
    "word": "allude",
    "difficulty": "hard",
    "meaning": "to refer to something indirectly",
    "sentence": "He alluded to the problem without naming it outright."
  },
  {
    "word": "original",
    "difficulty": "medium",
    "meaning": "the first or earliest version; not copied",
    "sentence": "That idea was completely original."
  },
  {
    "word": "atrophy",
    "difficulty": "hard",
    "meaning": "to waste away due to lack of use",
    "sentence": "Muscles atrophy if they are not exercised regularly."
  },
  {
    "word": "sycophancy",
    "difficulty": "hard",
    "meaning": "excessive flattery given to gain favour",
    "sentence": "His sycophancy toward the boss was obvious to everyone."
  },
  {
    "word": "humble",
    "difficulty": "medium",
    "meaning": "not proud; modest about achievements",
    "sentence": "Despite winning, he remained humble."
  },
  {
    "word": "momentum",
    "difficulty": "medium",
    "meaning": "the force gained by movement or progress",
    "sentence": "The team built momentum as the game went on."
  },
  {
    "word": "subtle",
    "difficulty": "hard",
    "meaning": "so slight as to be difficult to detect",
    "sentence": "There was a subtle change in his tone."
  },
  {
    "word": "egregious",
    "difficulty": "hard",
    "meaning": "outstandingly bad; shocking",
    "sentence": "His egregious behavior got him banned from the library."
  },
  {
    "word": "similar",
    "difficulty": "medium",
    "meaning": "almost the same as something else",
    "sentence": "The two paintings look very similar."
  },
  {
    "word": "exert",
    "difficulty": "medium",
    "meaning": "to make a physical or mental effort",
    "sentence": "She had to exert great effort to lift the box."
  },
  {
    "word": "approbation",
    "difficulty": "hard",
    "meaning": "approval or praise",
    "sentence": "She sought her teacher's approbation for her poem."
  },
  {
    "word": "encompass",
    "difficulty": "medium",
    "meaning": "to include a wide range of things",
    "sentence": "The curriculum encompasses science, art, and language."
  },
  {
    "word": "misanthropic",
    "difficulty": "hard",
    "meaning": "having a dislike of people in general",
    "sentence": "His misanthropic views kept him isolated from others."
  },
  {
    "word": "expose",
    "difficulty": "medium",
    "meaning": "to uncover or show something hidden",
    "sentence": "The documentary exposed the truth about pollution."
  },
  {
    "word": "abrogate",
    "difficulty": "hard",
    "meaning": "to formally cancel or end a law",
    "sentence": "Parliament voted to abrogate the outdated law."
  },
  {
    "word": "elegant",
    "difficulty": "medium",
    "meaning": "graceful and stylish",
    "sentence": "The dancer made elegant movements across the stage."
  },
  {
    "word": "paradox",
    "difficulty": "hard",
    "meaning": "a statement that seems contradictory but may be true",
    "sentence": "It is a paradox that silence can be very loud."
  },
  {
    "word": "dignified",
    "difficulty": "medium",
    "meaning": "having quiet, serious confidence",
    "sentence": "She gave a dignified speech at the ceremony."
  },
  {
    "word": "communicate",
    "difficulty": "medium",
    "meaning": "to share information with others",
    "sentence": "We use words and signs to communicate."
  },
  {
    "word": "layer",
    "difficulty": "medium",
    "meaning": "one thickness of something placed over another",
    "sentence": "The cake had three layers of chocolate."
  },
  {
    "word": "opulent",
    "difficulty": "hard",
    "meaning": "rich and luxurious",
    "sentence": "The king lived in an opulent palace."
  },
  {
    "word": "suggest",
    "difficulty": "medium",
    "meaning": "to offer an idea for consideration",
    "sentence": "She suggested going to the park."
  },
  {
    "word": "misanthrope",
    "difficulty": "hard",
    "meaning": "a person who dislikes others",
    "sentence": "The misanthrope avoided parties and crowds."
  },
  {
    "word": "rancor",
    "difficulty": "hard",
    "meaning": "bitterness and resentment",
    "sentence": "The argument left deep rancor between the two friends."
  },
  {
    "word": "potential",
    "difficulty": "medium",
    "meaning": "the possibility to develop well in the future",
    "sentence": "She has great potential as a writer."
  },
  {
    "word": "dominate",
    "difficulty": "medium",
    "meaning": "to be the most powerful or important",
    "sentence": "One team can sometimes dominate the whole game."
  },
  {
    "word": "scrupulous",
    "difficulty": "hard",
    "meaning": "very careful to do what is honest and right",
    "sentence": "A scrupulous scientist documents every step."
  },
  {
    "word": "practical",
    "difficulty": "medium",
    "meaning": "useful in real situations",
    "sentence": "A practical solution is one that actually works."
  },
  {
    "word": "negligent",
    "difficulty": "hard",
    "meaning": "failing to take proper care",
    "sentence": "Being negligent on the road can cause accidents."
  },
  {
    "word": "veracity",
    "difficulty": "hard",
    "meaning": "the quality of being truthful",
    "sentence": "The journalist's veracity was never in question."
  },
  {
    "word": "logical",
    "difficulty": "medium",
    "meaning": "following clear and sensible reasoning",
    "sentence": "Her argument was logical and easy to follow."
  },
  {
    "word": "aesthetic",
    "difficulty": "medium",
    "meaning": "relating to beauty and art",
    "sentence": "The garden had an aesthetic design with colorful flowers."
  },
  {
    "word": "precise",
    "difficulty": "medium",
    "meaning": "exact and accurate in every detail",
    "sentence": "She gave a precise description of the lost item."
  },
  {
    "word": "chicanery",
    "difficulty": "hard",
    "meaning": "the use of tricks to deceive someone",
    "sentence": "The contract was full of chicanery."
  },
  {
    "word": "emission",
    "difficulty": "medium",
    "meaning": "gas or radiation released into the environment",
    "sentence": "Cars produce harmful emissions that pollute the air."
  },
  {
    "word": "forestall",
    "difficulty": "hard",
    "meaning": "to prevent something by acting first",
    "sentence": "He forestalled the argument by offering a compromise."
  },
  {
    "word": "negate",
    "difficulty": "medium",
    "meaning": "to cancel out or deny the effect of something",
    "sentence": "Regular exercise can negate the effects of sitting too long."
  },
  {
    "word": "independence",
    "difficulty": "medium",
    "meaning": "freedom from the control of others",
    "sentence": "She valued her independence greatly."
  },
  {
    "word": "abolish",
    "difficulty": "medium",
    "meaning": "to officially end or get rid of something",
    "sentence": "Many countries have moved to abolish child labor."
  },
  {
    "word": "compete",
    "difficulty": "medium",
    "meaning": "to try to win against others",
    "sentence": "Teams compete in the annual soccer tournament."
  },
  {
    "word": "nurture",
    "difficulty": "medium",
    "meaning": "to care for and encourage growth",
    "sentence": "Parents nurture their children with love."
  },
  {
    "word": "exhausted",
    "difficulty": "medium",
    "meaning": "very tired after working hard",
    "sentence": "After the long hike, they were exhausted."
  },
  {
    "word": "fortuitous",
    "difficulty": "hard",
    "meaning": "happening by lucky chance",
    "sentence": "It was fortuitous that she arrived just in time."
  },
  {
    "word": "significant",
    "difficulty": "medium",
    "meaning": "important and meaningful",
    "sentence": "It was a significant discovery for science."
  },
  {
    "word": "arduous",
    "difficulty": "hard",
    "meaning": "involving a lot of effort; very difficult",
    "sentence": "Climbing the icy peak was an arduous task."
  },
  {
    "word": "iterative",
    "difficulty": "medium",
    "meaning": "repeating a process many times to improve it",
    "sentence": "Writing well is an iterative process of drafting and revising."
  },
  {
    "word": "ignominious",
    "difficulty": "hard",
    "meaning": "deserving or causing disgrace",
    "sentence": "The team suffered an ignominious defeat by ten goals."
  },
  {
    "word": "limit",
    "difficulty": "medium",
    "meaning": "the furthest point of something",
    "sentence": "There is a speed limit on this road."
  },
  {
    "word": "candor",
    "difficulty": "hard",
    "meaning": "the quality of being open and honest",
    "sentence": "She appreciated his candor when he told her the truth."
  },
  {
    "word": "stentorian",
    "difficulty": "hard",
    "meaning": "extremely loud and powerful",
    "sentence": "His stentorian voice filled the entire auditorium."
  },
  {
    "word": "procrastinate",
    "difficulty": "hard",
    "meaning": "to delay doing something that must be done",
    "sentence": "Stop procrastinating and start your homework now!"
  },
  {
    "word": "vilify",
    "difficulty": "hard",
    "meaning": "to speak or write about someone in an abusive way",
    "sentence": "The tabloid sought to vilify the politician."
  },
  {
    "word": "brevity",
    "difficulty": "hard",
    "meaning": "the use of few words; shortness",
    "sentence": "The beauty of the poem lay in its brevity."
  },
  {
    "word": "timorous",
    "difficulty": "hard",
    "meaning": "easily frightened; nervous",
    "sentence": "The timorous mouse hid at the slightest sound."
  },
  {
    "word": "duplicitous",
    "difficulty": "hard",
    "meaning": "behaving in a deceitful way",
    "sentence": "The duplicitous employee pretended to be loyal but leaked secrets."
  },
  {
    "word": "audacious",
    "difficulty": "hard",
    "meaning": "showing a willingness to take bold risks",
    "sentence": "Her audacious plan shocked the whole committee."
  },
  {
    "word": "delineate",
    "difficulty": "hard",
    "meaning": "to describe or explain something clearly",
    "sentence": "The map delineates the boundaries of each region."
  },
  {
    "word": "absent",
    "difficulty": "medium",
    "meaning": "not present; missing",
    "sentence": "She was absent from school because she had a cold."
  },
  {
    "word": "demagogue",
    "difficulty": "hard",
    "meaning": "a political leader who appeals to emotion over reason",
    "sentence": "The demagogue used fear to win votes."
  },
  {
    "word": "stable",
    "difficulty": "medium",
    "meaning": "not likely to move or change suddenly",
    "sentence": "The ladder must be stable before you climb."
  },
  {
    "word": "meaningful",
    "difficulty": "medium",
    "meaning": "having an important purpose",
    "sentence": "Her speech was very meaningful."
  },
  {
    "word": "derive",
    "difficulty": "medium",
    "meaning": "to get something from a source",
    "sentence": "We can derive energy from sunlight using solar panels."
  },
  {
    "word": "euphemism",
    "difficulty": "hard",
    "meaning": "a mild expression used instead of a harsh one",
    "sentence": "'Passed away' is a euphemism for 'died.'"
  },
  {
    "word": "generate",
    "difficulty": "medium",
    "meaning": "to produce or cause something",
    "sentence": "Solar panels generate electricity from sunlight."
  },
  {
    "word": "critique",
    "difficulty": "medium",
    "meaning": "a detailed evaluation of something",
    "sentence": "The teacher wrote a thoughtful critique of the essay."
  },
  {
    "word": "actuate",
    "difficulty": "hard",
    "meaning": "to cause something to operate",
    "sentence": "The sensor actuates the alarm when it detects smoke."
  },
  {
    "word": "discordant",
    "difficulty": "hard",
    "meaning": "not in harmony; conflicting",
    "sentence": "The discordant notes hurt the audience's ears."
  },
  {
    "word": "gorgeous",
    "difficulty": "medium",
    "meaning": "very beautiful",
    "sentence": "The sunset was absolutely gorgeous."
  },
  {
    "word": "compassion",
    "difficulty": "medium",
    "meaning": "a feeling of caring about others' suffering",
    "sentence": "She showed compassion by helping the stray cat."
  },
  {
    "word": "impassive",
    "difficulty": "hard",
    "meaning": "not showing or feeling emotion",
    "sentence": "She remained impassive as she heard the verdict."
  },
  {
    "word": "forbid",
    "difficulty": "medium",
    "meaning": "to say that something must not be done",
    "sentence": "The sign forbids swimming in the lake."
  },
  {
    "word": "obstinate",
    "difficulty": "hard",
    "meaning": "stubbornly refusing to change",
    "sentence": "The obstinate child refused to eat anything green."
  },
  {
    "word": "reflect",
    "difficulty": "medium",
    "meaning": "to think carefully about something",
    "sentence": "Take a moment to reflect on what you have learned."
  },
  {
    "word": "community",
    "difficulty": "medium",
    "meaning": "a group of people living in the same area",
    "sentence": "The community came together after the flood."
  },
  {
    "word": "ancient",
    "difficulty": "medium",
    "meaning": "very old; from long ago",
    "sentence": "The ancient pyramid still stands today."
  },
  {
    "word": "evaluate",
    "difficulty": "medium",
    "meaning": "to judge the value or quality of something",
    "sentence": "The teacher will evaluate your project next week."
  },
  {
    "word": "elaborate",
    "difficulty": "medium",
    "meaning": "having many carefully arranged parts; to explain in detail",
    "sentence": "She wore an elaborate costume to the festival."
  },
  {
    "word": "explain",
    "difficulty": "medium",
    "meaning": "to make something clear and easy to understand",
    "sentence": "The teacher explained the math problem."
  },
  {
    "word": "appreciate",
    "difficulty": "medium",
    "meaning": "to recognize the value of something",
    "sentence": "I appreciate your kind words."
  },
  {
    "word": "exhaustive",
    "difficulty": "hard",
    "meaning": "covering every detail; very thorough",
    "sentence": "The scientist conducted an exhaustive study of the problem."
  },
  {
    "word": "copious",
    "difficulty": "hard",
    "meaning": "large in quantity; abundant",
    "sentence": "She took copious notes during the long lecture."
  },
  {
    "word": "derogatory",
    "difficulty": "hard",
    "meaning": "showing a low opinion; insulting",
    "sentence": "It is wrong to use derogatory language about any person."
  },
  {
    "word": "decree",
    "difficulty": "hard",
    "meaning": "an official order from an authority",
    "sentence": "The king issued a decree that raised taxes."
  },
  {
    "word": "wily",
    "difficulty": "hard",
    "meaning": "skilled at gaining advantages through deception",
    "sentence": "The wily fox outwitted the hunters every time."
  },
  {
    "word": "wane",
    "difficulty": "hard",
    "meaning": "to decrease in power or strength",
    "sentence": "The king's power began to wane in his final years."
  },
  {
    "word": "fastidious",
    "difficulty": "hard",
    "meaning": "very careful about small details; hard to please",
    "sentence": "The fastidious chef rejected any imperfectly cut vegetable."
  },
  {
    "word": "concern",
    "difficulty": "medium",
    "meaning": "a feeling of worry about something",
    "sentence": "Her late arrival caused concern."
  },
  {
    "word": "refuse",
    "difficulty": "medium",
    "meaning": "to say no to something",
    "sentence": "He refused to eat the vegetables."
  },
  {
    "word": "responsibility",
    "difficulty": "medium",
    "meaning": "a duty to take care of something",
    "sentence": "It is your responsibility to do your homework."
  },
  {
    "word": "proscribe",
    "difficulty": "hard",
    "meaning": "to officially forbid something",
    "sentence": "The government proscribed the use of certain chemicals."
  },
  {
    "word": "ferment",
    "difficulty": "hard",
    "meaning": "agitation and unrest; to undergo chemical change",
    "sentence": "Political ferment swept through the country."
  },
  {
    "word": "ardor",
    "difficulty": "hard",
    "meaning": "enthusiasm and passion for something",
    "sentence": "She pursued her studies with great ardor."
  },
  {
    "word": "attenuate",
    "difficulty": "hard",
    "meaning": "to reduce the force or value of something",
    "sentence": "The medication attenuated the severity of the symptoms."
  },
  {
    "word": "mercurial",
    "difficulty": "hard",
    "meaning": "subject to sudden and unpredictable changes",
    "sentence": "His mercurial temper made him difficult to work with."
  },
  {
    "word": "cacophony",
    "difficulty": "hard",
    "meaning": "a harsh, loud mixture of sounds",
    "sentence": "The construction site created a cacophony of noise."
  },
  {
    "word": "discern",
    "difficulty": "hard",
    "meaning": "to recognize or see something clearly",
    "sentence": "It was hard to discern the truth in her story."
  },
  {
    "word": "stolid",
    "difficulty": "hard",
    "meaning": "calm and dependable; showing little emotion",
    "sentence": "The stolid guard stood unmoved through the long ceremony."
  },
  {
    "word": "magniloquent",
    "difficulty": "hard",
    "meaning": "using grand and extravagant language",
    "sentence": "His magniloquent speech made simple ideas sound complex."
  },
  {
    "word": "exponential",
    "difficulty": "medium",
    "meaning": "growing or increasing very rapidly",
    "sentence": "The population grew at an exponential rate."
  },
  {
    "word": "derelict",
    "difficulty": "hard",
    "meaning": "in very poor condition due to neglect",
    "sentence": "The derelict building was finally torn down."
  },
  {
    "word": "foster",
    "difficulty": "medium",
    "meaning": "to encourage the development of something",
    "sentence": "Good teachers foster a love of learning."
  },
  {
    "word": "contemplate",
    "difficulty": "hard",
    "meaning": "to think carefully about something for a long time",
    "sentence": "She sat quietly to contemplate her next move."
  },
  {
    "word": "decorum",
    "difficulty": "hard",
    "meaning": "correct and polite behavior in a situation",
    "sentence": "The guests maintained decorum throughout the formal dinner."
  },
  {
    "word": "byzantine",
    "difficulty": "hard",
    "meaning": "excessively complicated and hard to understand",
    "sentence": "The tax code was a byzantine set of rules."
  },
  {
    "word": "esoteric",
    "difficulty": "hard",
    "meaning": "understood by only a few people with special knowledge",
    "sentence": "The professor's esoteric research confused most students."
  },
  {
    "word": "implement",
    "difficulty": "medium",
    "meaning": "to put a plan into action",
    "sentence": "They implemented a new recycling program."
  },
  {
    "word": "vast",
    "difficulty": "medium",
    "meaning": "very large in area or number",
    "sentence": "The ocean is vast and deep."
  },
  {
    "word": "equivocal",
    "difficulty": "hard",
    "meaning": "unclear and potentially misleading",
    "sentence": "His equivocal answer left everyone confused."
  },
  {
    "word": "anecdotal",
    "difficulty": "medium",
    "meaning": "based on personal accounts rather than facts",
    "sentence": "The evidence was only anecdotal, not scientific."
  },
  {
    "word": "analyze",
    "difficulty": "medium",
    "meaning": "to examine something in detail",
    "sentence": "Scientists analyze data to find patterns."
  },
  {
    "word": "remonstrate",
    "difficulty": "hard",
    "meaning": "to make a protest; to argue earnestly against",
    "sentence": "She remonstrated firmly against the unfair decision."
  },
  {
    "word": "holistic",
    "difficulty": "medium",
    "meaning": "considering the whole rather than just the parts",
    "sentence": "A holistic approach looks at every part of the problem."
  },
  {
    "word": "beguile",
    "difficulty": "hard",
    "meaning": "to charm or trick someone in an attractive way",
    "sentence": "She beguiled the audience with her enchanting voice."
  },
  {
    "word": "feckless",
    "difficulty": "hard",
    "meaning": "lacking initiative or strength of character",
    "sentence": "The feckless team wasted every opportunity."
  },
  {
    "word": "disenchanted",
    "difficulty": "hard",
    "meaning": "disappointed and losing belief in something",
    "sentence": "She grew disenchanted with politics after years of broken promises."
  },
  {
    "word": "comprehensive",
    "difficulty": "medium",
    "meaning": "including all details; complete",
    "sentence": "They conducted a comprehensive review of the report."
  },
  {
    "word": "foundation",
    "difficulty": "medium",
    "meaning": "the base on which something is built",
    "sentence": "Reading is the foundation of all learning."
  },
  {
    "word": "indicate",
    "difficulty": "medium",
    "meaning": "to show or point out",
    "sentence": "The arrow indicates the correct direction."
  },
  {
    "word": "enervate",
    "difficulty": "hard",
    "meaning": "to cause someone to feel weak and tired",
    "sentence": "The extreme heat enervated the hikers."
  },
  {
    "word": "enigma",
    "difficulty": "hard",
    "meaning": "a person or thing that is mysterious or puzzling",
    "sentence": "The ancient language remained an enigma to scholars."
  },
  {
    "word": "atone",
    "difficulty": "hard",
    "meaning": "to make amends for a wrongdoing",
    "sentence": "He tried to atone for his mistakes by helping others."
  },
  {
    "word": "paradigm",
    "difficulty": "hard",
    "meaning": "a typical example or pattern of something",
    "sentence": "Einstein changed the paradigm of modern physics."
  },
  {
    "word": "pretentious",
    "difficulty": "hard",
    "meaning": "behaving as if you are more important than you are",
    "sentence": "The pretentious student used long words just to impress."
  },
  {
    "word": "common",
    "difficulty": "medium",
    "meaning": "happening often; shared by many",
    "sentence": "Rain is very common in the rainforest."
  },
  {
    "word": "consume",
    "difficulty": "medium",
    "meaning": "to use up or eat something",
    "sentence": "We consume more electricity in winter."
  },
  {
    "word": "impact",
    "difficulty": "medium",
    "meaning": "a strong effect on something",
    "sentence": "The new law had a big impact on the community."
  },
  {
    "word": "classify",
    "difficulty": "medium",
    "meaning": "to arrange things into groups",
    "sentence": "We classified the rocks by color."
  },
  {
    "word": "calm",
    "difficulty": "medium",
    "meaning": "peaceful and quiet; not nervous",
    "sentence": "He stayed calm during the storm."
  },
  {
    "word": "harvest",
    "difficulty": "medium",
    "meaning": "to collect crops from a field",
    "sentence": "Farmers harvest wheat in the autumn."
  },
  {
    "word": "nervous",
    "difficulty": "medium",
    "meaning": "worried and not relaxed",
    "sentence": "She felt nervous on the first day of school."
  },
  {
    "word": "arrogate",
    "difficulty": "hard",
    "meaning": "to claim something without justification",
    "sentence": "He arrogated authority that was not his to take."
  },
  {
    "word": "gratuitous",
    "difficulty": "hard",
    "meaning": "done without good reason; uncalled for",
    "sentence": "The film had gratuitous violence that added nothing to the story."
  },
  {
    "word": "transfer",
    "difficulty": "medium",
    "meaning": "to move something from one place to another",
    "sentence": "Transfer the files to the new computer."
  },
  {
    "word": "focus",
    "difficulty": "medium",
    "meaning": "to direct attention to one thing",
    "sentence": "Focus on the board to read the question."
  },
  {
    "word": "bold",
    "difficulty": "medium",
    "meaning": "brave and confident; not afraid",
    "sentence": "The bold knight entered the dark cave."
  },
  {
    "word": "deliberate",
    "difficulty": "hard",
    "meaning": "done intentionally; careful and unhurried",
    "sentence": "The decision was deliberate, not an accident."
  },
  {
    "word": "strife",
    "difficulty": "hard",
    "meaning": "angry or bitter disagreement; conflict",
    "sentence": "Industrial strife led to the closure of the factory."
  },
  {
    "word": "apropos",
    "difficulty": "hard",
    "meaning": "very appropriate to a particular situation",
    "sentence": "His remark was most apropos to the discussion."
  },
  {
    "word": "endure",
    "difficulty": "medium",
    "meaning": "to experience pain or difficulty with patience",
    "sentence": "The runner endured the heat to finish the race."
  },
  {
    "word": "guidance",
    "difficulty": "medium",
    "meaning": "help and advice given to someone",
    "sentence": "She needed guidance on choosing her career."
  },
  {
    "word": "petulant",
    "difficulty": "hard",
    "meaning": "childishly sulky and bad-tempered",
    "sentence": "He gave a petulant reply when he lost the game."
  },
  {
    "word": "succinct",
    "difficulty": "hard",
    "meaning": "briefly and clearly expressed",
    "sentence": "She gave a succinct answer in just two sentences."
  },
  {
    "word": "flippant",
    "difficulty": "hard",
    "meaning": "not showing a serious attitude",
    "sentence": "Her flippant comment upset the group."
  },
  {
    "word": "bellicose",
    "difficulty": "hard",
    "meaning": "eager to fight or start wars",
    "sentence": "The bellicose general wanted conflict rather than peace."
  },
  {
    "word": "satisfy",
    "difficulty": "medium",
    "meaning": "to meet a need or desire",
    "sentence": "A big breakfast will satisfy your hunger."
  },
  {
    "word": "attribute",
    "difficulty": "medium",
    "meaning": "a quality or feature of something or someone",
    "sentence": "Patience is an important attribute for a teacher."
  },
  {
    "word": "curious",
    "difficulty": "medium",
    "meaning": "eager to learn or know something",
    "sentence": "The curious cat sniffed every corner of the room."
  },
  {
    "word": "ignoble",
    "difficulty": "hard",
    "meaning": "not honorable; shameful",
    "sentence": "Cheating on a test is an ignoble act."
  },
  {
    "word": "mollify",
    "difficulty": "hard",
    "meaning": "to make someone less angry",
    "sentence": "She tried to mollify him with a sincere apology."
  },
  {
    "word": "circumstance",
    "difficulty": "medium",
    "meaning": "the conditions around an event",
    "sentence": "The circumstances of the accident were unclear."
  },
  {
    "word": "arbitrary",
    "difficulty": "hard",
    "meaning": "based on random choice rather than reason",
    "sentence": "The punishment seemed arbitrary and unfair."
  },
  {
    "word": "immutable",
    "difficulty": "hard",
    "meaning": "not capable of change",
    "sentence": "Physical laws are largely immutable."
  },
  {
    "word": "confident",
    "difficulty": "medium",
    "meaning": "sure of yourself and your abilities",
    "sentence": "He was confident he would win the race."
  },
  {
    "word": "clandestine",
    "difficulty": "hard",
    "meaning": "kept secret or done in a hidden way",
    "sentence": "They held clandestine meetings to plan the surprise party."
  },
  {
    "word": "officious",
    "difficulty": "hard",
    "meaning": "being too eager to use authority",
    "sentence": "The officious manager interrupted every meeting."
  },
  {
    "word": "volatile",
    "difficulty": "hard",
    "meaning": "liable to change rapidly; dangerously unstable",
    "sentence": "The volatile situation required careful handling."
  },
  {
    "word": "vigilant",
    "difficulty": "hard",
    "meaning": "keeping careful watch for danger",
    "sentence": "Stay vigilant and report any suspicious activity."
  },
  {
    "word": "overt",
    "difficulty": "hard",
    "meaning": "done openly and not hidden",
    "sentence": "She made an overt effort to include everyone in the game."
  },
  {
    "word": "depravity",
    "difficulty": "hard",
    "meaning": "moral corruption; wickedness",
    "sentence": "The story exposed the depravity of the villain."
  },
  {
    "word": "accurate",
    "difficulty": "medium",
    "meaning": "correct and exact",
    "sentence": "The scientist gave an accurate measurement of the liquid."
  },
  {
    "word": "autonomy",
    "difficulty": "medium",
    "meaning": "the right to make decisions for oneself",
    "sentence": "Students were given autonomy to choose their topics."
  },
  {
    "word": "universal",
    "difficulty": "medium",
    "meaning": "relating to everyone or everything",
    "sentence": "Music is a universal language."
  },
  {
    "word": "sanguine",
    "difficulty": "hard",
    "meaning": "optimistic, especially in difficult situations",
    "sentence": "She remained sanguine about the future despite challenges."
  },
  {
    "word": "navigate",
    "difficulty": "medium",
    "meaning": "to find the way to a place",
    "sentence": "He used a map to navigate through the city."
  },
  {
    "word": "patronize",
    "difficulty": "hard",
    "meaning": "to treat someone as if they are inferior",
    "sentence": "Don't patronize young children — they understand more than you think."
  },
  {
    "word": "environment",
    "difficulty": "medium",
    "meaning": "the natural world around us",
    "sentence": "We must protect our environment."
  },
  {
    "word": "combine",
    "difficulty": "medium",
    "meaning": "to put two or more things together",
    "sentence": "Combine flour and water to make dough."
  },
  {
    "word": "bountiful",
    "difficulty": "medium",
    "meaning": "given in large amounts; plentiful",
    "sentence": "The harvest was bountiful after all the rain."
  },
  {
    "word": "problem",
    "difficulty": "medium",
    "meaning": "something difficult that needs a solution",
    "sentence": "We solved the math problem together."
  },
  {
    "word": "gigantic",
    "difficulty": "medium",
    "meaning": "extremely large",
    "sentence": "The gigantic dinosaur bones filled the museum hall."
  },
  {
    "word": "distort",
    "difficulty": "medium",
    "meaning": "to change something so it is no longer accurate",
    "sentence": "The mirror distorted her reflection."
  },
  {
    "word": "factor",
    "difficulty": "medium",
    "meaning": "something that affects a result",
    "sentence": "Hard work is an important factor in success."
  },
  {
    "word": "collect",
    "difficulty": "medium",
    "meaning": "to gather items together",
    "sentence": "He likes to collect colorful rocks."
  },
  {
    "word": "docile",
    "difficulty": "hard",
    "meaning": "ready to accept control; easy to manage",
    "sentence": "The docile horse allowed children to ride it."
  },
  {
    "word": "embroil",
    "difficulty": "hard",
    "meaning": "to involve someone in a difficult situation",
    "sentence": "She was embroiled in a dispute not of her making."
  },
  {
    "word": "aftermath",
    "difficulty": "medium",
    "meaning": "the consequences of a significant event",
    "sentence": "The aftermath of the storm left many streets flooded."
  },
  {
    "word": "ambitious",
    "difficulty": "medium",
    "meaning": "having a strong desire to succeed",
    "sentence": "An ambitious student sets high goals."
  },
  {
    "word": "sensation",
    "difficulty": "medium",
    "meaning": "a feeling caused by something affecting the body",
    "sentence": "She felt a cool sensation when she entered the cave."
  },
  {
    "word": "malleable",
    "difficulty": "hard",
    "meaning": "easy to bend or to be influenced",
    "sentence": "Gold is a malleable metal."
  },
  {
    "word": "influence",
    "difficulty": "medium",
    "meaning": "the power to affect someone or something",
    "sentence": "Music can influence your mood."
  },
  {
    "word": "flourish",
    "difficulty": "medium",
    "meaning": "to grow and develop strongly",
    "sentence": "The garden flourished after the spring rain."
  },
  {
    "word": "deluge",
    "difficulty": "hard",
    "meaning": "a severe flood; an overwhelming amount of something",
    "sentence": "The storm caused a deluge that swept through the town."
  },
  {
    "word": "gradual",
    "difficulty": "medium",
    "meaning": "happening slowly over time",
    "sentence": "There was a gradual improvement in her health."
  },
  {
    "word": "occasion",
    "difficulty": "medium",
    "meaning": "a special event or a particular time",
    "sentence": "Birthdays are a joyful occasion."
  },
  {
    "word": "inveterate",
    "difficulty": "hard",
    "meaning": "having a habit or interest deeply fixed",
    "sentence": "He was an inveterate traveler who rarely stayed home."
  },
  {
    "word": "diffident",
    "difficulty": "hard",
    "meaning": "modest and shy; lacking self-confidence",
    "sentence": "The diffident student rarely raised his hand."
  },
  {
    "word": "dour",
    "difficulty": "hard",
    "meaning": "looking gloomy and stern",
    "sentence": "The dour guard never smiled at visitors."
  },
  {
    "word": "morose",
    "difficulty": "hard",
    "meaning": "sullen and ill-tempered; gloomy",
    "sentence": "He was morose for days after his team lost."
  },
  {
    "word": "dispassionate",
    "difficulty": "hard",
    "meaning": "not influenced by emotion; calm and fair",
    "sentence": "A judge must be dispassionate when deciding a case."
  },
  {
    "word": "minimum",
    "difficulty": "medium",
    "meaning": "the least possible amount",
    "sentence": "Eight hours of sleep is the minimum for a child."
  },
  {
    "word": "clamor",
    "difficulty": "hard",
    "meaning": "a loud and confused noise; an urgent demand",
    "sentence": "The crowd's clamor for the encore grew louder."
  },
  {
    "word": "malfeasance",
    "difficulty": "hard",
    "meaning": "wrongdoing by a person in authority",
    "sentence": "The official was charged with financial malfeasance."
  },
  {
    "word": "spurious",
    "difficulty": "hard",
    "meaning": "not genuine or authentic; false",
    "sentence": "The document was found to be a spurious copy."
  },
  {
    "word": "obvious",
    "difficulty": "medium",
    "meaning": "easy to see or understand",
    "sentence": "The answer was obvious once she re-read the question."
  },
  {
    "word": "precocious",
    "difficulty": "hard",
    "meaning": "having skills beyond what is expected for one's age",
    "sentence": "The precocious child was reading full novels at age six."
  },
  {
    "word": "manifest",
    "difficulty": "medium",
    "meaning": "to show or become visible",
    "sentence": "His nerves began to manifest in the shaking of his hands."
  },
  {
    "word": "coherence",
    "difficulty": "medium",
    "meaning": "logical connection between ideas",
    "sentence": "A good essay requires coherence between paragraphs."
  },
  {
    "word": "burden",
    "difficulty": "medium",
    "meaning": "a heavy load or responsibility",
    "sentence": "Carrying the heavy bag was a burden for her."
  },
  {
    "word": "risk",
    "difficulty": "medium",
    "meaning": "the possibility of something bad happening",
    "sentence": "Driving too fast is a risk."
  },
  {
    "word": "zone",
    "difficulty": "medium",
    "meaning": "an area set apart for a particular purpose",
    "sentence": "The school has a quiet zone for reading."
  },
  {
    "word": "censure",
    "difficulty": "hard",
    "meaning": "to strongly disapprove of something",
    "sentence": "The politician faced censure for his rude behavior."
  },
  {
    "word": "forgive",
    "difficulty": "medium",
    "meaning": "to stop being angry with someone",
    "sentence": "She forgave her friend for forgetting her birthday."
  },
  {
    "word": "define",
    "difficulty": "medium",
    "meaning": "to explain the meaning of a word",
    "sentence": "Can you define the word 'enormous'?"
  },
  {
    "word": "improve",
    "difficulty": "medium",
    "meaning": "to make something better",
    "sentence": "She practiced daily to improve her piano skills."
  },
  {
    "word": "misunderstand",
    "difficulty": "medium",
    "meaning": "to get the wrong meaning from something",
    "sentence": "He misunderstood the directions and got lost."
  },
  {
    "word": "accrue",
    "difficulty": "hard",
    "meaning": "to accumulate over time",
    "sentence": "Interest accrues on savings accounts each month."
  },
  {
    "word": "denounce",
    "difficulty": "hard",
    "meaning": "to publicly declare something to be wrong",
    "sentence": "The leader was denounced for his dishonest actions."
  },
  {
    "word": "approach",
    "difficulty": "medium",
    "meaning": "a way of dealing with something",
    "sentence": "A positive approach helps solve problems."
  },
  {
    "word": "describe",
    "difficulty": "medium",
    "meaning": "to tell what something is like",
    "sentence": "Describe the color and shape of the cloud."
  },
  {
    "word": "worthy",
    "difficulty": "medium",
    "meaning": "deserving respect or attention",
    "sentence": "The project was worthy of first prize."
  },
  {
    "word": "abstemious",
    "difficulty": "hard",
    "meaning": "not allowing oneself much food or other pleasures",
    "sentence": "The abstemious monk ate only one meal a day."
  },
  {
    "word": "external",
    "difficulty": "medium",
    "meaning": "coming from outside",
    "sentence": "External noise made it hard to concentrate."
  },
  {
    "word": "indolent",
    "difficulty": "hard",
    "meaning": "avoiding work; lazy",
    "sentence": "The indolent student left all assignments until the last minute."
  },
  {
    "word": "major",
    "difficulty": "medium",
    "meaning": "very important or large",
    "sentence": "The highway was a major road."
  },
  {
    "word": "litigious",
    "difficulty": "hard",
    "meaning": "too ready to take legal action",
    "sentence": "The litigious neighbor sued over every small dispute."
  },
  {
    "word": "disparage",
    "difficulty": "hard",
    "meaning": "to speak about something in a negative way",
    "sentence": "He disparaged his competitor's work unfairly."
  },
  {
    "word": "affect",
    "difficulty": "medium",
    "meaning": "to have an impact on something",
    "sentence": "The rain can affect our picnic plans."
  },
  {
    "word": "positive",
    "difficulty": "medium",
    "meaning": "good; confident; giving encouragement",
    "sentence": "Keep a positive attitude even when things are hard."
  },
  {
    "word": "inculcate",
    "difficulty": "hard",
    "meaning": "to teach by repeated instruction",
    "sentence": "Good habits should be inculcated from an early age."
  },
  {
    "word": "conserve",
    "difficulty": "medium",
    "meaning": "to protect and save something",
    "sentence": "We should conserve water during dry seasons."
  },
  {
    "word": "redoubtable",
    "difficulty": "hard",
    "meaning": "deserving to be feared or respected",
    "sentence": "She was a redoubtable opponent in any debate."
  },
  {
    "word": "enjoyment",
    "difficulty": "medium",
    "meaning": "a feeling of pleasure",
    "sentence": "She found enjoyment in reading mystery books."
  },
  {
    "word": "damage",
    "difficulty": "medium",
    "meaning": "harm caused to something",
    "sentence": "The flood caused damage to many houses."
  },
  {
    "word": "mundane",
    "difficulty": "hard",
    "meaning": "ordinary and not interesting",
    "sentence": "She grew tired of the mundane daily routine."
  },
  {
    "word": "parochial",
    "difficulty": "hard",
    "meaning": "having a limited view restricted to one area",
    "sentence": "His parochial outlook made global issues feel irrelevant."
  },
  {
    "word": "constructive",
    "difficulty": "medium",
    "meaning": "helping to improve something",
    "sentence": "She gave constructive feedback on his drawing."
  },
  {
    "word": "minimize",
    "difficulty": "medium",
    "meaning": "to reduce something to the smallest amount possible",
    "sentence": "Close windows to minimize heat loss."
  },
  {
    "word": "skeptic",
    "difficulty": "hard",
    "meaning": "a person who doubts generally accepted beliefs",
    "sentence": "A healthy skeptic always asks for evidence."
  },
  {
    "word": "loyal",
    "difficulty": "medium",
    "meaning": "faithful and true to someone",
    "sentence": "A loyal friend always keeps your secrets."
  },
  {
    "word": "stoic",
    "difficulty": "hard",
    "meaning": "enduring pain without showing feelings",
    "sentence": "He was stoic in the face of great difficulty."
  },
  {
    "word": "examine",
    "difficulty": "medium",
    "meaning": "to look at something carefully",
    "sentence": "The doctor will examine your throat."
  },
  {
    "word": "ostracize",
    "difficulty": "hard",
    "meaning": "to exclude someone from a group",
    "sentence": "He was ostracized by classmates for his unusual behavior."
  },
  {
    "word": "emerge",
    "difficulty": "medium",
    "meaning": "to come out into the open",
    "sentence": "A butterfly emerged from the cocoon slowly."
  },
  {
    "word": "credulous",
    "difficulty": "hard",
    "meaning": "too willing to believe things",
    "sentence": "The credulous child believed every story she was told."
  },
  {
    "word": "apocryphal",
    "difficulty": "hard",
    "meaning": "of doubtful origin; unlikely to be true",
    "sentence": "That story about the inventor is probably apocryphal."
  },
  {
    "word": "sagacious",
    "difficulty": "hard",
    "meaning": "having good judgment and understanding",
    "sentence": "The sagacious elder offered wise counsel."
  },
  {
    "word": "erode",
    "difficulty": "medium",
    "meaning": "to gradually wear away",
    "sentence": "Waves can erode the rock over many years."
  },
  {
    "word": "partisan",
    "difficulty": "hard",
    "meaning": "strongly supporting a particular group or cause",
    "sentence": "The debate became too partisan to reach agreement."
  },
  {
    "word": "polemical",
    "difficulty": "hard",
    "meaning": "relating to or involving strongly controversial argument",
    "sentence": "The polemical essay provoked intense debate."
  },
  {
    "word": "recall",
    "difficulty": "medium",
    "meaning": "to remember something from the past",
    "sentence": "Can you recall the name of the first chapter?"
  },
  {
    "word": "objective",
    "difficulty": "medium",
    "meaning": "a goal you are working toward; not influenced by feelings",
    "sentence": "Her objective was to finish the marathon."
  },
  {
    "word": "paucity",
    "difficulty": "hard",
    "meaning": "the presence of something in very small amounts",
    "sentence": "There was a paucity of evidence to support the claim."
  },
  {
    "word": "articulate",
    "difficulty": "hard",
    "meaning": "able to express ideas clearly",
    "sentence": "She was articulate and impressive in the debate."
  },
  {
    "word": "devote",
    "difficulty": "medium",
    "meaning": "to give time or energy to something",
    "sentence": "She devoted her weekends to painting."
  },
  {
    "word": "oblivious",
    "difficulty": "hard",
    "meaning": "unaware of what is happening around you",
    "sentence": "She was oblivious to the chaos outside."
  },
  {
    "word": "respect",
    "difficulty": "medium",
    "meaning": "treating someone with care and politeness",
    "sentence": "We should respect people of all backgrounds."
  },
  {
    "word": "animate",
    "difficulty": "hard",
    "meaning": "to give life or energy to something",
    "sentence": "Her enthusiasm animated the entire room."
  },
  {
    "word": "anarchy",
    "difficulty": "hard",
    "meaning": "a situation with no order or control",
    "sentence": "Without laws, there would be complete anarchy."
  },
  {
    "word": "replace",
    "difficulty": "medium",
    "meaning": "to put something new in place of something old",
    "sentence": "Replace the old batteries with new ones."
  },
  {
    "word": "identify",
    "difficulty": "medium",
    "meaning": "to recognize and name something",
    "sentence": "Can you identify the type of bird in the tree?"
  },
  {
    "word": "exemplary",
    "difficulty": "hard",
    "meaning": "serving as a desirable model",
    "sentence": "Her exemplary conduct earned her the top award."
  },
  {
    "word": "useful",
    "difficulty": "medium",
    "meaning": "helping to achieve a purpose",
    "sentence": "A dictionary is a useful book to have."
  },
  {
    "word": "exchange",
    "difficulty": "medium",
    "meaning": "to give something and get something back",
    "sentence": "They exchanged phone numbers at the party."
  },
  {
    "word": "specious",
    "difficulty": "hard",
    "meaning": "superficially plausible but actually wrong",
    "sentence": "The specious argument sounded convincing but was flawed."
  },
  {
    "word": "relate",
    "difficulty": "medium",
    "meaning": "to connect two things together",
    "sentence": "Can you relate this story to your own life?"
  },
  {
    "word": "rigorous",
    "difficulty": "hard",
    "meaning": "extremely thorough and careful",
    "sentence": "The experiment required rigorous testing."
  },
  {
    "word": "organize",
    "difficulty": "medium",
    "meaning": "to arrange things in a neat and logical way",
    "sentence": "Organize your books by subject."
  },
  {
    "word": "pragmatic",
    "difficulty": "hard",
    "meaning": "dealing with things practically and sensibly",
    "sentence": "A pragmatic approach solves real problems quickly."
  },
  {
    "word": "narrow",
    "difficulty": "medium",
    "meaning": "thin; not wide",
    "sentence": "The narrow path was only one person wide."
  },
  {
    "word": "guarantee",
    "difficulty": "medium",
    "meaning": "a promise that something will happen",
    "sentence": "The shop gave a one-year guarantee."
  },
  {
    "word": "jeopardize",
    "difficulty": "medium",
    "meaning": "to put something at risk",
    "sentence": "Don't jeopardize your health by skipping meals."
  },
  {
    "word": "expedient",
    "difficulty": "hard",
    "meaning": "helpful and practical, though possibly not moral",
    "sentence": "It seemed expedient to lie, but honesty was better."
  },
  {
    "word": "lucid",
    "difficulty": "medium",
    "meaning": "clearly expressed and easy to understand",
    "sentence": "Her lucid explanation helped everyone understand."
  },
  {
    "word": "efficient",
    "difficulty": "medium",
    "meaning": "doing something well with little waste",
    "sentence": "An efficient engine uses less fuel."
  },
  {
    "word": "interact",
    "difficulty": "medium",
    "meaning": "to communicate or work together",
    "sentence": "Students interact with teachers every day."
  },
  {
    "word": "tacit",
    "difficulty": "hard",
    "meaning": "understood without being openly stated",
    "sentence": "There was a tacit agreement not to mention the incident."
  },
  {
    "word": "conflagration",
    "difficulty": "hard",
    "meaning": "an extensive and destructive fire",
    "sentence": "The conflagration destroyed the entire warehouse."
  },
  {
    "word": "entity",
    "difficulty": "medium",
    "meaning": "a separate and complete thing",
    "sentence": "A company is a legal entity."
  },
  {
    "word": "respond",
    "difficulty": "medium",
    "meaning": "to give an answer or reaction",
    "sentence": "Please respond to the invitation by Friday."
  },
  {
    "word": "extol",
    "difficulty": "hard",
    "meaning": "to praise enthusiastically",
    "sentence": "The newspaper extolled the bravery of the rescue team."
  },
  {
    "word": "qualify",
    "difficulty": "medium",
    "meaning": "to meet the requirements for something",
    "sentence": "She qualified for the national swimming team."
  },
  {
    "word": "foment",
    "difficulty": "hard",
    "meaning": "to encourage or stir up trouble",
    "sentence": "He tried to foment rebellion among the students."
  },
  {
    "word": "remarkable",
    "difficulty": "medium",
    "meaning": "unusual and worth noticing",
    "sentence": "She had a remarkable ability to remember faces."
  },
  {
    "word": "vicarious",
    "difficulty": "hard",
    "meaning": "experienced through another person's actions",
    "sentence": "She got vicarious excitement from reading adventure books."
  },
  {
    "word": "dominant",
    "difficulty": "medium",
    "meaning": "most powerful, influential, or common",
    "sentence": "Blue was the dominant color in the painting."
  },
  {
    "word": "circumspect",
    "difficulty": "hard",
    "meaning": "careful to consider all possibilities",
    "sentence": "She was circumspect before making any major decision."
  },
  {
    "word": "harness",
    "difficulty": "medium",
    "meaning": "to control and make use of something",
    "sentence": "Scientists want to harness the power of the wind."
  },
  {
    "word": "provident",
    "difficulty": "hard",
    "meaning": "preparing carefully for the future",
    "sentence": "A provident family saves money before they need it."
  },
  {
    "word": "average",
    "difficulty": "medium",
    "meaning": "the typical or normal amount",
    "sentence": "The average temperature in summer is quite warm."
  },
  {
    "word": "superficial",
    "difficulty": "hard",
    "meaning": "dealing only with surface; not deep",
    "sentence": "Her knowledge of the topic was superficial."
  },
  {
    "word": "modify",
    "difficulty": "medium",
    "meaning": "to make small changes to something",
    "sentence": "She modified the recipe by reducing the sugar."
  },
  {
    "word": "anomaly",
    "difficulty": "hard",
    "meaning": "something that deviates from the normal rule",
    "sentence": "The twin moons were a strange anomaly in the solar system."
  },
  {
    "word": "shortage",
    "difficulty": "medium",
    "meaning": "not having enough of something",
    "sentence": "A shortage of teachers affected many schools."
  },
  {
    "word": "evanescent",
    "difficulty": "hard",
    "meaning": "quickly fading or disappearing",
    "sentence": "The morning mist was evanescent, gone by sunrise."
  },
  {
    "word": "unequivocal",
    "difficulty": "hard",
    "meaning": "leaving no doubt; completely clear",
    "sentence": "Her unequivocal 'yes' meant there was no confusion."
  },
  {
    "word": "tendentious",
    "difficulty": "hard",
    "meaning": "promoting a particular point of view; biased",
    "sentence": "The documentary was too tendentious to be truly balanced."
  },
  {
    "word": "zealous",
    "difficulty": "hard",
    "meaning": "having great energy or enthusiasm for a cause",
    "sentence": "She was zealous in her campaign to protect the forest."
  },
  {
    "word": "haughty",
    "difficulty": "hard",
    "meaning": "having a proud and superior attitude",
    "sentence": "The haughty student refused to listen to his peers."
  },
  {
    "word": "recondite",
    "difficulty": "hard",
    "meaning": "not known by many people; obscure",
    "sentence": "The recondite subject attracted very few students."
  },
  {
    "word": "emphasize",
    "difficulty": "medium",
    "meaning": "to give special importance to something",
    "sentence": "She emphasized the importance of kindness."
  },
  {
    "word": "sanctify",
    "difficulty": "hard",
    "meaning": "to make something holy or acceptable",
    "sentence": "The ceremony was held to sanctify the new building."
  },
  {
    "word": "aggravate",
    "difficulty": "medium",
    "meaning": "to make a problem or feeling worse",
    "sentence": "Scratching an insect bite will only aggravate it."
  },
  {
    "word": "culpable",
    "difficulty": "hard",
    "meaning": "deserving blame for doing something wrong",
    "sentence": "He was culpable for the damage caused by his carelessness."
  },
  {
    "word": "effusive",
    "difficulty": "hard",
    "meaning": "expressing feelings in an excessive way",
    "sentence": "She was effusive in her praise for the painting."
  },
  {
    "word": "iniquity",
    "difficulty": "hard",
    "meaning": "immoral or grossly unfair behavior",
    "sentence": "The campaign fought against social iniquity."
  },
  {
    "word": "delay",
    "difficulty": "medium",
    "meaning": "to make something happen later",
    "sentence": "Heavy snow caused a delay in the flight."
  },
  {
    "word": "inquisitive",
    "difficulty": "hard",
    "meaning": "having a strong desire to learn; asking many questions",
    "sentence": "An inquisitive child asks 'why?' constantly."
  },
  {
    "word": "expect",
    "difficulty": "medium",
    "meaning": "to think something will happen",
    "sentence": "We expect rain tomorrow afternoon."
  },
  {
    "word": "equitable",
    "difficulty": "hard",
    "meaning": "fair and impartial for all parties",
    "sentence": "An equitable solution satisfies everyone."
  },
  {
    "word": "caution",
    "difficulty": "medium",
    "meaning": "care taken to avoid danger",
    "sentence": "We must use caution near the edge of the cliff."
  },
  {
    "word": "consent",
    "difficulty": "medium",
    "meaning": "permission for something to happen",
    "sentence": "You need parental consent for the trip."
  },
  {
    "word": "adventitious",
    "difficulty": "hard",
    "meaning": "happening by chance rather than by design",
    "sentence": "The adventitious discovery led to a major invention."
  },
  {
    "word": "voluble",
    "difficulty": "hard",
    "meaning": "talking fluently and at length",
    "sentence": "The voluble guide kept the tourists entertained for hours."
  },
  {
    "word": "malicious",
    "difficulty": "hard",
    "meaning": "having the intention to harm others",
    "sentence": "The malicious rumor spread quickly through the school."
  },
  {
    "word": "cheerful",
    "difficulty": "medium",
    "meaning": "happy and in a good mood",
    "sentence": "The cheerful puppy wagged its tail."
  },
  {
    "word": "incontrovertible",
    "difficulty": "hard",
    "meaning": "not able to be denied or disputed",
    "sentence": "The video was incontrovertible evidence."
  },
  {
    "word": "enmity",
    "difficulty": "hard",
    "meaning": "a state of deep hostility",
    "sentence": "The enmity between the two clans lasted generations."
  },
  {
    "word": "consequence",
    "difficulty": "medium",
    "meaning": "a result of an action",
    "sentence": "Being late had consequences for the team."
  },
  {
    "word": "balance",
    "difficulty": "medium",
    "meaning": "a state where two sides are equal",
    "sentence": "She kept her balance while walking on the log."
  },
  {
    "word": "transgress",
    "difficulty": "hard",
    "meaning": "to go beyond acceptable limits; to sin",
    "sentence": "To transgress the rules was to risk expulsion."
  },
  {
    "word": "salient",
    "difficulty": "hard",
    "meaning": "most noticeable or important",
    "sentence": "The salient point in the essay was well stated."
  },
  {
    "word": "fruitful",
    "difficulty": "medium",
    "meaning": "producing good results",
    "sentence": "Their meeting was fruitful and led to a great plan."
  },
  {
    "word": "launch",
    "difficulty": "medium",
    "meaning": "to send something out or start something",
    "sentence": "The rocket launched into space at dawn."
  },
  {
    "word": "strength",
    "difficulty": "medium",
    "meaning": "the quality of being strong",
    "sentence": "Regular exercise builds physical strength."
  },
  {
    "word": "penchant",
    "difficulty": "hard",
    "meaning": "a strong tendency or liking for something",
    "sentence": "She had a penchant for solving complicated puzzles."
  },
  {
    "word": "prescient",
    "difficulty": "hard",
    "meaning": "having knowledge of future events",
    "sentence": "Her prescient warning proved correct a year later."
  },
  {
    "word": "adversity",
    "difficulty": "medium",
    "meaning": "a difficult or unpleasant situation",
    "sentence": "She showed great courage in the face of adversity."
  },
  {
    "word": "unite",
    "difficulty": "medium",
    "meaning": "to join together as one",
    "sentence": "The community united to rebuild the flooded town."
  },
  {
    "word": "incorporate",
    "difficulty": "medium",
    "meaning": "to include something as part of a whole",
    "sentence": "She incorporated new vocabulary into her writing."
  },
  {
    "word": "filibuster",
    "difficulty": "hard",
    "meaning": "a tactic to delay a vote by talking for a long time",
    "sentence": "The senator used a filibuster to delay the new law."
  },
  {
    "word": "minor",
    "difficulty": "medium",
    "meaning": "small and not very important",
    "sentence": "It was only a minor mistake."
  },
  {
    "word": "diffuse",
    "difficulty": "hard",
    "meaning": "to spread widely; not concentrated",
    "sentence": "The light was diffuse, casting soft shadows everywhere."
  },
  {
    "word": "zeal",
    "difficulty": "hard",
    "meaning": "great energy and enthusiasm for a cause",
    "sentence": "She approached every task with remarkable zeal."
  },
  {
    "word": "vituperate",
    "difficulty": "hard",
    "meaning": "to blame or insult someone violently",
    "sentence": "He vituperated against those who had wronged him."
  },
  {
    "word": "strident",
    "difficulty": "hard",
    "meaning": "loud and harsh; insistently forceful",
    "sentence": "Her strident demands irritated the whole committee."
  },
  {
    "word": "sensitive",
    "difficulty": "medium",
    "meaning": "aware of and affected by other people's feelings",
    "sentence": "Be sensitive to how others might feel."
  },
  {
    "word": "felicitous",
    "difficulty": "hard",
    "meaning": "well-chosen and apt; very pleasing",
    "sentence": "The author made a felicitous choice of words."
  },
  {
    "word": "expunge",
    "difficulty": "hard",
    "meaning": "to erase or remove completely",
    "sentence": "She asked the court to expunge her record."
  },
  {
    "word": "consider",
    "difficulty": "medium",
    "meaning": "to think carefully about something",
    "sentence": "Consider all the options before choosing."
  },
  {
    "word": "meticulous",
    "difficulty": "hard",
    "meaning": "very careful about small details",
    "sentence": "The meticulous scientist recorded every observation."
  },
  {
    "word": "rescue",
    "difficulty": "medium",
    "meaning": "to save someone from danger",
    "sentence": "The lifeguard rescued the swimmer."
  },
  {
    "word": "appropriate",
    "difficulty": "medium",
    "meaning": "suitable for the situation",
    "sentence": "Wear appropriate clothing for cold weather."
  },
  {
    "word": "extraneous",
    "difficulty": "hard",
    "meaning": "not directly related to the subject",
    "sentence": "Remove all extraneous information from the report."
  },
  {
    "word": "temporary",
    "difficulty": "medium",
    "meaning": "lasting for only a short time",
    "sentence": "The repair was just a temporary fix."
  },
  {
    "word": "urban",
    "difficulty": "medium",
    "meaning": "relating to a city or town",
    "sentence": "Urban areas often have more shops and transport."
  },
  {
    "word": "acumen",
    "difficulty": "hard",
    "meaning": "the ability to make good judgments",
    "sentence": "Her business acumen helped the company grow rapidly."
  },
  {
    "word": "subversive",
    "difficulty": "hard",
    "meaning": "seeking to undermine authority secretly",
    "sentence": "The subversive group plotted against the government."
  },
  {
    "word": "dissonance",
    "difficulty": "hard",
    "meaning": "a lack of harmony or agreement",
    "sentence": "There was a dissonance between what he said and what he did."
  },
  {
    "word": "peculiar",
    "difficulty": "medium",
    "meaning": "strange and unusual",
    "sentence": "The cat had a peculiar habit of sleeping upside down."
  },
  {
    "word": "solution",
    "difficulty": "medium",
    "meaning": "an answer to a problem",
    "sentence": "They found a solution to the water shortage."
  },
  {
    "word": "distinct",
    "difficulty": "medium",
    "meaning": "easy to tell apart; noticeably different",
    "sentence": "The twins have distinct personalities."
  },
  {
    "word": "transient",
    "difficulty": "hard",
    "meaning": "lasting only for a short time",
    "sentence": "Her pain was transient and disappeared quickly."
  },
  {
    "word": "governance",
    "difficulty": "medium",
    "meaning": "the way a group or country is managed",
    "sentence": "Good governance requires transparency."
  },
  {
    "word": "variegated",
    "difficulty": "hard",
    "meaning": "having varied colors; diverse",
    "sentence": "The variegated leaves made the garden beautiful."
  },
  {
    "word": "presumptuous",
    "difficulty": "hard",
    "meaning": "overstepping proper boundaries of respect",
    "sentence": "It was presumptuous to assume the seat was free."
  },
  {
    "word": "ameliorate",
    "difficulty": "hard",
    "meaning": "to make something bad better",
    "sentence": "New medicine can ameliorate the symptoms of the disease."
  },
  {
    "word": "acrimony",
    "difficulty": "hard",
    "meaning": "bitter or sharp-tongued manner",
    "sentence": "The meeting ended in acrimony when both sides refused to agree."
  },
  {
    "word": "sardonic",
    "difficulty": "hard",
    "meaning": "mocking with cynical humor",
    "sentence": "His sardonic comment made the audience laugh nervously."
  },
  {
    "word": "isolate",
    "difficulty": "medium",
    "meaning": "to separate from others",
    "sentence": "The sick patient was isolated to stop infection."
  },
  {
    "word": "responsible",
    "difficulty": "medium",
    "meaning": "having a duty to take care of something",
    "sentence": "She is responsible for feeding the cat."
  },
  {
    "word": "virulent",
    "difficulty": "hard",
    "meaning": "extremely severe and harmful",
    "sentence": "The virulent disease spread rapidly through the town."
  },
  {
    "word": "progress",
    "difficulty": "medium",
    "meaning": "moving toward a goal or improvement",
    "sentence": "She made great progress in learning Spanish."
  },
  {
    "word": "overwrought",
    "difficulty": "hard",
    "meaning": "extremely nervous and agitated",
    "sentence": "She was overwrought with worry after the bad news."
  },
  {
    "word": "eloquent",
    "difficulty": "hard",
    "meaning": "fluent and persuasive in speaking or writing",
    "sentence": "The eloquent speech moved the audience to tears."
  },
  {
    "word": "voracious",
    "difficulty": "hard",
    "meaning": "eating or consuming enormous amounts",
    "sentence": "The voracious reader finished three books a week."
  },
  {
    "word": "adjacent",
    "difficulty": "medium",
    "meaning": "next to or close to something",
    "sentence": "The school is adjacent to the park."
  },
  {
    "word": "estimate",
    "difficulty": "medium",
    "meaning": "to make a rough guess about a number",
    "sentence": "We estimate about fifty people were at the party."
  },
  {
    "word": "laconic",
    "difficulty": "hard",
    "meaning": "using very few words",
    "sentence": "He gave a laconic reply: just 'No.'"
  },
  {
    "word": "principle",
    "difficulty": "medium",
    "meaning": "a basic rule or belief",
    "sentence": "Honesty is an important principle."
  },
  {
    "word": "oscillate",
    "difficulty": "hard",
    "meaning": "to move or swing back and forth",
    "sentence": "The pendulum oscillated steadily in the clock."
  },
  {
    "word": "obtuse",
    "difficulty": "hard",
    "meaning": "slow to understand; not sharp or pointed",
    "sentence": "She was frustrated by his obtuse response."
  },
  {
    "word": "clue",
    "difficulty": "medium",
    "meaning": "a piece of information that helps solve a mystery",
    "sentence": "The detective found an important clue."
  },
  {
    "word": "proliferate",
    "difficulty": "hard",
    "meaning": "to increase rapidly in number",
    "sentence": "New ideas proliferate in a creative environment."
  },
  {
    "word": "precarious",
    "difficulty": "hard",
    "meaning": "not safe or secure; dependent on chance",
    "sentence": "The hiker was in a precarious position on the ledge."
  },
  {
    "word": "jurisdiction",
    "difficulty": "medium",
    "meaning": "the official authority over an area",
    "sentence": "The police have jurisdiction over local crimes."
  },
  {
    "word": "energy",
    "difficulty": "medium",
    "meaning": "the power to do work or be active",
    "sentence": "Breakfast gives us energy for the day."
  },
  {
    "word": "monitor",
    "difficulty": "medium",
    "meaning": "to watch and check progress over time",
    "sentence": "The teacher monitored each student's growth."
  },
  {
    "word": "young",
    "difficulty": "medium",
    "meaning": "not old; in an early stage of life",
    "sentence": "The young puppy was just eight weeks old."
  },
  {
    "word": "select",
    "difficulty": "medium",
    "meaning": "to choose something from a group",
    "sentence": "Select the correct answer from the list."
  },
  {
    "word": "innocent",
    "difficulty": "medium",
    "meaning": "not guilty; not having done wrong",
    "sentence": "The puppy had an innocent look on its face."
  },
  {
    "word": "compromise",
    "difficulty": "medium",
    "meaning": "a settlement where both sides give a little",
    "sentence": "The two friends reached a compromise on the game rules."
  },
  {
    "word": "divulge",
    "difficulty": "hard",
    "meaning": "to make secret information known",
    "sentence": "She refused to divulge the name of her source."
  },
  {
    "word": "vicissitude",
    "difficulty": "hard",
    "meaning": "a change of circumstances or fortune",
    "sentence": "The vicissitudes of life taught her resilience."
  },
  {
    "word": "verify",
    "difficulty": "medium",
    "meaning": "to check that something is true",
    "sentence": "Please verify your email address."
  },
  {
    "word": "situation",
    "difficulty": "medium",
    "meaning": "the conditions around an event",
    "sentence": "The rescue team assessed the situation quickly."
  },
  {
    "word": "irrelevant",
    "difficulty": "hard",
    "meaning": "not connected to the matter being considered",
    "sentence": "The argument about the weather was irrelevant to the debate."
  },
  {
    "word": "treasure",
    "difficulty": "medium",
    "meaning": "something very valuable",
    "sentence": "The chest was filled with golden treasure."
  },
  {
    "word": "clarity",
    "difficulty": "medium",
    "meaning": "the quality of being clear and easy to understand",
    "sentence": "She explained the idea with great clarity."
  },
  {
    "word": "defend",
    "difficulty": "medium",
    "meaning": "to protect from attack or harm",
    "sentence": "A lawyer defends their client in court."
  },
  {
    "word": "contradict",
    "difficulty": "medium",
    "meaning": "to say the opposite of what someone else said",
    "sentence": "His actions contradicted his words."
  },
  {
    "word": "confront",
    "difficulty": "medium",
    "meaning": "to face a difficult situation directly",
    "sentence": "She chose to confront the bully calmly."
  },
  {
    "word": "latent",
    "difficulty": "hard",
    "meaning": "hidden and not yet active",
    "sentence": "The city had latent potential for development."
  },
  {
    "word": "custom",
    "difficulty": "medium",
    "meaning": "a traditional way of doing something",
    "sentence": "It is a custom to bow when greeting in Japan."
  },
  {
    "word": "resolve",
    "difficulty": "medium",
    "meaning": "to find a solution to a problem",
    "sentence": "They resolved the disagreement peacefully."
  },
  {
    "word": "exquisite",
    "difficulty": "hard",
    "meaning": "extremely beautiful and delicate",
    "sentence": "The artist created an exquisite miniature painting."
  },
  {
    "word": "sincere",
    "difficulty": "medium",
    "meaning": "genuinely feeling or meaning what you say",
    "sentence": "She gave a sincere apology for being late."
  },
  {
    "word": "remedy",
    "difficulty": "medium",
    "meaning": "a solution or treatment",
    "sentence": "Honey and lemon is a remedy for a sore throat."
  },
  {
    "word": "resilient",
    "difficulty": "hard",
    "meaning": "able to recover quickly from difficulties",
    "sentence": "The resilient community rebuilt after the tornado."
  },
  {
    "word": "expand",
    "difficulty": "medium",
    "meaning": "to grow or make larger",
    "sentence": "The balloon expanded as air was blown into it."
  },
  {
    "word": "reputation",
    "difficulty": "medium",
    "meaning": "the opinion others have of you",
    "sentence": "He has a reputation for being helpful."
  },
  {
    "word": "punctual",
    "difficulty": "medium",
    "meaning": "arriving at the right time; not late",
    "sentence": "She is always punctual for her lessons."
  },
  {
    "word": "vitiate",
    "difficulty": "hard",
    "meaning": "to spoil or reduce the quality of something",
    "sentence": "One bad apple can vitiate the mood of the whole group."
  },
  {
    "word": "charity",
    "difficulty": "medium",
    "meaning": "giving help to those who need it",
    "sentence": "She donated old toys to charity."
  },
  {
    "word": "abject",
    "difficulty": "hard",
    "meaning": "of the worst and most hopeless kind",
    "sentence": "The refugees lived in abject poverty."
  },
  {
    "word": "allegiance",
    "difficulty": "medium",
    "meaning": "loyalty and commitment to a group",
    "sentence": "She swore allegiance to her country."
  },
  {
    "word": "wonder",
    "difficulty": "medium",
    "meaning": "to feel curious about something",
    "sentence": "She often wonders about life on other planets."
  },
  {
    "word": "pervasive",
    "difficulty": "hard",
    "meaning": "spreading widely throughout something",
    "sentence": "Social media has become pervasive in modern life."
  },
  {
    "word": "investigate",
    "difficulty": "medium",
    "meaning": "to search for facts to find the truth",
    "sentence": "Detectives investigate crime scenes."
  },
  {
    "word": "serious",
    "difficulty": "medium",
    "meaning": "not funny; important and needing attention",
    "sentence": "This is a serious situation — pay attention."
  },
  {
    "word": "digress",
    "difficulty": "hard",
    "meaning": "to go off the main topic in speech",
    "sentence": "He digressed so much that we forgot the original question."
  },
  {
    "word": "sufficient",
    "difficulty": "medium",
    "meaning": "enough for a particular purpose",
    "sentence": "She had sufficient time to complete the task."
  },
  {
    "word": "platitude",
    "difficulty": "hard",
    "meaning": "a remark that sounds meaningful but is not original",
    "sentence": "'Everything happens for a reason' is a common platitude."
  },
  {
    "word": "animosity",
    "difficulty": "hard",
    "meaning": "strong hostility toward someone",
    "sentence": "The rivals were known for their deep animosity."
  },
  {
    "word": "majority",
    "difficulty": "medium",
    "meaning": "more than half of a group",
    "sentence": "The majority of students voted for the new rule."
  },
  {
    "word": "convivial",
    "difficulty": "hard",
    "meaning": "friendly and lively; relating to feasting",
    "sentence": "The party had a convivial atmosphere."
  },
  {
    "word": "verisimilitude",
    "difficulty": "hard",
    "meaning": "the appearance of being true or real",
    "sentence": "The novel's verisimilitude made readers feel they were there."
  },
  {
    "word": "plausible",
    "difficulty": "hard",
    "meaning": "seeming reasonable and likely to be true",
    "sentence": "Her explanation was plausible given the facts."
  },
  {
    "word": "memorize",
    "difficulty": "medium",
    "meaning": "to learn something so you can remember it exactly",
    "sentence": "Memorize the poem for tomorrow's class."
  },
  {
    "word": "motive",
    "difficulty": "medium",
    "meaning": "the reason for doing something",
    "sentence": "What was the thief's motive?"
  },
  {
    "word": "enterprise",
    "difficulty": "medium",
    "meaning": "a project or business venture",
    "sentence": "Starting a lemonade stand was her first enterprise."
  },
  {
    "word": "equip",
    "difficulty": "medium",
    "meaning": "to provide with tools needed for a task",
    "sentence": "The kit was equipped with first-aid supplies."
  },
  {
    "word": "vibrant",
    "difficulty": "medium",
    "meaning": "full of life and energy",
    "sentence": "The vibrant market was full of color and noise."
  },
  {
    "word": "absurd",
    "difficulty": "medium",
    "meaning": "completely ridiculous and unreasonable",
    "sentence": "It was absurd to wear a raincoat on a sunny day."
  },
  {
    "word": "experience",
    "difficulty": "medium",
    "meaning": "something that happens to you; knowledge gained",
    "sentence": "Traveling is a wonderful experience."
  },
  {
    "word": "oblique",
    "difficulty": "hard",
    "meaning": "not direct or clear; at an angle",
    "sentence": "He gave an oblique answer that avoided the real question."
  },
  {
    "word": "spoliation",
    "difficulty": "hard",
    "meaning": "the act of ruining or destroying something",
    "sentence": "The spoliation of ancient artifacts is a cultural crime."
  },
  {
    "word": "sedition",
    "difficulty": "hard",
    "meaning": "words or actions encouraging rebellion against authority",
    "sentence": "He was charged with sedition for his fiery speech."
  },
  {
    "word": "steadfast",
    "difficulty": "hard",
    "meaning": "very loyal and committed",
    "sentence": "She was steadfast in her support of her friend."
  },
  {
    "word": "obdurate",
    "difficulty": "hard",
    "meaning": "stubbornly refusing to change",
    "sentence": "The obdurate official refused any compromise."
  },
  {
    "word": "categorical",
    "difficulty": "hard",
    "meaning": "absolute; without any doubt",
    "sentence": "He gave a categorical denial of the accusations."
  },
  {
    "word": "preeminent",
    "difficulty": "hard",
    "meaning": "surpassing all others; outstanding",
    "sentence": "She is the preeminent expert on ancient languages."
  },
  {
    "word": "imply",
    "difficulty": "medium",
    "meaning": "to suggest something without saying it directly",
    "sentence": "Her silence implied she was upset."
  },
  {
    "word": "mitigate",
    "difficulty": "hard",
    "meaning": "to make something less harmful or severe",
    "sentence": "Wearing a helmet can mitigate head injuries."
  },
  {
    "word": "antithesis",
    "difficulty": "hard",
    "meaning": "the direct opposite of something",
    "sentence": "War is the antithesis of peace."
  },
  {
    "word": "discrepancy",
    "difficulty": "medium",
    "meaning": "a difference between two things that should be the same",
    "sentence": "There was a discrepancy in the two accounts."
  },
  {
    "word": "solicitous",
    "difficulty": "hard",
    "meaning": "showing care or concern for someone",
    "sentence": "She was solicitous about the injured bird."
  },
  {
    "word": "anachronism",
    "difficulty": "hard",
    "meaning": "something out of place in time",
    "sentence": "Wearing a suit of armor today would be an anachronism."
  },
  {
    "word": "defeat",
    "difficulty": "medium",
    "meaning": "to beat someone in a contest",
    "sentence": "Our team defeated the other school in chess."
  },
  {
    "word": "anticipate",
    "difficulty": "medium",
    "meaning": "to expect or look forward to something",
    "sentence": "She anticipated winning the prize."
  },
  {
    "word": "require",
    "difficulty": "medium",
    "meaning": "to need something",
    "sentence": "This recipe requires three eggs."
  },
  {
    "word": "preposterous",
    "difficulty": "hard",
    "meaning": "absurd and utterly foolish",
    "sentence": "It is preposterous to think that pigs can fly."
  },
  {
    "word": "annihilate",
    "difficulty": "hard",
    "meaning": "to completely destroy something",
    "sentence": "A massive asteroid could annihilate all life."
  },
  {
    "word": "discover",
    "difficulty": "medium",
    "meaning": "to find or learn something new",
    "sentence": "Scientists discovered a new species of fish."
  },
  {
    "word": "provide",
    "difficulty": "medium",
    "meaning": "to give something that is needed",
    "sentence": "The shop provides free bags with every purchase."
  },
  {
    "word": "adroit",
    "difficulty": "hard",
    "meaning": "clever and skillful in using hands or mind",
    "sentence": "The adroit pianist played the complex piece perfectly."
  },
  {
    "word": "society",
    "difficulty": "medium",
    "meaning": "a group of people living together",
    "sentence": "We all have a role to play in society."
  },
  {
    "word": "criteria",
    "difficulty": "medium",
    "meaning": "the standards used to judge or decide something",
    "sentence": "The judges outlined the criteria for the competition."
  },
  {
    "word": "cryptic",
    "difficulty": "hard",
    "meaning": "having a hidden meaning; mysterious",
    "sentence": "The spy sent a cryptic message no one could decode."
  },
  {
    "word": "reasonable",
    "difficulty": "medium",
    "meaning": "fair and sensible",
    "sentence": "She made a reasonable request for more time."
  },
  {
    "word": "catalyst",
    "difficulty": "medium",
    "meaning": "something that causes change",
    "sentence": "The new law acted as a catalyst for reform."
  },
  {
    "word": "mutable",
    "difficulty": "hard",
    "meaning": "liable to change",
    "sentence": "Human fashion is mutable, changing with every decade."
  },
  {
    "word": "assist",
    "difficulty": "medium",
    "meaning": "to help someone",
    "sentence": "The librarian will assist you in finding the book."
  },
  {
    "word": "gainsay",
    "difficulty": "hard",
    "meaning": "to deny or contradict something",
    "sentence": "No one could gainsay the scientist's evidence."
  },
  {
    "word": "mobilize",
    "difficulty": "medium",
    "meaning": "to organize people or resources for action",
    "sentence": "The charity mobilized volunteers after the flood."
  },
  {
    "word": "liberty",
    "difficulty": "medium",
    "meaning": "the freedom to live as you choose",
    "sentence": "Every person deserves liberty and fairness."
  },
  {
    "word": "sequence",
    "difficulty": "medium",
    "meaning": "a series of things in a particular order",
    "sentence": "Follow the sequence of steps to solve the puzzle."
  },
  {
    "word": "convey",
    "difficulty": "medium",
    "meaning": "to communicate or express something",
    "sentence": "She used gestures to convey her meaning."
  },
  {
    "word": "interminable",
    "difficulty": "hard",
    "meaning": "without end; seeming to last forever",
    "sentence": "The interminable speech seemed to last for hours."
  },
  {
    "word": "irony",
    "difficulty": "hard",
    "meaning": "a situation opposite to what was expected",
    "sentence": "It was an irony that the firefighter's house burned down."
  },
  {
    "word": "disposition",
    "difficulty": "medium",
    "meaning": "a person's natural qualities or tendencies",
    "sentence": "She had a cheerful disposition that brightened the room."
  },
  {
    "word": "salutary",
    "difficulty": "hard",
    "meaning": "producing good effects; improving",
    "sentence": "The experience was salutary and taught him humility."
  },
  {
    "word": "collaborate",
    "difficulty": "medium",
    "meaning": "to work together on something",
    "sentence": "Students collaborated on the science project."
  },
  {
    "word": "garrulity",
    "difficulty": "hard",
    "meaning": "the tendency to talk too much",
    "sentence": "His garrulity made meetings run far too long."
  },
  {
    "word": "succeed",
    "difficulty": "medium",
    "meaning": "to achieve what you were trying to do",
    "sentence": "She worked hard and succeeded in passing the exam."
  },
  {
    "word": "dauntless",
    "difficulty": "hard",
    "meaning": "fearlessly determined",
    "sentence": "The dauntless explorer entered the dense jungle alone."
  },
  {
    "word": "venal",
    "difficulty": "hard",
    "meaning": "willing to act dishonestly in exchange for money",
    "sentence": "The venal official accepted bribes freely."
  },
  {
    "word": "impede",
    "difficulty": "hard",
    "meaning": "to delay or block progress",
    "sentence": "The fallen tree impeded traffic on the road."
  },
  {
    "word": "available",
    "difficulty": "medium",
    "meaning": "free to be used; not busy",
    "sentence": "Is this seat available?"
  },
  {
    "word": "patient",
    "difficulty": "medium",
    "meaning": "able to wait calmly",
    "sentence": "Be patient — the food will be ready soon."
  },
  {
    "word": "attest",
    "difficulty": "medium",
    "meaning": "to provide proof of something",
    "sentence": "His medals attest to his hard work."
  },
  {
    "word": "dissent",
    "difficulty": "hard",
    "meaning": "to hold or express a different opinion",
    "sentence": "One committee member dissented from the majority vote."
  },
  {
    "word": "fallacious",
    "difficulty": "hard",
    "meaning": "based on a mistaken belief; misleading",
    "sentence": "His argument was fallacious and easy to disprove."
  },
  {
    "word": "fervent",
    "difficulty": "hard",
    "meaning": "having or showing great passion",
    "sentence": "She was fervent in her desire to protect wildlife."
  },
  {
    "word": "courage",
    "difficulty": "medium",
    "meaning": "the ability to face danger or fear",
    "sentence": "It takes courage to speak in front of the class."
  },
  {
    "word": "yearn",
    "difficulty": "medium",
    "meaning": "to feel a deep desire for something",
    "sentence": "She yearned to see the ocean for the first time."
  },
  {
    "word": "inept",
    "difficulty": "hard",
    "meaning": "not skilled or not sensible",
    "sentence": "The inept driver misjudged the turning."
  },
  {
    "word": "capricious",
    "difficulty": "hard",
    "meaning": "changing mood or behavior suddenly",
    "sentence": "The capricious weather shifted from sun to snow in an hour."
  },
  {
    "word": "despondent",
    "difficulty": "hard",
    "meaning": "very unhappy and without hope",
    "sentence": "She felt despondent after failing the audition."
  },
  {
    "word": "proportion",
    "difficulty": "medium",
    "meaning": "a part or share of a whole",
    "sentence": "A large proportion of the class passed the test."
  },
  {
    "word": "explore",
    "difficulty": "medium",
    "meaning": "to travel and discover new places",
    "sentence": "The children explored the forest."
  },
  {
    "word": "rural",
    "difficulty": "medium",
    "meaning": "relating to the countryside",
    "sentence": "She grew up in a rural village with lots of farms."
  },
  {
    "word": "avaricious",
    "difficulty": "hard",
    "meaning": "having an extreme desire to gain wealth",
    "sentence": "The avaricious merchant overcharged every customer."
  },
  {
    "word": "flexible",
    "difficulty": "medium",
    "meaning": "able to bend; willing to change",
    "sentence": "A rubber band is very flexible."
  },
  {
    "word": "capture",
    "difficulty": "medium",
    "meaning": "to catch and hold something",
    "sentence": "The spider captured the fly in its web."
  },
  {
    "word": "plethora",
    "difficulty": "hard",
    "meaning": "a large or excessive amount",
    "sentence": "There is a plethora of apps designed to improve learning."
  },
  {
    "word": "allocate",
    "difficulty": "medium",
    "meaning": "to give a share of something to someone",
    "sentence": "The teacher allocated time for each group."
  },
  {
    "word": "phlegmatic",
    "difficulty": "hard",
    "meaning": "calmly self-possessed and not easily excited",
    "sentence": "His phlegmatic personality suited the stressful job."
  },
  {
    "word": "contentment",
    "difficulty": "medium",
    "meaning": "a feeling of satisfaction and ease",
    "sentence": "She felt deep contentment sitting by the lake."
  },
  {
    "word": "insouciant",
    "difficulty": "hard",
    "meaning": "casual and showing no concern",
    "sentence": "She answered the hard question with insouciant ease."
  },
  {
    "word": "lethargic",
    "difficulty": "hard",
    "meaning": "lacking energy; sluggish",
    "sentence": "He felt lethargic after sleeping too long."
  },
  {
    "word": "compelling",
    "difficulty": "medium",
    "meaning": "very interesting and persuasive",
    "sentence": "She made a compelling argument for a longer recess."
  },
  {
    "word": "quality",
    "difficulty": "medium",
    "meaning": "how good something is",
    "sentence": "They only sell products of the highest quality."
  },
  {
    "word": "disparity",
    "difficulty": "hard",
    "meaning": "a great difference or inequality",
    "sentence": "There is a large disparity between rich and poor areas."
  },
  {
    "word": "ambivalent",
    "difficulty": "hard",
    "meaning": "having mixed feelings about something",
    "sentence": "She felt ambivalent about moving to a new city."
  },
  {
    "word": "anecdote",
    "difficulty": "hard",
    "meaning": "a short story about a real event",
    "sentence": "He shared an amusing anecdote from his childhood."
  },
  {
    "word": "assiduous",
    "difficulty": "hard",
    "meaning": "showing great care and thoroughness",
    "sentence": "The assiduous student read every book on the list."
  },
  {
    "word": "extract",
    "difficulty": "medium",
    "meaning": "to take something out",
    "sentence": "The dentist had to extract the damaged tooth."
  },
  {
    "word": "antagonist",
    "difficulty": "hard",
    "meaning": "a person who opposes or is hostile to another",
    "sentence": "The villain is the antagonist in the story."
  },
  {
    "word": "familiar",
    "difficulty": "medium",
    "meaning": "well known or recognized",
    "sentence": "The song sounded familiar to everyone."
  },
  {
    "word": "umbrage",
    "difficulty": "hard",
    "meaning": "offense or annoyance",
    "sentence": "She took umbrage at the suggestion she had cheated."
  },
  {
    "word": "solemnity",
    "difficulty": "hard",
    "meaning": "the quality of being serious and dignified",
    "sentence": "The award was presented with great solemnity."
  },
  {
    "word": "obtain",
    "difficulty": "medium",
    "meaning": "to get or receive something",
    "sentence": "She obtained a library card."
  },
  {
    "word": "repudiate",
    "difficulty": "hard",
    "meaning": "to refuse to accept or to deny the truth of something",
    "sentence": "He repudiated the false accusations made against him."
  },
  {
    "word": "talent",
    "difficulty": "medium",
    "meaning": "a natural ability to do something well",
    "sentence": "She has a talent for playing the violin."
  },
  {
    "word": "function",
    "difficulty": "medium",
    "meaning": "the purpose or job of something",
    "sentence": "The function of a heart is to pump blood."
  },
  {
    "word": "lament",
    "difficulty": "hard",
    "meaning": "to feel or express deep regret or sorrow",
    "sentence": "She lamented the loss of her favorite book."
  },
  {
    "word": "duplicity",
    "difficulty": "hard",
    "meaning": "deceitful behavior; saying one thing and doing another",
    "sentence": "His duplicity was revealed when the truth came out."
  },
  {
    "word": "propitious",
    "difficulty": "hard",
    "meaning": "showing signs of good things to come",
    "sentence": "The sunny morning seemed propitious for the hike."
  },
  {
    "word": "decide",
    "difficulty": "medium",
    "meaning": "to make a choice after thinking",
    "sentence": "She decided to take the bus instead of walking."
  },
  {
    "word": "notice",
    "difficulty": "medium",
    "meaning": "to become aware of something",
    "sentence": "Did you notice the new painting on the wall?"
  },
  {
    "word": "establish",
    "difficulty": "medium",
    "meaning": "to set up or create something permanent",
    "sentence": "They established a new school in the village."
  },
  {
    "word": "withstand",
    "difficulty": "medium",
    "meaning": "to remain strong despite difficulty",
    "sentence": "The old bridge withstood the flood."
  },
  {
    "word": "mention",
    "difficulty": "medium",
    "meaning": "to briefly talk about something",
    "sentence": "She mentioned that she loves drawing."
  },
  {
    "word": "abdicate",
    "difficulty": "hard",
    "meaning": "to give up a position of power or responsibility",
    "sentence": "The king decided to abdicate his throne."
  },
  {
    "word": "ostentatious",
    "difficulty": "hard",
    "meaning": "displaying wealth to impress others",
    "sentence": "Her ostentatious jewelry drew attention everywhere."
  },
  {
    "word": "eccentric",
    "difficulty": "hard",
    "meaning": "unusual and slightly strange in behavior",
    "sentence": "The eccentric inventor wore mismatched socks every day."
  },
  {
    "word": "secure",
    "difficulty": "medium",
    "meaning": "safe and protected from harm",
    "sentence": "Keep your valuables in a secure place."
  },
  {
    "word": "generic",
    "difficulty": "medium",
    "meaning": "not specific; suitable for all cases",
    "sentence": "He gave a generic answer that could apply to anyone."
  },
  {
    "word": "analogous",
    "difficulty": "hard",
    "meaning": "similar in some way; comparable",
    "sentence": "The human brain is analogous to a computer's processor."
  },
  {
    "word": "acrimonious",
    "difficulty": "hard",
    "meaning": "angry and bitter in feeling or manner",
    "sentence": "The divorce proceedings became acrimonious."
  },
  {
    "word": "promote",
    "difficulty": "medium",
    "meaning": "to help something grow or become more popular",
    "sentence": "Exercise promotes good health."
  },
  {
    "word": "admire",
    "difficulty": "medium",
    "meaning": "to look at with wonder or respect",
    "sentence": "We admire the artist for her beautiful paintings."
  },
  {
    "word": "rapacious",
    "difficulty": "hard",
    "meaning": "aggressively greedy",
    "sentence": "The rapacious landlord raised rent every six months."
  },
  {
    "word": "research",
    "difficulty": "medium",
    "meaning": "careful study to discover new facts",
    "sentence": "Scientists conduct research to find cures."
  },
  {
    "word": "shelter",
    "difficulty": "medium",
    "meaning": "a place that provides protection",
    "sentence": "They found shelter from the rain under a tree."
  },
  {
    "word": "conundrum",
    "difficulty": "hard",
    "meaning": "a confusing and difficult problem or question",
    "sentence": "How to end poverty is a great conundrum of our time."
  },
  {
    "word": "admonish",
    "difficulty": "hard",
    "meaning": "to warn or reprimand gently but firmly",
    "sentence": "The librarian admonished the children for being too loud."
  },
  {
    "word": "schedule",
    "difficulty": "medium",
    "meaning": "a plan that shows what to do and when",
    "sentence": "She checked her schedule for the week."
  },
  {
    "word": "corroborate",
    "difficulty": "hard",
    "meaning": "to confirm or support with evidence",
    "sentence": "The security footage corroborated his alibi."
  },
  {
    "word": "judgment",
    "difficulty": "medium",
    "meaning": "the ability to make good decisions",
    "sentence": "The coach showed good judgment during the match."
  },
  {
    "word": "forbearance",
    "difficulty": "hard",
    "meaning": "patient self-control despite difficulties",
    "sentence": "She showed forbearance when her project was rejected again."
  },
  {
    "word": "scholar",
    "difficulty": "medium",
    "meaning": "a person with great knowledge of a subject",
    "sentence": "The scholar wrote a book about ancient Rome."
  },
  {
    "word": "devious",
    "difficulty": "hard",
    "meaning": "using sneaky and deceptive methods",
    "sentence": "The devious plan was designed to fool everyone."
  },
  {
    "word": "banal",
    "difficulty": "hard",
    "meaning": "so ordinary as to be dull",
    "sentence": "The speech was filled with banal remarks that bored everyone."
  },
  {
    "word": "educate",
    "difficulty": "medium",
    "meaning": "to teach or train someone",
    "sentence": "Schools educate children about the world."
  },
  {
    "word": "escape",
    "difficulty": "medium",
    "meaning": "to get away from something",
    "sentence": "The rabbit escaped through a hole in the fence."
  },
  {
    "word": "neutral",
    "difficulty": "medium",
    "meaning": "not taking sides; not favoring either side",
    "sentence": "Switzerland remained neutral during the war."
  },
  {
    "word": "frequent",
    "difficulty": "medium",
    "meaning": "happening many times",
    "sentence": "There are frequent trains to the city."
  },
  {
    "word": "role",
    "difficulty": "medium",
    "meaning": "a part played by someone in a situation",
    "sentence": "The teacher's role is to guide students."
  },
  {
    "word": "fragment",
    "difficulty": "medium",
    "meaning": "a small broken piece of something",
    "sentence": "She glued the glass fragments back together."
  },
  {
    "word": "observe",
    "difficulty": "medium",
    "meaning": "to watch something carefully",
    "sentence": "We observed the ants building their hill."
  },
  {
    "word": "habitat",
    "difficulty": "medium",
    "meaning": "the natural home of an animal or plant",
    "sentence": "The coral reef is the habitat of many fish."
  },
  {
    "word": "superfluous",
    "difficulty": "hard",
    "meaning": "more than is needed; unnecessary",
    "sentence": "Remove superfluous words to make the sentence cleaner."
  },
  {
    "word": "decadence",
    "difficulty": "hard",
    "meaning": "declining moral or cultural standards",
    "sentence": "The empire fell into decadence before it collapsed."
  },
  {
    "word": "cogent",
    "difficulty": "hard",
    "meaning": "clear, logical, and convincing",
    "sentence": "She made a cogent argument for the new policy."
  },
  {
    "word": "implicit",
    "difficulty": "hard",
    "meaning": "suggested but not directly expressed",
    "sentence": "Her silence gave implicit approval."
  },
  {
    "word": "invidious",
    "difficulty": "hard",
    "meaning": "likely to cause resentment; unfair",
    "sentence": "Making invidious comparisons between children is harmful."
  },
  {
    "word": "benchmark",
    "difficulty": "medium",
    "meaning": "a standard used for comparison",
    "sentence": "That record became the benchmark for future runners."
  },
  {
    "word": "conciliate",
    "difficulty": "hard",
    "meaning": "to make someone feel less angry; to win over",
    "sentence": "He tried to conciliate his upset friend with kind words."
  },
  {
    "word": "interpret",
    "difficulty": "medium",
    "meaning": "to explain the meaning of something",
    "sentence": "Can you interpret this poem for the class?"
  },
  {
    "word": "myopic",
    "difficulty": "hard",
    "meaning": "lacking imagination or foresight",
    "sentence": "His myopic view ignored the long-term consequences."
  },
  {
    "word": "exculpate",
    "difficulty": "hard",
    "meaning": "to officially declare someone not guilty",
    "sentence": "New evidence helped exculpate the wrongfully accused man."
  },
  {
    "word": "excoriate",
    "difficulty": "hard",
    "meaning": "to criticize severely",
    "sentence": "The reviewer excoriated the film for its poor script."
  },
  {
    "word": "frugal",
    "difficulty": "hard",
    "meaning": "careful not to waste money or resources",
    "sentence": "The frugal shopper always compared prices."
  },
  {
    "word": "pompous",
    "difficulty": "hard",
    "meaning": "making an exaggerated impression of importance",
    "sentence": "The pompous professor rarely listened to students."
  },
  {
    "word": "alliance",
    "difficulty": "medium",
    "meaning": "a union formed for a shared purpose",
    "sentence": "The two countries formed an alliance for trade."
  },
  {
    "word": "journey",
    "difficulty": "medium",
    "meaning": "a long trip from one place to another",
    "sentence": "The journey across the desert took three days."
  },
  {
    "word": "sanctimonious",
    "difficulty": "hard",
    "meaning": "acting morally superior to others",
    "sentence": "The sanctimonious neighbor always criticized everyone else."
  },
  {
    "word": "commitment",
    "difficulty": "medium",
    "meaning": "a firm promise or dedication",
    "sentence": "Her commitment to practice helped her improve."
  },
  {
    "word": "xenophobia",
    "difficulty": "hard",
    "meaning": "a dislike or fear of foreigners",
    "sentence": "Xenophobia is a harmful and unfair attitude."
  },
  {
    "word": "malevolent",
    "difficulty": "hard",
    "meaning": "wishing harm to others",
    "sentence": "The malevolent character plotted against the hero."
  },
  {
    "word": "fair",
    "difficulty": "medium",
    "meaning": "treating everyone equally and honestly",
    "sentence": "The judge made a fair decision."
  },
  {
    "word": "ascetic",
    "difficulty": "hard",
    "meaning": "practicing severe self-discipline",
    "sentence": "The ascetic monk gave up all worldly possessions."
  },
  {
    "word": "aspiration",
    "difficulty": "medium",
    "meaning": "a hope or desire to achieve something",
    "sentence": "Her aspiration was to travel the world."
  },
  {
    "word": "narrative",
    "difficulty": "medium",
    "meaning": "a spoken or written account of events",
    "sentence": "The book told a narrative of adventure and discovery."
  },
  {
    "word": "rapid",
    "difficulty": "medium",
    "meaning": "very fast",
    "sentence": "There was a rapid change in the weather."
  },
  {
    "word": "persist",
    "difficulty": "medium",
    "meaning": "to keep doing something despite problems",
    "sentence": "She persisted in practicing until she got it right."
  },
  {
    "word": "imperious",
    "difficulty": "hard",
    "meaning": "expecting obedience; domineering",
    "sentence": "The imperious commander expected every order to be obeyed."
  },
  {
    "word": "neophyte",
    "difficulty": "hard",
    "meaning": "a person who is new to a subject or activity",
    "sentence": "As a neophyte, she made mistakes but learned quickly."
  },
  {
    "word": "enhance",
    "difficulty": "medium",
    "meaning": "to improve the quality of something",
    "sentence": "Sunlight enhances the colors of a photograph."
  },
  {
    "word": "surreptitious",
    "difficulty": "hard",
    "meaning": "done in a secretive way",
    "sentence": "He cast a surreptitious glance at the hidden note."
  },
  {
    "word": "travesty",
    "difficulty": "hard",
    "meaning": "a false or distorted representation",
    "sentence": "The trial was a travesty of justice."
  },
  {
    "word": "retrieve",
    "difficulty": "medium",
    "meaning": "to get something back from somewhere",
    "sentence": "She retrieved the ball from under the bush."
  },
  {
    "word": "instinct",
    "difficulty": "medium",
    "meaning": "a natural ability or feeling",
    "sentence": "Ducks have an instinct to swim as soon as they hatch."
  },
  {
    "word": "symbol",
    "difficulty": "medium",
    "meaning": "something that represents something else",
    "sentence": "A dove is a symbol of peace."
  },
  {
    "word": "diminish",
    "difficulty": "medium",
    "meaning": "to make something smaller or less important",
    "sentence": "His confidence did not diminish after the loss."
  },
  {
    "word": "brilliant",
    "difficulty": "medium",
    "meaning": "very clever or bright",
    "sentence": "The student gave a brilliant answer."
  },
  {
    "word": "react",
    "difficulty": "medium",
    "meaning": "to respond to something",
    "sentence": "She reacted with joy when she heard the good news."
  },
  {
    "word": "freedom",
    "difficulty": "medium",
    "meaning": "the power to do or say what you want",
    "sentence": "Freedom of speech is an important right."
  },
  {
    "word": "decade",
    "difficulty": "medium",
    "meaning": "a period of ten years",
    "sentence": "She has been painting for nearly a decade."
  },
  {
    "word": "territory",
    "difficulty": "medium",
    "meaning": "an area of land controlled by someone",
    "sentence": "The lion marked the edge of its territory."
  },
  {
    "word": "sophistry",
    "difficulty": "hard",
    "meaning": "clever but misleading reasoning",
    "sentence": "His sophistry fooled the crowd but not the experts."
  },
  {
    "word": "magnanimous",
    "difficulty": "hard",
    "meaning": "generous and forgiving toward an opponent",
    "sentence": "The magnanimous winner congratulated the other team warmly."
  },
  {
    "word": "chastise",
    "difficulty": "hard",
    "meaning": "to criticize or punish severely",
    "sentence": "The coach chastised the player for breaking the rules."
  },
  {
    "word": "derivative",
    "difficulty": "hard",
    "meaning": "coming from another source; not original",
    "sentence": "His work was derivative and lacked original ideas."
  },
  {
    "word": "revile",
    "difficulty": "hard",
    "meaning": "to criticize someone using harsh language",
    "sentence": "The corrupt official was reviled by the public."
  },
  {
    "word": "leadership",
    "difficulty": "medium",
    "meaning": "the ability to guide and inspire others",
    "sentence": "She showed great leadership on the project."
  },
  {
    "word": "vital",
    "difficulty": "medium",
    "meaning": "absolutely necessary for life or success",
    "sentence": "Sleep is vital for your brain to work well."
  },
  {
    "word": "corrosive",
    "difficulty": "hard",
    "meaning": "causing gradual destruction; bitterly sarcastic",
    "sentence": "The acid was highly corrosive to the metal surface."
  },
  {
    "word": "bemoan",
    "difficulty": "hard",
    "meaning": "to express sorrow or regret about something",
    "sentence": "She bemoaned the loss of her childhood home."
  },
  {
    "word": "marvel",
    "difficulty": "medium",
    "meaning": "to feel great wonder and admiration",
    "sentence": "We marveled at the skill of the acrobats."
  },
  {
    "word": "perceive",
    "difficulty": "medium",
    "meaning": "to see or understand something",
    "sentence": "She perceived a change in his mood."
  },
  {
    "word": "enrich",
    "difficulty": "medium",
    "meaning": "to improve the quality of something",
    "sentence": "Travel can enrich your understanding of the world."
  },
  {
    "word": "connect",
    "difficulty": "medium",
    "meaning": "to link or join things together",
    "sentence": "The bridge connects the two islands."
  },
  {
    "word": "emotion",
    "difficulty": "medium",
    "meaning": "a feeling such as joy, sadness, or anger",
    "sentence": "She showed her emotion by crying tears of joy."
  },
  {
    "word": "empiricism",
    "difficulty": "hard",
    "meaning": "basing knowledge on observation and experiment",
    "sentence": "Empiricism drove the scientific revolution."
  },
  {
    "word": "excessive",
    "difficulty": "medium",
    "meaning": "too much of something",
    "sentence": "Excessive sugar intake can harm your teeth."
  },
  {
    "word": "prepare",
    "difficulty": "medium",
    "meaning": "to make things ready",
    "sentence": "She prepared her school bag the night before."
  },
  {
    "word": "genuine",
    "difficulty": "medium",
    "meaning": "real and true; not fake",
    "sentence": "She gave a genuine smile when she saw him."
  },
  {
    "word": "edify",
    "difficulty": "hard",
    "meaning": "to improve someone morally or intellectually",
    "sentence": "Great literature can edify and inspire readers."
  },
  {
    "word": "mischief",
    "difficulty": "medium",
    "meaning": "playful behavior that causes trouble",
    "sentence": "The puppy got into mischief with the shoes."
  },
  {
    "word": "wistful",
    "difficulty": "hard",
    "meaning": "having a feeling of vague longing",
    "sentence": "He looked wistfully at the old photographs."
  },
  {
    "word": "circumvent",
    "difficulty": "hard",
    "meaning": "to find a way around a rule or obstacle",
    "sentence": "He tried to circumvent the restriction by using a loophole."
  },
  {
    "word": "sacrifice",
    "difficulty": "medium",
    "meaning": "to give up something important for another",
    "sentence": "She sacrificed her free time to help her friend."
  },
  {
    "word": "ambiguous",
    "difficulty": "hard",
    "meaning": "having more than one possible meaning",
    "sentence": "Her answer was ambiguous and could mean several things."
  },
  {
    "word": "emulate",
    "difficulty": "hard",
    "meaning": "to try to match or surpass something admired",
    "sentence": "She emulated her favorite scientist in her research habits."
  },
  {
    "word": "eligible",
    "difficulty": "medium",
    "meaning": "meeting the conditions to be chosen",
    "sentence": "Only students over ten are eligible to enter."
  },
  {
    "word": "truculent",
    "difficulty": "hard",
    "meaning": "eager to argue or fight; aggressively defensive",
    "sentence": "The truculent player argued with every referee's call."
  },
  {
    "word": "vulnerable",
    "difficulty": "hard",
    "meaning": "exposed to harm or attack",
    "sentence": "Young animals are vulnerable to predators."
  },
  {
    "word": "intervene",
    "difficulty": "medium",
    "meaning": "to come between two sides to help resolve something",
    "sentence": "The teacher intervened to stop the argument."
  },
  {
    "word": "profligate",
    "difficulty": "hard",
    "meaning": "recklessly wasteful; immoral",
    "sentence": "The profligate prince spent the treasury's funds in weeks."
  },
  {
    "word": "condescending",
    "difficulty": "hard",
    "meaning": "treating others as if they are inferior",
    "sentence": "A condescending tone makes people feel disrespected."
  },
  {
    "word": "bureaucracy",
    "difficulty": "hard",
    "meaning": "a system of government with complicated rules",
    "sentence": "The bureaucracy made it hard to get a simple form approved."
  },
  {
    "word": "enable",
    "difficulty": "medium",
    "meaning": "to make something possible",
    "sentence": "Technology enables us to communicate globally."
  },
  {
    "word": "generous",
    "difficulty": "medium",
    "meaning": "willing to give more than expected",
    "sentence": "She was generous and shared all her snacks."
  },
  {
    "word": "forfeit",
    "difficulty": "medium",
    "meaning": "to lose something as a penalty",
    "sentence": "The team had to forfeit the match due to a late arrival."
  },
  {
    "word": "operate",
    "difficulty": "medium",
    "meaning": "to work or control something",
    "sentence": "She learned how to operate the new machine."
  },
  {
    "word": "excellent",
    "difficulty": "medium",
    "meaning": "very good; outstanding",
    "sentence": "She received excellent grades this term."
  },
  {
    "word": "probity",
    "difficulty": "hard",
    "meaning": "strong moral principles; honesty",
    "sentence": "Her probity in all business dealings earned great trust."
  },
  {
    "word": "laudable",
    "difficulty": "hard",
    "meaning": "deserving praise; praiseworthy",
    "sentence": "Her commitment to charity is truly laudable."
  },
  {
    "word": "guile",
    "difficulty": "hard",
    "meaning": "clever but dishonest behavior",
    "sentence": "The thief used guile to sneak past the guards."
  },
  {
    "word": "appease",
    "difficulty": "hard",
    "meaning": "to make someone less angry by giving them what they want",
    "sentence": "She tried to appease him by apologizing sincerely."
  },
  {
    "word": "deliver",
    "difficulty": "medium",
    "meaning": "to bring something to a person or place",
    "sentence": "The postman will deliver the package today."
  },
  {
    "word": "incisive",
    "difficulty": "hard",
    "meaning": "intelligently analytical and clear-thinking",
    "sentence": "Her incisive questions cut to the heart of the problem."
  },
  {
    "word": "deference",
    "difficulty": "hard",
    "meaning": "humble submission and respect for another",
    "sentence": "She showed deference to her elder by letting them speak first."
  },
  {
    "word": "hypothesis",
    "difficulty": "medium",
    "meaning": "a proposed explanation to be tested by evidence",
    "sentence": "The scientist formed a hypothesis about plant growth."
  },
  {
    "word": "ungainly",
    "difficulty": "hard",
    "meaning": "awkward and clumsy in movement",
    "sentence": "The young giraffe was ungainly on its long legs."
  },
  {
    "word": "countenance",
    "difficulty": "hard",
    "meaning": "a person's facial expression; to allow something",
    "sentence": "She could not countenance such rude behavior."
  },
  {
    "word": "eulogy",
    "difficulty": "hard",
    "meaning": "a speech that praises someone who has just died",
    "sentence": "She delivered a touching eulogy at the funeral."
  },
  {
    "word": "displace",
    "difficulty": "medium",
    "meaning": "to move something from its usual position",
    "sentence": "The flood displaced many families from their homes."
  },
  {
    "word": "reprehensible",
    "difficulty": "hard",
    "meaning": "deserving condemnation; very bad",
    "sentence": "Cruelty to animals is morally reprehensible."
  },
  {
    "word": "terrific",
    "difficulty": "medium",
    "meaning": "extremely good; wonderful",
    "sentence": "The show was absolutely terrific!"
  },
  {
    "word": "deter",
    "difficulty": "hard",
    "meaning": "to discourage someone from doing something",
    "sentence": "High fences deter animals from entering the garden."
  },
  {
    "word": "reinforce",
    "difficulty": "medium",
    "meaning": "to make something stronger or more effective",
    "sentence": "Practice reinforces what you have learned."
  },
  {
    "word": "hypocrite",
    "difficulty": "hard",
    "meaning": "a person who pretends to have virtues they don't have",
    "sentence": "He was a hypocrite who preached kindness but acted cruelly."
  },
  {
    "word": "fractious",
    "difficulty": "hard",
    "meaning": "easily upset or irritable",
    "sentence": "A fractious toddler is hard to comfort."
  },
  {
    "word": "behave",
    "difficulty": "medium",
    "meaning": "to act in a particular way",
    "sentence": "The children behaved well at the museum."
  },
  {
    "word": "dynamic",
    "difficulty": "medium",
    "meaning": "constantly changing and full of energy",
    "sentence": "The city has a dynamic and exciting culture."
  },
  {
    "word": "evolve",
    "difficulty": "medium",
    "meaning": "to develop gradually over time",
    "sentence": "Language continues to evolve with society."
  },
  {
    "word": "triumph",
    "difficulty": "medium",
    "meaning": "a great victory or success",
    "sentence": "Winning the championship was a real triumph."
  },
  {
    "word": "treacherous",
    "difficulty": "hard",
    "meaning": "guilty of betrayal; not to be trusted",
    "sentence": "The treacherous path was covered in ice."
  },
  {
    "word": "vacillate",
    "difficulty": "hard",
    "meaning": "to waver between two opinions or actions",
    "sentence": "He vacillated for weeks before making a decision."
  },
  {
    "word": "elusive",
    "difficulty": "hard",
    "meaning": "difficult to find, catch, or achieve",
    "sentence": "The perfect solution remained elusive."
  },
  {
    "word": "recount",
    "difficulty": "hard",
    "meaning": "to describe events in detail",
    "sentence": "He recounted the adventure with great excitement."
  },
  {
    "word": "eradicate",
    "difficulty": "hard",
    "meaning": "to completely destroy or remove something",
    "sentence": "We hope to eradicate malaria through new vaccines."
  },
  {
    "word": "increase",
    "difficulty": "medium",
    "meaning": "to make or become larger in number",
    "sentence": "Exercise can increase your energy level."
  },
  {
    "word": "amenable",
    "difficulty": "hard",
    "meaning": "willing to agree or cooperate",
    "sentence": "He was amenable to changing the plan."
  },
  {
    "word": "adopt",
    "difficulty": "medium",
    "meaning": "to take something as your own",
    "sentence": "They decided to adopt a rescue dog."
  },
  {
    "word": "hegemony",
    "difficulty": "hard",
    "meaning": "dominance or leadership of one group over others",
    "sentence": "The empire maintained hegemony over its colonies."
  },
  {
    "word": "landmark",
    "difficulty": "medium",
    "meaning": "an important and recognizable feature of a place",
    "sentence": "The Eiffel Tower is a famous landmark."
  },
  {
    "word": "feature",
    "difficulty": "medium",
    "meaning": "an important part or quality",
    "sentence": "A key feature of birds is their ability to fly."
  },
  {
    "word": "famine",
    "difficulty": "hard",
    "meaning": "an extreme shortage of food",
    "sentence": "The famine caused widespread suffering."
  },
  {
    "word": "backdrop",
    "difficulty": "medium",
    "meaning": "the background to a scene or situation",
    "sentence": "The mountains formed a dramatic backdrop for the concert."
  },
  {
    "word": "skill",
    "difficulty": "medium",
    "meaning": "the ability to do something well with practice",
    "sentence": "Drawing is a skill you can improve over time."
  },
  {
    "word": "peripatetic",
    "difficulty": "hard",
    "meaning": "traveling from place to place",
    "sentence": "The peripatetic journalist covered stories across five continents."
  },
  {
    "word": "insuperable",
    "difficulty": "hard",
    "meaning": "impossible to overcome",
    "sentence": "The obstacle seemed insuperable at first."
  },
  {
    "word": "justify",
    "difficulty": "medium",
    "meaning": "to show that something is right or reasonable",
    "sentence": "Can you justify your choice of answer?"
  },
  {
    "word": "allot",
    "difficulty": "medium",
    "meaning": "to distribute or assign something",
    "sentence": "Each student was allotted ten minutes to present."
  },
  {
    "word": "authentic",
    "difficulty": "medium",
    "meaning": "genuine and real; not fake",
    "sentence": "She wore an authentic traditional costume."
  },
  {
    "word": "clemency",
    "difficulty": "hard",
    "meaning": "merciful treatment given to someone in power",
    "sentence": "The judge showed clemency and reduced the sentence."
  },
  {
    "word": "debate",
    "difficulty": "medium",
    "meaning": "to discuss different views on a topic",
    "sentence": "The class had a heated debate about recycling."
  },
  {
    "word": "continue",
    "difficulty": "medium",
    "meaning": "to keep going without stopping",
    "sentence": "She continued reading despite the noise."
  },
  {
    "word": "temerity",
    "difficulty": "hard",
    "meaning": "excessive boldness; audacity",
    "sentence": "She had the temerity to challenge the expert publicly."
  },
  {
    "word": "portentous",
    "difficulty": "hard",
    "meaning": "giving a sign that something bad will happen",
    "sentence": "Dark storm clouds looked portentous on the horizon."
  },
  {
    "word": "simulate",
    "difficulty": "medium",
    "meaning": "to copy the way something looks or works",
    "sentence": "The game simulates real life battles."
  },
  {
    "word": "reward",
    "difficulty": "medium",
    "meaning": "something given for doing something well",
    "sentence": "She received a reward for finding the lost dog."
  },
  {
    "word": "prefer",
    "difficulty": "medium",
    "meaning": "to like one thing more than another",
    "sentence": "He prefers reading to watching TV."
  },
  {
    "word": "audit",
    "difficulty": "medium",
    "meaning": "an official examination of accounts",
    "sentence": "The company passed its financial audit."
  },
  {
    "word": "judicious",
    "difficulty": "hard",
    "meaning": "having wise and sensible judgment",
    "sentence": "A judicious decision takes all facts into account."
  },
  {
    "word": "motivate",
    "difficulty": "medium",
    "meaning": "to give someone the desire to do something",
    "sentence": "The prize motivated the students to try harder."
  },
  {
    "word": "predilection",
    "difficulty": "hard",
    "meaning": "a strong personal preference",
    "sentence": "He had a predilection for spicy food."
  },
  {
    "word": "crisis",
    "difficulty": "medium",
    "meaning": "a time of great danger or difficulty",
    "sentence": "The hospital managed the health crisis well."
  },
  {
    "word": "expectation",
    "difficulty": "medium",
    "meaning": "a belief that something will happen",
    "sentence": "She had high expectations for the new school year."
  },
  {
    "word": "lucrative",
    "difficulty": "hard",
    "meaning": "producing a large profit",
    "sentence": "She found a lucrative career in software development."
  },
  {
    "word": "reform",
    "difficulty": "medium",
    "meaning": "to change something to make it better",
    "sentence": "The government introduced education reform."
  },
  {
    "word": "finite",
    "difficulty": "medium",
    "meaning": "having a definite end or limit",
    "sentence": "Our natural resources are finite and must be protected."
  },
  {
    "word": "recalcitrant",
    "difficulty": "hard",
    "meaning": "resisting authority or control",
    "sentence": "The recalcitrant student ignored every rule."
  },
  {
    "word": "arcane",
    "difficulty": "hard",
    "meaning": "understood by only a few; mysterious",
    "sentence": "The professor spoke in arcane terminology no one understood."
  },
  {
    "word": "indolence",
    "difficulty": "hard",
    "meaning": "avoidance of activity; laziness",
    "sentence": "His indolence meant he rarely finished his homework."
  },
  {
    "word": "separate",
    "difficulty": "medium",
    "meaning": "to move things apart from each other",
    "sentence": "Separate the white laundry from the colored items."
  },
  {
    "word": "variety",
    "difficulty": "medium",
    "meaning": "many different types of something",
    "sentence": "There is a great variety of fruits at the market."
  },
  {
    "word": "impunity",
    "difficulty": "hard",
    "meaning": "freedom from punishment",
    "sentence": "He broke the rules with impunity."
  }
];


export const LANGUAGES = ['Spanish', 'French', 'German', 'Hindi', 'Japanese', 'Chinese', 'Arabic'];
export const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

export const lessonsData = {
  Spanish: {
    Beginner: {
  id: 'es-beg',
  title: 'Spanish for Beginners',
  description: 'Start your Spanish journey.',
  duration: '30 min',
  rating: 4.8,

  vocabulary: [
    { word: 'Hola', translation: 'Hello', pronunciation: 'OH-lah' },
    { word: 'Gracias', translation: 'Thank you', pronunciation: 'GRAH-syahs' }
  ],

  grammar: [
    {
      rule: 'Basic greetings',
      examples: ['Hola', 'Buenos días']
    }
  ],

  exercises: [
    // MCQ
    { type: 'multiple-choice', question: 'Hello in Spanish?', options: ['Hola', 'Gracias', 'Adios', 'Sí'], correctAnswer: 'Hola', points: 10 },
    { type: 'multiple-choice', question: '"Gracias" means?', options: ['Please', 'Thanks', 'Sorry', 'Bye'], correctAnswer: 'Thanks', points: 10 },

    // Fill blanks
    { type: 'fill-blank', question: 'Me _____ Juan', options: ['soy', 'llamo', 'tengo'], correctAnswer: 'llamo', points: 10 },
    { type: 'fill-blank', question: 'Buenos _____', options: ['días', 'noches', 'hola'], correctAnswer: 'días', points: 10 },

    // Translation
    { type: 'translation', question: 'Good night', options: ['Buenas noches', 'Hola', 'Gracias'], correctAnswer: 'Buenas noches', points: 15 },

    // Spelling
    { type: 'spelling', question: 'Correct spelling?', options: ['Grasias', 'Gracias', 'Graciass'], correctAnswer: 'Gracias', points: 10 },

    // Error detection
    { type: 'error-detection', question: 'Wrong sentence?', options: ['Hola amigo', 'Gracias mucho'], correctAnswer: 'Gracias mucho', points: 15 },

    // Sentence correction
    { type: 'sentence-correction', question: 'Correct sentence?', options: ['Me llama Juan', 'Me llamo Juan'], correctAnswer: 'Me llamo Juan', points: 15 },

    // Sentence completion
    { type: 'sentence-completion', question: 'Mucho _____', options: ['gusto', 'hola'], correctAnswer: 'gusto', points: 10 },

    // MORE QUESTIONS (to reach ~20)
    { type: 'multiple-choice', question: '"Sí" means?', options: ['Yes', 'No', 'Please'], correctAnswer: 'Yes', points: 10 },
    { type: 'multiple-choice', question: '"No" means?', options: ['Yes', 'No', 'Hello'], correctAnswer: 'No', points: 10 },

    { type: 'fill-blank', question: 'Por _____ (Please)', options: ['favor', 'hola'], correctAnswer: 'favor', points: 10 },

    { type: 'translation', question: 'Good morning', options: ['Buenos días', 'Buenas noches'], correctAnswer: 'Buenos días', points: 15 },

    { type: 'spelling', question: 'Correct?', options: ['Ola', 'Hola'], correctAnswer: 'Hola', points: 10 },

    { type: 'error-detection', question: 'Wrong?', options: ['Buenos días', 'Buenos noche'], correctAnswer: 'Buenos noche', points: 15 },

    { type: 'sentence-correction', question: 'Fix:', options: ['Yo soy Juan', 'Yo Juan soy'], correctAnswer: 'Yo soy Juan', points: 15 },

    { type: 'sentence-completion', question: 'Buenas _____', options: ['noches', 'días'], correctAnswer: 'noches', points: 10 }
  ],

  // NEW SECTIONS
  review: [
    { question: 'What is Hola?', answer: 'Hello' },
    { question: 'Meaning of Gracias?', answer: 'Thank you' }
  ],

  speaking: [
    { prompt: 'Introduce yourself in Spanish' },
    { prompt: 'Say good morning and your name' }
  ],

  listening: [
    { prompt: 'Listen to "Hola" and repeat' },
    { prompt: 'Identify "Gracias" in audio' }
  ]
},
    Intermediate: {
      id: 'es-int',
      title: 'Spanish Intermediate',
      description: 'Expand your Spanish with past tense, shopping vocabulary, and conversations.',
      duration: '45 min',
      rating: 4.6,
      vocabulary: [
        { word: 'El mercado', translation: 'The market', pronunciation: 'el mer-KAH-doh' },
        { word: 'Comprar', translation: 'To buy', pronunciation: 'kom-PRAR' },
        { word: '¿Cuánto cuesta?', translation: 'How much does it cost?', pronunciation: 'KWAN-toh KWES-tah' },
        { word: 'Barato/Caro', translation: 'Cheap/Expensive', pronunciation: 'bah-RAH-toh / KAH-roh' },
        { word: 'La semana pasada', translation: 'Last week', pronunciation: 'lah seh-MAH-nah pah-SAH-dah' },
        { word: 'Ayer', translation: 'Yesterday', pronunciation: 'ah-YAIR' },
      ],
      grammar: [
        {
          rule: 'Preterite tense (past): -AR verbs: hablé, hablaste, habló, hablamos, hablaron',
          examples: ['Yo hablé con María ayer.', 'Nosotros compramos comida.']
        },
        {
          rule: '-ER/-IR verbs past: comí, comiste, comió, comimos, comieron',
          examples: ['Él comió una pizza.', 'Ellos vivieron en Madrid.']
        }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'What is the past tense of "hablar" (yo)?', options: ['hablo', 'hablé', 'hablaré', 'hablaba'], correctAnswer: 'hablé', points: 15 },
        { type: 'translation', question: 'Translate: "I bought a book yesterday"', options: ['Compré un libro ayer', 'Compro un libro hoy', 'Compraré un libro', 'Compré una pluma'], correctAnswer: 'Compré un libro ayer', points: 20 },
        { type: 'fill-blank', question: 'Nosotros _____ al mercado. (We went to the market)', options: ['vamos', 'fuimos', 'iremos', 'íbamos'], correctAnswer: 'fuimos', points: 15 },
        { type: 'sentence-completion', question: '¿_____ cuesta este libro? (How much does this book cost?)', options: ['Cómo', 'Cuándo', 'Cuánto', 'Dónde'], correctAnswer: 'Cuánto', points: 10 },
        { type: 'multiple-choice', question: 'What does "barato" mean?', options: ['Expensive', 'Cheap', 'New', 'Old'], correctAnswer: 'Cheap', points: 10 },
      ]
    },
    Advanced: {
      id: 'es-adv',
      title: 'Advanced Spanish',
      description: 'Master subjunctive mood, idiomatic expressions, and complex conversations.',
      duration: '60 min',
      rating: 4.7,
      vocabulary: [
        { word: 'Subjuntivo', translation: 'Subjunctive', pronunciation: 'soob-HOON-tee-voh' },
        { word: 'Sin embargo', translation: 'However/Nevertheless', pronunciation: 'seen em-BAR-goh' },
        { word: 'A pesar de', translation: 'In spite of', pronunciation: 'ah peh-SAR deh' },
        { word: 'Desenvolverse', translation: 'To manage/get by', pronunciation: 'des-en-vol-VAIR-seh' },
      ],
      grammar: [
        {
          rule: 'Subjunctive: Use after verbs of desire, doubt, emotion. Quiero que + subjunctive',
          examples: ['Quiero que vengas.', 'Espero que llueva.', 'Dudo que sea verdad.']
        }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'Which sentence uses the subjunctive correctly?', options: ['Quiero que él viene', 'Quiero que él venga', 'Quiero que él vino', 'Quiero que él vendrá'], correctAnswer: 'Quiero que él venga', points: 20 },
        { type: 'translation', question: 'Translate: "I hope that she arrives on time"', options: ['Espero que ella llegue a tiempo', 'Espero que ella llega a tiempo', 'Espero que ella llegó', 'Quiero ella llega'], correctAnswer: 'Espero que ella llegue a tiempo', points: 25 },
        { type: 'fill-blank', question: 'No creo que él _____ razón. (I don\'t think he\'s right)', options: ['tiene', 'tenga', 'tendrá', 'tuvo'], correctAnswer: 'tenga', points: 20 },
      ]
    }
  },
  French: {
    Beginner: {
      id: 'fr-beg',
      title: 'French for Beginners',
      description: 'Begin your French adventure with essential phrases and pronunciation.',
      duration: '30 min',
      rating: 4.7,
      vocabulary: [
        { word: 'Bonjour', translation: 'Hello/Good morning', pronunciation: 'bon-ZHOOR' },
        { word: 'Merci', translation: 'Thank you', pronunciation: 'mehr-SEE' },
        { word: 'S\'il vous plaît', translation: 'Please', pronunciation: 'seel voo PLAY' },
        { word: 'Bonsoir', translation: 'Good evening', pronunciation: 'bon-SWAHR' },
        { word: 'Au revoir', translation: 'Goodbye', pronunciation: 'oh reh-VWAHR' },
        { word: 'Je m\'appelle', translation: 'My name is', pronunciation: 'zhuh mah-PEL' },
        { word: 'Oui / Non', translation: 'Yes / No', pronunciation: 'wee / nohn' },
        { word: 'Enchanté(e)', translation: 'Nice to meet you', pronunciation: 'ahn-shahn-TAY' },
      ],
      grammar: [
        {
          rule: 'Articles: le (masc), la (fem), les (plural). Un (a/an masc), une (a/an fem)',
          examples: ['Le livre (the book)', 'La maison (the house)', 'Un chat (a cat)']
        },
        {
          rule: 'Verb "être" (to be): je suis, tu es, il/elle est, nous sommes, ils/elles sont',
          examples: ['Je suis étudiant.', 'Elle est française.']
        }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'How do you say "Good evening" in French?', options: ['Bonjour', 'Au revoir', 'Bonsoir', 'Merci'], correctAnswer: 'Bonsoir', points: 10 },
        { type: 'fill-blank', question: 'Je m\'_____ Pierre. (My name is Pierre)', options: ['suis', 'appelle', 'dis', 'nomme'], correctAnswer: 'appelle', points: 10 },
        { type: 'translation', question: 'Translate: "Thank you very much"', options: ['Bonjour', 'Merci beaucoup', 'Au revoir', 'De rien'], correctAnswer: 'Merci beaucoup', points: 15 },
        { type: 'multiple-choice', question: 'What is the French word for "the book" (masculine)?', options: ['La livre', 'Le livre', 'Un livre', 'Les livre'], correctAnswer: 'Le livre', points: 10 },
        { type: 'sentence-completion', question: 'Au _____! (Goodbye!)', options: ['bonjour', 'soir', 'revoir', 'merci'], correctAnswer: 'revoir', points: 10 },
      ]
    },
    Intermediate: {
      id: 'fr-int',
      title: 'French Intermediate',
      description: 'Learn passé composé, food vocabulary, and restaurant conversations.',
      duration: '45 min',
      rating: 4.5,
      vocabulary: [
        { word: 'Le restaurant', translation: 'The restaurant', pronunciation: 'luh res-toh-RAHN' },
        { word: 'Commander', translation: 'To order', pronunciation: 'koh-mahn-DAY' },
        { word: 'L\'addition', translation: 'The bill', pronunciation: 'lah-dee-SYOHN' },
        { word: 'Délicieux', translation: 'Delicious', pronunciation: 'day-lee-SYUH' },
        { word: 'Hier', translation: 'Yesterday', pronunciation: 'ee-YAIR' },
      ],
      grammar: [
        {
          rule: 'Passé composé: avoir/être + past participle. Most verbs use avoir.',
          examples: ['J\'ai mangé. (I ate)', 'Il a parlé. (He spoke)', 'Elle est allée. (She went)']
        }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'What is the passé composé of "manger" (je)?', options: ['je mange', 'j\'ai mangé', 'je mangeais', 'je mangerai'], correctAnswer: 'j\'ai mangé', points: 15 },
        { type: 'translation', question: 'Translate: "I would like the bill, please"', options: ['Je voudrais l\'addition, s\'il vous plaît', 'Je veux manger', 'C\'est délicieux', 'Au revoir'], correctAnswer: 'Je voudrais l\'addition, s\'il vous plaît', points: 20 },
        { type: 'fill-blank', question: 'Hier, j\'_____ au restaurant. (Yesterday, I went to the restaurant)', options: ['vais', 'suis allé', 'allais', 'irai'], correctAnswer: 'suis allé', points: 15 },
      ]
    },
    Advanced: {
      id: 'fr-adv',
      title: 'Advanced French',
      description: 'Master the subjunctive, literary tenses, and sophisticated expressions.',
      duration: '60 min',
      rating: 4.6,
      vocabulary: [
        { word: 'Néanmoins', translation: 'Nevertheless', pronunciation: 'nay-ahn-MWAHN' },
        { word: 'Pourtant', translation: 'However/Yet', pronunciation: 'poor-TAHN' },
        { word: 'Se débrouiller', translation: 'To manage/get by', pronunciation: 'suh day-broo-YAY' },
      ],
      grammar: [
        { rule: 'Subjunctive: after il faut que, vouloir que, bien que...', examples: ['Il faut que tu viennes.', 'Je veux qu\'il parte.'] }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'Choose the correct subjunctive: "Il faut que tu _____ (venir)"', options: ['viens', 'viennes', 'venais', 'viendras'], correctAnswer: 'viennes', points: 20 },
        { type: 'translation', question: 'Translate: "Although it is difficult, I will try"', options: ['Bien que ce soit difficile, j\'essaierai', 'C\'est difficile', 'Je vais essayer', 'Parce que c\'est difficile'], correctAnswer: 'Bien que ce soit difficile, j\'essaierai', points: 25 },
      ]
    }
  },
  German: {
    Beginner: {
      id: 'de-beg',
      title: 'German for Beginners',
      description: 'Start German with greetings, numbers, and essential vocabulary.',
      duration: '30 min',
      rating: 4.6,
      vocabulary: [
        { word: 'Hallo', translation: 'Hello', pronunciation: 'HAH-loh' },
        { word: 'Danke', translation: 'Thank you', pronunciation: 'DAHN-keh' },
        { word: 'Bitte', translation: 'Please/You\'re welcome', pronunciation: 'BIT-teh' },
        { word: 'Guten Morgen', translation: 'Good morning', pronunciation: 'GOO-ten MOR-gen' },
        { word: 'Auf Wiedersehen', translation: 'Goodbye', pronunciation: 'owf VEE-der-zayn' },
        { word: 'Ich heiße', translation: 'My name is', pronunciation: 'ikh HY-seh' },
        { word: 'Ja / Nein', translation: 'Yes / No', pronunciation: 'yah / nyne' },
        { word: 'Entschuldigung', translation: 'Excuse me/Sorry', pronunciation: 'ent-SHOOL-di-goong' },
      ],
      grammar: [
        {
          rule: 'German has 3 genders: der (masc), die (fem), das (neuter)',
          examples: ['der Mann (the man)', 'die Frau (the woman)', 'das Kind (the child)']
        },
        {
          rule: 'Verb "sein" (to be): ich bin, du bist, er/sie ist, wir sind, sie sind',
          examples: ['Ich bin Student.', 'Sie ist Ärztin.']
        }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'How do you say "Good morning" in German?', options: ['Hallo', 'Guten Morgen', 'Danke', 'Bitte'], correctAnswer: 'Guten Morgen', points: 10 },
        { type: 'fill-blank', question: 'Ich _____ Klaus. (My name is Klaus)', options: ['bin', 'heiße', 'habe', 'gehe'], correctAnswer: 'heiße', points: 10 },
        { type: 'multiple-choice', question: 'What is the article for "Frau" (woman)?', options: ['der', 'das', 'die', 'ein'], correctAnswer: 'die', points: 10 },
        { type: 'translation', question: 'Translate: "Excuse me, please"', options: ['Danke bitte', 'Entschuldigung, bitte', 'Hallo', 'Auf Wiedersehen'], correctAnswer: 'Entschuldigung, bitte', points: 15 },
        { type: 'sentence-completion', question: 'Auf _____! (Goodbye!)', options: ['Hallo', 'Wiedersehen', 'Danke', 'Bitte'], correctAnswer: 'Wiedersehen', points: 10 },
      ]
    },
    Intermediate: {
      id: 'de-int',
      title: 'German Intermediate',
      description: 'Learn German cases, travel vocabulary, and modal verbs.',
      duration: '45 min',
      rating: 4.4,
      vocabulary: [
        { word: 'Der Bahnhof', translation: 'The train station', pronunciation: 'dair BAHN-hof' },
        { word: 'Fahren', translation: 'To drive/travel', pronunciation: 'FAH-ren' },
        { word: 'Ich möchte', translation: 'I would like', pronunciation: 'ikh MERSH-teh' },
        { word: 'Der Zug', translation: 'The train', pronunciation: 'dair tsook' },
      ],
      grammar: [
        {
          rule: 'Modal verbs: können (can), müssen (must), wollen (want), dürfen (may)',
          examples: ['Ich kann Deutsch sprechen.', 'Du musst lernen.', 'Er will reisen.']
        }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'Which modal verb means "must"?', options: ['können', 'wollen', 'müssen', 'dürfen'], correctAnswer: 'müssen', points: 15 },
        { type: 'translation', question: 'Translate: "I would like a ticket to Berlin"', options: ['Ich möchte eine Fahrkarte nach Berlin', 'Ich will Berlin', 'Ich fahre nach Berlin', 'Ich bin in Berlin'], correctAnswer: 'Ich möchte eine Fahrkarte nach Berlin', points: 20 },
        { type: 'fill-blank', question: 'Ich _____ Deutsch sprechen. (I can speak German)', options: ['muss', 'will', 'kann', 'darf'], correctAnswer: 'kann', points: 15 },
      ]
    },
    Advanced: {
      id: 'de-adv',
      title: 'Advanced German',
      description: 'Master Konjunktiv II, complex sentence structures, and idiomatic German.',
      duration: '60 min',
      rating: 4.5,
      vocabulary: [
        { word: 'Allerdings', translation: 'However/Admittedly', pronunciation: 'AH-ler-dings' },
        { word: 'Nichtsdestotrotz', translation: 'Nevertheless', pronunciation: 'nikhts-des-toh-TROTZ' },
      ],
      grammar: [
        { rule: 'Konjunktiv II for hypothetical situations: würde + infinitive or special forms', examples: ['Ich würde gern reisen.', 'Wenn ich Zeit hätte, würde ich kommen.'] }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'Complete: "Wenn ich Geld _____, würde ich reisen." (If I had money, I would travel)', options: ['habe', 'hatte', 'hätte', 'haben'], correctAnswer: 'hätte', points: 20 },
        { type: 'translation', question: 'Translate: "If I were you, I would study more"', options: ['Wenn ich du wäre, würde ich mehr lernen', 'Ich lerne mehr', 'Du sollst lernen', 'Ich habe gelernt'], correctAnswer: 'Wenn ich du wäre, würde ich mehr lernen', points: 25 },
      ]
    }
  },
  Hindi: {
    Beginner: {
      id: 'hi-beg',
      title: 'Hindi for Beginners',
      description: 'Learn Hindi script basics, greetings, and everyday phrases.',
      duration: '35 min',
      rating: 4.7,
      vocabulary: [
        { word: 'नमस्ते (Namaste)', translation: 'Hello/Greetings', pronunciation: 'nah-MAS-tay' },
        { word: 'धन्यवाद (Dhanyavad)', translation: 'Thank you', pronunciation: 'DHAN-ya-vaad' },
        { word: 'कृपया (Kripaya)', translation: 'Please', pronunciation: 'KRIP-a-ya' },
        { word: 'हाँ / नहीं (Haan/Nahin)', translation: 'Yes / No', pronunciation: 'haan / na-HEEN' },
        { word: 'मेरा नाम (Mera naam)', translation: 'My name is', pronunciation: 'MEH-ra naam' },
        { word: 'शुभ प्रभात (Shubh Prabhat)', translation: 'Good morning', pronunciation: 'SHOOBH pra-BHAAT' },
        { word: 'अलविदा (Alvida)', translation: 'Goodbye', pronunciation: 'al-vi-DAA' },
        { word: 'क्षमा करें (Kshama karen)', translation: 'Excuse me/Sorry', pronunciation: 'KSHAMAA kaa-REN' },
      ],
      grammar: [
        {
          rule: 'Hindi word order is Subject-Object-Verb (SOV): Main kitaab padhta hoon (I book read)',
          examples: ['मैं खाना खाता हूँ। (I eat food.)', 'वह स्कूल जाती है। (She goes to school.)']
        },
        {
          rule: 'Verb "होना" (to be): मैं हूँ, तुम हो, आप हैं, वह है, हम हैं',
          examples: ['मैं छात्र हूँ। (I am a student.)', 'वह डॉक्टर है। (She is a doctor.)']
        }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'What does "नमस्ते" mean?', options: ['Goodbye', 'Thank you', 'Hello', 'Please'], correctAnswer: 'Hello', points: 10 },
        { type: 'fill-blank', question: 'मेरा _____ राज है। (My name is Raj)', options: ['काम', 'नाम', 'घर', 'दोस्त'], correctAnswer: 'नाम', points: 10 },
        { type: 'translation', question: 'Translate: "Thank you very much"', options: ['कृपया', 'बहुत धन्यवाद', 'नमस्ते', 'अलविदा'], correctAnswer: 'बहुत धन्यवाद', points: 15 },
        { type: 'multiple-choice', question: 'What is the Hindi word order?', options: ['SVO', 'VSO', 'SOV', 'OVS'], correctAnswer: 'SOV', points: 10 },
        { type: 'sentence-completion', question: 'मैं छात्र _____। (I am a student)', options: ['हो', 'है', 'हूँ', 'हैं'], correctAnswer: 'हूँ', points: 10 },
      ]
    },
    Intermediate: {
      id: 'hi-int',
      title: 'Hindi Intermediate',
      description: 'Master past tense, shopping conversations, and postpositions.',
      duration: '45 min',
      rating: 4.5,
      vocabulary: [
        { word: 'बाज़ार (Bazaar)', translation: 'Market/Bazaar', pronunciation: 'baa-ZAAR' },
        { word: 'खरीदना (Kharidna)', translation: 'To buy', pronunciation: 'kha-REED-na' },
        { word: 'कितने का? (Kitne ka?)', translation: 'How much?', pronunciation: 'KIT-nay kaa' },
        { word: 'कल (Kal)', translation: 'Yesterday/Tomorrow', pronunciation: 'kal' },
      ],
      grammar: [
        {
          rule: 'Simple past tense: verb stem + aa/ii/e + thaa/thi/the',
          examples: ['मैं गया। (I went - male)', 'वह आई। (She came.)', 'हम खेले। (We played.)']
        }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'What is the past tense of "जाना" (jaana - to go) for "मैं" (male)?', options: ['जाता हूँ', 'गया', 'जाऊँगा', 'जाता था'], correctAnswer: 'गया', points: 15 },
        { type: 'translation', question: 'Translate: "How much does this cost?"', options: ['यह क्या है?', 'यह कितने का है?', 'मुझे यह चाहिए', 'यह अच्छा है'], correctAnswer: 'यह कितने का है?', points: 20 },
        { type: 'fill-blank', question: 'मैंने कल बाज़ार से सब्जी _____। (I bought vegetables from the market yesterday)', options: ['खाई', 'खरीदी', 'बेची', 'लाई'], correctAnswer: 'खरीदी', points: 15 },
      ]
    },
    Advanced: {
      id: 'hi-adv',
      title: 'Advanced Hindi',
      description: 'Learn subjunctive mood, literary Hindi, and complex sentence structures.',
      duration: '60 min',
      rating: 4.4,
      vocabulary: [
        { word: 'तथापि (Tathapi)', translation: 'Nevertheless', pronunciation: 'tah-TAH-pee' },
        { word: 'यद्यपि (Yadyapi)', translation: 'Although', pronunciation: 'YAD-ya-pee' },
      ],
      grammar: [
        { rule: 'Subjunctive/Optative: used for wishes, possibilities. Verb + ए/एँ', examples: ['काश वह आए। (I wish he would come.)', 'शायद बारिश हो। (Maybe it will rain.)'] }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'Which sentence uses subjunctive correctly?', options: ['काश वह आता है', 'काश वह आए', 'काश वह आया', 'काश वह आएगा'], correctAnswer: 'काश वह आए', points: 20 },
        { type: 'translation', question: 'Translate: "Although it was difficult, he succeeded"', options: ['यद्यपि यह कठिन था, तथापि वह सफल हुआ', 'वह सफल था', 'यह कठिन है', 'वह कठिन था'], correctAnswer: 'यद्यपि यह कठिन था, तथापि वह सफल हुआ', points: 25 },
      ]
    }
  },
  Japanese: {
    Beginner: {
      id: 'ja-beg',
      title: 'Japanese for Beginners',
      description: 'Learn Hiragana basics, greetings, and essential Japanese phrases.',
      duration: '35 min',
      rating: 4.9,
      vocabulary: [
        { word: 'こんにちは (Konnichiwa)', translation: 'Hello/Good afternoon', pronunciation: 'kon-NEE-chee-wah' },
        { word: 'ありがとう (Arigatou)', translation: 'Thank you', pronunciation: 'ah-ree-GAH-toh' },
        { word: 'おはよう (Ohayou)', translation: 'Good morning', pronunciation: 'oh-HAH-yoh' },
        { word: 'さようなら (Sayounara)', translation: 'Goodbye', pronunciation: 'sah-yoh-NAH-rah' },
        { word: 'はい / いいえ (Hai/Iie)', translation: 'Yes / No', pronunciation: 'hai / ee-EH' },
        { word: 'わたしは (Watashi wa)', translation: 'I am / As for me', pronunciation: 'wah-TAH-shee wah' },
        { word: 'すみません (Sumimasen)', translation: 'Excuse me/Sorry', pronunciation: 'soo-mee-MAH-sen' },
        { word: 'わかりました (Wakarimashita)', translation: 'I understand', pronunciation: 'wah-kah-ree-MASH-tah' },
      ],
      grammar: [
        {
          rule: 'Japanese sentence structure: Subject は (wa) Object を (wo) Verb. Verb always comes last.',
          examples: ['わたしは がくせい です。(I am a student.)', 'かれは ほんを よみます。(He reads a book.)']
        },
        {
          rule: 'Polite form: verb + ます (masu). Negative: verb + ません (masen)',
          examples: ['たべます (I eat)', 'たべません (I don\'t eat)', 'のみます (I drink)']
        }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'What does "こんにちは" mean?', options: ['Goodbye', 'Good morning', 'Hello', 'Thank you'], correctAnswer: 'Hello', points: 10 },
        { type: 'fill-blank', question: 'わたし_____ がくせいです。(I am a student)', options: ['が', 'を', 'は', 'に'], correctAnswer: 'は', points: 10 },
        { type: 'translation', question: 'Translate: "Excuse me"', options: ['ありがとう', 'さようなら', 'すみません', 'はい'], correctAnswer: 'すみません', points: 15 },
        { type: 'multiple-choice', question: 'Where does the verb go in a Japanese sentence?', options: ['At the beginning', 'In the middle', 'At the end', 'After the subject'], correctAnswer: 'At the end', points: 10 },
        { type: 'sentence-completion', question: 'おはよう _____! (Good morning!)', options: ['さま', 'ございます', 'です', 'ます'], correctAnswer: 'ございます', points: 10 },
      ]
    },
    Intermediate: {
      id: 'ja-int',
      title: 'Japanese Intermediate',
      description: 'Learn て-form, daily routines, and practical conversations.',
      duration: '45 min',
      rating: 4.7,
      vocabulary: [
        { word: 'レストラン (Resutoran)', translation: 'Restaurant', pronunciation: 'res-toh-RAN' },
        { word: '注文する (Chuumon suru)', translation: 'To order', pronunciation: 'choo-MON soo-RU' },
        { word: 'おいしい (Oishii)', translation: 'Delicious', pronunciation: 'oh-ee-SHEE' },
        { word: 'きのう (Kinou)', translation: 'Yesterday', pronunciation: 'kee-NOH' },
      ],
      grammar: [
        { rule: 'て-form: used for sequential actions, requests, and connecting clauses', examples: ['たべて、ねます。(I eat and then sleep.)', 'みてください。(Please watch.)'] }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'What is the て-form of "たべる" (to eat)?', options: ['たべます', 'たべて', 'たべた', 'たべない'], correctAnswer: 'たべて', points: 15 },
        { type: 'translation', question: 'Translate: "This is delicious!"', options: ['これは おいしい！', 'これは たかい！', 'これは おおきい！', 'これは きれい！'], correctAnswer: 'これは おいしい！', points: 20 },
        { type: 'fill-blank', question: 'きのう、えいがを _____ 。(Yesterday, I watched a movie)', options: ['みます', 'みました', 'みて', 'みない'], correctAnswer: 'みました', points: 15 },
      ]
    },
    Advanced: {
      id: 'ja-adv',
      title: 'Advanced Japanese',
      description: 'Master keigo (polite language), passive voice, and complex grammar.',
      duration: '60 min',
      rating: 4.8,
      vocabulary: [
        { word: 'けいご (Keigo)', translation: 'Honorific/Polite language', pronunciation: 'kay-EE-goh' },
        { word: 'いらっしゃいます', translation: 'Is/Are (polite)', pronunciation: 'ee-rash-SHY-mas' },
      ],
      grammar: [
        { rule: 'Passive voice: verb stem + られる/れる', examples: ['しかられました。(I was scolded.)', 'ほめられました。(I was praised.)'] }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'What is the passive form of "たべる"?', options: ['たべます', 'たべられる', 'たべさせる', 'たべていた'], correctAnswer: 'たべられる', points: 20 },
        { type: 'translation', question: 'Translate the polite form: "Is the manager in?"', options: ['マネージャーはいらっしゃいますか？', 'マネージャーはいますか？', 'マネージャーがほしい', 'マネージャーを見た'], correctAnswer: 'マネージャーはいらっしゃいますか？', points: 25 },
      ]
    }
  },
  Chinese: {
    Beginner: {
      id: 'zh-beg',
      title: 'Chinese (Mandarin) for Beginners',
      description: 'Learn tones, Pinyin, and essential Mandarin phrases.',
      duration: '35 min',
      rating: 4.8,
      vocabulary: [
        { word: '你好 (Nǐ hǎo)', translation: 'Hello', pronunciation: 'nee how (tone 3-3)' },
        { word: '谢谢 (Xièxiè)', translation: 'Thank you', pronunciation: 'shyeh-shyeh (tone 4-4)' },
        { word: '早上好 (Zǎoshang hǎo)', translation: 'Good morning', pronunciation: 'dzow-shang how' },
        { word: '再见 (Zàijiàn)', translation: 'Goodbye', pronunciation: 'dzye-jyen (tone 4-4)' },
        { word: '是/不是 (Shì/Bùshì)', translation: 'Yes (it is) / No (it is not)', pronunciation: 'shur / boo-shur' },
        { word: '我叫 (Wǒ jiào)', translation: 'My name is', pronunciation: 'woh jyow' },
        { word: '对不起 (Duìbuqǐ)', translation: 'Sorry', pronunciation: 'dway-boo-chee' },
        { word: '不客气 (Bù kèqi)', translation: 'You\'re welcome', pronunciation: 'boo keh-chee' },
      ],
      grammar: [
        {
          rule: 'Mandarin has 4 tones + neutral tone: ā (flat), á (rising), ǎ (dipping), à (falling)',
          examples: ['mā (mother)', 'má (hemp)', 'mǎ (horse)', 'mà (scold)']
        },
        {
          rule: 'Basic sentence: Subject + Verb + Object (same as English)',
          examples: ['我吃饭。(I eat rice.)', '他是学生。(He is a student.)']
        }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'What does "你好" mean?', options: ['Goodbye', 'Thank you', 'Hello', 'Sorry'], correctAnswer: 'Hello', points: 10 },
        { type: 'multiple-choice', question: 'Which tone is "falling" (4th tone)?', options: ['ā', 'á', 'ǎ', 'à'], correctAnswer: 'à', points: 10 },
        { type: 'fill-blank', question: '我 _____ 李明。(My name is Li Ming)', options: ['是', '叫', '有', '去'], correctAnswer: '叫', points: 10 },
        { type: 'translation', question: 'Translate: "Good morning"', options: ['你好', '再见', '早上好', '谢谢'], correctAnswer: '早上好', points: 15 },
        { type: 'sentence-completion', question: '对不 _____！(Sorry!)', options: ['好', '起', '谢', '见'], correctAnswer: '起', points: 10 },
      ]
    },
    Intermediate: {
      id: 'zh-int',
      title: 'Chinese Intermediate',
      description: 'Learn measure words, past tense with 了, and shopping phrases.',
      duration: '45 min',
      rating: 4.6,
      vocabulary: [
        { word: '商店 (Shāngdiàn)', translation: 'Store/Shop', pronunciation: 'shang-dyen' },
        { word: '买 (Mǎi)', translation: 'To buy', pronunciation: 'my' },
        { word: '多少钱？(Duōshǎo qián?)', translation: 'How much money?', pronunciation: 'dwoh-shaow chyen' },
        { word: '昨天 (Zuótiān)', translation: 'Yesterday', pronunciation: 'dzwoh-tyen' },
      ],
      grammar: [
        { rule: '了 (le) indicates completed action', examples: ['我吃了。(I have eaten.)', '他去了北京。(He has gone to Beijing.)'] }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'What does 了 indicate in a sentence?', options: ['Future action', 'Completed action', 'Ongoing action', 'Repeated action'], correctAnswer: 'Completed action', points: 15 },
        { type: 'translation', question: 'Translate: "How much does this cost?"', options: ['这个多少钱？', '这个是什么？', '我要买这个', '这个很好'], correctAnswer: '这个多少钱？', points: 20 },
        { type: 'fill-blank', question: '我昨天 _____ 了一本书。(I bought a book yesterday)', options: ['吃', '喝', '买', '看'], correctAnswer: '买', points: 15 },
      ]
    },
    Advanced: {
      id: 'zh-adv',
      title: 'Advanced Chinese',
      description: 'Master chengyu (idioms), complex grammar patterns, and formal writing.',
      duration: '60 min',
      rating: 4.7,
      vocabulary: [
        { word: '一石二鸟 (Yī shí èr niǎo)', translation: 'Kill two birds with one stone', pronunciation: 'ee shur ar nyow' },
        { word: '马到成功 (Mǎ dào chéng gōng)', translation: 'Immediate success', pronunciation: 'maa daow cheng goong' },
      ],
      grammar: [
        { rule: 'Using 虽然...但是 (suīrán...dànshì): Although...but', examples: ['虽然很难，但是我会坚持。(Although it\'s hard, I will persist.)'] }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'What does "一石二鸟" mean?', options: ['One stone, one bird', 'Kill two birds with one stone', 'Two stones, one bird', 'A stone in a pond'], correctAnswer: 'Kill two birds with one stone', points: 20 },
        { type: 'translation', question: 'Translate: "Although it is expensive, I will buy it"', options: ['虽然很贵，但是我会买', '它很贵', '我要买它', '它不贵'], correctAnswer: '虽然很贵，但是我会买', points: 25 },
      ]
    }
  },
  Arabic: {
    Beginner: {
      id: 'ar-beg',
      title: 'Arabic for Beginners',
      description: 'Learn the Arabic alphabet, greetings, and basic expressions.',
      duration: '35 min',
      rating: 4.6,
      vocabulary: [
        { word: 'مرحبا (Marhaba)', translation: 'Hello', pronunciation: 'MAR-ha-ba' },
        { word: 'شكرا (Shukran)', translation: 'Thank you', pronunciation: 'SHOOK-ran' },
        { word: 'من فضلك (Min fadlak)', translation: 'Please', pronunciation: 'min FAD-lak' },
        { word: 'صباح الخير (Sabah al-khayr)', translation: 'Good morning', pronunciation: 'SAH-bah al-KHAYR' },
        { word: 'مع السلامة (Ma\'a salama)', translation: 'Goodbye', pronunciation: 'MAA-ah sa-LAA-ma' },
        { word: 'اسمي (Ismi)', translation: 'My name is', pronunciation: 'IS-mee' },
        { word: 'نعم / لا (Na\'am/La)', translation: 'Yes / No', pronunciation: 'nah-AM / lah' },
        { word: 'آسف (Aasif)', translation: 'Sorry', pronunciation: 'AAH-sif' },
      ],
      grammar: [
        {
          rule: 'Arabic is read right-to-left. The alphabet has 28 letters, each with 4 forms.',
          examples: ['ب - ba (beginning/middle/end/alone forms)', 'Arabic script is cursive']
        },
        {
          rule: 'Verb "to be" is implicit in present tense: أنا طالب = I (am) student',
          examples: ['أنا طالب (I am a student)', 'هو مدرس (He is a teacher)']
        }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'What does "شكرا" mean?', options: ['Hello', 'Goodbye', 'Thank you', 'Please'], correctAnswer: 'Thank you', points: 10 },
        { type: 'multiple-choice', question: 'In which direction is Arabic read?', options: ['Left-to-right', 'Right-to-left', 'Top-to-bottom', 'Bottom-to-top'], correctAnswer: 'Right-to-left', points: 10 },
        { type: 'fill-blank', question: 'صباح _____ (Good morning - reply)', options: ['الليل', 'النور', 'المساء', 'الخير'], correctAnswer: 'النور', points: 10 },
        { type: 'translation', question: 'Translate: "My name is Ahmed"', options: ['أنا أحمد', 'اسمي أحمد', 'أحمد هنا', 'هو أحمد'], correctAnswer: 'اسمي أحمد', points: 15 },
        { type: 'sentence-completion', question: 'مع ال_____! (Goodbye!)', options: ['خير', 'نور', 'سلامة', 'صباح'], correctAnswer: 'سلامة', points: 10 },
      ]
    },
    Intermediate: {
      id: 'ar-int',
      title: 'Arabic Intermediate',
      description: 'Learn verb conjugation patterns, plural forms, and conversational Arabic.',
      duration: '45 min',
      rating: 4.4,
      vocabulary: [
        { word: 'السوق (Al-sooq)', translation: 'The market', pronunciation: 'al-SOOK' },
        { word: 'اشترى (Ishtara)', translation: 'To buy', pronunciation: 'ish-TA-ra' },
        { word: 'بكم هذا؟ (Bikam hatha?)', translation: 'How much is this?', pronunciation: 'bi-KAM HA-tha' },
        { word: 'أمس (Ams)', translation: 'Yesterday', pronunciation: 'ams' },
      ],
      grammar: [
        { rule: 'Arabic verbs are based on 3-letter roots. Past tense: kataba (he wrote), katabtu (I wrote)', examples: ['كتب (kataba - he wrote)', 'كتبت (katabtu - I wrote)', 'كتبنا (katabnaa - we wrote)'] }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'What is the past tense of "write" for "I"?', options: ['كتب', 'كتبت', 'كتبنا', 'يكتب'], correctAnswer: 'كتبت', points: 15 },
        { type: 'translation', question: 'Translate: "How much is this?"', options: ['ما هذا؟', 'بكم هذا؟', 'أين هذا؟', 'متى هذا؟'], correctAnswer: 'بكم هذا؟', points: 20 },
        { type: 'fill-blank', question: 'أمس، _____ كتابا من السوق. (Yesterday, I bought a book from the market)', options: ['قرأت', 'اشتريت', 'كتبت', 'أكلت'], correctAnswer: 'اشتريت', points: 15 },
      ]
    },
    Advanced: {
      id: 'ar-adv',
      title: 'Advanced Arabic',
      description: 'Master Modern Standard Arabic, complex grammar, and literary expressions.',
      duration: '60 min',
      rating: 4.5,
      vocabulary: [
        { word: 'على الرغم من (Ala al-raghm min)', translation: 'Despite/In spite of', pronunciation: 'AH-la al-RAGM min' },
        { word: 'فضلا عن (Fadlan an)', translation: 'In addition to', pronunciation: 'FAD-lan an' },
      ],
      grammar: [
        { rule: 'Conditional sentences: لو (law) + past = hypothetical condition', examples: ['لو كنت طيارا لطرت حول العالم. (If I were a pilot, I would fly around the world.)'] }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'Which word introduces a hypothetical condition in Arabic?', options: ['إذا', 'لو', 'عندما', 'لأن'], correctAnswer: 'لو', points: 20 },
        { type: 'translation', question: 'Translate: "Despite the difficulty, he succeeded"', options: ['على الرغم من الصعوبة، نجح', 'إنه صعب', 'هو نجح', 'الصعوبة كبيرة'], correctAnswer: 'على الرغم من الصعوبة، نجح', points: 25 },
      ]
    }
  }
};

export const getLessonData = (language, level) => {
  return lessonsData[language]?.[level] || null;
};



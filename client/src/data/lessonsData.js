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

    { type: 'sentence-completion', question: 'Buenas _____', options: ['noches', 'días'], correctAnswer: 'noches', points: 10 },

    // Additional questions to expand
    { type: 'multiple-choice', question: '"Adiós" means?', options: ['Hello', 'Goodbye', 'Thank you'], correctAnswer: 'Goodbye', points: 10 },
    { type: 'multiple-choice', question: '"Por favor" means?', options: ['Please', 'Thank you', 'Sorry'], correctAnswer: 'Please', points: 10 },
    { type: 'fill-blank', question: '¿Cómo _____? (How are you?)', options: ['estás', 'soy', 'llamo'], correctAnswer: 'estás', points: 10 },
    { type: 'fill-blank', question: 'Soy de _____ (I am from)', options: ['México', 'Hola', 'Gracias'], correctAnswer: 'México', points: 10 },
    { type: 'translation', question: 'Goodbye', options: ['Adiós', 'Hola', 'Gracias'], correctAnswer: 'Adiós', points: 15 },
    { type: 'spelling', question: 'Correct spelling?', options: ['Adios', 'Adiós'], correctAnswer: 'Adiós', points: 10 },
    { type: 'error-detection', question: 'Wrong sentence?', options: ['Hola, cómo estás', 'Hola, cómo estas'], correctAnswer: 'Hola, cómo estas', points: 15 },
    { type: 'sentence-correction', question: 'Correct sentence?', options: ['Yo llamo María', 'Me llamo María'], correctAnswer: 'Me llamo María', points: 15 },
    { type: 'sentence-completion', question: 'De _____ (You\'re welcome)', options: ['nada', 'hola'], correctAnswer: 'nada', points: 10 },
    { type: 'multiple-choice', question: '"Buenos días" is used for?', options: ['Morning', 'Evening', 'Night'], correctAnswer: 'Morning', points: 10 },
    { type: 'multiple-choice', question: '"Buenas noches" is used for?', options: ['Morning', 'Evening', 'Night'], correctAnswer: 'Night', points: 10 },
    { type: 'fill-blank', question: 'Hasta _____ (See you later)', options: ['luego', 'mañana'], correctAnswer: 'luego', points: 10 },
    { type: 'translation', question: 'Please', options: ['Por favor', 'Gracias', 'Hola'], correctAnswer: 'Por favor', points: 15 },
    { type: 'spelling', question: 'Correct?', options: ['Gracias', 'Grasias'], correctAnswer: 'Gracias', points: 10 },
    { type: 'error-detection', question: 'Wrong?', options: ['Me llamo Ana', 'Yo llamo Ana'], correctAnswer: 'Yo llamo Ana', points: 15 },
    { type: 'sentence-correction', question: 'Fix:', options: ['Soy estudiante', 'Yo soy estudiante'], correctAnswer: 'Soy estudiante', points: 15 },
    { type: 'sentence-completion', question: '¿Qué _____? (What\'s your name?)', options: ['tal', 'llamas'], correctAnswer: 'tal', points: 10 }
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

        // Additional questions to expand
        { type: 'multiple-choice', question: 'Past tense of "comer" (yo)?', options: ['como', 'comí', 'comeré', 'comía'], correctAnswer: 'comí', points: 15 },
        { type: 'translation', question: 'Translate: "Last week I went to the market"', options: ['La semana pasada fui al mercado', 'Esta semana voy al mercado', 'La próxima semana iré al mercado', 'Ayer fui al mercado'], correctAnswer: 'La semana pasada fui al mercado', points: 20 },
        { type: 'fill-blank', question: 'Ella _____ una pizza. (She ate a pizza)', options: ['come', 'comió', 'comerá', 'comía'], correctAnswer: 'comió', points: 15 },
        { type: 'sentence-completion', question: 'Este libro es muy _____. (This book is very expensive)', options: ['barato', 'caro', 'nuevo', 'viejo'], correctAnswer: 'caro', points: 10 },
        { type: 'multiple-choice', question: 'What does "ayer" mean?', options: ['Today', 'Yesterday', 'Tomorrow', 'Last week'], correctAnswer: 'Yesterday', points: 10 },
        { type: 'multiple-choice', question: 'Past tense of "vivir" (ellos)?', options: ['viven', 'vivieron', 'vivirán', 'vivían'], correctAnswer: 'vivieron', points: 15 },
        { type: 'translation', question: 'Translate: "How much does it cost?"', options: ['¿Cuánto cuesta?', '¿Qué cuesta?', '¿Dónde cuesta?', '¿Cuándo cuesta?'], correctAnswer: '¿Cuánto cuesta?', points: 20 },
        { type: 'fill-blank', question: 'Nosotros _____ comida en el mercado. (We bought food in the market)', options: ['compramos', 'compramos', 'compraremos', 'comprábamos'], correctAnswer: 'compramos', points: 15 },
        { type: 'sentence-completion', question: 'La semana pasada, yo _____ con amigos. (Last week, I spoke with friends)', options: ['hablo', 'hablé', 'hablaré', 'hablaba'], correctAnswer: 'hablé', points: 10 },
        { type: 'multiple-choice', question: 'What does "caro" mean?', options: ['Cheap', 'Expensive', 'New', 'Old'], correctAnswer: 'Expensive', points: 10 },
        { type: 'multiple-choice', question: 'Past tense of "ir" (yo)?', options: ['voy', 'fui', 'iré', 'iba'], correctAnswer: 'fui', points: 15 },
        { type: 'translation', question: 'Translate: "I lived in Spain last year"', options: ['Viví en España el año pasado', 'Vivo en España este año', 'Viviré en España el próximo año', 'Vivía en España el año pasado'], correctAnswer: 'Viví en España el año pasado', points: 20 },
        { type: 'fill-blank', question: 'Ellos _____ al cine ayer. (They went to the cinema yesterday)', options: ['van', 'fueron', 'irán', 'iban'], correctAnswer: 'fueron', points: 15 },
        { type: 'sentence-completion', question: '¿Cuánto _____ esta camisa? (How much does this shirt cost?)', options: ['cuesta', 'cuestan', 'cueste', 'cuestaba'], correctAnswer: 'cuesta', points: 10 },
        { type: 'multiple-choice', question: 'What does "la semana pasada" mean?', options: ['This week', 'Last week', 'Next week', 'Every week'], correctAnswer: 'Last week', points: 10 }
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

        // Additional questions to expand
        { type: 'multiple-choice', question: 'Subjunctive after "dudar"?', options: ['Dudo que venga', 'Dudo que viene', 'Dudo que vino', 'Dudo que vendrá'], correctAnswer: 'Dudo que venga', points: 20 },
        { type: 'translation', question: 'Translate: "I doubt that it is true"', options: ['Dudo que sea verdad', 'Dudo que es verdad', 'Dudo que fue verdad', 'Dudo que será verdad'], correctAnswer: 'Dudo que sea verdad', points: 25 },
        { type: 'fill-blank', question: 'Espero que _____ llueva mañana. (I hope it rains tomorrow)', options: ['llueva', 'llueve', 'llovió', 'lloverá'], correctAnswer: 'llueva', points: 20 },
        { type: 'sentence-completion', question: 'Quiero que tú _____ conmigo. (I want you to come with me)', options: ['vienes', 'vengas', 'viniste', 'vendrás'], correctAnswer: 'vengas', points: 20 },
        { type: 'multiple-choice', question: 'What does "sin embargo" mean?', options: ['However', 'Therefore', 'Because', 'Although'], correctAnswer: 'However', points: 15 },
        { type: 'multiple-choice', question: 'Subjunctive after "sentir"?', options: ['Siento que venga', 'Siento que viene', 'Siento que vino', 'Siento que vendrá'], correctAnswer: 'Siento que venga', points: 20 },
        { type: 'translation', question: 'Translate: "In spite of the rain, we went out"', options: ['A pesar de la lluvia, salimos', 'A causa de la lluvia, salimos', 'Debido a la lluvia, salimos', 'Sin la lluvia, salimos'], correctAnswer: 'A pesar de la lluvia, salimos', points: 25 },
        { type: 'fill-blank', question: 'No quiero que él _____ tarde. (I don\'t want him to be late)', options: ['llega', 'llegue', 'llegó', 'llegará'], correctAnswer: 'llegue', points: 20 },
        { type: 'sentence-completion', question: 'Dudo que _____ posible. (I doubt it\'s possible)', options: ['es', 'sea', 'fue', 'será'], correctAnswer: 'sea', points: 20 },
        { type: 'multiple-choice', question: 'What does "a pesar de" mean?', options: ['In spite of', 'Because of', 'Due to', 'Instead of'], correctAnswer: 'In spite of', points: 15 },
        { type: 'multiple-choice', question: 'Subjunctive after "temer"?', options: ['Temo que venga', 'Temo que viene', 'Temo que vino', 'Temo que vendrá'], correctAnswer: 'Temo que venga', points: 20 },
        { type: 'translation', question: 'Translate: "Nevertheless, I will try"', options: ['Sin embargo, intentaré', 'Por lo tanto, intentaré', 'Porque, intentaré', 'Aunque, intentaré'], correctAnswer: 'Sin embargo, intentaré', points: 25 },
        { type: 'fill-blank', question: 'Es importante que _____ temprano. (It\'s important that you arrive early)', options: ['llegas', 'llegues', 'llegaste', 'llegarás'], correctAnswer: 'llegues', points: 20 },
        { type: 'sentence-completion', question: 'Siento que no _____ aquí. (I\'m sorry you\'re not here)', options: ['estás', 'estés', 'estuviste', 'estarás'], correctAnswer: 'estés', points: 20 },
        { type: 'multiple-choice', question: 'What does "desenvolverse" mean?', options: ['To manage', 'To develop', 'To involve', 'To solve'], correctAnswer: 'To manage', points: 15 }
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

        // Additional questions to expand
        { type: 'multiple-choice', question: 'How do you say "Please" in French?', options: ['Merci', 'S\'il vous plaît', 'Bonjour', 'Au revoir'], correctAnswer: 'S\'il vous plaît', points: 10 },
        { type: 'fill-blank', question: 'Je _____ étudiant. (I am a student)', options: ['suis', 'es', 'est', 'sommes'], correctAnswer: 'suis', points: 10 },
        { type: 'translation', question: 'Translate: "Nice to meet you"', options: ['Enchanté', 'Bonjour', 'Merci', 'Au revoir'], correctAnswer: 'Enchanté', points: 15 },
        { word: 'What is the French word for "the house" (feminine)?', options: ['Le maison', 'La maison', 'Un maison', 'Les maisons'], correctAnswer: 'La maison', points: 10 },
        { type: 'sentence-completion', question: '_____ revoir! (Goodbye!)', options: ['Au', 'Bon', 'Merci', 'Enchanté'], correctAnswer: 'Au', points: 10 },
        { type: 'multiple-choice', question: '"Oui" means?', options: ['No', 'Yes', 'Hello', 'Goodbye'], correctAnswer: 'Yes', points: 10 },
        { type: 'fill-blank', question: 'Elle _____ française. (She is French)', options: ['suis', 'es', 'est', 'sommes'], correctAnswer: 'est', points: 10 },
        { type: 'translation', question: 'Translate: "Good morning"', options: ['Bonjour', 'Bonsoir', 'Au revoir', 'Merci'], correctAnswer: 'Bonjour', points: 15 },
        { type: 'multiple-choice', question: 'What is the article for "chat" (cat, masc)?', options: ['La', 'Le', 'Les', 'Un'], correctAnswer: 'Le', points: 10 },
        { type: 'sentence-completion', question: 'S\'il vous _____! (Please!)', options: ['plaît', 'merci', 'bonjour', 'revoir'], correctAnswer: 'plaît', points: 10 },
        { type: 'multiple-choice', question: '"Non" means?', options: ['Yes', 'No', 'Hello', 'Thank you'], correctAnswer: 'No', points: 10 },
        { type: 'fill-blank', question: 'Nous _____ étudiants. (We are students)', options: ['suis', 'es', 'est', 'sommes'], correctAnswer: 'sommes', points: 10 },
        { type: 'translation', question: 'Translate: "You\'re welcome"', options: ['De rien', 'Merci', 'Bonjour', 'Au revoir'], correctAnswer: 'De rien', points: 15 },
        { type: 'multiple-choice', question: 'What is the plural of "le livre"?', options: ['La livre', 'Les livres', 'Un livre', 'Les livre'], correctAnswer: 'Les livres', points: 10 },
        { type: 'sentence-completion', question: 'Enchanté _____ vous rencontrer. (Nice to meet you)', options: ['de', 'à', 'par', 'pour'], correctAnswer: 'de', points: 10 }
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

        // Additional questions to expand
        { type: 'multiple-choice', question: 'Passé composé of "parler" (il)?', options: ['il parle', 'il a parlé', 'il parlait', 'il parlera'], correctAnswer: 'il a parlé', points: 15 },
        { type: 'translation', question: 'Translate: "This is delicious"', options: ['C\'est délicieux', 'Je voudrais manger', 'L\'addition, s\'il vous plaît', 'Au revoir'], correctAnswer: 'C\'est délicieux', points: 20 },
        { type: 'fill-blank', question: 'Elle _____ une pizza. (She ordered a pizza)', options: ['commande', 'a commandé', 'commandait', 'commandera'], correctAnswer: 'a commandé', points: 15 },
        { type: 'sentence-completion', question: 'Au restaurant, nous _____ du vin. (At the restaurant, we drank wine)', options: ['buvons', 'avons bu', 'buvions', 'boirons'], correctAnswer: 'avons bu', points: 15 },
        { type: 'multiple-choice', question: 'What does "hier" mean?', options: ['Today', 'Yesterday', 'Tomorrow', 'Last week'], correctAnswer: 'Yesterday', points: 10 },
        { type: 'multiple-choice', question: 'Passé composé of "aller" (elle)?', options: ['elle va', 'elle est allée', 'elle allait', 'elle ira'], correctAnswer: 'elle est allée', points: 15 },
        { type: 'translation', question: 'Translate: "I ate at the restaurant yesterday"', options: ['J\'ai mangé au restaurant hier', 'Je mange au restaurant aujourd\'hui', 'Je mangerai au restaurant demain', 'Je mangeais au restaurant hier'], correctAnswer: 'J\'ai mangé au restaurant hier', points: 20 },
        { type: 'fill-blank', question: 'Ils _____ l\'addition. (They asked for the bill)', options: ['demandent', 'ont demandé', 'demandaient', 'demanderont'], correctAnswer: 'ont demandé', points: 15 },
        { type: 'sentence-completion', question: 'La nourriture était très _____. (The food was very delicious)', options: ['mauvais', 'bon', 'délicieux', 'cher'], correctAnswer: 'délicieux', points: 10 },
        { type: 'multiple-choice', question: 'What does "commander" mean?', options: ['To eat', 'To order', 'To pay', 'To leave'], correctAnswer: 'To order', points: 10 },
        { type: 'multiple-choice', question: 'Passé composé of "finir" (nous)?', options: ['nous finissons', 'nous avons fini', 'nous finissions', 'nous finirons'], correctAnswer: 'nous avons fini', points: 15 },
        { type: 'translation', question: 'Translate: "We paid the bill"', options: ['Nous avons payé l\'addition', 'Nous payons l\'addition', 'Nous payerons l\'addition', 'Nous payions l\'addition'], correctAnswer: 'Nous avons payé l\'addition', points: 20 },
        { type: 'fill-blank', question: 'Tu _____ au cinéma hier. (You went to the cinema yesterday)', options: ['vas', 'es allé', 'allais', 'iras'], correctAnswer: 'es allé', points: 15 },
        { type: 'sentence-completion', question: 'Hier, j\'ai _____ une salade. (Yesterday, I ate a salad)', options: ['mangé', 'mange', 'mangeais', 'mangerai'], correctAnswer: 'mangé', points: 15 },
        { type: 'multiple-choice', question: 'What does "l\'addition" mean?', options: ['The menu', 'The bill', 'The food', 'The table'], correctAnswer: 'The bill', points: 10 }
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

        // Additional questions to expand
        { type: 'multiple-choice', question: 'Subjunctive after "vouloir": "Je veux que tu _____ (partir)"', options: ['pars', 'partes', 'partais', 'partiras'], correctAnswer: 'partes', points: 20 },
        { type: 'translation', question: 'Translate: "I doubt that he comes"', options: ['Je doute qu\'il vienne', 'Je doute qu\'il vient', 'Je doute qu\'il venait', 'Je doute qu\'il viendra'], correctAnswer: 'Je doute qu\'il vienne', points: 25 },
        { type: 'fill-blank', question: 'Il est important que vous _____ tôt. (It\'s important that you arrive early)', options: ['arrivez', 'arriviez', 'arriviez', 'arriverez'], correctAnswer: 'arriviez', points: 20 },
        { type: 'sentence-completion', question: 'Bien que je _____ fatigué, je continue. (Although I am tired, I continue)', options: ['sois', 'suis', 'étais', 'serai'], correctAnswer: 'sois', points: 20 },
        { type: 'multiple-choice', question: 'What does "néanmoins" mean?', options: ['However', 'Therefore', 'Because', 'Although'], correctAnswer: 'However', points: 15 },
        { type: 'multiple-choice', question: 'Subjunctive after "craindre": "Je crains qu\'il _____ (pleuvoir)"', options: ['pleut', 'pleuve', 'pleuvait', 'pleuvra'], correctAnswer: 'pleuve', points: 20 },
        { type: 'translation', question: 'Translate: "Nevertheless, he succeeded"', options: ['Néanmoins, il a réussi', 'Pourtant, il a réussi', 'Cependant, il a réussi', 'Malgré, il a réussi'], correctAnswer: 'Néanmoins, il a réussi', points: 25 },
        { type: 'fill-blank', question: 'Je souhaite que tu _____ heureux. (I wish you were happy)', options: ['es', 'sois', 'étais', 'seras'], correctAnswer: 'sois', points: 20 },
        { type: 'sentence-completion', question: 'Il faut que nous _____ maintenant. (We must leave now)', options: ['partons', 'partions', 'partions', 'partirons'], correctAnswer: 'partions', points: 20 },
        { type: 'multiple-choice', question: 'What does "pourtant" mean?', options: ['Nevertheless', 'Therefore', 'Because', 'Although'], correctAnswer: 'Nevertheless', points: 15 },
        { type: 'multiple-choice', question: 'Subjunctive after "bien que": "Bien qu\'il _____ riche, il est humble."', options: ['est', 'soit', 'était', 'sera'], correctAnswer: 'soit', points: 20 },
        { type: 'translation', question: 'Translate: "I am afraid that it rains"', options: ['Je crains qu\'il pleuve', 'Je crains qu\'il pleut', 'Je crains qu\'il pleuvait', 'Je crains qu\'il pleuvra'], correctAnswer: 'Je crains qu\'il pleuve', points: 25 },
        { type: 'fill-blank', question: 'Elle veut que je _____ avec elle. (She wants me to go with her)', options: ['vais', 'aille', 'allais', 'irai'], correctAnswer: 'aille', points: 20 },
        { type: 'sentence-completion', question: 'Malgré qu\'il _____ tard, nous attendons. (Although he is late, we wait)', options: ['est', 'soit', 'était', 'sera'], correctAnswer: 'soit', points: 20 },
        { type: 'multiple-choice', question: 'What does "se débrouiller" mean?', options: ['To manage', 'To develop', 'To involve', 'To solve'], correctAnswer: 'To manage', points: 15 }
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

        // Additional questions to expand
        { type: 'multiple-choice', question: 'How do you say "Thank you" in German?', options: ['Hallo', 'Danke', 'Bitte', 'Ja'], correctAnswer: 'Danke', points: 10 },
        { type: 'fill-blank', question: 'Ich _____ Student. (I am a student)', options: ['bin', 'bist', 'ist', 'sind'], correctAnswer: 'bin', points: 10 },
        { type: 'multiple-choice', question: 'What is the article for "Mann" (man)?', options: ['der', 'das', 'die', 'ein'], correctAnswer: 'der', points: 10 },
        { type: 'translation', question: 'Translate: "You\'re welcome"', options: ['Bitte', 'Danke', 'Hallo', 'Auf Wiedersehen'], correctAnswer: 'Bitte', points: 15 },
        { type: 'sentence-completion', question: '_____ Wiedersehen! (Goodbye!)', options: ['Auf', 'Guten', 'Danke', 'Bitte'], correctAnswer: 'Auf', points: 10 },
        { type: 'multiple-choice', question: '"Ja" means?', options: ['No', 'Yes', 'Hello', 'Goodbye'], correctAnswer: 'Yes', points: 10 },
        { type: 'fill-blank', question: 'Sie _____ Ärztin. (She is a doctor)', options: ['bin', 'bist', 'ist', 'sind'], correctAnswer: 'ist', points: 10 },
        { type: 'multiple-choice', question: 'What is the article for "Kind" (child)?', options: ['der', 'das', 'die', 'ein'], correctAnswer: 'das', points: 10 },
        { type: 'translation', question: 'Translate: "Hello"', options: ['Hallo', 'Danke', 'Bitte', 'Ja'], correctAnswer: 'Hallo', points: 15 },
        { type: 'sentence-completion', question: 'Entschuldigung, _____! (Excuse me!)', options: ['bitte', 'danke', 'hallo', 'wiedersehen'], correctAnswer: 'bitte', points: 10 },
        { type: 'multiple-choice', question: '"Nein" means?', options: ['Yes', 'No', 'Hello', 'Thank you'], correctAnswer: 'No', points: 10 },
        { type: 'fill-blank', question: 'Wir _____ Studenten. (We are students)', options: ['bin', 'bist', 'ist', 'sind'], correctAnswer: 'sind', points: 10 },
        { type: 'multiple-choice', question: 'What is the plural of "der Mann"?', options: ['die Männer', 'das Männer', 'der Männer', 'ein Männer'], correctAnswer: 'die Männer', points: 10 },
        { type: 'translation', question: 'Translate: "Good morning"', options: ['Guten Morgen', 'Guten Abend', 'Auf Wiedersehen', 'Danke'], correctAnswer: 'Guten Morgen', points: 15 },
        { type: 'sentence-completion', question: 'Ich heiße _____. (My name is)', options: ['Anna', 'bin', 'ist', 'sind'], correctAnswer: 'Anna', points: 10 }
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

        // Additional questions to expand
        { type: 'multiple-choice', question: 'Which modal verb means "want"?', options: ['können', 'wollen', 'müssen', 'dürfen'], correctAnswer: 'wollen', points: 15 },
        { type: 'translation', question: 'Translate: "You must learn"', options: ['Du musst lernen', 'Du kannst lernen', 'Du willst lernen', 'Du darfst lernen'], correctAnswer: 'Du musst lernen', points: 20 },
        { type: 'fill-blank', question: 'Er _____ nach Deutschland fahren. (He wants to travel to Germany)', options: ['muss', 'will', 'kann', 'darf'], correctAnswer: 'will', points: 15 },
        { type: 'sentence-completion', question: 'Am Bahnhof, ich _____ eine Fahrkarte. (At the train station, I would like a ticket)', options: ['möchte', 'muss', 'kann', 'darf'], correctAnswer: 'möchte', points: 15 },
        { type: 'multiple-choice', question: 'What does "fahren" mean?', options: ['To walk', 'To drive', 'To fly', 'To swim'], correctAnswer: 'To drive', points: 10 },
        { type: 'multiple-choice', question: 'Which modal verb means "may"?', options: ['können', 'wollen', 'müssen', 'dürfen'], correctAnswer: 'dürfen', points: 15 },
        { type: 'translation', question: 'Translate: "I can help you"', options: ['Ich kann dir helfen', 'Ich muss dir helfen', 'Ich will dir helfen', 'Ich darf dir helfen'], correctAnswer: 'Ich kann dir helfen', points: 20 },
        { type: 'fill-blank', question: 'Sie _____ ins Kino gehen. (She may go to the cinema)', options: ['muss', 'will', 'kann', 'darf'], correctAnswer: 'darf', points: 15 },
        { type: 'sentence-completion', question: 'Mit dem Zug, wir _____ nach München. (By train, we travel to Munich)', options: ['fahren', 'gehen', 'laufen', 'fliegen'], correctAnswer: 'fahren', points: 10 },
        { type: 'multiple-choice', question: 'What does "der Bahnhof" mean?', options: ['The airport', 'The train station', 'The bus stop', 'The hotel'], correctAnswer: 'The train station', points: 10 },
        { type: 'multiple-choice', question: 'Which modal verb means "can"?', options: ['können', 'wollen', 'müssen', 'dürfen'], correctAnswer: 'können', points: 15 },
        { type: 'translation', question: 'Translate: "We must hurry"', options: ['Wir müssen uns beeilen', 'Wir können uns beeilen', 'Wir wollen uns beeilen', 'Wir dürfen uns beeilen'], correctAnswer: 'Wir müssen uns beeilen', points: 20 },
        { type: 'fill-blank', question: 'Du _____ das nicht tun. (You may not do that)', options: ['muss', 'will', 'kann', 'darf'], correctAnswer: 'darf', points: 15 },
        { type: 'sentence-completion', question: 'Ich möchte _____ Kaffee. (I would like coffee)', options: ['einen', 'eine', 'ein', 'der'], correctAnswer: 'einen', points: 10 },
        { type: 'multiple-choice', question: 'What does "der Zug" mean?', options: ['The car', 'The train', 'The plane', 'The boat'], correctAnswer: 'The train', points: 10 }
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

        // Additional questions to expand
        { type: 'multiple-choice', question: 'Konjunktiv II: "Wenn ich Zeit _____, würde ich helfen." (If I had time, I would help)', options: ['habe', 'hatte', 'hätte', 'haben'], correctAnswer: 'hätte', points: 20 },
        { type: 'translation', question: 'Translate: "I would like to visit Germany"', options: ['Ich würde Deutschland besuchen', 'Ich besuche Deutschland', 'Ich habe Deutschland besucht', 'Ich werde Deutschland besuchen'], correctAnswer: 'Ich würde Deutschland besuchen', points: 25 },
        { type: 'fill-blank', question: 'Wenn du reich _____, was würdest du tun? (If you were rich, what would you do?)', options: ['bist', 'warst', 'wärest', 'sein'], correctAnswer: 'wärest', points: 20 },
        { type: 'sentence-completion', question: 'Ich _____ das Buch lesen, wenn ich Zeit hätte. (I would read the book if I had time)', options: ['würde', 'werde', 'habe', 'hatte'], correctAnswer: 'würde', points: 20 },
        { type: 'multiple-choice', question: 'What does "allerdings" mean?', options: ['However', 'Therefore', 'Because', 'Although'], correctAnswer: 'However', points: 15 },
        { type: 'multiple-choice', question: 'Konjunktiv II: "Wenn er käme, _____ ich glücklich." (If he came, I would be happy)', options: ['bin', 'war', 'wäre', 'sein'], correctAnswer: 'wäre', points: 20 },
        { type: 'translation', question: 'Translate: "Nevertheless, I agree"', options: ['Nichtsdestotrotz, ich stimme zu', 'Allerdings, ich stimme zu', 'Trotzdem, ich stimme zu', 'Deshalb, ich stimme zu'], correctAnswer: 'Nichtsdestotrotz, ich stimme zu', points: 25 },
        { type: 'fill-blank', question: 'Sie _____ kommen, wenn sie könnte. (She would come if she could)', options: ['würde', 'wird', 'hat', 'hatte'], correctAnswer: 'würde', points: 20 },
        { type: 'sentence-completion', question: 'Wenn ich fliegen _____, würde ich nach Paris fliegen. (If I could fly, I would fly to Paris)', options: ['kann', 'konnte', 'könnte', 'können'], correctAnswer: 'könnte', points: 20 },
        { type: 'multiple-choice', question: 'What does "nichtsdestotrotz" mean?', options: ['Nevertheless', 'Therefore', 'Because', 'Although'], correctAnswer: 'Nevertheless', points: 15 },
        { type: 'multiple-choice', question: 'Konjunktiv II: "Ich _____ das nicht tun." (I would not do that)', options: ['tue', 'tat', 'täte', 'tun'], correctAnswer: 'täte', points: 20 },
        { type: 'translation', question: 'Translate: "If I had known, I would have come"', options: ['Wenn ich gewusst hätte, wäre ich gekommen', 'Wenn ich weiß, komme ich', 'Wenn ich wusste, kam ich', 'Wenn ich wissen werde, komme ich'], correctAnswer: 'Wenn ich gewusst hätte, wäre ich gekommen', points: 25 },
        { type: 'fill-blank', question: 'Du _____ das verstehen, wenn du älter wärest. (You would understand that if you were older)', options: ['würdest', 'wirst', 'hast', 'hattest'], correctAnswer: 'würdest', points: 20 },
        { type: 'sentence-completion', question: 'Allerdings _____ ich anderer Meinung. (However, I am of a different opinion)', options: ['bin', 'war', 'wäre', 'sein'], correctAnswer: 'bin', points: 15 },
        { type: 'multiple-choice', question: 'Konjunktiv II for "sein" (ich)?', options: ['bin', 'war', 'wäre', 'sein'], correctAnswer: 'wäre', points: 20 }
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

        // Additional questions to expand
        { type: 'multiple-choice', question: 'What does "धन्यवाद" mean?', options: ['Hello', 'Goodbye', 'Thank you', 'Please'], correctAnswer: 'Thank you', points: 10 },
        { type: 'fill-blank', question: 'वह _____ है। (She is a doctor)', options: ['डॉक्टर', 'छात्र', 'टीचर', 'इंजीनियर'], correctAnswer: 'डॉक्टर', points: 10 },
        { type: 'translation', question: 'Translate: "Good morning"', options: ['शुभ प्रभात', 'शुभ रात्रि', 'अलविदा', 'धन्यवाद'], correctAnswer: 'शुभ प्रभात', points: 15 },
        { type: 'multiple-choice', question: 'What does "हाँ" mean?', options: ['No', 'Yes', 'Hello', 'Goodbye'], correctAnswer: 'Yes', points: 10 },
        { type: 'sentence-completion', question: '_____ करें! (Excuse me!)', options: ['क्षमा', 'धन्यवाद', 'नमस्ते', 'अलविदा'], correctAnswer: 'क्षमा', points: 10 },
        { type: 'multiple-choice', question: 'What does "नहीं" mean?', options: ['Yes', 'No', 'Hello', 'Thank you'], correctAnswer: 'No', points: 10 },
        { type: 'fill-blank', question: 'हम _____ हैं। (We are friends)', options: ['दोस्त', 'छात्र', 'टीचर', 'डॉक्टर'], correctAnswer: 'दोस्त', points: 10 },
        { type: 'translation', question: 'Translate: "Please"', options: ['कृपया', 'धन्यवाद', 'नमस्ते', 'अलविदा'], correctAnswer: 'कृपया', points: 15 },
        { type: 'multiple-choice', question: 'What is the verb "होना" for "तुम"?', options: ['हूँ', 'हो', 'हैं', 'है'], correctAnswer: 'हो', points: 10 },
        { type: 'sentence-completion', question: 'अलविदा, _____! (Goodbye, friend!)', options: ['दोस्त', 'छात्र', 'टीचर', 'डॉक्टर'], correctAnswer: 'दोस्त', points: 10 },
        { type: 'multiple-choice', question: 'What does "शुभ प्रभात" mean?', options: ['Good night', 'Good morning', 'Good evening', 'Goodbye'], correctAnswer: 'Good morning', points: 10 },
        { type: 'fill-blank', question: 'आप _____ हैं। (You are a teacher)', options: ['टीचर', 'छात्र', 'डॉक्टर', 'इंजीनियर'], correctAnswer: 'टीचर', points: 10 },
        { type: 'translation', question: 'Translate: "My name is Priya"', options: ['मेरा नाम प्रिया है', 'वह प्रिया है', 'हम प्रिया हैं', 'तुम प्रिया हो'], correctAnswer: 'मेरा नाम प्रिया है', points: 15 },
        { type: 'multiple-choice', question: 'What is the verb "होना" for "आप"?', options: ['हूँ', 'हो', 'हैं', 'है'], correctAnswer: 'हैं', points: 10 },
        { type: 'sentence-completion', question: 'नमस्ते, कैसे _____? (Hello, how are you?)', options: ['हो', 'हैं', 'हूँ', 'है'], correctAnswer: 'हो', points: 10 }
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

        // Additional questions to expand
        { type: 'multiple-choice', question: 'Past tense of "खाना" (khaana - to eat) for "वह" (female)?', options: ['खाती है', 'खाई', 'खाएगी', 'खाती थी'], correctAnswer: 'खाई', points: 15 },
        { type: 'translation', question: 'Translate: "I went to the market yesterday"', options: ['मैं कल बाज़ार गया', 'मैं आज बाज़ार जाऊँगा', 'मैं कल बाज़ार जाता था', 'मैं बाज़ार जाता हूँ'], correctAnswer: 'मैं कल बाज़ार गया', points: 20 },
        { type: 'fill-blank', question: 'हमने _____ खरीदी। (We bought apples)', options: ['सेब', 'आम', 'केला', 'अंगूर'], correctAnswer: 'सेब', points: 15 },
        { type: 'sentence-completion', question: 'कल, वह _____ आई। (Yesterday, she came)', options: ['आती', 'आई', 'आएगी', 'आती थी'], correctAnswer: 'आई', points: 15 },
        { type: 'multiple-choice', question: 'What does "कल" mean in past context?', options: ['Today', 'Yesterday', 'Tomorrow', 'Every day'], correctAnswer: 'Yesterday', points: 10 },
        { type: 'multiple-choice', question: 'Past tense of "करना" (karna - to do) for "तुम"?', options: ['करते हो', 'किया', 'करोगे', 'करते थे'], correctAnswer: 'किया', points: 15 },
        { type: 'translation', question: 'Translate: "They played cricket"', options: ['वे क्रिकेट खेले', 'वे क्रिकेट खेलते हैं', 'वे क्रिकेट खेलेंगे', 'वे क्रिकेट खेलते थे'], correctAnswer: 'वे क्रिकेट खेले', points: 20 },
        { type: 'fill-blank', question: 'मैंने किताब _____। (I read the book)', options: ['पढ़ी', 'लिखी', 'खरीदी', 'बेची'], correctAnswer: 'पढ़ी', points: 15 },
        { type: 'sentence-completion', question: 'बाज़ार में, सब्जी _____। (In the market, vegetables are sold)', options: ['बिकती है', 'बिकी', 'बिकेगी', 'बिकती थी'], correctAnswer: 'बिकती है', points: 10 },
        { type: 'multiple-choice', question: 'What does "खरीदना" mean?', options: ['To sell', 'To buy', 'To eat', 'To read'], correctAnswer: 'To buy', points: 10 },
        { type: 'multiple-choice', question: 'Past tense of "देखना" (dekhna - to see) for "हम"?', options: ['देखते हैं', 'देखा', 'देखेंगे', 'देखते थे'], correctAnswer: 'देखा', points: 15 },
        { type: 'translation', question: 'Translate: "She bought a dress"', options: ['उसने ड्रेस खरीदी', 'वह ड्रेस खरीदती है', 'वह ड्रेस खरीदेगी', 'वह ड्रेस खरीदती थी'], correctAnswer: 'उसने ड्रेस खरीदी', points: 20 },
        { type: 'fill-blank', question: 'तुमने _____ पिया? (Did you drink milk?)', options: ['दूध', 'पानी', 'चाय', 'कॉफी'], correctAnswer: 'दूध', points: 15 },
        { type: 'sentence-completion', question: 'कल, मैं _____ गया। (Yesterday, I went home)', options: ['घर', 'स्कूल', 'बाज़ार', 'पार्क'], correctAnswer: 'घर', points: 10 },
        { type: 'multiple-choice', question: 'What does "कितने का" mean?', options: ['What is this?', 'How much?', 'Where is it?', 'When is it?'], correctAnswer: 'How much?', points: 10 }
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

        // Additional questions to expand
        { type: 'multiple-choice', question: 'Subjunctive: "काश मैं _____। (I wish I were rich)"', options: ['अमीर हूँ', 'अमीर था', 'अमीर होऊँ', 'अमीर था'], correctAnswer: 'अमीर होऊँ', points: 20 },
        { type: 'translation', question: 'Translate: "Maybe it will rain tomorrow"', options: ['शायद कल बारिश हो', 'कल बारिश हुई', 'कल बारिश होती है', 'कल बारिश होगी'], correctAnswer: 'शायद कल बारिश हो', points: 25 },
        { type: 'fill-blank', question: 'यद्यपि वह _____ था, वह आया। (Although he was tired, he came)', options: ['थक', 'थका', 'थके', 'थकी'], correctAnswer: 'थका', points: 20 },
        { type: 'sentence-completion', question: 'तथापि, मैं _____ जाऊँगा। (Nevertheless, I will go)', options: ['जा', 'जाता', 'जाऊँगा', 'गया'], correctAnswer: 'जाऊँगा', points: 20 },
        { type: 'multiple-choice', question: 'What does "तथापि" mean?', options: ['However', 'Therefore', 'Because', 'Although'], correctAnswer: 'However', points: 15 },
        { type: 'multiple-choice', question: 'Subjunctive: "काश वह _____ आए। (I wish he would come)"', options: ['आता', 'आया', 'आए', 'आएगा'], correctAnswer: 'आए', points: 20 },
        { type: 'translation', question: 'Translate: "Despite the rain, we went out"', options: ['बारिश के बावजूद, हम बाहर गए', 'बारिश के कारण, हम बाहर गए', 'बारिश के साथ, हम बाहर गए', 'बारिश के बिना, हम बाहर गए'], correctAnswer: 'बारिश के बावजूद, हम बाहर गए', points: 25 },
        { type: 'fill-blank', question: 'शायद वह _____ आए। (Maybe he will come)', options: ['आता', 'आया', 'आए', 'आएगा'], correctAnswer: 'आए', points: 20 },
        { type: 'sentence-completion', question: 'यद्यपि यह _____ है, मैं कोशिश करूँगा। (Although it is difficult, I will try)', options: ['आसान', 'कठिन', 'सरल', 'मुश्किल'], correctAnswer: 'कठिन', points: 20 },
        { type: 'multiple-choice', question: 'What does "यद्यपि" mean?', options: ['Nevertheless', 'Although', 'Because', 'Therefore'], correctAnswer: 'Although', points: 15 },
        { type: 'multiple-choice', question: 'Subjunctive: "काश मैं _____। (I wish I could fly)"', options: ['उड़ता हूँ', 'उड़ा', 'उड़ूँ', 'उड़ेगा'], correctAnswer: 'उड़ूँ', points: 20 },
        { type: 'translation', question: 'Translate: "Although he is rich, he is not happy"', options: ['虽然他很有钱，但是他不快乐', '他很有钱', '他快乐', '他不快乐'], correctAnswer: '虽然他很有钱，但是他不快乐', points: 25 },
        { type: 'fill-blank', question: 'Although weather _____, we went to the park.', options: ['good', 'bad', 'hot', 'cold'], correctAnswer: 'bad', points: 20 },
        { type: 'sentence-completion', question: 'Although I am afraid, I will try.', options: ['勇敢', '害怕', '高兴', '生气'], correctAnswer: '害怕', points: 20 },
        { type: 'multiple-choice', question: 'What does "स्थानिक विकास" mean?', options: ['One action, two gains', 'Kill two birds', 'Immediate success', 'One stone, two birds'], correctAnswer: 'One action, two gains', points: 15 }
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

        // Additional questions to expand
        { type: 'multiple-choice', question: 'What does "ありがとう" mean?', options: ['Hello', 'Goodbye', 'Thank you', 'Please'], correctAnswer: 'Thank you', points: 10 },
        { type: 'fill-blank', question: 'かれ_____ せんせいです。(He is a teacher)', options: ['が', 'を', 'は', 'に'], correctAnswer: 'は', points: 10 },
        { type: 'translation', question: 'Translate: "Good morning"', options: ['おはよう', 'こんにちは', 'さようなら', 'ありがとう'], correctAnswer: 'おはよう', points: 15 },
        { type: 'multiple-choice', question: '"はい" means?', options: ['No', 'Yes', 'Hello', 'Goodbye'], correctAnswer: 'Yes', points: 10 },
        { type: 'sentence-completion', question: 'さようなら, _____! (Goodbye!)', options: ['ございます', 'です', 'ます', 'ございます'], correctAnswer: 'ございます', points: 10 },
        { type: 'multiple-choice', question: '"いいえ" means?', options: ['Yes', 'No', 'Hello', 'Thank you'], correctAnswer: 'No', points: 10 },
        { type: 'fill-blank', question: 'わたし_____ にほんごを はなします。(I speak Japanese)', options: ['が', 'を', 'は', 'に'], correctAnswer: 'は', points: 10 },
        { type: 'translation', question: 'Translate: "I understand"', options: ['わかりました', 'すみません', 'こんにちは', 'さようなら'], correctAnswer: 'わかりました', points: 15 },
        { type: 'multiple-choice', question: 'What is the polite form of "たべる"?', options: ['たべます', 'たべません', 'たべた', 'たべる'], correctAnswer: 'たべます', points: 10 },
        { type: 'sentence-completion', question: 'こんにちは, _____ ですか? (Hello, how are you?)', options: ['げんき', 'おはよう', 'さようなら', 'ありがとう'], correctAnswer: 'げんき', points: 10 },
        { type: 'multiple-choice', question: 'What does "おはよう" mean?', options: ['Good afternoon', 'Good morning', 'Good evening', 'Goodbye'], correctAnswer: 'Good morning', points: 10 },
        { type: 'fill-blank', question: 'かのじょ_____ がくせいです。(She is a student)', options: ['が', 'を', 'は', 'に'], correctAnswer: 'は', points: 10 },
        { type: 'translation', question: 'Translate: "Thank you very much"', options: ['ありがとうございます', 'すみません', 'こんにちは', 'さようなら'], correctAnswer: 'ありがとうございます', points: 15 },
        { type: 'multiple-choice', question: 'What is the negative of "たべます"?', options: ['たべます', 'たべません', 'たべた', 'たべる'], correctAnswer: 'たべません', points: 10 },
        { type: 'sentence-completion', question: 'わたし_____ たなかです。(My name is Tanaka)', options: ['が', 'を', 'は', 'に'], correctAnswer: 'は', points: 10 }
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
        { word: 'おいしい (Oishii)', translation: 'Delicious', pronunciation: 'oh-ee-SHEI' },
        { word: 'きのう (Kinou)', translation: 'Yesterday', pronunciation: 'kee-NOH' },
      ],
      grammar: [
        { rule: 'て-form: used for sequential actions, requests, and connecting clauses', examples: ['たべて、ねます。(I eat and then sleep.)', 'みてください。(Please watch.)'] }
      ],
      exercises: [
        { type: 'multiple-choice', question: 'What is the て-form of "たべる" (to eat)?', options: ['たべます', 'たべて', 'たべた', 'たべない'], correctAnswer: 'たべて', points: 15 },
        { type: 'translation', question: 'Translate: "This is delicious!"', options: ['これは おいしい！', 'これは たかい！', 'これは おおきい！', 'これは きれい！'], correctAnswer: 'これは おいしい！', points: 20 },
        { type: 'fill-blank', question: 'きのう、えいがを _____ 。(Yesterday, I watched a movie)', options: ['みます', 'みました', 'みて', 'みない'], correctAnswer: 'みました', points: 15 },

        // Additional questions to expand
        { type: 'multiple-choice', question: 'て-form of "のむ" (to drink)?', options: ['のみます', 'のんで', 'のんだ', 'のまない'], correctAnswer: 'のんで', points: 15 },
        { type: 'translation', question: 'Translate: "I ate and then slept"', options: ['たべて、ねました', 'たべます、ねます', 'たべた、ねた', 'たべる、ねる'], correctAnswer: 'たべて、ねました', points: 20 },
        { type: 'fill-blank', question: 'レストランで、すしを _____ 。(At the restaurant, I ordered sushi)', options: ['たべます', 'ちゅうもんしました', 'ちゅうもんして', 'たべた'], correctAnswer: 'ちゅうもんしました', points: 15 },
        { type: 'sentence-completion', question: 'きのう、ともだちに _____ 。(Yesterday, I met a friend)', options: ['あいました', 'あいます', 'あって', 'あわない'], correctAnswer: 'あいました', points: 15 },
        { type: 'multiple-choice', question: 'What does "おいしい" mean?', options: ['Expensive', 'Delicious', 'Big', 'Beautiful'], correctAnswer: 'Delicious', points: 10 },
        { type: 'multiple-choice', question: 'て-form of "いく" (to go)?', options: ['いきます', 'いって', 'いった', 'いかない'], correctAnswer: 'いって', points: 15 },
        { type: 'translation', question: 'Translate: "Please eat"', options: ['たべてください', 'たべます', 'たべた', 'たべる'], correctAnswer: 'たべてください', points: 20 },
        { type: 'fill-blank', question: 'えいがを _____ 、うちに かえりました。(I watched a movie and went home)', options: ['みます', 'みました', 'みて', 'みない'], correctAnswer: 'みて', points: 15 },
        { type: 'sentence-completion', question: 'レストランで、 _____ を ちゅうもんしました。(At the restaurant, I ordered ramen)', options: ['ラーメン', 'すし', 'ピザ', 'ハンバーガー'], correctAnswer: 'ラーメン', points: 10 },
        { type: 'multiple-choice', question: 'What does "きのう" mean?', options: ['Today', 'Yesterday', 'Tomorrow', 'Every day'], correctAnswer: 'Yesterday', points: 10 },
        { type: 'multiple-choice', question: 'て-form of "かく" (to write)?', options: ['かきます', 'かいて', 'かいた', 'かかない'], correctAnswer: 'かいて', points: 15 },
        { type: 'translation', question: 'Translate: "I drank tea and read a book"', options: ['おちゃを のんで、本を よみました', 'おちゃを のみます、本を よみます', 'おちゃを のんだ、本を よんだ', 'おちゃを のむ、本を よむ'], correctAnswer: 'おちゃを のんで、本を よみました', points: 20 },
        { type: 'fill-blank', question: 'ともだちと _____ 、たのしかった。(I talked with a friend, it was fun)', options: ['はなします', 'はなしました', 'はなして', 'はなさない'], correctAnswer: 'はなして', points: 15 },
        { type: 'sentence-completion', question: 'きのう、 _____ を みました。(Yesterday, I watched TV)', options: ['テレビ', 'ラジオ', 'パソコン', 'スマホ'], correctAnswer: 'テレビ', points: 10 },
        { type: 'multiple-choice', question: 'What does "注文する" mean?', options: ['To eat', 'To order', 'To pay', 'To leave'], correctAnswer: 'To order', points: 10 }
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

        // Additional questions to expand
        { type: 'multiple-choice', question: 'Passive of "よむ" (to read)?', options: ['よまれます', 'よまれる', 'よませる', 'よんでいた'], correctAnswer: 'よまれる', points: 20 },
        { type: 'translation', question: 'Translate: "I was praised by the teacher"', options: ['せんせいに ほめられました', 'せんせいを ほめました', 'せんせいが ほめました', 'せんせいに ほめます'], correctAnswer: 'せんせいに ほめられました', points: 25 },
        { type: 'fill-blank', question: 'かれに _____ 。(I was scolded by him)', options: ['しかられました', 'しかりました', 'しからせる', 'しかっている'], correctAnswer: 'しかられました', points: 20 },
        { type: 'sentence-completion', question: 'この本は みんなに _____ 。(This book is read by everyone)', options: ['よまれます', 'よみます', 'よんだ', 'よむ'], correctAnswer: 'よまれます', points: 20 },
        { type: 'multiple-choice', question: 'What does "けいご" mean?', options: ['Passive voice', 'Honorific language', 'Past tense', 'Future tense'], correctAnswer: 'Honorific language', points: 15 },
        { type: 'multiple-choice', question: 'Passive of "かく" (to write)?', options: ['かかれます', 'かかれる', 'かかせる', 'かいていた'], correctAnswer: 'かかれる', points: 20 },
        { type: 'translation', question: 'Translate: "The cake was eaten by the children"', options: ['ケーキは こどもたちに たべられました', 'ケーキを こどもたちが たべました', 'ケーキが こどもたちに たべられます', 'ケーキを こどもたちが たべる'], correctAnswer: 'ケーキは こどもたちに たべられました', points: 25 },
        { type: 'fill-blank', question: 'そのえいがは みんなに _____ 。(That movie is watched by everyone)', options: ['みられます', 'みます', 'みた', 'みる'], correctAnswer: 'みられます', points: 20 },
        { type: 'sentence-completion', question: 'わたしは せんせいに _____ 。(I was helped by the teacher)', options: ['たすけられました', 'たすけました', 'たすける', 'たすけている'], correctAnswer: 'たすけられました', points: 20 },
        { type: 'multiple-choice', question: 'What does "いらっしゃいます" mean?', options: ['To go', 'To come', 'Is/Are (polite)', 'To eat'], correctAnswer: 'Is/Are (polite)', points: 15 },
        { type: 'multiple-choice', question: 'Passive of "のむ" (to drink)?', options: ['のまれます', 'のまれる', 'のませる', 'のんでいた'], correctAnswer: 'のまれる', points: 20 },
        { type: 'translation', question: 'Translate: "The letter was written by her"', options: ['てがみは かのじょに かかれました', 'てがみを かのじょが かきました', 'てがみが かのじょに かかれます', 'てがみを かのじょが かく'], correctAnswer: 'てがみは かのじょに かかれました', points: 25 },
        { type: 'fill-blank', question: 'そのうたは かれに _____ 。(That song was sung by him)', options: ['うたわれました', 'うたいました', 'うたう', 'うたっている'], correctAnswer: 'うたわれました', points: 20 },
        { type: 'sentence-completion', question: 'このりんごは わたしに _____ 。(This apple was eaten by me)', options: ['たべられました', 'たべました', 'たべる', 'たべている'], correctAnswer: 'たべられました', points: 20 },
        { type: 'multiple-choice', question: 'Passive voice is used for?', options: ['Active actions', 'Actions done to the subject', 'Future actions', 'Negative actions'], correctAnswer: 'Actions done to the subject', points: 15 }
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

        // Additional questions to expand
        { type: 'multiple-choice', question: 'What does "谢谢" mean?', options: ['Hello', 'Goodbye', 'Thank you', 'Please'], correctAnswer: 'Thank you', points: 10 },
        { type: 'multiple-choice', question: 'Which tone is "rising" (2nd tone)?', options: ['ā', 'á', 'ǎ', 'à'], correctAnswer: 'á', points: 10 },
        { type: 'fill-blank', question: '他是 _____ 。(He is a teacher)', options: ['学生', '老师', '医生', '工程师'], correctAnswer: '老师', points: 10 },
        { type: 'translation', question: 'Translate: "You\'re welcome"', options: ['不客气', '谢谢', '你好', '再见'], correctAnswer: '不客气', points: 15 },
        { type: 'sentence-completion', question: '早上 _____！(Good morning!)', options: ['好', '见', '谢', '起'], correctAnswer: '好', points: 10 },
        { type: 'multiple-choice', question: '"是" means?', options: ['No', 'Yes', 'Hello', 'Goodbye'], correctAnswer: 'Yes', points: 10 },
        { type: 'multiple-choice', question: 'Which tone is "flat" (1st tone)?', options: ['ā', 'á', 'ǎ', 'à'], correctAnswer: 'ā', points: 10 },
        { type: 'fill-blank', question: '我 _____ 学生。(I am a student)', options: ['是', '叫', '有', '去'], correctAnswer: '是', points: 10 },
        { type: 'translation', question: 'Translate: "Goodbye"', options: ['你好', '再见', '早上好', '谢谢'], correctAnswer: '再见', points: 15 },
        { type: 'sentence-completion', question: '不 _____！(You\'re welcome!)', options: ['好', '起', '客气', '见'], correctAnswer: '客气', points: 10 },
        { type: 'multiple-choice', question: '"不是" means?', options: ['Yes', 'No', 'Hello', 'Thank you'], correctAnswer: 'No', points: 10 },
        { type: 'multiple-choice', question: 'Which tone is "dipping" (3rd tone)?', options: ['ā', 'á', 'ǎ', 'à'], correctAnswer: 'ǎ', points: 10 },
        { type: 'fill-blank', question: '她 _____ 王小明。(Her name is Wang Xiaoming)', options: ['是', '叫', '有', '去'], correctAnswer: '叫', points: 10 },
        { type: 'translation', question: 'Translate: "Sorry"', options: ['对不起', '谢谢', '你好', '再见'], correctAnswer: '对不起', points: 15 },
        { type: 'sentence-completion', question: '_____ 见！(Goodbye!)', options: ['你好', '再', '早上', '谢谢'], correctAnswer: '再', points: 10 }
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

        // Additional questions to expand
        { type: 'multiple-choice', question: 'What does "昨天" mean?', options: ['Today', 'Yesterday', 'Tomorrow', 'Every day'], correctAnswer: 'Yesterday', points: 10 },
        { type: 'translation', question: 'Translate: "I ate lunch"', options: ['我吃了午饭', '我要吃午饭', '我吃午饭', '我正在吃午饭'], correctAnswer: '我吃了午饭', points: 20 },
        { type: 'fill-blank', question: '他 _____ 了北京。(He went to Beijing)', options: ['去', '来', '走', '跑'], correctAnswer: '去', points: 15 },
        { type: 'sentence-completion', question: '商店里，我 _____ 了一个苹果。(In the store, I bought an apple)', options: ['吃', '喝', '买', '看'], correctAnswer: '买', points: 15 },
        { type: 'multiple-choice', question: 'What does "买" mean?', options: ['To sell', 'To buy', 'To eat', 'To drink'], correctAnswer: 'To buy', points: 10 },
        { type: 'multiple-choice', question: '了 indicates?', options: ['Future', 'Past/Completed', 'Present', 'Conditional'], correctAnswer: 'Past/Completed', points: 15 },
        { type: 'translation', question: 'Translate: "She read the book"', options: ['她看了书', '她看书', '她要看书', '她正在看书'], correctAnswer: '她看了书', points: 20 },
        { type: 'fill-blank', question: '我们 _____ 了电影。(We watched a movie)', options: ['看', '听', '说', '写'], correctAnswer: '看', points: 15 },
        { type: 'sentence-completion', question: '多少钱 _____ ？(How much is this?)', options: ['这个', '那个', '这些', '那些'], correctAnswer: '这个', points: 10 },
        { type: 'multiple-choice', question: 'What does "商店" mean?', options: ['Restaurant', 'Store', 'School', 'Hospital'], correctAnswer: 'Store', points: 10 },
        { type: 'multiple-choice', question: '了 is used for?', options: ['Future actions', 'Completed actions', 'Wishes', 'Questions'], correctAnswer: 'Completed actions', points: 15 },
        { type: 'translation', question: 'Translate: "I drank water"', options: ['我喝了水', '我要喝水', '我喝水', '我正在喝水'], correctAnswer: '我喝了水', points: 20 },
        { type: 'fill-blank', question: '昨天，我 _____ 了朋友。(Yesterday, I met a friend)', options: ['见', '找', '问', '答'], correctAnswer: '见', points: 15 },
        { type: 'sentence-completion', question: '这个苹果 _____ 多少钱？(How much does this apple cost?)', options: ['要', '是', '有', '卖'], correctAnswer: '卖', points: 10 },
        { type: 'multiple-choice', question: 'What does "多少钱" mean?', options: ['What is this?', 'How much?', 'Where is it?', 'When is it?'], correctAnswer: 'How much?', points: 10 }
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

        // Additional questions to expand
        { type: 'multiple-choice', question: 'What does "马到成功" mean?', options: ['Slow success', 'Immediate success', 'Horse success', 'Road to success'], correctAnswer: 'Immediate success', points: 20 },
        { type: 'translation', question: 'Translate: "Although I am tired, I will continue"', options: ['虽然我很累，但是我会继续', '我很累', '我会继续', '我不累'], correctAnswer: '虽然我很累，但是我会继续', points: 25 },
        { type: 'fill-blank', question: '虽然他 _____ ，但是他成功了。(Although he was young, he succeeded)', options: ['老', '年轻', '高', '矮'], correctAnswer: '年轻', points: 20 },
        { type: 'sentence-completion', question: '虽然很难 _____ ，但是我不会放弃。(Although it\'s hard, I won\'t give up)', options: ['学', '做', '说', '写'], correctAnswer: '做', points: 20 },
        { type: 'multiple-choice', question: 'What does "虽然...但是" mean?', options: ['Because...so', 'Although...but', 'If...then', 'When...then'], correctAnswer: 'Although...but', points: 15 },
        { type: 'multiple-choice', question: 'Chengyu: "一心一意" means?', options: ['Wholeheartedly', 'Kill two birds', 'Immediate success', 'One heart, one mind'], correctAnswer: 'Wholeheartedly', points: 20 },
        { type: 'translation', question: 'Translate: "Although it rained, we went out"', options: ['虽然下雨了，但是我们出去了', '下雨了', '我们出去了', '不下雨'], correctAnswer: '虽然下雨了，但是我们出去了', points: 25 },
        { type: 'fill-blank', question: '虽然她 _____ ，但是她很聪明。(Although she is quiet, she is smart)', options: ['吵', '安静', '高', '矮'], correctAnswer: '安静', points: 20 },
        { type: 'sentence-completion', question: '虽然考试 _____ ，但是我准备好了。(Although the exam is difficult, I am ready)', options: ['容易', '难', '简单', '复杂'], correctAnswer: '难', points: 20 },
        { type: 'multiple-choice', question: 'What does "一举两得" mean?', options: ['One action, two gains', 'Kill two birds', 'Immediate success', 'One stone, two birds'], correctAnswer: 'One action, two gains', points: 15 },
        { type: 'multiple-choice', question: 'Chengyu: "画蛇添足" means?', options: ['To gild the lily', 'Kill two birds', 'Immediate success', 'Draw snake, add feet'], correctAnswer: 'To gild the lily', points: 20 },
        { type: 'translation', question: 'Translate: "Although he is rich, he is not happy"', options: ['虽然他很有钱，但是他不快乐', '他很有钱', '他快乐', '他不快乐'], correctAnswer: '虽然他很有钱，但是他不快乐', points: 25 },
        { type: 'fill-blank', question: '虽然天气 _____ ，但是我们去了公园。(Although the weather was bad, we went to the park)', options: ['好', '坏', '热', '冷'], correctAnswer: '坏', points: 20 },
        { type: 'sentence-completion', question: '虽然我 _____ ，但是我会试试。(Although I am afraid, I will try)', options: ['勇敢', '害怕', '高兴', '生气'], correctAnswer: '害怕', points: 20 },
        { type: 'multiple-choice', question: 'What does "事半功倍" mean?', options: ['Half effort, double result', 'Kill two birds', 'Immediate success', 'One action, two gains'], correctAnswer: 'Half effort, double result', points: 15 }
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

        // Additional questions to expand
        { type: 'multiple-choice', question: 'What does "مرحبا" mean?', options: ['Goodbye', 'Thank you', 'Hello', 'Please'], correctAnswer: 'Hello', points: 10 },
        { type: 'multiple-choice', question: 'Arabic has how many letters?', options: ['22', '26', '28', '30'], correctAnswer: '28', points: 10 },
        { type: 'fill-blank', question: 'أنا _____ (I am a student)', options: ['طالب', 'مدرس', 'طبيب', 'مهندس'], correctAnswer: 'طالب', points: 10 },
        { type: 'translation', question: 'Translate: "Please"', options: ['من فضلك', 'شكرا', 'مرحبا', 'مع السلامة'], correctAnswer: 'من فضلك', points: 15 },
        { type: 'sentence-completion', question: '_____ الخير! (Good morning!)', options: ['صباح', 'مساء', 'ليل', 'نور'], correctAnswer: 'صباح', points: 10 },
        { type: 'multiple-choice', question: '"نعم" means?', options: ['No', 'Yes', 'Hello', 'Goodbye'], correctAnswer: 'Yes', points: 10 },
        { type: 'multiple-choice', question: 'Arabic script is?', options: ['Alphabetical', 'Cursive', 'Pictographic', 'Syllabic'], correctAnswer: 'Cursive', points: 10 },
        { type: 'fill-blank', question: 'هو _____ (He is a teacher)', options: ['طالب', 'مدرس', 'طبيب', 'مهندس'], correctAnswer: 'مدرس', points: 10 },
        { type: 'translation', question: 'Translate: "Sorry"', options: ['آسف', 'شكرا', 'مرحبا', 'مع السلامة'], correctAnswer: 'آسف', points: 15 },
        { type: 'sentence-completion', question: 'مع السلامة, _____! (Goodbye, friend!)', options: ['صديق', 'طالب', 'مدرس', 'طبيب'], correctAnswer: 'صديق', points: 10 },
        { type: 'multiple-choice', question: '"لا" means?', options: ['Yes', 'No', 'Hello', 'Thank you'], correctAnswer: 'No', points: 10 },
        { type: 'multiple-choice', question: 'Verb "to be" in present is?', options: ['Explicit', 'Implicit', 'Always used', 'Never used'], correctAnswer: 'Implicit', points: 10 },
        { type: 'fill-blank', question: 'اسمي _____ (My name is Fatima)', options: ['فاطمة', 'أحمد', 'علي', 'سارة'], correctAnswer: 'فاطمة', points: 10 },
        { type: 'translation', question: 'Translate: "Good morning"', options: ['صباح الخير', 'مساء الخير', 'ليلة سعيدة', 'مع السلامة'], correctAnswer: 'صباح الخير', points: 15 },
        { type: 'sentence-completion', question: 'من _____! (Please!)', options: ['فضلك', 'شكرا', 'مرحبا', 'سلامة'], correctAnswer: 'فضلك', points: 10 }
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

        // Additional questions to expand
        { type: 'multiple-choice', question: 'Past tense of "eat" for "he"?', options: ['أكل', 'أكلت', 'أكلنا', 'يأكل'], correctAnswer: 'أكل', points: 15 },
        { type: 'translation', question: 'Translate: "I wrote a letter"', options: ['كتبت رسالة', 'أكتب رسالة', 'سأكتب رسالة', 'أكتب رسالة الآن'], correctAnswer: 'كتبت رسالة', points: 20 },
        { type: 'fill-blank', question: 'في السوق، _____ تفاحة. (In the market, I bought an apple)', options: ['أكلت', 'اشتريت', 'كتبت', 'قرأت'], correctAnswer: 'اشتريت', points: 15 },
        { type: 'sentence-completion', question: 'أمس، ذهبت إلى _____ . (Yesterday, I went to the market)', options: ['السوق', 'المدرسة', 'المنزل', 'المكتب'], correctAnswer: 'السوق', points: 15 },
        { type: 'multiple-choice', question: 'What does "أمس" mean?', options: ['Today', 'Yesterday', 'Tomorrow', 'Every day'], correctAnswer: 'Yesterday', points: 10 },
        { type: 'multiple-choice', question: 'Past tense of "read" for "she"?', options: ['قرأت', 'قرأ', 'قرأنا', 'تقرأ'], correctAnswer: 'قرأت', points: 15 },
        { type: 'translation', question: 'Translate: "They bought clothes"', options: ['اشتروا ملابس', 'يشترون ملابس', 'سيشترون ملابس', 'اشتروا ملابس الآن'], correctAnswer: 'اشتروا ملابس', points: 20 },
        { type: 'fill-blank', question: 'كم _____ هذا الكتاب؟ (How much is this book?)', options: ['ثمن', 'سعر', 'قيمة', 'تكلفة'], correctAnswer: 'ثمن', points: 15 },
        { type: 'sentence-completion', question: 'في السوق، رأيت _____ . (In the market, I saw fruits)', options: ['فواكه', 'خضار', 'ملابس', 'كتب'], correctAnswer: 'فواكه', points: 10 },
        { type: 'multiple-choice', question: 'What does "اشترى" mean?', options: ['To sell', 'To buy', 'To eat', 'To write'], correctAnswer: 'To buy', points: 10 },
        { type: 'multiple-choice', question: 'Past tense of "drink" for "we"?', options: ['شرب', 'شربت', 'شربنا', 'نشرب'], correctAnswer: 'شربنا', points: 15 },
        { type: 'translation', question: 'Translate: "She read the newspaper"', options: ['قرأت الصحيفة', 'تقرأ الصحيفة', 'ستقرأ الصحيفة', 'قرأت الصحيفة الآن'], correctAnswer: 'قرأت الصحيفة', points: 20 },
        { type: 'fill-blank', question: 'أمس، _____ قهوة. (Yesterday, I drank coffee)', options: ['أكلت', 'اشتريت', 'كتبت', 'شربت'], correctAnswer: 'شربت', points: 15 },
        { type: 'sentence-completion', question: 'بكم _____ هذه الملابس؟ (How much are these clothes?)', options: ['ثمن', 'سعر', 'قيمة', 'تكلفة'], correctAnswer: 'سعر', points: 10 },
        { type: 'multiple-choice', question: 'What does "السوق" mean?', options: ['The school', 'The market', 'The office', 'The home'], correctAnswer: 'The market', points: 10 }
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

        // Additional questions to expand
        { type: 'multiple-choice', question: 'Conditional with "لو": "لو كنت غنيا _____ اشتريت سيارة." (If I were rich, I would buy a car)', options: ['لاشتريت', 'أشتري', 'سأشتري', 'أشتريت'], correctAnswer: 'لاشتريت', points: 20 },
        { type: 'translation', question: 'Translate: "If I had time, I would travel"', options: ['لو كان لدي وقت، لسافرت', 'إذا كان لدي وقت، سأسافر', 'عندما يكون لدي وقت، سأسافر', 'لأن لدي وقت، سافرت'], correctAnswer: 'لو كان لدي وقت، لسافرت', points: 25 },
        { type: 'fill-blank', question: 'على الرغم من _____ ، نجح. (Despite the rain, he succeeded)', options: ['الشمس', 'المطر', 'الحرارة', 'الرياح'], correctAnswer: 'المطر', points: 20 },
        { type: 'sentence-completion', question: 'لو كنت _____ ، لعملت في الطب. (If I were you, I would work in medicine)', options: ['أنت', 'أنا', 'هو', 'هي'], correctAnswer: 'أنت', points: 20 },
        { type: 'multiple-choice', question: 'What does "على الرغم من" mean?', options: ['Because of', 'Despite', 'In addition to', 'Instead of'], correctAnswer: 'Despite', points: 15 },
        { type: 'multiple-choice', question: 'Conditional: "لو درست _____ نجحت." (If I studied, I would succeed)', options: ['لنجحت', 'أنجح', 'سأنجح', 'نجحت'], correctAnswer: 'لنجحت', points: 20 },
        { type: 'translation', question: 'Translate: "In addition to studying, he works"', options: ['فضلا عن الدراسة، يعمل', 'بسبب الدراسة، يعمل', 'رغم الدراسة، يعمل', 'بدون الدراسة، يعمل'], correctAnswer: 'فضلا عن الدراسة، يعمل', points: 25 },
        { type: 'fill-blank', question: 'لو كان _____ ، لسافر. (If he had money, he would travel)', options: ['مال', 'وقت', 'سيارة', 'منزل'], correctAnswer: 'مال', points: 20 },
        { type: 'sentence-completion', question: 'على الرغم من _____ ، استمر. (Despite the cold, he continued)', options: ['الحرارة', 'البرودة', 'الرياح', 'الشمس'], correctAnswer: 'البرودة', points: 20 },
        { type: 'multiple-choice', question: 'What does "فضلا عن" mean?', options: ['Despite', 'Because of', 'In addition to', 'Instead of'], correctAnswer: 'In addition to', points: 15 },
        { type: 'multiple-choice', question: 'Conditional: "لو رأيته _____ أخبرته." (If I saw him, I would tell him)', options: ['لأخبرته', 'أخبره', 'سأخبره', 'أخبرته'], correctAnswer: 'لأخبرته', points: 20 },
        { type: 'translation', question: 'Translate: "Despite being tired, she worked"', options: ['على الرغم من التعب، عملت', 'بسبب التعب، عملت', 'فضلا عن التعب، عملت', 'بدون تعب، عملت'], correctAnswer: 'على الرغم من التعب، عملت', points: 25 },
        { type: 'fill-blank', question: 'لو _____ طالب، درست الطب. (If I were a student, I would study medicine)', options: ['كنت', 'أنا', 'هو', 'أنت'], correctAnswer: 'كنت', points: 20 },
        { type: 'sentence-completion', question: 'فضلا عن _____ ، يلعب كرة القدم. (In addition to studying, he plays football)', options: ['الدراسة', 'العمل', 'الأكل', 'النوم'], correctAnswer: 'الدراسة', points: 20 },
        { type: 'multiple-choice', question: 'Conditional sentences use?', options: ['إذا for real', 'لو for hypothetical', 'عندما for time', 'لأن for reason'], correctAnswer: 'لو for hypothetical', points: 15 }
      ]
    }
  }
};

export const getLessonData = (language, level) => {
  return lessonsData[language]?.[level] || null;
};
/* ركائز الإيمان بين العقل والقلب — PILLARS OF FAITH — app.js v1.0 */
/* Based on "Rakaiz al-Iman" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'ركائز الإيمان',
    splashSub: 'بين العقل والقلب',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة الذاريات ٥١: ٢٠-٢١',
    tabHome: 'الرئيسية', tabPillars: 'الركائز', tabHeart: 'القلب والعقل',
    tabQuiz: 'اختبار', tabBuild: 'البناء', tabAbout: 'الكتاب',
    pillarsTitle: 'ركائز الإيمان',
    pillarsDesc: '٢٠ ركيزة إيمانية تجمع بين حجة العقل ونور القلب — من كتاب الشيخ محمد الغزالي',
    heartTitle: 'القلب والعقل',
    heartDesc: 'كيف يتكامل العقل مع القلب في بناء الإيمان — لا تعارض بين العلم والدين',
    quizTitle: 'من يريد أن يكون عالماً؟',
    quizDesc: 'اختبر معرفتك بركائز الإيمان — ١٥ سؤالاً مع ٣ وسائل مساعدة',
    buildTitle: 'ابنِ إيمانك',
    buildDesc: 'كل ركيزة تتعلمها تضيء في بنائك — أكمل الرحلة!',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية الإيمان',
    mind: '🧠 حجة العقل',
    heart: '❤️ نور القلب',
    verse: 'الآية',
    reflection: '💭 تأمّل',
    youngMode: '🌱 مستكشف صغير',
    teenMode: '📚 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    badgeEarned: 'حصلت على وسام!',
    streakMsg: 'يوم متتالي!',
    lifeline5050: '📖 50/50',
    lifelineHint: '🤲 استخارة',
    lifelineSheikh: '📞 اسأل الشيخ',
    nextQ: 'السؤال التالي',
    quizComplete: 'أحسنت! أكملت الاختبار!',
    quizScore: 'نتيجتك',
    quizAgain: 'أعد الاختبار',
    correct: 'صحيح!',
    wrong: 'خطأ!',
    pillarLit: 'ركيزة مضاءة!',
    allPillarsLit: 'تهانينا! أضأت جميع الركائز!',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في الركائز...',
    splashFeatures: [
      '٢٠ ركيزة إيمانية بين العقل والقلب',
      'اختبار: من يريد أن يكون عالماً؟',
      'ابنِ إيمانك — ركيزة بركيزة',
      'نظام نقاط وأوسمة'
    ],
  },
  en: {
    appTitle: 'Pillars of Faith',
    splashSub: 'Between Mind and Heart',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Adh-Dhariyat 51:20-21',
    tabHome: 'Home', tabPillars: 'Pillars', tabHeart: 'Mind & Heart',
    tabQuiz: 'Quiz', tabBuild: 'Build', tabAbout: 'Book',
    pillarsTitle: 'Pillars of Faith',
    pillarsDesc: '20 pillars of faith combining rational arguments and spiritual insights — from Sheikh al-Ghazali\'s book',
    heartTitle: 'Mind & Heart',
    heartDesc: 'How intellect and heart complement each other in building faith — science and religion in harmony',
    quizTitle: 'Who Wants to Be a Scholar?',
    quizDesc: 'Test your knowledge of faith pillars — 15 questions with 3 lifelines',
    buildTitle: 'Build Your Faith',
    buildDesc: 'Each pillar you learn lights up in your structure — complete the journey!',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas of Faith',
    mind: '🧠 Rational Argument',
    heart: '❤️ Spiritual Insight',
    verse: 'Verse',
    reflection: '💭 Reflect',
    youngMode: '🌱 Young Explorer',
    teenMode: '📚 Teen Scholar',
    xpLabel: 'Experience Points',
    badgeEarned: 'Badge earned!',
    streakMsg: 'day streak!',
    lifeline5050: '📖 50/50',
    lifelineHint: '🤲 Istikharah',
    lifelineSheikh: '📞 Ask the Sheikh',
    nextQ: 'Next Question',
    quizComplete: 'Well done! Quiz complete!',
    quizScore: 'Your Score',
    quizAgain: 'Retake Quiz',
    correct: 'Correct!',
    wrong: 'Wrong!',
    pillarLit: 'Pillar lit!',
    allPillarsLit: 'Congratulations! All pillars are lit!',
    share: 'Share',
    searchPlaceholder: 'Search pillars...',
    splashFeatures: [
      '20 pillars of faith between mind and heart',
      'Quiz: Who Wants to Be a Scholar?',
      'Build your faith — pillar by pillar',
      'XP and badge system'
    ],
  },
  fr: {
    appTitle: 'Piliers de la Foi',
    splashSub: 'Entre Raison et Coeur',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Adh-Dhariyat 51:20-21',
    tabHome: 'Accueil', tabPillars: 'Piliers', tabHeart: 'Coeur & Raison',
    tabQuiz: 'Quiz', tabBuild: 'Construction', tabAbout: 'Livre',
    pillarsTitle: 'Piliers de la Foi',
    pillarsDesc: '20 piliers de foi alliant arguments rationnels et sagesse spirituelle — du livre du Sheikh al-Ghazali',
    heartTitle: 'Coeur & Raison',
    heartDesc: 'Comment l\'intellect et le coeur se completent pour construire la foi — science et religion en harmonie',
    quizTitle: 'Qui Veut Etre un Savant ?',
    quizDesc: 'Testez vos connaissances sur les piliers de la foi — 15 questions avec 3 jokers',
    buildTitle: 'Construisez Votre Foi',
    buildDesc: 'Chaque pilier appris s\'illumine dans votre edifice — completez le voyage !',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas de la Foi',
    mind: '🧠 Argument Rationnel',
    heart: '❤️ Sagesse Spirituelle',
    verse: 'Verset',
    reflection: '💭 Reflexion',
    youngMode: '🌱 Jeune Explorateur',
    teenMode: '📚 Jeune Savant',
    xpLabel: 'Points d\'Experience',
    badgeEarned: 'Badge obtenu !',
    streakMsg: 'jours consecutifs !',
    lifeline5050: '📖 50/50',
    lifelineHint: '🤲 Istikhara',
    lifelineSheikh: '📞 Demandez au Cheikh',
    nextQ: 'Question Suivante',
    quizComplete: 'Bravo ! Quiz termine !',
    quizScore: 'Votre Score',
    quizAgain: 'Refaire le Quiz',
    correct: 'Correct !',
    wrong: 'Faux !',
    pillarLit: 'Pilier allume !',
    allPillarsLit: 'Felicitations ! Tous les piliers sont allumes !',
    share: 'Partager',
    searchPlaceholder: 'Rechercher les piliers...',
    splashFeatures: [
      '20 piliers de foi entre raison et coeur',
      'Quiz : Qui veut etre un savant ?',
      'Construisez votre foi — pilier par pilier',
      'Systeme de points et badges'
    ],
  }
};

// ═══════════════ PILLARS DATA (20 pillars from the book) ═══════════════
const PILLARS = [
  {
    id:1, emoji:'🌌', theme:'god',
    ar:{title:'وجود الله',mind:'يبيّن الغزالي في "ركائز الإيمان": الكون المنظم بقوانينه الدقيقة لا يمكن أن يكون وليد الصدفة. كل ذرة فيه تشهد بوجود خالق حكيم.',heart:'يبيّن الغزالي في "ركائز الإيمان": القلب يشعر بالله قبل أن يثبته العقل. الفطرة السليمة تهتدي إلى خالقها كما يهتدي الطفل إلى أمه.',verse:'وَفِي الْأَرْضِ آيَاتٌ لِّلْمُوقِنِينَ ۝ وَفِي أَنفُسِكُمْ أَفَلَا تُبْصِرُونَ',verseRef:'سورة الذاريات ٥١: ٢٠-٢١',reflection:'انظر حولك: السماء، الأرض، جسدك — كل شيء يقول: الله موجود.',young:'الكون كله مثل كتاب جميل — لا بد أن له كاتباً حكيماً! 🌟'},
    en:{title:'God\'s Existence',mind:'Al-Ghazali explains in "Pillars of Faith": A universe governed by precise laws cannot be the product of chance. Every atom testifies to a wise Creator.',heart:'Al-Ghazali explains in "Pillars of Faith": The heart feels God before the mind proves Him. Pure human nature is drawn to its Creator as a child is drawn to its mother.',verse:'And on the earth are signs for the certain. And in yourselves — do you not see?',verseRef:'Surah Adh-Dhariyat 51:20-21',reflection:'Look around you: the sky, the earth, your own body — everything says: God exists.',young:'The whole universe is like a beautiful book — it must have a wise Author! 🌟'},
    fr:{title:'L\'Existence de Dieu',mind:'Al-Ghazali explique dans "Les Piliers de la Foi": Un univers regi par des lois precises ne peut etre le fruit du hasard. Chaque atome temoigne d\'un Createur sage.',heart:'Al-Ghazali explique dans "Les Piliers de la Foi": Le coeur ressent Dieu avant que la raison ne Le prouve. La nature pure de l\'homme est attiree vers son Createur comme un enfant vers sa mere.',verse:'Et sur la terre il y a des signes pour ceux qui croient fermement. Et en vous-memes. Ne voyez-vous pas ?',verseRef:'Sourate Adh-Dhariyat 51:20-21',reflection:'Regardez autour de vous : le ciel, la terre, votre corps — tout dit : Dieu existe.',young:'L\'univers est comme un beau livre — il doit avoir un Auteur sage ! 🌟'}
  },
  {
    id:2, emoji:'💪', theme:'god',
    ar:{title:'قدرة الله المطلقة',mind:'يبيّن الغزالي في "ركائز الإيمان": العلم يكشف كل يوم عن عظمة جديدة في الكون — مجرات بعيدة، ذرات دقيقة، خلايا معقدة — كلها تشهد بقدرة لا حدود لها.',heart:'يبيّن الغزالي في "ركائز الإيمان": عندما تشعر بالعجز، تذكّر أن الله الذي خلق هذا الكون العظيم قادر على حل مشاكلك الصغيرة.',verse:'إِنَّمَا أَمْرُهُ إِذَا أَرَادَ شَيْئًا أَن يَقُولَ لَهُ كُن فَيَكُونُ',verseRef:'سورة يس ٣٦: ٨٢',reflection:'تأمّل في قطرة ماء واحدة — كم فيها من عجائب! فكيف بمن خلقها؟',young:'الله خلق المجرات الضخمة وخلق الخلايا الصغيرة — قدرته لا حدود لها! 💫'},
    en:{title:'God\'s Absolute Power',mind:'Al-Ghazali explains in "Pillars of Faith": Science daily reveals new wonders — distant galaxies, tiny atoms, complex cells — all testifying to limitless power.',heart:'Al-Ghazali explains in "Pillars of Faith": When you feel helpless, remember that the God who created this vast universe can certainly solve your small problems.',verse:'His command, when He wills something, is only to say to it: Be! And it is.',verseRef:'Surah Ya-Sin 36:82',reflection:'Contemplate a single drop of water — what wonders it contains! Imagine the One who created it.',young:'God created huge galaxies and tiny cells — His power has no limits! 💫'},
    fr:{title:'La Puissance Absolue de Dieu',mind:'Al-Ghazali explique dans "Les Piliers de la Foi": La science revele chaque jour de nouvelles merveilles — galaxies lointaines, atomes minuscules, cellules complexes — temoignant d\'une puissance sans limites.',heart:'Al-Ghazali explique dans "Les Piliers de la Foi": Quand vous vous sentez impuissant, rappelez-vous que Dieu qui a cree cet immense univers peut certainement resoudre vos petits problemes.',verse:'Son commandement, quand Il veut quelque chose, est de dire : Sois ! Et c\'est.',verseRef:'Sourate Ya-Sin 36:82',reflection:'Contemplez une seule goutte d\'eau — quelles merveilles elle contient ! Imaginez Celui qui l\'a creee.',young:'Dieu a cree d\'enormes galaxies et de minuscules cellules — Sa puissance est sans limites ! 💫'}
  },
  {
    id:3, emoji:'🎯', theme:'god',
    ar:{title:'دحض نظرية الصدفة',mind:'يبيّن الغزالي في "ركائز الإيمان": احتمال نشوء الحياة بالصدفة أقل من احتمال أن يكتب قرد على آلة كاتبة قصيدة شعرية. العلماء أنفسهم أقروا باستحالة الصدفة.',heart:'يبيّن الغزالي في "ركائز الإيمان": القلب المؤمن يرى في كل شيء حكمة وغاية. الصدفة لا تصنع جمالاً ولا نظاماً.',verse:'أَمْ خُلِقُوا مِنْ غَيْرِ شَيْءٍ أَمْ هُمُ الْخَالِقُونَ',verseRef:'سورة الطور ٥٢: ٣٥',reflection:'هل يمكن أن ينتج انفجار في مطبعة كتاباً منظماً؟ كذلك الكون لا ينتج عن صدفة.',young:'هل يمكن أن تهز علبة ألوان فتخرج لوحة جميلة؟ مستحيل! الكون أيضاً ليس صدفة! 🎨'},
    en:{title:'Debunking the Chance Theory',mind:'Al-Ghazali explains in "Pillars of Faith": The probability of life arising by chance is less than a monkey randomly typing a poem. Scientists themselves admit chance is impossible.',heart:'Al-Ghazali explains in "Pillars of Faith": The believing heart sees wisdom and purpose in everything. Chance creates neither beauty nor order.',verse:'Were they created by nothing, or were they themselves the creators?',verseRef:'Surah At-Tur 52:35',reflection:'Can an explosion in a printing press produce an organized book? Likewise, the universe cannot arise from chance.',young:'Can you shake a box of colors and get a beautiful painting? Impossible! The universe is not by chance either! 🎨'},
    fr:{title:'Refuter la Theorie du Hasard',mind:'Al-Ghazali explique dans "Les Piliers de la Foi": La probabilite que la vie naisse par hasard est moindre qu\'un singe tapant un poeme au hasard. Les scientifiques eux-memes admettent l\'impossibilite du hasard.',heart:'Al-Ghazali explique dans "Les Piliers de la Foi": Le coeur croyant voit sagesse et dessein en tout. Le hasard ne cree ni beaute ni ordre.',verse:'Ont-ils ete crees a partir de rien, ou sont-ils eux-memes les createurs ?',verseRef:'Sourate At-Tur 52:35',reflection:'Une explosion dans une imprimerie peut-elle produire un livre organise ? Le hasard ne peut creer l\'univers.',young:'Pouvez-vous secouer une boite de couleurs et obtenir un tableau ? Impossible ! L\'univers non plus ! 🎨'}
  },
  {
    id:4, emoji:'☝️', theme:'god',
    ar:{title:'التوحيد الخالص',mind:'يبيّن الغزالي في "ركائز الإيمان": وحدة القوانين الكونية تدل على وحدة الخالق. لو كان هناك أكثر من إله لفسد النظام.',heart:'يبيّن الغزالي في "ركائز الإيمان": التوحيد يحرر القلب من الخوف والتبعية لغير الله. من عرف الله الواحد لم يخف شيئاً سواه.',verse:'لَوْ كَانَ فِيهِمَا آلِهَةٌ إِلَّا اللَّهُ لَفَسَدَتَا',verseRef:'سورة الأنبياء ٢١: ٢٢',reflection:'حرر قلبك من كل تعلق بغير الله — التوحيد هو الحرية الحقيقية.',young:'تخيّل لو كان هناك ملكان لمدرسة واحدة — ستصبح فوضى! الكون يحتاج إلهاً واحداً! 👑'},
    en:{title:'Pure Monotheism (Tawhid)',mind:'Al-Ghazali explains in "Pillars of Faith": The unity of cosmic laws points to the unity of the Creator. If there were multiple gods, the system would collapse.',heart:'Al-Ghazali explains in "Pillars of Faith": Monotheism frees the heart from fear and dependence on anything other than God. Whoever knows the One God fears nothing else.',verse:'Had there been gods besides God, both [heavens and earth] would have been in ruin.',verseRef:'Surah Al-Anbiya 21:22',reflection:'Free your heart from every attachment besides God — true monotheism is true freedom.',young:'Imagine two principals for one school — chaos! The universe needs One God! 👑'},
    fr:{title:'Le Monotheisme Pur (Tawhid)',mind:'Al-Ghazali explique dans "Les Piliers de la Foi": L\'unite des lois cosmiques indique l\'unite du Createur. S\'il y avait plusieurs dieux, le systeme s\'effondrerait.',heart:'Al-Ghazali explique dans "Les Piliers de la Foi": Le monotheisme libere le coeur de la peur et de la dependance envers quoi que ce soit d\'autre que Dieu.',verse:'S\'il y avait des dieux en dehors de Dieu, tous deux [ciel et terre] seraient en ruine.',verseRef:'Sourate Al-Anbiya 21:22',reflection:'Liberez votre coeur de tout attachement autre que Dieu — le vrai monotheisme est la vraie liberte.',young:'Imaginez deux directeurs pour une seule ecole — le chaos ! L\'univers a besoin d\'un seul Dieu ! 👑'}
  },
  {
    id:5, emoji:'🔬', theme:'science',
    ar:{title:'العلم يقود إلى الإيمان',mind:'يبيّن الغزالي في "ركائز الإيمان": أعظم العلماء في التاريخ آمنوا بالله. نيوتن، أينشتاين، وغيرهم رأوا في الكون دليلاً على خالق عظيم.',heart:'يبيّن الغزالي في "ركائز الإيمان": كلما زاد علم الإنسان زاد خشوعه أمام عظمة الخالق. العلم الحقيقي يزيد الإيمان ولا ينقصه.',verse:'إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ',verseRef:'سورة فاطر ٣٥: ٢٨',reflection:'اقرأ عن عجائب الخلية أو المجرة — ستجد إيمانك يزداد مع كل اكتشاف.',young:'أعظم العلماء كانوا مؤمنين — كلما تعلمت أكثر اقتربت من الله أكثر! 🔭'},
    en:{title:'Science Leads to Faith',mind:'Al-Ghazali explains in "Pillars of Faith": The greatest scientists in history believed in God. Newton, Einstein, and others saw in the universe evidence of a great Creator.',heart:'Al-Ghazali explains in "Pillars of Faith": The more knowledge a person gains, the more humbled they become before the Creator\'s greatness. True science increases faith.',verse:'Only those who have knowledge truly fear God among His servants.',verseRef:'Surah Fatir 35:28',reflection:'Read about the wonders of a cell or a galaxy — your faith will grow with each discovery.',young:'The greatest scientists believed in God — the more you learn, the closer you get to Him! 🔭'},
    fr:{title:'La Science Mene a la Foi',mind:'Al-Ghazali explique dans "Les Piliers de la Foi": Les plus grands scientifiques de l\'histoire croyaient en Dieu. Newton, Einstein et d\'autres voyaient dans l\'univers la preuve d\'un grand Createur.',heart:'Al-Ghazali explique dans "Les Piliers de la Foi": Plus on acquiert de connaissances, plus on est humble devant la grandeur du Createur. La vraie science augmente la foi.',verse:'Parmi Ses serviteurs, seuls les savants craignent vraiment Dieu.',verseRef:'Sourate Fatir 35:28',reflection:'Lisez sur les merveilles d\'une cellule ou d\'une galaxie — votre foi grandira a chaque decouverte.',young:'Les plus grands scientifiques croyaient en Dieu — plus on apprend, plus on se rapproche de Lui ! 🔭'}
  },
  {
    id:6, emoji:'🧬', theme:'science',
    ar:{title:'عجائب الخلق في الجسم',mind:'يبيّن الغزالي في "ركائز الإيمان": في جسم الإنسان ٣٧ تريليون خلية، كل واحدة منها أعقد من أي مصنع بشري. هذا التعقيد يستحيل أن يكون عشوائياً.',heart:'يبيّن الغزالي في "ركائز الإيمان": جسدك أمانة من الله — تأمّل فيه لتعرف عظمة من خلقك وصوّرك.',verse:'لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ',verseRef:'سورة التين ٩٥: ٤',reflection:'ضع يدك على قلبك — هذا القلب ينبض ١٠٠ ألف مرة يومياً دون أن تطلب منه!',young:'قلبك ينبض ١٠٠,٠٠٠ مرة كل يوم من غير ما تطلب منه! من صنع هذا؟ الله! ❤️'},
    en:{title:'Wonders of Creation in the Body',mind:'Al-Ghazali explains in "Pillars of Faith": The human body has 37 trillion cells, each more complex than any human factory. This complexity cannot be random.',heart:'Al-Ghazali explains in "Pillars of Faith": Your body is a trust from God — contemplate it to know the greatness of the One who created you.',verse:'We have certainly created man in the best form.',verseRef:'Surah At-Tin 95:4',reflection:'Place your hand on your heart — it beats 100,000 times daily without you asking it to!',young:'Your heart beats 100,000 times every day without you asking! Who made this? God! ❤️'},
    fr:{title:'Merveilles de la Creation dans le Corps',mind:'Al-Ghazali explique dans "Les Piliers de la Foi": Le corps humain compte 37 mille milliards de cellules, chacune plus complexe que toute usine humaine. Cette complexite ne peut etre aleatoire.',heart:'Al-Ghazali explique dans "Les Piliers de la Foi": Votre corps est un depot de Dieu — contemplez-le pour connaitre la grandeur de Celui qui vous a cree.',verse:'Nous avons certes cree l\'homme dans la meilleure forme.',verseRef:'Sourate At-Tin 95:4',reflection:'Posez votre main sur votre coeur — il bat 100 000 fois par jour sans que vous le lui demandiez !',young:'Votre coeur bat 100 000 fois par jour sans que vous le demandiez ! Qui a fait cela ? Dieu ! ❤️'}
  },
  {
    id:7, emoji:'📖', theme:'prophets',
    ar:{title:'الأنبياء رسل الرحمة',mind:'تاريخ الأنبياء يثبت أنهم لم يطلبوا سلطة أو مالاً. رسالتهم كانت واحدة: اعبدوا الله وحده. هذا الاتساق عبر آلاف السنين دليل على مصدر واحد.',heart:'الأنبياء نماذج حية للأخلاق والرحمة. حبهم في القلب يُرقّق الروح ويُهذّب السلوك.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',verseRef:'سورة الأنبياء ٢١: ١٠٧',reflection:'اقرأ سيرة نبي واحد اليوم — وتأمّل كيف كان رحيماً حتى مع أعدائه.',young:'كل الأنبياء جاؤوا برسالة واحدة: اعبدوا الله! هذا يعني أن المصدر واحد! 📨'},
    en:{title:'Prophets: Messengers of Mercy',mind:'The history of prophets proves they never sought power or wealth. Their message was one: worship God alone. This consistency over thousands of years points to one source.',heart:'Prophets are living models of virtue and mercy. Loving them in your heart softens the soul and refines character.',verse:'And We have not sent you except as a mercy to all worlds.',verseRef:'Surah Al-Anbiya 21:107',reflection:'Read about one prophet today — and notice how merciful he was even toward his enemies.',young:'All prophets brought one message: worship God! That means the source is one! 📨'},
    fr:{title:'Les Prophetes : Messagers de Misericorde',mind:'L\'histoire des prophetes prouve qu\'ils n\'ont jamais cherche le pouvoir ou la richesse. Leur message etait un : adorez Dieu seul. Cette coherence sur des milliers d\'annees indique une source unique.',heart:'Les prophetes sont des modeles vivants de vertu et de misericorde. Les aimer dans son coeur adoucit l\'ame.',verse:'Et Nous ne t\'avons envoye que comme une misericorde pour les mondes.',verseRef:'Sourate Al-Anbiya 21:107',reflection:'Lisez sur un prophete aujourd\'hui — et remarquez sa misericorde meme envers ses ennemis.',young:'Tous les prophetes avaient un seul message : adorez Dieu ! La source est une ! 📨'}
  },
  {
    id:8, emoji:'⭐', theme:'prophets',
    ar:{title:'محمد ﷺ خاتم النبيين',mind:'نبي أمّي من الصحراء أتى بكتاب يحوي إعجازاً علمياً لم يُكتشف إلا بعد قرون. أسس حضارة غيّرت مجرى التاريخ.',heart:'حب النبي ﷺ يملأ القلب نوراً. اتباع سنته يجلب السكينة والطمأنينة في كل جانب من حياتك.',verse:'لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ',verseRef:'سورة الأحزاب ٣٣: ٢١',reflection:'اختر سنّة واحدة من سنن النبي ﷺ وطبّقها اليوم.',young:'النبي محمد ﷺ لم يكن يقرأ ولا يكتب — ومع ذلك جاء بالقرآن! هذا دليل على أنه من الله! ✨'},
    en:{title:'Muhammad (peace be upon him): Seal of Prophets',mind:'An unlettered Prophet from the desert brought a book containing scientific miracles discovered only centuries later. He founded a civilization that changed history.',heart:'Love for the Prophet fills the heart with light. Following his way brings peace and tranquility to every part of life.',verse:'There has certainly been for you in the Messenger of God an excellent example.',verseRef:'Surah Al-Ahzab 33:21',reflection:'Choose one practice from the Prophet\'s way and apply it today.',young:'Prophet Muhammad could not read or write — yet he brought the Quran! This proves it\'s from God! ✨'},
    fr:{title:'Muhammad (paix sur lui) : Sceau des Prophetes',mind:'Un Prophete illettre du desert a apporte un livre contenant des miracles scientifiques decouverts seulement des siecles plus tard. Il a fonde une civilisation qui a change l\'histoire.',heart:'L\'amour du Prophete remplit le coeur de lumiere. Suivre sa voie apporte paix et serenite dans chaque aspect de la vie.',verse:'Vous avez certes dans le Messager de Dieu un excellent modele.',verseRef:'Sourate Al-Ahzab 33:21',reflection:'Choisissez une pratique prophetique et appliquez-la aujourd\'hui.',young:'Le Prophete Muhammad ne savait ni lire ni ecrire — pourtant il a apporte le Coran ! C\'est de Dieu ! ✨'}
  },
  {
    id:9, emoji:'📜', theme:'prophets',
    ar:{title:'القرآن المعجزة الخالدة',mind:'القرآن يحوي حقائق علمية عن الأجنّة والمحيطات والجبال لم تُعرف إلا بالعلم الحديث. تحدّى البشر أن يأتوا بسورة مثله فعجزوا.',heart:'تلاوة القرآن تُطمئن القلب وتُهدّئ النفس. من جرّب أثره على الروح عرف أنه من عند الله.',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ وَلَوْ كَانَ مِنْ عِندِ غَيْرِ اللَّهِ لَوَجَدُوا فِيهِ اخْتِلَافًا كَثِيرًا',verseRef:'سورة النساء ٤: ٨٢',reflection:'اقرأ صفحة من القرآن بتدبّر اليوم — لا مجرد تلاوة، بل تفكّر في معانيها.',young:'القرآن ذكر أشياء عن البحر والفضاء قبل أن يكتشفها العلماء بمئات السنين! 📚'},
    en:{title:'The Quran: The Eternal Miracle',mind:'The Quran contains scientific facts about embryos, oceans, and mountains unknown until modern science. It challenged humanity to produce a chapter like it — and no one could.',heart:'Reciting the Quran calms the heart and soothes the soul. Those who experience its effect on the spirit know it is from God.',verse:'Do they not reflect upon the Quran? Had it been from other than God, they would have found much contradiction in it.',verseRef:'Surah An-Nisa 4:82',reflection:'Read one page of the Quran with reflection today — not just recitation, but thinking about its meanings.',young:'The Quran mentioned facts about the sea and space hundreds of years before scientists discovered them! 📚'},
    fr:{title:'Le Coran : Le Miracle Eternel',mind:'Le Coran contient des faits scientifiques sur les embryons, les oceans et les montagnes inconnus jusqu\'a la science moderne. Il a defie l\'humanite de produire un chapitre semblable — personne n\'a pu.',heart:'La recitation du Coran apaise le coeur et adoucit l\'ame. Ceux qui experimentent son effet sur l\'esprit savent qu\'il vient de Dieu.',verse:'Ne reflechissent-ils pas sur le Coran ? S\'il venait d\'un autre que Dieu, ils y trouveraient de nombreuses contradictions.',verseRef:'Sourate An-Nisa 4:82',reflection:'Lisez une page du Coran avec reflexion aujourd\'hui — pas seulement reciter, mais reflechir au sens.',young:'Le Coran a mentionne des faits sur la mer et l\'espace des siecles avant les scientifiques ! 📚'}
  },
  {
    id:10, emoji:'⚖️', theme:'destiny',
    ar:{title:'القدر: حكمة إلهية',mind:'الإيمان بالقدر لا يعني الاستسلام. يعني أن تبذل جهدك ثم تقبل النتيجة بسلام. العلم يثبت أن هناك قوانين تحكم الكون.',heart:'الإيمان بالقدر يحرر القلب من القلق على المستقبل والحزن على الماضي. ما أصابك لم يكن ليخطئك.',verse:'مَا أَصَابَ مِن مُّصِيبَةٍ فِي الْأَرْضِ وَلَا فِي أَنفُسِكُمْ إِلَّا فِي كِتَابٍ مِّن قَبْلِ أَن نَّبْرَأَهَا',verseRef:'سورة الحديد ٥٧: ٢٢',reflection:'فكّر في شيء حزنت عليه سابقاً ثم اكتشفت أن فيه خيراً — هذا هو القدر!',young:'أحياناً لا نحصل على ما نريد — لكن الله يعطينا ما هو أفضل! هذا هو القدر! 🌈'},
    en:{title:'Divine Destiny: God\'s Wisdom',mind:'Belief in destiny doesn\'t mean passivity. It means doing your best, then accepting the outcome with peace. Science confirms that laws govern the universe.',heart:'Belief in destiny frees the heart from worry about the future and grief about the past. What was meant for you will not miss you.',verse:'No disaster strikes upon the earth or among yourselves except that it is in a register before We bring it into being.',verseRef:'Surah Al-Hadid 57:22',reflection:'Think of something you grieved over but later found good in it — that is destiny!',young:'Sometimes we don\'t get what we want — but God gives us what\'s better! That\'s destiny! 🌈'},
    fr:{title:'Le Destin Divin : Sagesse de Dieu',mind:'La croyance au destin ne signifie pas la passivite. C\'est faire de son mieux, puis accepter le resultat en paix. La science confirme que des lois gouvernent l\'univers.',heart:'La croyance au destin libere le coeur de l\'anxiete pour l\'avenir et du chagrin du passe.',verse:'Nul malheur ne frappe sur terre ni en vos personnes, qui ne soit deja dans un Livre avant que Nous ne le creions.',verseRef:'Sourate Al-Hadid 57:22',reflection:'Pensez a quelque chose qui vous a attriste mais ou vous avez trouve du bien — c\'est le destin !',young:'Parfois on n\'obtient pas ce qu\'on veut — mais Dieu nous donne ce qui est meilleur ! C\'est le destin ! 🌈'}
  },
  {
    id:11, emoji:'🔄', theme:'destiny',
    ar:{title:'التوكل والأخذ بالأسباب',mind:'التوكل على الله لا يعني ترك العمل. النبي ﷺ ربط ناقته ثم توكل. الإيمان بالقدر يعطيك القوة لا الضعف.',heart:'التوكل يُزيل الخوف من القلب. عندما تعلم أن الله يدبّر أمرك، تعمل بثقة وراحة بال.',verse:'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',verseRef:'سورة الطلاق ٦٥: ٣',reflection:'ابذل جهدك اليوم في أمر مهم، ثم قل: توكلت على الله.',young:'اربط ناقتك ثم توكل! يعني: ادرس جيداً ثم توكل على الله في النتيجة! 🐪'},
    en:{title:'Trust in God and Taking Action',mind:'Trusting God doesn\'t mean abandoning effort. The Prophet tied his camel, then trusted God. Faith in destiny gives strength, not weakness.',heart:'Trust removes fear from the heart. When you know God manages your affairs, you work with confidence and peace of mind.',verse:'And whoever puts their trust in God, He is sufficient for them.',verseRef:'Surah At-Talaq 65:3',reflection:'Give your best effort today in something important, then say: I trust in God.',young:'Tie your camel, then trust God! Meaning: study well, then trust God for the result! 🐪'},
    fr:{title:'Confiance en Dieu et Action',mind:'Faire confiance a Dieu ne signifie pas abandonner l\'effort. Le Prophete a attache son chameau, puis a fait confiance a Dieu. La foi au destin donne de la force.',heart:'La confiance elimine la peur du coeur. Quand vous savez que Dieu gere vos affaires, vous travaillez avec serenite.',verse:'Et quiconque place sa confiance en Dieu, Il lui suffit.',verseRef:'Sourate At-Talaq 65:3',reflection:'Donnez le meilleur de vous-meme aujourd\'hui dans quelque chose d\'important, puis dites : je m\'en remets a Dieu.',young:'Attache ton chameau, puis fais confiance a Dieu ! C\'est-a-dire : etudie bien, puis confie le resultat a Dieu ! 🐪'}
  },
  {
    id:12, emoji:'🌅', theme:'afterlife',
    ar:{title:'البعث والحساب',mind:'إذا كان الله قادراً على خلقنا من العدم أول مرة، فبعثنا مرة أخرى أسهل منطقياً. العدالة تقتضي حساباً.',heart:'الإيمان بالآخرة يعطي الحياة معنى. بدونها تصبح الحياة عبثاً والظلم بلا جواب.',verse:'أَيَحْسَبُ الْإِنسَانُ أَن يُتْرَكَ سُدًى',verseRef:'سورة القيامة ٧٥: ٣٦',reflection:'تصرّف اليوم كأن كل عمل محسوب — لأنه كذلك فعلاً!',young:'هل من العدل أن يظلم شخص ولا يُحاسب أبداً؟ لا! لذلك هناك يوم القيامة! ⚖️'},
    en:{title:'Resurrection and Accountability',mind:'If God could create us from nothing the first time, recreating us is logically easier. Justice demands accountability.',heart:'Belief in the afterlife gives life meaning. Without it, life becomes absurd and injustice goes unanswered.',verse:'Does man think that he will be left aimless?',verseRef:'Surah Al-Qiyamah 75:36',reflection:'Act today as if every deed is counted — because it truly is!',young:'Is it fair for someone to do wrong and never be held accountable? No! That\'s why there\'s a Day of Judgment! ⚖️'},
    fr:{title:'Resurrection et Jugement',mind:'Si Dieu a pu nous creer a partir de rien la premiere fois, nous recreer est logiquement plus facile. La justice exige un jugement.',heart:'La croyance en l\'au-dela donne un sens a la vie. Sans elle, la vie devient absurde et l\'injustice reste sans reponse.',verse:'L\'homme pense-t-il qu\'il sera laisse sans but ?',verseRef:'Sourate Al-Qiyamah 75:36',reflection:'Agissez aujourd\'hui comme si chaque acte est compte — car il l\'est vraiment !',young:'Est-il juste que quelqu\'un fasse du mal sans jamais etre juge ? Non ! C\'est pour cela qu\'il y a le Jour du Jugement ! ⚖️'}
  },
  {
    id:13, emoji:'🏡', theme:'afterlife',
    ar:{title:'الجنة والنار: دافع للعمل',mind:'فكرة الثواب والعقاب موجودة في كل نظام بشري — القوانين، المدارس، العمل. الآخرة هي العدالة الكبرى.',heart:'الشوق إلى الجنة يدفعك للعمل الصالح. الخوف من النار يحميك من الانحراف. كلاهما يُهذّب النفس.',verse:'وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِّن رَّبِّكُمْ وَجَنَّةٍ عَرْضُهَا السَّمَاوَاتُ وَالْأَرْضُ',verseRef:'سورة آل عمران ٣: ١٣٣',reflection:'اعمل عملاً صالحاً اليوم بنية صادقة — واحتسبه عند الله.',young:'في المدرسة هناك مكافآت وعقوبات — والحياة كلها مدرسة كبيرة والجنة هي الجائزة الكبرى! 🏆'},
    en:{title:'Paradise and Hellfire: Motivation for Action',mind:'The concept of reward and punishment exists in every human system — laws, schools, work. The afterlife is the ultimate justice.',heart:'Longing for Paradise drives you to good deeds. Fear of Hellfire protects you from deviation. Both refine the soul.',verse:'And hasten to forgiveness from your Lord and a garden as wide as the heavens and earth.',verseRef:'Surah Aal-Imran 3:133',reflection:'Do a good deed today with sincere intention — and count it with God.',young:'In school there are rewards and punishments — all of life is a big school, and Paradise is the grand prize! 🏆'},
    fr:{title:'Paradis et Enfer : Motivation pour l\'Action',mind:'Le concept de recompense et de punition existe dans tout systeme humain — lois, ecoles, travail. L\'au-dela est la justice ultime.',heart:'L\'aspiration au Paradis pousse aux bonnes actions. La crainte de l\'Enfer protege de la deviation. Les deux raffinent l\'ame.',verse:'Et hatez-vous vers le pardon de votre Seigneur et un Jardin large comme les cieux et la terre.',verseRef:'Sourate Aal-Imran 3:133',reflection:'Faites une bonne action aujourd\'hui avec une intention sincere — et comptez-la aupres de Dieu.',young:'A l\'ecole il y a des recompenses et des punitions — toute la vie est une grande ecole, et le Paradis est le grand prix ! 🏆'}
  },
  {
    id:14, emoji:'🌍', theme:'science',
    ar:{title:'الكون المُتقن الصنع',mind:'دقة ميل محور الأرض، المسافة بين الأرض والشمس، نسبة الأكسجين — لو تغيّر أي منها قليلاً لاستحالت الحياة. هذا تصميم لا مصادفة.',heart:'تأمّل الكون يملأ القلب بالدهشة والشكر. كل غروب شمس هو رسالة من الخالق.',verse:'الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ',verseRef:'سورة الملك ٦٧: ٣',reflection:'شاهد غروب الشمس اليوم وقل: سبحان الله!',young:'لو كانت الأرض أقرب قليلاً من الشمس لاحترقنا! ولو أبعد لتجمدنا! من وضعها في المكان المثالي؟ 🌎'},
    en:{title:'The Perfectly Crafted Universe',mind:'The precision of Earth\'s axial tilt, the distance from the sun, the oxygen ratio — if any changed slightly, life would be impossible. This is design, not coincidence.',heart:'Contemplating the universe fills the heart with awe and gratitude. Every sunset is a message from the Creator.',verse:'He created seven heavens in layers. You do not see in the creation of the Most Merciful any inconsistency.',verseRef:'Surah Al-Mulk 67:3',reflection:'Watch the sunset today and say: Glory be to God!',young:'If Earth were a little closer to the sun we\'d burn! A little farther, we\'d freeze! Who placed it perfectly? 🌎'},
    fr:{title:'L\'Univers Parfaitement Concu',mind:'La precision de l\'inclinaison de l\'axe terrestre, la distance au soleil, le taux d\'oxygene — si l\'un changeait legerement, la vie serait impossible. C\'est un design, pas une coincidence.',heart:'Contempler l\'univers remplit le coeur d\'emerveillement et de gratitude. Chaque coucher de soleil est un message du Createur.',verse:'Il a cree sept cieux superposes. Tu ne vois dans la creation du Misericordieux aucune imperfection.',verseRef:'Sourate Al-Mulk 67:3',reflection:'Regardez le coucher de soleil aujourd\'hui et dites : Gloire a Dieu !',young:'Si la Terre etait un peu plus proche du soleil, on bruelerait ! Un peu plus loin, on gelerait ! Qui l\'a placee parfaitement ? 🌎'}
  },
  {
    id:15, emoji:'⚖️', theme:'balance',
    ar:{title:'التوازن بين المادة والروح',mind:'الإسلام لا يطلب الرهبانية ولا يقبل المادية المفرطة. التوازن هو المنهج — اعمل لدنياك كأنك تعيش أبداً واعمل لآخرتك كأنك تموت غداً.',heart:'القلب يحتاج غذاء روحياً كما يحتاج الجسد غذاء مادياً. من أهمل روحه أصابه الاكتئاب.',verse:'وَابْتَغِ فِيمَا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا',verseRef:'سورة القصص ٢٨: ٧٧',reflection:'هل توازن بين عملك وعبادتك؟ راجع يومك الآن.',young:'كما تحتاج أن تأكل وتشرب، روحك تحتاج صلاة وقرآن — لا تنسَ كليهما! 🍎📿'},
    en:{title:'Balance Between Material and Spiritual',mind:'Islam rejects monasticism and excessive materialism alike. Balance is the approach — work for this world as if you live forever and for the next as if you die tomorrow.',heart:'The heart needs spiritual nourishment just as the body needs physical food. Neglecting the soul leads to depression.',verse:'Seek the home of the Hereafter with what God has given you, and do not forget your share of this world.',verseRef:'Surah Al-Qasas 28:77',reflection:'Are you balancing your work and worship? Review your day now.',young:'Just as you need to eat and drink, your soul needs prayer and Quran — don\'t forget either! 🍎📿'},
    fr:{title:'Equilibre entre Materiel et Spirituel',mind:'L\'Islam rejette le monachisme et le materialisme excessif. L\'equilibre est l\'approche — travaillez pour ce monde comme si vous viviez eternellement et pour l\'autre comme si vous mouriez demain.',heart:'Le coeur a besoin de nourriture spirituelle comme le corps a besoin de nourriture physique. Negliger l\'ame mene a la depression.',verse:'Recherche la demeure de l\'au-dela par ce que Dieu t\'a donne, et n\'oublie pas ta part de ce monde.',verseRef:'Sourate Al-Qasas 28:77',reflection:'Equilibrez-vous votre travail et votre adoration ? Revoyez votre journee maintenant.',young:'Comme tu as besoin de manger et boire, ton ame a besoin de priere et de Coran — n\'oublie ni l\'un ni l\'autre ! 🍎📿'}
  },
  {
    id:16, emoji:'🤝', theme:'balance',
    ar:{title:'الإيمان والعمل الصالح',mind:'الإيمان بلا عمل كالشجرة بلا ثمر. والعمل بلا إيمان كالجسد بلا روح. الاثنان لا ينفصلان في الإسلام.',heart:'كل عمل صالح يُنير القلب ويُقوّي الإيمان. الإيمان يزيد وينقص بحسب الأعمال.',verse:'إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ كَانَتْ لَهُمْ جَنَّاتُ الْفِرْدَوْسِ نُزُلًا',verseRef:'سورة الكهف ١٨: ١٠٧',reflection:'اربط إيمانك بعمل — ابتسم في وجه أخيك فهي صدقة.',young:'الإيمان مثل الشجرة: الجذور هي ما في قلبك، والثمار هي أعمالك الصالحة! 🌳'},
    en:{title:'Faith and Good Deeds',mind:'Faith without deeds is like a tree without fruit. Deeds without faith are like a body without a soul. In Islam, they are inseparable.',heart:'Every good deed illuminates the heart and strengthens faith. Faith increases and decreases according to actions.',verse:'Those who believe and do good deeds — for them are the Gardens of Paradise as a welcome.',verseRef:'Surah Al-Kahf 18:107',reflection:'Link your faith to action — smile at someone, for it is charity.',young:'Faith is like a tree: the roots are what\'s in your heart, and the fruits are your good deeds! 🌳'},
    fr:{title:'Foi et Bonnes Actions',mind:'La foi sans actes est comme un arbre sans fruit. Les actes sans foi sont comme un corps sans ame. En Islam, ils sont inseparables.',heart:'Chaque bonne action illumine le coeur et renforce la foi. La foi augmente et diminue selon les actions.',verse:'Ceux qui croient et font le bien — pour eux sont les Jardins du Paradis en accueil.',verseRef:'Sourate Al-Kahf 18:107',reflection:'Liez votre foi a l\'action — souriez a quelqu\'un, c\'est une charite.',young:'La foi est comme un arbre : les racines sont dans ton coeur, et les fruits sont tes bonnes actions ! 🌳'}
  },
  {
    id:17, emoji:'🕌', theme:'balance',
    ar:{title:'التديّن الحقيقي لا المظهري',mind:'الغزالي يفرّق بين من يُظهر التدين ومن يعيشه حقاً. العبادة الشكلية بلا فهم ولا أخلاق ليست ديناً.',heart:'التدين الحقيقي يبدأ من القلب ويظهر في الأخلاق. ليس في المظهر بل في الجوهر.',verse:'لَّيْسَ الْبِرَّ أَن تُوَلُّوا وُجُوهَكُمْ قِبَلَ الْمَشْرِقِ وَالْمَغْرِبِ',verseRef:'سورة البقرة ٢: ١٧٧',reflection:'هل صلاتك تُحسّن أخلاقك؟ إن لم تفعل فراجع صلاتك.',young:'الدين ليس فقط في المسجد — بل في أخلاقك مع الناس كل يوم! 🌟'},
    en:{title:'True Religiosity vs Fake Piety',mind:'Al-Ghazali distinguishes between those who display religiosity and those who truly live it. Ritual worship without understanding or ethics is not real religion.',heart:'True religiosity begins in the heart and shows in character. It\'s not about appearance but about essence.',verse:'Righteousness is not that you turn your faces toward the east or the west.',verseRef:'Surah Al-Baqarah 2:177',reflection:'Does your prayer improve your character? If not, reconsider how you pray.',young:'Religion is not just in the mosque — it\'s in how you treat people every day! 🌟'},
    fr:{title:'Vraie Religiosite vs Fausse Piete',mind:'Al-Ghazali distingue entre ceux qui affichent la religiosite et ceux qui la vivent vraiment. Le culte rituel sans comprehension ni ethique n\'est pas une vraie religion.',heart:'La vraie religiosite commence dans le coeur et se manifeste dans le caractere. Ce n\'est pas l\'apparence mais l\'essence.',verse:'La piete ne consiste pas a tourner vos visages vers l\'est ou l\'ouest.',verseRef:'Sourate Al-Baqarah 2:177',reflection:'Votre priere ameliore-t-elle votre caractere ? Sinon, reconsiderez votre priere.',young:'La religion n\'est pas seulement a la mosquee — c\'est comment tu traites les gens chaque jour ! 🌟'}
  },
  {
    id:18, emoji:'🛡️', theme:'god',
    ar:{title:'الرد على الإلحاد',mind:'يقول الغزالي: الإلحاد آفة نفسية وليس شبهة علمية. الملحد يؤمن بأن اللاشيء أنتج كل شيء وأن الفوضى أنتجت النظام. حتى داروين نفسه كان يؤمن بالله. هذا أبعد عن المنطق من الإيمان.',heart:'الإلحاد يترك القلب فارغاً بلا معنى. يقول الغزالي: العلماء المؤمنون يتفوقون على الملحدين لأنهم يملكون المعرفة الدنيوية وفهم الحقيقة الإلهية معاً.',verse:'أَمْ خُلِقُوا مِنْ غَيْرِ شَيْءٍ أَمْ هُمُ الْخَالِقُونَ',verseRef:'سورة الطور ٥٢: ٣٥',reflection:'إذا سألك أحد: لماذا تؤمن بالله؟ فقل: لأن كل شيء حولي يشهد بوجوده.',young:'هل يمكن أن تبني بيتاً من غير بنّاء؟ كذلك الكون لا يمكن أن يكون بلا خالق! 🏗️'},
    en:{title:'Responding to Atheism',mind:'The atheist believes nothing produced everything, chaos produced order, and randomness produced wisdom. This is further from logic than faith.',heart:'Atheism leaves the heart empty with no meaning or hope. Faith fills the void and gives life purpose.',verse:'Were they created by nothing, or were they themselves the creators?',verseRef:'Surah At-Tur 52:35',reflection:'If someone asks: why do you believe in God? Say: because everything around me testifies to His existence.',young:'Can you build a house without a builder? Neither can the universe exist without a Creator! 🏗️'},
    fr:{title:'Repondre a l\'Atheisme',mind:'L\'athee croit que le neant a produit tout, que le chaos a produit l\'ordre, et que le hasard a produit la sagesse. C\'est plus eloigne de la logique que la foi.',heart:'L\'atheisme laisse le coeur vide sans sens ni espoir. La foi comble le vide et donne un but a la vie.',verse:'Ont-ils ete crees a partir de rien, ou sont-ils eux-memes les createurs ?',verseRef:'Sourate At-Tur 52:35',reflection:'Si quelqu\'un demande : pourquoi croyez-vous en Dieu ? Dites : parce que tout autour de moi temoigne de Son existence.',young:'Peut-on construire une maison sans constructeur ? L\'univers non plus ne peut exister sans Createur ! 🏗️'}
  },
  {
    id:19, emoji:'💎', theme:'balance',
    ar:{title:'الأخلاق ثمرة الإيمان',mind:'كل حضارة عظيمة قامت على أخلاق. الإسلام جعل الأخلاق جزءاً لا يتجزأ من الإيمان — "أكمل المؤمنين إيماناً أحسنهم خلقاً".',heart:'الأخلاق الحسنة تُفتح لها أبواب القلوب. من أراد أن ينشر الإيمان فليبدأ بأخلاقه.',verse:'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',verseRef:'سورة القلم ٦٨: ٤',reflection:'كيف كان خُلقك اليوم مع أهلك وجيرانك؟ هل يعكس إيمانك؟',young:'النبي ﷺ قال: أحبكم إليّ أحسنكم أخلاقاً. الأخلاق مثل العطر — الكل يحبه! 🌺'},
    en:{title:'Ethics: The Fruit of Faith',mind:'Every great civilization was built on ethics. Islam made morality an inseparable part of faith — "The most complete believers are those with the best character."',heart:'Good character opens the doors of hearts. Whoever wants to spread faith should start with their manners.',verse:'And indeed, you are of a great moral character.',verseRef:'Surah Al-Qalam 68:4',reflection:'How was your character today with your family and neighbors? Does it reflect your faith?',young:'The Prophet said: the dearest to me are those with the best manners. Character is like perfume — everyone loves it! 🌺'},
    fr:{title:'L\'Ethique : Fruit de la Foi',mind:'Chaque grande civilisation a ete batie sur l\'ethique. L\'Islam a fait de la moralite une partie inseparable de la foi — « Les croyants les plus complets sont ceux au meilleur caractere. »',heart:'Le bon caractere ouvre les portes des coeurs. Celui qui veut repandre la foi doit commencer par ses manieres.',verse:'Et tu es certes d\'un caractere eminent.',verseRef:'Sourate Al-Qalam 68:4',reflection:'Comment etait votre caractere aujourd\'hui avec votre famille et vos voisins ? Reflete-t-il votre foi ?',young:'Le Prophete a dit : les plus chers a mon coeur sont ceux aux meilleures manieres. Le caractere est comme un parfum ! 🌺'}
  },
  {
    id:20, emoji:'🌟', theme:'balance',
    ar:{title:'الإيمان: رحلة مستمرة',mind:'الإيمان ليس حالة ثابتة بل رحلة مستمرة من التعلم والتأمل والعمل. كل يوم فرصة لتقوية إيمانك.',heart:'القلب يحتاج تجديداً دائماً. الإيمان يصدأ كما يصدأ الحديد — جدّده بالذكر والعمل الصالح.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا آمِنُوا',verseRef:'سورة النساء ٤: ١٣٦',reflection:'ما الذي ستفعله اليوم لتقوية إيمانك؟ حدد خطوة واحدة وابدأ.',young:'الإيمان مثل الحديقة — تحتاج سقياً كل يوم! اقرأ، صلِّ، وتأمّل! 🌻'},
    en:{title:'Faith: A Continuous Journey',mind:'Faith is not a fixed state but a continuous journey of learning, contemplation, and action. Every day is a chance to strengthen your faith.',heart:'The heart needs constant renewal. Faith rusts as iron rusts — renew it with remembrance and good deeds.',verse:'O you who believe — believe!',verseRef:'Surah An-Nisa 4:136',reflection:'What will you do today to strengthen your faith? Set one step and begin.',young:'Faith is like a garden — it needs watering every day! Read, pray, and reflect! 🌻'},
    fr:{title:'La Foi : Un Voyage Continu',mind:'La foi n\'est pas un etat fixe mais un voyage continu d\'apprentissage, de contemplation et d\'action. Chaque jour est une chance de renforcer votre foi.',heart:'Le coeur a besoin d\'un renouvellement constant. La foi rouille comme le fer — renouvelez-la par le rappel et les bonnes actions.',verse:'O vous qui croyez — croyez !',verseRef:'Sourate An-Nisa 4:136',reflection:'Que ferez-vous aujourd\'hui pour renforcer votre foi ? Fixez une etape et commencez.',young:'La foi est comme un jardin — elle a besoin d\'arrosage chaque jour ! Lisez, priez et reflechissez ! 🌻'}
  }
];

// ═══════════════ HEART & MIND INSIGHTS ═══════════════
const INSIGHTS = [
  {
    id:1, emoji:'🧪',
    ar:{title:'العلم والدين: لا تعارض',desc:'الغزالي يستشهد بعلماء غربيين مثل نيوتن وأينشتاين ليُثبت أن العلم الحقيقي يقود إلى الإيمان لا إلى الإلحاد.',mind:'الحقائق العلمية لا تتعارض مع القرآن — بل تؤكده.',heart:'العالِم الحقيقي يقف أمام عظمة الخلق بخشوع وتواضع.'},
    en:{title:'Science and Religion: No Conflict',desc:'Al-Ghazali cites Western scientists like Newton and Einstein to prove that true science leads to faith, not atheism.',mind:'Scientific facts don\'t contradict the Quran — they confirm it.',heart:'The true scientist stands before the greatness of creation with awe and humility.'},
    fr:{title:'Science et Religion : Pas de Conflit',desc:'Al-Ghazali cite des scientifiques occidentaux comme Newton et Einstein pour prouver que la vraie science mene a la foi, pas a l\'atheisme.',mind:'Les faits scientifiques ne contredisent pas le Coran — ils le confirment.',heart:'Le vrai scientifique se tient devant la grandeur de la creation avec humilite.'}
  },
  {
    id:2, emoji:'❤️',
    ar:{title:'القلب والعقل معاً',desc:'يبيّن الغزالي في "ركائز الإيمان": لا يكفي العقل وحده ولا القلب وحده. الإيمان الكامل يجمع بين الحجة العقلية والذوق الروحي.',mind:'العقل يُثبت والقلب يُذوق. كلاهما طريق إلى الله.',heart:'من اعتمد على العقل فقط جفّ قلبه، ومن اعتمد على القلب فقط ضلّ عقله.'},
    en:{title:'Heart and Mind Together',desc:'Al-Ghazali explains in "Pillars of Faith": Neither mind alone nor heart alone suffices. Complete faith combines rational proof and spiritual experience.',mind:'The mind proves and the heart tastes. Both are paths to God.',heart:'Who relies only on mind dries their heart; who relies only on heart loses their way.'},
    fr:{title:'Coeur et Raison Ensemble',desc:'Al-Ghazali explique dans "Les Piliers de la Foi": Ni la raison seule ni le coeur seul ne suffit. La foi complete allie preuve rationnelle et experience spirituelle.',mind:'La raison prouve et le coeur goute. Les deux sont des chemins vers Dieu.',heart:'Qui ne compte que sur la raison desseche son coeur ; qui ne compte que sur le coeur perd sa voie.'}
  },
  {
    id:3, emoji:'🔭',
    ar:{title:'آيات الله في الكون',desc:'كل اكتشاف علمي جديد هو آية من آيات الله. الغزالي يدعو للتأمل في الكون كعبادة.',mind:'الكون كتاب مفتوح — اقرأه بعين الباحث وقلب المؤمن.',heart:'التأمل في الخلق يُقرّبك من الخالق ويزيد حبك له.'},
    en:{title:'God\'s Signs in the Universe',desc:'Every new scientific discovery is a sign from God. Al-Ghazali calls for contemplating the universe as worship.',mind:'The universe is an open book — read it with a researcher\'s eye and a believer\'s heart.',heart:'Contemplating creation draws you closer to the Creator and increases your love for Him.'},
    fr:{title:'Les Signes de Dieu dans l\'Univers',desc:'Chaque nouvelle decouverte scientifique est un signe de Dieu. Al-Ghazali appelle a contempler l\'univers comme acte d\'adoration.',mind:'L\'univers est un livre ouvert — lisez-le avec l\'oeil du chercheur et le coeur du croyant.',heart:'Contempler la creation vous rapproche du Createur et augmente votre amour pour Lui.'}
  },
  {
    id:4, emoji:'🌿',
    ar:{title:'الخرافة عدو الإيمان',desc:'الغزالي يحارب الخرافات باسم الدين. التوحيد الحقيقي يرفض التمائم والشعوذة ويقبل العلم.',mind:'الدين الصحيح يتفق مع العقل السليم — كل ما يخالف العقل ليس من الدين.',heart:'حرّر قلبك من الأوهام — الله وحده هو النافع والضار.'},
    en:{title:'Superstition: Enemy of Faith',desc:'Al-Ghazali fights superstitions done in the name of religion. True monotheism rejects amulets and sorcery and embraces science.',mind:'True religion agrees with sound reason — whatever contradicts reason is not from religion.',heart:'Free your heart from illusions — God alone is the One who benefits and harms.'},
    fr:{title:'La Superstition : Ennemi de la Foi',desc:'Al-Ghazali combat les superstitions faites au nom de la religion. Le vrai monotheisme rejette les amulettes et la sorcellerie et embrasse la science.',mind:'La vraie religion s\'accorde avec la raison saine — tout ce qui contredit la raison n\'est pas de la religion.',heart:'Liberez votre coeur des illusions — Dieu seul est Celui qui profite et nuit.'}
  },
  {
    id:5, emoji:'⚡',
    ar:{title:'الإيمان قوة لا ضعف',desc:'يبيّن الغزالي في "ركائز الإيمان": المؤمن الحق قوي، شجاع، فاعل في المجتمع. الإيمان الصحيح يصنع حضارات لا يُضعف الأمم.',mind:'التاريخ يشهد: كل نهضة إسلامية بدأت بتجديد الإيمان.',heart:'الإيمان يمنحك قوة داخلية لمواجهة أصعب التحديات بثبات.'},
    en:{title:'Faith Is Strength, Not Weakness',desc:'Al-Ghazali explains in "Pillars of Faith": The true believer is strong, brave, and active in society. True faith builds civilizations, it does not weaken nations.',mind:'History testifies: every Islamic renaissance began with renewing faith.',heart:'Faith gives you inner strength to face the toughest challenges with steadfastness.'},
    fr:{title:'La Foi Est Force, Pas Faiblesse',desc:'Al-Ghazali explique dans "Les Piliers de la Foi": Le vrai croyant est fort, courageux et actif dans la societe. La vraie foi construit des civilisations.',mind:'L\'histoire temoigne : chaque renaissance islamique a commence par le renouvellement de la foi.',heart:'La foi vous donne une force interieure pour affronter les defis les plus difficiles avec fermete.'}
  }
];

// ═══════════════ QUIZ DATA: WHO WANTS TO BE A SCHOLAR? ═══════════════
const QUIZ_DATA = [
  {
    ar:{q:'ما الدليل العقلي الأقوى على وجود الله عند الغزالي؟',opts:['الصدفة','نظام الكون الدقيق','التقليد','الأحلام'],correct:1,hint:'تأمّل في السماوات والأرض...'},
    en:{q:'What is the strongest rational proof of God\'s existence according to al-Ghazali?',opts:['Chance','The precise order of the universe','Tradition','Dreams'],correct:1,hint:'Reflect on the heavens and the earth...'},
    fr:{q:'Quelle est la preuve rationnelle la plus forte de l\'existence de Dieu selon al-Ghazali ?',opts:['Le hasard','L\'ordre precis de l\'univers','La tradition','Les reves'],correct:1,hint:'Reflechissez aux cieux et a la terre...'}
  },
  {
    ar:{q:'ماذا يعني التوحيد الخالص؟',opts:['عبادة أكثر من إله','عبادة الله وحده','عبادة الطبيعة','عبادة الأنبياء'],correct:1,hint:'لو كان فيهما آلهة إلا الله لفسدتا'},
    en:{q:'What does pure monotheism (Tawhid) mean?',opts:['Worshipping multiple gods','Worshipping God alone','Worshipping nature','Worshipping prophets'],correct:1,hint:'Had there been gods besides God...'},
    fr:{q:'Que signifie le monotheisme pur (Tawhid) ?',opts:['Adorer plusieurs dieux','Adorer Dieu seul','Adorer la nature','Adorer les prophetes'],correct:1,hint:'S\'il y avait des dieux en dehors de Dieu...'}
  },
  {
    ar:{q:'كيف يرد الغزالي على نظرية الصدفة؟',opts:['بالشعر','باستحالة النظام من الفوضى','بالتقليد','بالقوة'],correct:1,hint:'هل ينتج انفجار في مطبعة كتاباً؟'},
    en:{q:'How does al-Ghazali refute the chance theory?',opts:['With poetry','Order cannot come from chaos','By tradition','By force'],correct:1,hint:'Can an explosion in a printing press produce a book?'},
    fr:{q:'Comment al-Ghazali refute-t-il la theorie du hasard ?',opts:['Par la poesie','L\'ordre ne peut venir du chaos','Par la tradition','Par la force'],correct:1,hint:'Une explosion dans une imprimerie peut-elle produire un livre ?'}
  },
  {
    ar:{q:'ما علاقة العلم بالإيمان عند الغزالي؟',opts:['متعارضان','العلم يقود للإيمان','لا علاقة','العلم يُضعف الإيمان'],correct:1,hint:'إنما يخشى الله من عباده العلماء'},
    en:{q:'What is the relationship between science and faith according to al-Ghazali?',opts:['They conflict','Science leads to faith','No relationship','Science weakens faith'],correct:1,hint:'Only those with knowledge truly fear God...'},
    fr:{q:'Quelle est la relation entre science et foi selon al-Ghazali ?',opts:['Ils sont en conflit','La science mene a la foi','Aucune relation','La science affaiblit la foi'],correct:1,hint:'Seuls les savants craignent vraiment Dieu...'}
  },
  {
    ar:{q:'كم خلية في جسم الإنسان تقريباً؟',opts:['مليون','مليار','٣٧ تريليون','ألف'],correct:2,hint:'عدد مذهل يشهد بعظمة الخالق'},
    en:{q:'Approximately how many cells are in the human body?',opts:['One million','One billion','37 trillion','One thousand'],correct:2,hint:'An amazing number testifying to the Creator\'s greatness'},
    fr:{q:'Combien de cellules y a-t-il approximativement dans le corps humain ?',opts:['Un million','Un milliard','37 mille milliards','Mille'],correct:2,hint:'Un nombre etonnant temoignant de la grandeur du Createur'}
  },
  {
    ar:{q:'ما معنى الإيمان بالقدر؟',opts:['الاستسلام وترك العمل','بذل الجهد ثم قبول النتيجة','الكسل','عدم التخطيط'],correct:1,hint:'اعقلها وتوكل'},
    en:{q:'What does belief in divine destiny mean?',opts:['Surrendering and abandoning effort','Doing your best then accepting the outcome','Laziness','Not planning'],correct:1,hint:'Tie your camel then trust God'},
    fr:{q:'Que signifie la croyance au destin divin ?',opts:['Se soumettre et abandonner l\'effort','Faire de son mieux puis accepter le resultat','La paresse','Ne pas planifier'],correct:1,hint:'Attache ton chameau puis fais confiance a Dieu'}
  },
  {
    ar:{q:'لماذا أرسل الله الأنبياء؟',opts:['للحكم','لهداية البشر إلى عبادة الله','للثروة','للحرب'],correct:1,hint:'وما أرسلناك إلا رحمة للعالمين'},
    en:{q:'Why did God send prophets?',opts:['To rule','To guide people to worship God','For wealth','For war'],correct:1,hint:'We sent you only as a mercy to all worlds'},
    fr:{q:'Pourquoi Dieu a-t-il envoye des prophetes ?',opts:['Pour gouverner','Pour guider les gens a adorer Dieu','Pour la richesse','Pour la guerre'],correct:1,hint:'Nous ne t\'avons envoye que comme misericorde pour les mondes'}
  },
  {
    ar:{q:'ما هي المعجزة الخالدة للنبي محمد ﷺ؟',opts:['السيف','المال','القرآن الكريم','الجيش'],correct:2,hint:'كتاب لا يأتيه الباطل من بين يديه ولا من خلفه'},
    en:{q:'What is the eternal miracle of Prophet Muhammad?',opts:['The sword','Wealth','The Holy Quran','An army'],correct:2,hint:'A book that falsehood cannot approach from any direction'},
    fr:{q:'Quel est le miracle eternel du Prophete Muhammad ?',opts:['L\'epee','La richesse','Le Saint Coran','Une armee'],correct:2,hint:'Un livre que le faux ne peut approcher d\'aucune direction'}
  },
  {
    ar:{q:'ما الحكمة من الإيمان بالبعث والحساب؟',opts:['التخويف فقط','تحقيق العدالة الكاملة','لا حكمة','السيطرة'],correct:1,hint:'أيحسب الإنسان أن يُترك سدى؟'},
    en:{q:'What is the wisdom behind belief in resurrection?',opts:['Fear only','Achieving complete justice','No wisdom','Control'],correct:1,hint:'Does man think he will be left aimless?'},
    fr:{q:'Quelle est la sagesse derriere la croyance en la resurrection ?',opts:['La peur seulement','Realiser la justice complete','Pas de sagesse','Le controle'],correct:1,hint:'L\'homme pense-t-il qu\'il sera laisse sans but ?'}
  },
  {
    ar:{q:'كيف يصف الغزالي التوازن في الإسلام؟',opts:['رهبانية','مادية','توازن بين الدنيا والآخرة','انعزال'],correct:2,hint:'ولا تنس نصيبك من الدنيا'},
    en:{q:'How does al-Ghazali describe balance in Islam?',opts:['Monasticism','Materialism','Balance between this world and the next','Isolation'],correct:2,hint:'Do not forget your share of this world'},
    fr:{q:'Comment al-Ghazali decrit-il l\'equilibre en Islam ?',opts:['Monachisme','Materialisme','Equilibre entre ce monde et l\'au-dela','Isolement'],correct:2,hint:'N\'oublie pas ta part de ce monde'}
  },
  {
    ar:{q:'ما الفرق بين التدين الحقيقي والمظهري؟',opts:['لا فرق','الحقيقي يبدأ من القلب ويظهر في الأخلاق','المظهري أفضل','الحقيقي في اللباس فقط'],correct:1,hint:'ليس البر أن تولوا وجوهكم...'},
    en:{q:'What is the difference between true and fake religiosity?',opts:['No difference','True religiosity starts in the heart and shows in character','Appearance is better','True religiosity is in clothing only'],correct:1,hint:'Righteousness is not that you turn your faces...'},
    fr:{q:'Quelle est la difference entre vraie et fausse piete ?',opts:['Pas de difference','La vraie piete commence dans le coeur et se montre dans le caractere','L\'apparence est meilleure','La vraie piete est dans les vetements'],correct:1,hint:'La piete ne consiste pas a tourner vos visages...'}
  },
  {
    ar:{q:'ماذا يقول الحديث عن أكمل المؤمنين؟',opts:['أكثرهم صلاة','أحسنهم خُلقاً','أغناهم مالاً','أكثرهم علماً'],correct:1,hint:'إن من أحبكم إليّ...'},
    en:{q:'What does the hadith say about the most complete believers?',opts:['Those who pray the most','Those with the best character','The wealthiest','The most knowledgeable'],correct:1,hint:'The dearest to me among you...'},
    fr:{q:'Que dit le hadith sur les croyants les plus complets ?',opts:['Ceux qui prient le plus','Ceux au meilleur caractere','Les plus riches','Les plus savants'],correct:1,hint:'Les plus chers a mon coeur parmi vous...'}
  },
  {
    ar:{q:'كيف يصف القرآن خلق الإنسان؟',opts:['في أسوأ تقويم','في أحسن تقويم','بلا غاية','بالصدفة'],correct:1,hint:'لقد خلقنا الإنسان في...'},
    en:{q:'How does the Quran describe human creation?',opts:['In the worst form','In the best form','Without purpose','By chance'],correct:1,hint:'We certainly created man in...'},
    fr:{q:'Comment le Coran decrit-il la creation de l\'homme ?',opts:['Dans la pire forme','Dans la meilleure forme','Sans but','Par hasard'],correct:1,hint:'Nous avons certes cree l\'homme dans...'}
  },
  {
    ar:{q:'ما الذي يجدد الإيمان حسب الحديث النبوي؟',opts:['المال','الذكر والعمل الصالح','النوم','السفر'],correct:1,hint:'جددوا إيمانكم...'},
    en:{q:'What renews faith according to prophetic tradition?',opts:['Money','Remembrance and good deeds','Sleep','Travel'],correct:1,hint:'Renew your faith...'},
    fr:{q:'Qu\'est-ce qui renouvelle la foi selon la tradition prophetique ?',opts:['L\'argent','Le rappel et les bonnes actions','Le sommeil','Le voyage'],correct:1,hint:'Renouvelez votre foi...'}
  },
  {
    ar:{q:'ما هي رسالة كتاب "ركائز الإيمان" الرئيسية؟',opts:['الإيمان بالعقل فقط','الإيمان بالقلب فقط','الجمع بين العقل والقلب في الإيمان','رفض العلم'],correct:2,hint:'بين العقل والقلب'},
    en:{q:'What is the main message of "Pillars of Faith"?',opts:['Faith through mind only','Faith through heart only','Combining mind and heart in faith','Rejecting science'],correct:2,hint:'Between mind and heart'},
    fr:{q:'Quel est le message principal de « Piliers de la Foi » ?',opts:['La foi par la raison seule','La foi par le coeur seul','Allier raison et coeur dans la foi','Rejeter la science'],correct:2,hint:'Entre raison et coeur'}
  }
];

// ═══════════════ DUAS ═══════════════
const DUAS = [
  {
    ar:{label:'دعاء تثبيت الإيمان',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'يا من تقلّب القلوب، ثبّت قلبي على دينك'},
    en:{label:'Dua for Steadfast Faith',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'O Turner of hearts, make my heart steadfast on Your religion'},
    fr:{label:'Dua pour une Foi Ferme',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'O Toi qui retournes les coeurs, affermis mon coeur sur Ta religion'}
  },
  {
    ar:{label:'دعاء زيادة الإيمان',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ إِيمَانًا لَا يَرْتَدُّ وَنَعِيمًا لَا يَنْفَدُ',tr:'اللهم أعطني إيماناً لا يتراجع ونعيماً لا ينتهي'},
    en:{label:'Dua for Increased Faith',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ إِيمَانًا لَا يَرْتَدُّ وَنَعِيمًا لَا يَنْفَدُ',tr:'O God, I ask You for faith that does not waver and blessings that do not end'},
    fr:{label:'Dua pour Augmenter la Foi',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ إِيمَانًا لَا يَرْتَدُّ وَنَعِيمًا لَا يَنْفَدُ',tr:'O Dieu, je Te demande une foi qui ne vacille pas et des bienfaits qui ne s\'epuisent pas'}
  },
  {
    ar:{label:'دعاء نور القلب',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا',tr:'اللهم اجعل في قلبي وبصري وسمعي نوراً'},
    en:{label:'Dua for Light in the Heart',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا',tr:'O God, place light in my heart, in my sight, and in my hearing'},
    fr:{label:'Dua pour la Lumiere du Coeur',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا وَفِي سَمْعِي نُورًا',tr:'O Dieu, place de la lumiere dans mon coeur, dans ma vue et dans mon ouie'}
  },
  {
    ar:{label:'دعاء العلم النافع',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا',tr:'اللهم أعطني علماً ينفع ورزقاً طيباً وعملاً مقبولاً'},
    en:{label:'Dua for Beneficial Knowledge',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا',tr:'O God, I ask You for beneficial knowledge, good provision, and accepted deeds'},
    fr:{label:'Dua pour un Savoir Benefique',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا',tr:'O Dieu, je Te demande un savoir benefique, une bonne subsistance et des actes acceptes'}
  },
  {
    ar:{label:'دعاء الهداية',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'اللهم أرشدني واجعلني على الصواب'},
    en:{label:'Dua for Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O God, guide me and set me on the straight path'},
    fr:{label:'Dua pour la Guidance',text:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي',tr:'O Dieu, guide-moi et mets-moi sur le droit chemin'}
  }
];

// ═══════════════ BADGES ═══════════════
const BADGES = [
  { id:'beginner', emoji:'🌟', ar:'مبتدئ', en:'Beginner', fr:'Debutant', xpRequired:0 },
  { id:'reader', emoji:'📖', ar:'قارئ', en:'Reader', fr:'Lecteur', xpRequired:100 },
  { id:'scholar', emoji:'🧠', ar:'عالم', en:'Scholar', fr:'Savant', xpRequired:300 },
  { id:'persistent', emoji:'🔥', ar:'مثابر', en:'Persistent', fr:'Perseverant', xpRequired:500 },
  { id:'expert', emoji:'🏆', ar:'خبير', en:'Expert', fr:'Expert', xpRequired:1000 }
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('ri-lang') || 'ar';
let theme = localStorage.getItem('ri-theme') || 'pillar';
const themes = ['pillar', 'night', 'light'];
const themeIcons = ['🏛️', '🌙', '☀️'];
const themeNames = { pillar: 'Pillar', night: 'Night', light: 'Light' };
let ageMode = localStorage.getItem('ri-age') || 'teen';
let currentPillarIdx = -1;

// XP System
function getXP() { return parseInt(localStorage.getItem('ri-xp') || '0'); }
function addXP(amount) {
  const xp = getXP() + amount;
  localStorage.setItem('ri-xp', xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function checkBadges(xp) {
  const earned = JSON.parse(localStorage.getItem('ri-badges') || '[]');
  BADGES.forEach(b => {
    if (xp >= b.xpRequired && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem('ri-badges', JSON.stringify(earned));
      const name = b[lang] || b.en;
      showToast(`${b.emoji} ${T[lang].badgeEarned} ${name}`);
      playSound('success');
    }
  });
}
function updateXPDisplay() {
  const el = document.getElementById('xpDisplay');
  if (el) el.textContent = `${T[lang].xpLabel}: ${getXP()} XP`;
}

// Lit pillars tracking
function getLitPillars() { return JSON.parse(localStorage.getItem('ri-lit') || '[]'); }
function lightPillar(id) {
  const lit = getLitPillars();
  if (!lit.includes(id)) {
    lit.push(id);
    localStorage.setItem('ri-lit', JSON.stringify(lit));
    addXP(20);
    showToast(`🏛️ ${T[lang].pillarLit}`);
    playSound('success');
    if (lit.length === PILLARS.length) {
      showToast(T[lang].allPillarsLit);
      launchConfetti();
    }
  }
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initTabs();
  initSplash();
  initScrollTop();
  renderHome();
  renderPillars();
  renderHeart();
  renderQuiz();
  renderBuild();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
  updateXPDisplay();
  // Add beginner badge on first visit
  if (!localStorage.getItem('ri-badges')) {
    localStorage.setItem('ri-badges', JSON.stringify(['beginner']));
  }
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('ri-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabPillars', t.tabPillars); set('tabHeart', t.tabHeart);
  set('tabQuiz', t.tabQuiz); set('tabBuild', t.tabBuild); set('tabAbout', t.tabAbout);
  set('pillarsTitle', t.pillarsTitle); set('pillarsDesc', t.pillarsDesc);
  set('heartTitle', t.heartTitle); set('heartDesc', t.heartDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('buildTitle', t.buildTitle); set('buildDesc', t.buildDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  renderHome(); renderPillars(); renderHeart(); renderQuiz(); renderBuild(); renderAbout(); renderHelp(); renderDuas();
  updateXPDisplay();
  const featuresEl = document.getElementById('splashFeatures');
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('ri-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ AGE MODE ═══════════════
function toggleAgeMode() {
  ageMode = ageMode === 'teen' ? 'young' : 'teen';
  localStorage.setItem('ri-age', ageMode);
  renderPillars();
  renderHeart();
  renderBuild();
  const t = T[lang];
  showToast(ageMode === 'young' ? t.youngMode : t.teenMode);
  playSound('click');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const daily = PILLARS[Math.floor(Math.random() * PILLARS.length)];
  const d = daily[lang];
  const lit = getLitPillars();
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">✨ ${lang === 'ar' ? 'ركيزة اليوم' : lang === 'fr' ? 'Pilier du Jour' : 'Pillar of the Day'}</div>
    <div class="daily-title">${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d[lang === 'ar' ? 'heart' : 'heart']}</div>
    <div class="daily-action" onclick="switchTab('pillars')">${t.pillarsTitle} &rarr;</div>
  `;
  (document.getElementById('homeGrid')||{}).innerHTML= `
    <div class="home-card" onclick="switchTab('pillars')"><span class="hc-icon">🏛️</span><div class="hc-title">${t.tabPillars}</div><div class="hc-desc">${lit.length}/${PILLARS.length}</div></div>
    <div class="home-card" onclick="switchTab('heart')"><span class="hc-icon">❤️</span><div class="hc-title">${t.tabHeart}</div><div class="hc-desc">${INSIGHTS.length}</div></div>
    <div class="home-card" onclick="switchTab('quiz')"><span class="hc-icon">🎓</span><div class="hc-title">${t.tabQuiz}</div><div class="hc-desc">${QUIZ_DATA.length} Q</div></div>
    <div class="home-card" onclick="switchTab('build')"><span class="hc-icon">🏗️</span><div class="hc-title">${t.tabBuild}</div><div class="hc-desc">${lit.length}/${PILLARS.length}</div></div>
    <div class="home-card" onclick="toggleAgeMode()"><span class="hc-icon">${ageMode === 'young' ? '🌱' : '📚'}</span><div class="hc-title">${ageMode === 'young' ? t.youngMode : t.teenMode}</div></div>
    <div class="home-card" onclick="switchTab('about')"><span class="hc-icon">📖</span><div class="hc-title">${t.tabAbout}</div></div>
  `;
}

function switchTab(name) {
  const tab = document.querySelector(`.tab[data-tab="${name}"]`);
  if (tab) tab.click();
  // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

// ═══════════════ RENDER: PILLARS ═══════════════
function renderPillars() {
  const t = T[lang];
  const lit = getLitPillars();
  const container = document.getElementById('pillarsContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="pillarsSearch" placeholder="${t.searchPlaceholder}" oninput="filterPillars(this.value)"></div>
  ` + PILLARS.map((p, i) => {
    const d = p[lang];
    const isLit = lit.includes(p.id);
    return `
    <div class="pillar-card scroll-reveal ${isLit ? 'pillar-lit' : ''}" id="pillar-${p.id}">
      <div class="pillar-head" onclick="togglePillar(${p.id})">
        <span class="pillar-num">${p.id}</span>
        <span class="pillar-emoji">${p.emoji}</span>
        <span class="pillar-title">${d.title}</span>
        <span class="pillar-theme-tag">${getThemeLabel(p.theme)}</span>
        <span class="pillar-chev">&#9660;</span>
      </div>
      <div class="pillar-body">
        <div class="pillar-inner">
          ${ageMode === 'young' ? `<div class="pillar-desc young-text">${d.young}</div>` : `
          <div class="pillar-section">
            <div class="pillar-section-label">${t.mind}</div>
            <div class="pillar-desc">${d.mind}</div>
          </div>
          <div class="pillar-section">
            <div class="pillar-section-label">${t.heart}</div>
            <div class="pillar-desc">${d.heart}</div>
          </div>
          `}
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💭</span>
            <span>${d.reflection}</span>
          </div>
          <div class="pillar-actions">
            ${!isLit ? `<button class="pillar-light-btn" onclick="event.stopPropagation();lightPillar(${p.id});renderPillars();renderBuild();renderHome();">🏛️ ${lang === 'ar' ? 'أضئ هذه الركيزة' : lang === 'fr' ? 'Allumer ce pilier' : 'Light this pillar'}</button>` : `<span class="pillar-lit-badge">✅ ${lang === 'ar' ? 'مضاءة' : lang === 'fr' ? 'Allume' : 'Lit'}</span>`}
            <button class="share-btn" onclick="event.stopPropagation();sharePillar(${i})"><span class="share-icon">📤</span> ${t.share}</button>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function getThemeLabel(theme) {
  const labels = {
    god: { ar: 'الله', en: 'God', fr: 'Dieu' },
    destiny: { ar: 'القدر', en: 'Destiny', fr: 'Destin' },
    prophets: { ar: 'الأنبياء', en: 'Prophets', fr: 'Prophetes' },
    afterlife: { ar: 'الآخرة', en: 'Afterlife', fr: 'Au-dela' },
    science: { ar: 'العلم', en: 'Science', fr: 'Science' },
    balance: { ar: 'التوازن', en: 'Balance', fr: 'Equilibre' }
  };
  return (labels[theme] && labels[theme][lang]) || theme;
}

function togglePillar(id) {
  const card = document.getElementById('pillar-' + id);
  if (card) {
    const wasOpen = card.classList.contains('open');
    document.querySelectorAll('.pillar-card.open').forEach(c => c.classList.remove('open'));
    if (!wasOpen) {
      card.classList.add('open');
      addXP(10);
    }
    playSound('click');
  }
}

function filterPillars(query) {
  const q = query.toLowerCase();
  PILLARS.forEach(p => {
    const d = p[lang];
    const card = document.getElementById('pillar-' + p.id);
    const text = (d.title + d.mind + d.heart + d.reflection + (d.young || '')).toLowerCase();
    card.style.display = text.includes(q) ? '' : 'none';
  });
}

function sharePillar(i) {
  const p = PILLARS[i]; const d = p[lang];
  const text = `${d.title}\n${d.mind}\n${d.verse}`;
  if (navigator.share) { navigator.share({ title: d.title, text: text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast('Copied!')); }
}

// ═══════════════ RENDER: HEART & MIND ═══════════════
function renderHeart() {
  const t = T[lang];
  const container = document.getElementById('heartContainer');
  if (!container) return;
  container.innerHTML = INSIGHTS.map(ins => {
    const d = ins[lang];
    return `
    <div class="insight-card scroll-reveal">
      <div class="insight-header">
        <span class="insight-emoji">${ins.emoji}</span>
        <span class="insight-title">${d.title}</span>
      </div>
      <div class="insight-desc">${d.desc}</div>
      <div class="insight-box mind-box">
        <span class="insight-label">${t.mind}</span>
        <span>${d.mind}</span>
      </div>
      <div class="insight-box heart-box">
        <span class="insight-label">${t.heart}</span>
        <span>${d.heart}</span>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Scholar?) ═══════════════
let quizState = { current: 0, score: 0, lifelines: { fifty: true, hint: true, sheikh: true }, answered: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, lifelines: { fifty: true, hint: true, sheikh: true }, answered: false };
  const container = document.getElementById('quizContainer');
  if (!container) return;
  document.getElementById('quizResult').classList.add('hidden');
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const qi = quizState.current;
  if (qi >= QUIZ_DATA.length) { showQuizResult(); return; }
  const q = QUIZ_DATA[qi][lang];
  quizState.answered = false;
  container.innerHTML = `
    <div class="quiz-progress">
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${(qi/QUIZ_DATA.length)*100}%"></div></div>
      <span class="quiz-progress-text">${qi+1}/${QUIZ_DATA.length}</span>
    </div>
    <div class="quiz-question-card">
      <div class="quiz-q-number">${qi+1}</div>
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((o, oi) => `<button class="quiz-opt" id="qopt-${oi}" onclick="answerQuiz(${oi})">${o}</button>`).join('')}
      </div>
    </div>
    <div class="quiz-lifelines">
      <button class="lifeline-btn ${quizState.lifelines.fifty ? '' : 'used'}" onclick="useFifty()" ${quizState.lifelines.fifty ? '' : 'disabled'}>${t.lifeline5050}</button>
      <button class="lifeline-btn ${quizState.lifelines.hint ? '' : 'used'}" onclick="useHint()" ${quizState.lifelines.hint ? '' : 'disabled'}>${t.lifelineHint}</button>
      <button class="lifeline-btn ${quizState.lifelines.sheikh ? '' : 'used'}" onclick="useSheikh()" ${quizState.lifelines.sheikh ? '' : 'disabled'}>${t.lifelineSheikh}</button>
    </div>
    <div id="quizFeedback" class="quiz-feedback hidden"></div>
  `;
}

function answerQuiz(idx) {
  if (quizState.answered) return;
  quizState.answered = true;
  const qi = quizState.current;
  const q = QUIZ_DATA[qi][lang];
  const correct = q.correct;
  const t = T[lang];
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, oi) => {
    o.disabled = true;
    if (oi === correct) o.classList.add('correct');
    if (oi === idx && idx !== correct) o.classList.add('wrong');
  });
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    showQuizFeedback(t.correct, true);
    playSound('success');
  } else {
    showQuizFeedback(t.wrong, false);
    playSound('click');
  }
  setTimeout(() => {
    quizState.current++;
    renderQuizQuestion();
  }, 1500);
}

function showQuizFeedback(msg, isCorrect) {
  const fb = document.getElementById('quizFeedback');
  if (fb) {
    fb.classList.remove('hidden');
    fb.className = `quiz-feedback ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}`;
    fb.textContent = msg;
  }
}

function useFifty() {
  if (!quizState.lifelines.fifty || quizState.answered) return;
  quizState.lifelines.fifty = false;
  const qi = quizState.current;
  const correct = QUIZ_DATA[qi][lang].correct;
  const opts = [0, 1, 2, 3].filter(i => i !== correct);
  // Hide 2 wrong answers
  const toHide = opts.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => {
    const el = document.getElementById('qopt-' + i);
    if (el) { el.style.visibility = 'hidden'; el.disabled = true; }
  });
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint || quizState.answered) return;
  quizState.lifelines.hint = false;
  const qi = quizState.current;
  const correct = QUIZ_DATA[qi][lang].correct;
  const el = document.getElementById('qopt-' + correct);
  if (el) el.classList.add('hint-glow');
  playSound('click');
}

function useSheikh() {
  if (!quizState.lifelines.sheikh || quizState.answered) return;
  quizState.lifelines.sheikh = false;
  const qi = quizState.current;
  const hint = QUIZ_DATA[qi][lang].hint;
  showToast(`📖 ${hint}`);
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  container.innerHTML = '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  const pct = Math.round(quizState.score / QUIZ_DATA.length * 100);
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang === 'ar' ? 'عالِم!' : lang === 'fr' ? 'Savant !' : 'Scholar!'; }
  else if (pct >= 50) { emoji = '📚'; title = lang === 'ar' ? 'جيد!' : lang === 'fr' ? 'Bien !' : 'Good!'; }
  else { emoji = '🌱'; title = lang === 'ar' ? 'واصل التعلم!' : lang === 'fr' ? 'Continuez !' : 'Keep learning!'; }
  addXP(pct >= 80 ? 50 : 20);
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${QUIZ_DATA.length}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${t.quizScore}: ${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${t.quizAgain}</button>
  `;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  playSound('success');
}

// ═══════════════ RENDER: BUILD YOUR FAITH ═══════════════
function renderBuild() {
  const t = T[lang];
  const lit = getLitPillars();
  const container = document.getElementById('buildContainer');
  if (!container) return;
  const pct = PILLARS.length > 0 ? Math.round(lit.length / PILLARS.length * 100) : 0;
  container.innerHTML = `
    <div class="build-progress">
      <div class="build-bar"><div class="build-fill" style="width:${pct}%"></div></div>
      <span class="build-text">${lit.length}/${PILLARS.length} (${pct}%)</span>
    </div>
    <div class="build-xp" id="xpDisplay">${t.xpLabel}: ${getXP()} XP</div>
    <div class="build-badges">${BADGES.map(b => {
      const earned = JSON.parse(localStorage.getItem('ri-badges') || '[]');
      const has = earned.includes(b.id);
      return `<span class="badge ${has ? 'badge-earned' : 'badge-locked'}" title="${b[lang]}">${b.emoji}</span>`;
    }).join('')}</div>
    <div class="build-grid">
      ${PILLARS.map(p => {
        const d = p[lang];
        const isLit = lit.includes(p.id);
        return `<div class="build-pillar ${isLit ? 'build-lit' : ''}" onclick="${isLit ? '' : `switchTab('pillars')`}" title="${d.title}">
          <span class="build-pillar-emoji">${p.emoji}</span>
          <span class="build-pillar-num">${p.id}</span>
          ${isLit ? '<span class="build-check">✅</span>' : ''}
        </div>`;
      }).join('')}
    </div>
  `;
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري. ألّف أكثر من ٩٤ كتاباً. درس في الأزهر ودرّس في جامعة الأمير عبد القادر بقسنطينة. حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والخرافة.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"ركائز الإيمان بين العقل والقلب" كتاب يعالج أسس الإيمان من منظور يجمع بين الأدلة العقلية والعلمية والبصائر الروحية والقرآنية. يتناول وجود الله وقدرته المطلقة، ويدحض نظرية الصدفة بحجج علمية، ويناقش التوحيد والقدر والنبوة والبعث، ويوازن بين الحياة المادية والروحية. يستشهد الغزالي بعلماء غربيين ليُثبت أن العلم والإيمان لا يتعارضان.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "ركائز الإيمان بين العقل والقلب" — الشيخ محمد الغزالي', 'القرآن الكريم', 'صحيح البخاري ومسلم'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker. Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for intellectual renewal and fighting superstition.',
      bookTitle: 'About the Book',
      bookDesc: '"Pillars of Faith Between Mind and Heart" addresses the foundations of faith from a perspective combining rational and scientific evidence with spiritual and Quranic insights. It discusses God\'s existence and absolute power, debunks the chance theory with scientific arguments, explores monotheism, destiny, prophethood, and resurrection, and balances material and spiritual life. Al-Ghazali cites Western scientists to prove that science and faith are compatible.',
      sourcesTitle: 'Sources',
      sources: ['"Pillars of Faith Between Mind and Heart" — Sheikh Mohammed al-Ghazali', 'The Holy Quran', 'Sahih al-Bukhari and Muslim'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien. Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a Constantine, Algerie. Laureat du Prix Roi Faysal. Connu pour le renouveau intellectuel et la lutte contre la superstition.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '« Piliers de la Foi entre Raison et Coeur » aborde les fondements de la foi en combinant preuves rationnelles et scientifiques avec des eclairages spirituels et coraniques. Il discute de l\'existence de Dieu, refute la theorie du hasard, explore le monotheisme, le destin, la prophetie et la resurrection, et equilibre vie materielle et spirituelle. Al-Ghazali cite des scientifiques occidentaux pour prouver la compatibilite entre science et foi.',
      sourcesTitle: 'Sources',
      sources: ['« Piliers de la Foi entre Raison et Coeur » — Sheikh Mohammed al-Ghazali', 'Le Saint Coran', 'Sahih al-Bukhari et Muslim'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer about-card">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author about-card">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section about-card">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section about-card">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section about-card">
      <p class="about-text">${a.contact}</p>
    </div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "ركائز الإيمان" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات، ٣ أنماط، ٢٠ ركيزة، اختبار بوسائل مساعدة، بناء الإيمان، نظام أوسمة.'},
      {title:'🌱 وضع المستكشف',body:'للأطفال ٧-١٢: نصوص أقصر مع رموز تعبيرية. اضغط على البطاقة المناسبة في الرئيسية.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/rakaiz-al-iman'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"Pillars of Faith" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages, 3 themes, 20 pillars, quiz with lifelines, faith builder, badge system.'},
      {title:'🌱 Explorer Mode',body:'For kids 7-12: shorter text with emojis. Toggle from the home screen.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/rakaiz-al-iman'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'« Piliers de la Foi » par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah Prophetique.'},
      {title:'✨ Fonctionnalites',body:'Trois langues, 3 themes, 20 piliers, quiz avec jokers, constructeur de foi, systeme de badges.'},
      {title:'🌱 Mode Explorateur',body:'Pour enfants 7-12 : texte plus court avec emojis. Basculez depuis l\'ecran d\'accueil.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/rakaiz-al-iman'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `
    <div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  window._scrollObserver = observer;
  function observeAll() {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el));
  }
  observeAll();
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => setTimeout(observeAll, 100));
  });
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const helpPanel = document.getElementById('helpPanel');
      if (!helpPanel.classList.contains('hidden')) { toggleHelp(); return; }
      const duaPanel = document.getElementById('duaPanel');
      if (!duaPanel.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.pillar-card.open').forEach(c => c.classList.remove('open'));
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleHelp() {
  document.getElementById('helpPanel').classList.toggle('hidden');
  playSound('click');
}
function toggleDuaPanel() {
  document.getElementById('duaPanel').classList.toggle('hidden');
  playSound('click');
}
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if (btn) btn.classList.toggle('visible', window.scrollY > 300);
  });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#6A1B9A','#9C27B0','#CE93D8','#FFD54F','#E8A040','#4FC3F7','#66BB6A'];
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 5, h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4, vy: Math.random() * 3 + 2,
      rot: Math.random() * 360, rotSpeed: (Math.random() - 0.5) * 10
    });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
    });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); canvas.style.display = 'none'; }
  }
  draw();
}

// ═══════════════ TICKER ═══════════════
function startTicker() {
  const el = document.getElementById('tickerText');
  const msgs = {
    ar: ['🏛️ ركائز الإيمان بين العقل والقلب — الشيخ محمد الغزالي', '🧠 العلم يقود إلى الإيمان', '❤️ القلب والعقل معاً', '📖 ٢٠ ركيزة إيمانية', '⭐ ابنِ إيمانك ركيزة بركيزة'],
    en: ['🏛️ Pillars of Faith Between Mind and Heart — Sheikh al-Ghazali', '🧠 Science leads to faith', '❤️ Heart and mind together', '📖 20 pillars of faith', '⭐ Build your faith pillar by pillar'],
    fr: ['🏛️ Piliers de la Foi entre Raison et Coeur — Sheikh al-Ghazali', '🧠 La science mene a la foi', '❤️ Coeur et raison ensemble', '📖 20 piliers de foi', '⭐ Construisez votre foi pilier par pilier']
  };
  const arr = msgs[lang] || msgs.en;
  const joined = arr.map(m => `<span class="tc">${m}&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;</span>`).join('');
  el.innerHTML = joined + joined;
  el.style.animation = `tickerMarquee ${arr.length * 8}s linear infinite`;
}
if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', startTicker); } else { startTicker(); }

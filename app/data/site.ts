// ─── SERVICES ───────────────────────────────────────────────────────────────
export const services = [
  {
    icon: '🌐',
    name: 'Сайт для вашого бізнесу',
    desc: 'Лендинг, корпоративний сайт або інтернет-магазин. Швидкий, красивий, знаходиться в Google.',
    tags: ['Next.js', 'Tailwind', 'SEO'],
  },
  {
    icon: '📱',
    name: 'Мобільний застосунок',
    desc: 'iOS та Android одразу. Ваш продукт у кишені клієнта — з нативним відчуттям і плавною анімацією.',
    tags: ['React Native', 'Flutter'],
  },
  {
    icon: '⚙️',
    name: 'Веб-платформа або SaaS',
    desc: 'Особистий кабінет, CRM, дашборд або власний сервіс з базою даних і авторизацією.',
    tags: ['Node.js', 'PostgreSQL', 'API'],
  },
  {
    icon: '🎨',
    name: 'Дизайн продукту',
    desc: 'UI/UX дизайн з нуля або редизайн того, що вже є. Прототип, який можна показати інвестору вже завтра.',
    tags: ['Figma', 'UI/UX', 'Prototype'],
  },
  {
    icon: '🤖',
    name: 'Автоматизація процесів',
    desc: 'Telegram-боти, інтеграції між сервісами, автоматичні сповіщення — рутина без вашої участі.',
    tags: ['Telegram API', 'Webhooks'],
  },
  {
    icon: '🚀',
    name: 'Підтримка та розвиток',
    desc: 'Ваш продукт вже є? Ми візьмемо його на супровід: нові функції, виправлення, швидкість, безпека.',
    tags: ['DevOps', 'CI/CD', 'Support'],
  },
];

// ─── PROJECTS ────────────────────────────────────────────────────────────────
export const projects = [
  {
    slug: 'fintrack-ua',
    type: 'Landing Page',
    name: 'FinTrack UA',
    desc: 'Лендинг для фінтех-стартапу з анімованим дашбордом та інтеграцією платіжної системи.',
    stack: ['Next.js', 'Framer Motion', 'Stripe'],
    gradient: 'linear-gradient(135deg,#0a1628 0%,#0C447C 100%)',
    link: 'https://github.com/vexorteam',
  },
  {
    slug: 'delivery-pro',
    type: 'Mobile App',
    name: 'DeliveryPro',
    desc: "Застосунок для кур'єрської служби: маршрути, статуси, push-сповіщення.",
    stack: ['React Native', 'Node.js', 'Google Maps'],
    gradient: 'linear-gradient(135deg,#0d1117 0%,#1a1a2e 100%)',
    link: 'https://github.com/vexorteam',
  },
  {
    slug: 'admin-hub',
    type: 'SaaS Platform',
    name: 'AdminHub',
    desc: 'Внутрішня CRM-платформа для e-commerce з аналітикою та управлінням замовленнями.',
    stack: ['Next.js', 'PostgreSQL', 'Prisma'],
    gradient: 'linear-gradient(135deg,#0f0f0f 0%,#1a0a2e 100%)',
    link: 'https://github.com/vexorteam',
  },
];

// ─── TEAM ────────────────────────────────────────────────────────────────────
export const team = [
  {
    initials: 'АК',
    name: 'Андрій К.',
    role: 'Fullstack Developer',
    desc: '5 років досвіду. Спеціалізується на Next.js, Node.js та PostgreSQL. Будував платформи для фінтех та e-commerce.',
    skills: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    initials: 'МП',
    name: 'Марія П.',
    role: 'UI/UX Designer',
    desc: '4 роки в продуктовому дизайні. Працювала з 30+ проєктами від ідеї до готового UI. Figma & motion design.',
    skills: ['Figma', 'Motion', 'Research'],
  },
  {
    initials: 'ДЛ',
    name: 'Данило Л.',
    role: 'Frontend Developer',
    desc: 'React та TypeScript з 2020 року. Пише чистий, доступний код. Перфоманс і анімації — його стихія.',
    skills: ['React', 'TypeScript', 'Framer'],
  },
  {
    initials: 'ОС',
    name: 'Олег С.',
    role: 'Backend Developer',
    desc: 'Архітектор API та баз даних. Досвід з highload системами, мікросервісами та DevOps практиками.',
    skills: ['Python', 'Docker', 'Redis'],
  },
  {
    initials: 'ВК',
    name: 'Влад К.',
    role: 'Mobile Developer',
    desc: 'React Native та Flutter з нуля до App Store. Публікував 8+ додатків для iOS та Android.',
    skills: ['React Native', 'Flutter', 'Swift'],
  },
  {
    initials: 'АМ',
    name: 'Аліна М.',
    role: 'Project Manager',
    desc: 'Тримає всі нитки в руках. Гарантує що проєкт здається вчасно, а клієнт завжди в курсі.',
    skills: ['Agile', 'Notion', 'Jira'],
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const faq = [
  {
    q: 'Скільки коштує розробка сайту?',
    a: 'Вартість залежить від складності проєкту. Простий лендинг — від 8 000 грн, корпоративний сайт — від 20 000 грн, веб-платформа або SaaS — від 50 000 грн. Точну ціну розраховуємо після обговорення задачі.',
  },
  {
    q: 'Скільки часу займає розробка?',
    a: 'Лендинг — 1-2 тижні. Корпоративний сайт — 2-4 тижні. Мобільний застосунок або SaaS-платформа — 4-8 тижнів. Терміни залежать від обсягу та кількості правок.',
  },
  {
    q: 'Як відбувається процес роботи?',
    a: 'Спочатку ми розбираємось у вашій задачі на дзвінку або в Telegram. Потім готуємо дизайн у Figma — ви погоджуєте. Після цього розробляємо і показуємо прогрес щотижня. Здаємо готовий продукт з документацією.',
  },
  {
    q: 'Чи надаєте підтримку після здачі проєкту?',
    a: 'Так. Перший місяць після здачі — безкоштовна підтримка та виправлення. Далі можемо укласти договір на регулярний супровід: оновлення, нові функції, технічна підтримка.',
  },
  {
    q: 'Чи працюєте ви з клієнтами з-за кордону?',
    a: 'Так, працюємо з клієнтами з Європи та США. Спілкуємось англійською, рахунки виставляємо в доларах або євро. Часовий пояс — UTC+2/UTC+3.',
  },
  {
    q: 'Що потрібно для початку роботи?',
    a: 'Достатньо написати нам у Telegram або заповнити форму нижче. Розкажіть про ідею — ми поставимо кілька запитань і запропонуємо рішення. Жодного ТЗ на старті не потрібно.',
  },
];

// ─── CONTACT INFO ────────────────────────────────────────────────────────────
export const contactInfo = [
  {
    icon: '📬',
    label: 'Email',
    value: 'hello@vexor.team',
    href: 'mailto:hello@vexor.team',
  },
  {
    icon: '✈️',
    label: 'Telegram',
    value: '@vexor_studio',
    href: 'https://t.me/vexor_studio',
  },
  {
    icon: '🕐',
    label: 'Відповідаємо',
    value: 'до 4 годин',
    href: null,
  },
  {
    icon: '📍',
    label: 'Локація',
    value: 'Київ, Україна 🇺🇦',
    href: 'https://maps.google.com/?q=Kyiv,Ukraine',
  },
];

// ─── BUDGET OPTIONS ──────────────────────────────────────────────────────────
export const budgetUAH = [
  'до 8 000 ₴',
  '8 000 – 30 000 ₴',
  '30 000 – 80 000 ₴',
  '80 000 – 200 000 ₴',
  '200 000+ ₴',
  'Поки не визначились',
];

export const budgetUSD = [
  'до $200',
  '$200 – $800',
  '$800 – $2 000',
  '$2 000 – $5 000',
  '$5 000+',
  'Not sure yet',
];

// ─── STATS ───────────────────────────────────────────────────────────────────
export const stats = [
  { num: '40+', label: 'Проєктів здано' },
  { num: '3', label: 'Роки на ринку' },
  { num: '98%', label: 'Клієнтів повертаються' },
  { num: 'UA → EU', label: 'Вектор розвитку' },
];

export interface Testimonial {
  id: string;
  quote: {
    uk: string;
    en: string;
  };
  author: string;
  avatar: string;
  role: {
    uk: string;
    en: string;
  };
  company?: string;
  projectSlug?: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote: {
      uk: 'Команда виконала неймовірну роботу, перебудувавши наш вебплеєр та інтегрувавши стрімінг із низькою затримкою. Час завантаження сторінок скоротився на 40%, а залученість користувачів зросла одразу після релізу.',
      en: 'The team did an incredible job rebuilding our web player and integrating low-latency streaming. Page load times dropped by 40%, and active user engagement spiked immediately after release.',
    },
    author: 'Олексій Коваленко',
    avatar: 'https://i.pinimg.com/236x/75/c3/f4/75c3f4b542333f78d6196f4b0d454679.jpg',
    role: { uk: 'CTO, Strym', en: 'CTO, Strym' },
    company: 'Strym',
    projectSlug: 'strym',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    quote: {
      uk: 'Вони повністю провели рефакторинг нашого застарілого API та мігрували базу даних на PostgreSQL без жодної хвилини простою сайту. Проблеми з масштабованістю зникли, а мобільний додаток тепер синхронізується миттєво.',
      en: 'They completely refactored our legacy API and migrated the database to PostgreSQL without a single minute of downtime. Scalability issues are gone, and our mobile app syncs instantly now.',
    },
    author: 'Марія Шевченко',
    avatar: 'https://i.pinimg.com/236x/75/c3/f4/75c3f4b542333f78d6196f4b0d454679.jpg',
    role: { uk: 'Product Manager, Krepa', en: 'Product Manager, Krepa' },
    company: 'Krepa',
    projectSlug: 'krepa',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    quote: {
      uk: 'Нам потрібно було запустити кросплатформний MVP мобільного додатка менш ніж за 3 місяці. Команда не просто здала готовий додаток на React Native раніше дедлайну, а й допомогла пройти сувору модерацію в App Store з першої спроби.',
      en: 'We needed to launch our cross-platform mobile MVP in under 3 months. Not only did they deliver a polished React Native app ahead of schedule, but they also helped us pass Apple’s strict App Store review on the first try.',
    },
    author: 'Дмитро Мельник',
    avatar: 'https://i.pinimg.com/236x/75/c3/f4/75c3f4b542333f78d6196f4b0d454679.jpg',
    role: { uk: 'Head of Mobile, FinGo', en: 'Head of Mobile, FinGo' },
    company: 'FinGo',
    rating: 4,
  },
  {
    id: 'testimonial-4',
    quote: {
      uk: 'Співпраця з ними відчувалася так, ніби у нас працює власна виділена IT-команда. Вони з нуля створили нашу SaaS-панель керування, бездоганно впровадивши складні білінг-тарифи Stripe та багаторівневу безпеку даних.',
      en: 'Working with them felt like having our own highly dedicated in-house IT team. They built our SaaS dashboard from scratch, flawlessly implementing complex Stripe billing tiers and multi-tenant security.',
    },
    author: 'Олена Кравченко',
    avatar: 'https://i.pinimg.com/236x/75/c3/f4/75c3f4b542333f78d6196f4b0d454679.jpg',
    role: { uk: 'CEO, Optima SaaS', en: 'CEO, Optima SaaS' },
    company: 'Optima SaaS',
    rating: 4,
  },
];

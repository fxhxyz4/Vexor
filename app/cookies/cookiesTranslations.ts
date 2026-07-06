export interface CookieRow {
  name: string;
  purpose: { uk: string; en: string };
  duration: string;
  category: { uk: string; en: string };
}

export const COOKIES_DATA: CookieRow[] = [
  {
    name: 'vexor-lang',
    purpose: {
      uk: "Запам'ятовує обрану мову інтерфейсу (UA/EN)",
      en: 'Remembers your chosen interface language (UA/EN)',
    },
    duration: '1 рік / 1 year',
    category: { uk: 'Функціональні', en: 'Functional' },
  },
  {
    name: 'vexor-theme',
    purpose: {
      uk: "Запам'ятовує обрану тему оформлення (світла/темна)",
      en: 'Remembers your chosen theme (light/dark)',
    },
    duration: '1 рік / 1 year',
    category: { uk: 'Функціональні', en: 'Functional' },
  },
  {
    name: 'vexor-consent',
    purpose: {
      uk: 'Зберігає ваш вибір щодо згоди на cookies',
      en: 'Stores your cookie consent choice',
    },
    duration: '1 рік / 1 year',
    category: { uk: 'Необхідні', en: 'Necessary' },
  },
  {
    name: '_ga, _ga_*',
    purpose: {
      uk: 'Google Analytics — статистика відвідувань сайту (анонімізовано)',
      en: 'Google Analytics — anonymized visit statistics',
    },
    duration: '~2 роки / ~2 years',
    category: { uk: 'Аналітичні', en: 'Analytics' },
  },
  {
    name: '_gid',
    purpose: {
      uk: 'Google Analytics — розрізнення користувачів протягом доби',
      en: 'Google Analytics — distinguishes users within a day',
    },
    duration: '24 години / 24 hours',
    category: { uk: 'Аналітичні', en: 'Analytics' },
  },
];

export const COOKIES_T = {
  uk: {
    tag: 'ПРАВОВА ІНФОРМАЦІЯ',
    title: 'Політика використання cookies',
    updated: 'Востаннє оновлено: липень 2026',
    intro:
      "Ми використовуємо cookies, щоб сайт працював коректно, запам'ятовував ваші налаштування та допомагав нам розуміти, як покращити продукт. На цій сторінці — повний перелік cookies, які ми використовуємо, та навіщо.",
    what_title: 'Що таке cookies',
    what_text:
      'Cookies — невеликі текстові файли, які сайт зберігає у вашому браузері. Вони не містять шкідливого коду і не дають нам доступу до інших данных на вашому пристрої.',
    categories_title: 'Категорії, які ми використовуємо',
    cat_necessary: 'Необхідні',
    cat_functional: 'Функціональні',
    cat_analytics: 'Аналітичні',
    necessary_desc:
      "Обов'язкові для роботи сайту. Вимкнути їх неможливо — без них сайт не зможе функціонувати коректно.",
    functional_desc:
      'Покращують досвід використання (мова, тема). Ви можете відмовитись від них — сайт продовжить працювати, але доведеться обирати мову/тему щоразу заново.',
    analytics_desc:
      'Допомагають нам зрозуміти, як відвідувачі використовують сайт. Вмикаються лише після вашої явної згоди та не активуються, доки ви не натиснете "Прийняти всі".',
    full_list: 'Повний перелік',
    table_name: 'Назва',
    table_purpose: 'Призначення',
    table_duration: 'Термін дії',
    table_category: 'Категорія',
    manage_title: 'Керування налаштуваннями',
    manage_text: 'Ви можете змінити свій вибір щодо cookies у будь-який момент.',
    manage_btn: 'Відкрити налаштування cookies',
    contact_title: 'Питання?',
    contact_text: 'Якщо у вас є питання щодо цієї політики, напишіть нам:',
  },
  en: {
    tag: 'LEGAL',
    title: 'Cookie Policy',
    updated: 'Last updated: July 2026',
    intro:
      'We use cookies to make the site work correctly, remember your preferences, and help us understand how to improve the product. This page lists all the cookies we use and why.',
    what_title: 'What are cookies',
    what_text:
      "Cookies are small text files that a website stores in your browser. They don't contain harmful code and don't give us access to other data on your device.",
    categories_title: 'Categories we use',
    cat_necessary: 'Necessary',
    cat_functional: 'Functional',
    cat_analytics: 'Analytics',
    necessary_desc:
      'Required for the site to function. These cannot be disabled — without them, the site would not work correctly.',
    functional_desc:
      "Improve your experience (language, theme). You can opt out — the site will keep working, but you'll need to reselect language/theme each visit.",
    analytics_desc:
      'Help us understand how visitors use the site. Only activated after your explicit consent, and never load until you click "Accept all".',
    full_list: 'Full list',
    table_name: 'Name',
    table_purpose: 'Purpose',
    table_duration: 'Duration',
    table_category: 'Category',
    manage_title: 'Manage your settings',
    manage_text: 'You can change your cookie choice at any time.',
    manage_btn: 'Open cookie settings',
    contact_title: 'Questions?',
    contact_text: 'If you have questions about this policy, reach out:',
  },
};

export interface LegalSectionItem {
  title: string;
  content: string[];
  list?: string[];
  listIntro?: string;
  listOutro?: string;
}

export const privacyTranslations = {
  en: {
    tag: '// legal',
    title: 'Privacy Policy',
    updated: 'Last updated: June 2025',
    footerNote: 'Questions? Reach us at ',
    orVia: ' or via Telegram ',
    sections: [
      {
        title: '1. Who we are',
        content: [
          'Vexor is a software development studio based in Kyiv, Ukraine. We build websites, mobile applications, and product designs for clients worldwide.',
          'Contact: hello@vexor.team',
        ],
      },
      {
        title: '2. What data we collect',
        listIntro: 'When you interact with us through our website or Telegram bot, we may collect:',
        list: [
          'Contact form — name, email address or Telegram username, project description, and budget range.',
          'Telegram bot — Telegram user ID, username or first name, and messages you send voluntarily through the bot.',
          'Website analytics — anonymous usage data (page views, browser type) via privacy-friendly analytics if enabled.',
        ],
        content: ['We do not collect passwords, payment details, or sensitive personal data.'],
      },
      {
        title: '3. How we use your data',
        listIntro: 'We use the information you provide solely to:',
        list: [
          'Respond to your project inquiries and questions',
          'Communicate about ongoing projects',
          'Improve our services and website',
        ],
        content: [
          'We do not use your data for advertising, automated decision-making, or profiling.',
        ],
      },
      {
        title: '4. Data storage and retention',
        content: [
          "Messages received through our Telegram bot are forwarded to our team chat and stored in Telegram's infrastructure. The bot itself does not maintain a persistent database — session data is held in memory only and cleared when the bot restarts.",
          'Data submitted via the contact form on our website is sent to our team inbox and retained for as long as necessary to fulfil your inquiry, after which it is deleted.',
          'We do not sell, rent, or share your personal data with third parties.',
        ],
      },
      {
        title: '5. Third-party services',
        listIntro: 'Our services rely on the following third-party platforms:',
        list: [
          "Telegram — bot infrastructure. Subject to Telegram's Privacy Policy.",
          "Vercel — website hosting. Subject to Vercel's Privacy Policy.",
        ],
      },
      {
        title: '6. Your rights',
        listIntro: 'You have the right to:',
        list: [
          'Request access to the personal data we hold about you',
          'Request correction or deletion of your data',
          'Withdraw consent at any time',
        ],
        content: ['To exercise these rights, contact us at hello@vexor.team.'],
      },
      {
        title: '7. Cookies',
        content: [
          'Our website may use minimal cookies required for basic functionality (theme and language preferences stored in localStorage). We do not use tracking or advertising cookies.',
        ],
      },
      {
        title: '8. Changes to this policy',
        content: [
          'We may update this policy occasionally. The date at the top of this page reflects the most recent revision. Continued use of our services after changes constitutes acceptance of the updated policy.',
        ],
      },
    ] as LegalSectionItem[],
  },
  uk: {
    tag: '// юридична інформація',
    title: 'Політика конфіденційності',
    updated: 'Останнє оновлення: Червень 2025',
    footerNote: "Запитання? Зв'яжіться з нами за адресою ",
    orVia: ' або через Telegram ',
    sections: [
      {
        title: '1. Хто ми є',
        content: [
          'Vexor — це студія розробки програмного забезпечення, розташована в Києві, Україна. Ми створюємо вебсайти, мобільні додатки та дизайн продуктів для клієнтів по всьому світу.',
          'Контакти: hello@vexor.team',
        ],
      },
      {
        title: '2. Які дані ми збираємо',
        listIntro: 'Коли ви взаємодієте з нами через наш сайт або Telegram-бот, ми можемо збирати:',
        list: [
          "Контактна форма — ім'я, адреса електронної пошти або юзернейм у Telegram, опис проєкту та очікуваний бюджет.",
          "Telegram-бот — Telegram user ID, юзернейм або ім'я, а також повідомлення, які ви надсилаєте добровільно через бота.",
          'Аналітика сайту — анонімні дані про використання (перегляди сторінок, тип браузера) за допомогою конфіденційної аналітики, якщо вона увімкнена.',
        ],
        content: ['Ми не збираємо паролі, платіжні реквізити або чутливі персональні дані.'],
      },
      {
        title: '3. Як ми використовуємо ваші дані',
        listIntro: 'Ми використовуємо надану вами інформацію виключно для того, щоб:',
        list: [
          'Відповідати на ваші запити щодо проєктів та запитання',
          'Вести комунікацію щодо поточних проєктів',
          'Вдосконалювати наші послуги та сайт',
        ],
        content: [
          'Ми не використовуємо ваші дані для рекламы, автоматизованого прийняття рішень чи профілювання.',
        ],
      },
      {
        title: '4. Зберігання та видалення даних',
        content: [
          "Повідомлення, отримані через наш Telegram-бот, пересилаються в наш командний чат і зберігаються в інфраструктурі Telegram. Сам бот не має постійної бази даних — дані сесії зберігаються лише в пам'яті та очищаються при перезапуску бота.",
          'Дані, надіслані через контактну форму на нашому сайті, надходять на нашу командну скриньку і зберігаються протягом терміну, необхідного для обробки вашого запиту, після чого видаляються.',
          'Ми не продаємо, не здаємо в оренду та не передаємо ваші персональні дані третім особам.',
        ],
      },
      {
        title: '5. Сторонні сервіси',
        listIntro: 'Наші сервіси покладаються на такі сторонні платформи:',
        list: [
          'Telegram — інфраструктура бота. Регулюється Політикою конфіденційності Telegram.',
          'Vercel — хостинг сайту. Регулюється Політикою конфіденційності Vercel.',
        ],
      },
      {
        title: '6. Ваші права',
        listIntro: 'Ви маєте право:',
        list: [
          'Запитувати доступ до персональних даних, які ми зберігаємо про вас',
          'Вимагати виправлення або видалення ваших даних',
          'Відкликати згоду в будь-який момент',
        ],
        content: ["Щоб скористатися цими правами, зв'яжіться з нами за адресою hello@vexor.team."],
      },
      {
        title: '7. Файли cookies',
        content: [
          'Наш сайт може використовувати мінімальні файли cookie, необхідні для базової функціональності (налаштування теми та мови, що зберігаються в localStorage). Ми не використовуємо відстежуючі або рекламні cookie.',
        ],
      },
      {
        title: '8. Зміни до цієї політики',
        content: [
          'Ми можемо періодично оновлювати цю політику. Дата у верхній частині цієї сторінки відображає останню редакцію. Продовження використання наших послуг після внесення змін означає згоду з оновленою політикою.',
        ],
      },
    ] as LegalSectionItem[],
  },
};

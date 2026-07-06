import { GoogleAnalytics } from './components/GoogleAnalytics';
import { CookieConsent } from './components/CookieConsent';
import { Geist, Geist_Mono } from 'next/font/google';
import { Navbar } from './components/Navbar';
import { AppProvider } from './lib/context';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';
import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

const baseUrl = 'https://vexor.team';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Vexor — Outsource Software Development Studio | Ukraine',
    template: '%s | Vexor',
  },
  description:
    'Vexor — outsource software development studio from Ukraine. Розробка сайтів, SaaS, мобільних застосунків та UI/UX дизайну. Next.js, React Native, FastAPI. Від ідеї до запуску — from idea to launch.',
  keywords: [
    'Vexor',
    'Vexor team',
    'Vexor studio',
    'Vexor аутсорс',
    'vexor.team',
    'Vexor IT',
    'Vexor software',
    'Вексор',
    'Вексор аутсорс',
    'Вексор тім',
    'outsource development Ukraine',
    'software development studio Ukraine',
    'software agency Ukraine',
    'IT outsourcing Ukraine',
    'dedicated development team Ukraine',
    'offshore software development',
    'nearshore IT outsourcing Ukraine',
    'hire developers Ukraine',
    'software development company Kyiv',
    'custom software development Ukraine',
    'remote developers Ukraine',
    'full-cycle development agency',
    'аутсорс розробка',
    'аутсорс команда Україна',
    'it аутсорсинг україна',
    'it компанія київ',
    'розробка програмного забезпечення',
    'кастомна розробка софту',
    'it агенція україна',
    'команда розробників на замовлення',
    'найняти програмістів україна',
    'диджитал агенція київ',
    'web development Kyiv',
    'outsource web development',
    'custom web development',
    'full-stack web development',
    'розробка сайтів Україна',
    'веб розробка Київ',
    'замовити сайт україна',
    'створення сайтів київ',
    'розробка корпоративних сайтів',
    'mobile app development Ukraine',
    'cross-platform mobile apps',
    'iOS and Android development',
    'React Native developer Ukraine',
    'розробка застосунків Україна',
    'створення мобільних додатків',
    'замовити мобільний додаток',
    'SaaS development Ukraine',
    'CRM development Ukraine',
    'ERP system development',
    'E-commerce development agency',
    'розробка SaaS платформ',
    'створення CRM систем україна',
    'розробка інтернет магазинів',
    'Next.js розробник Україна',
    'Next.js development company',
    'hire Next.js developers',
    'React development studio Ukraine',
    'розробка на Next.js',
    'FastAPI development Ukraine',
    'Python backend development',
    'Node.js development company',
    'REST API development Ukraine',
    'розробка бэкенду на Python',
    'UI UX дизайн Україна',
    'product design Ukraine',
    'Figma UI UX design',
    'web design studio Kyiv',
    'дизайн сайтів фігма',
    'прототипування інтерфейсів',
    'MVP development Ukraine',
    'software development for startups',
    'розробка MVP для стартапу',
    'технічний партнер для бізнесу',
  ],
  authors: [{ name: 'Vexor', url: baseUrl }],
  creator: 'Vexor',
  publisher: 'Vexor',
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    alternateLocale: ['en_US', 'en_GB'],
    url: baseUrl,
    siteName: 'Vexor',
    title: 'Vexor — Outsource Software Development Studio | Ukraine',
    description:
      'Outsource software development studio from Ukraine. Розробка сайтів, SaaS, мобільних застосунків та UI/UX дизайну. Від ідеї до запуску.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vexor — Software Development Studio from Ukraine',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vexor — We build what you ship.',
    description:
      'Outsource dev studio from Ukraine. Розробка сайтів, SaaS, мобільних застосунків. Next.js, React Native, FastAPI.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: baseUrl,
    languages: {
      'uk-UA': baseUrl,
      'en-US': baseUrl,
      'x-default': baseUrl,
    },
  },
  verification: {
    google: 'yBrGyMgT5n-jUwBL-12_qX-53aYmZNweHKZawavVJpQ',
  },
  other: {
    'geo.region': 'UA-30',
    'geo.placename': 'Kyiv',
    'geo.position': '50.4501;30.5234',
    ICBM: '50.4501, 30.5234',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Vexor',
      alternateName: ['Vexor Team', 'Vexor Studio', 'vexor.team', 'Вексор', 'Vexor аутсорс'],
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
      },
      image: `${baseUrl}/og-image.png`,
      description:
        'Vexor — outsource software development studio from Ukraine. Full-cycle development: from idea to launch. We build websites, mobile apps, SaaS, and custom software using Next.js, React Native, and FastAPI.',
      foundingDate: '2025',
      foundingLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kyiv',
          addressCountry: 'UA',
        },
      },
      areaServed: ['UA', 'EU', 'US'],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'hello@vexor.team',
          availableLanguage: ['Ukrainian', 'English'],
        },
      ],
      sameAs: [
        'https://github.com/vexorteam',
        'https://t.me/vexor_studio',
        'https://t.me/vexor_team_bot',
        'https://instagram.com/vexor.team',
      ],
      knowsAbout: [
        // Services
        'Web Development',
        'Mobile App Development',
        'SaaS Development',
        'UI/UX Design',
        'AI Integration',
        'Product Design',
        'Custom Software Development',
        'MVP Development',
        'E-commerce Development',
        'CRM Development',
        'ERP Development',
        'API Development',
        'Cloud Architecture',
        'DevOps',
        'IT Outsourcing',
        'Dedicated Development Teams',

        // Frontend
        'Next.js',
        'React',
        'React Native',
        'TypeScript',
        'JavaScript',
        'Tailwind CSS',
        'Framer Motion',
        'Flutter',

        // Backend
        'FastAPI',
        'Python',
        'Node.js',
        'PostgreSQL',
        'MySQL',
        'SQLAlchemy',
        'Prisma',
        'REST API',
        'GraphQL',

        // Tools & Infra
        'Docker',
        'Docker Compose',
        'GitHub Actions',
        'CI/CD',
        'Vercel',
        'Railway',
        'AWS',
        'Linux',

        // Design
        'Figma',
        'Wireframing',
        'Prototyping',
        'Design Systems',
        'User Experience Research',
        'Responsive Design',

        // Methodologies
        'Agile',
        'Scrum',
        'Code Review',
        'Test-Driven Development',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Vexor',
      description:
        'Outsource software development studio from Ukraine. Full-cycle development from idea to launch.',
      publisher: { '@id': `${baseUrl}/#organization` },
      inLanguage: ['uk-UA', 'en-US'],
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/work?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${baseUrl}/#service`,
      name: 'Vexor Software Development',
      provider: { '@id': `${baseUrl}/#organization` },
      serviceType: [
        'Web Development',
        'Mobile App Development',
        'SaaS Platform Development',
        'UI/UX Design',
        'Product Design',
        'AI Integration',
        'Custom Software Development',
        'E-commerce Development',
        'CRM Development',
        'ERP Development',
        'MVP Development',
        'API Development',
        'IT Outsourcing',
        'Dedicated Development Teams',
        'DevOps Consulting',
        'Technical Consulting',
      ],
      areaServed: ['UA', 'EU', 'US'],
      availableLanguage: ['Ukrainian', 'English'],
      url: baseUrl,
      priceRange: '$$',
    },
  ],
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get('vexor-lang')?.value;

  const themeCookie = cookieStore.get('vexor-theme')?.value;

  const initialLang = langCookie === 'en' ? 'en' : 'uk';
  const initialTheme = themeCookie === 'dark' ? 'dark' : 'light';

  return (
    <html
      lang={initialLang}
      data-theme={initialTheme}
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials" />

        {/* Theme */}
        <meta name="theme-color" content={initialTheme === 'dark' ? '#0a0a0a' : '#ffffff'} />
        <meta name="color-scheme" content="light dark" />

        {/* Misc */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="darkreader" content="NO-DARKREADER-PLUGIN" />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body suppressHydrationWarning>
        <AppProvider initialTheme={initialTheme} initialLang={initialLang}>
          <Navbar />
          {children}
          <CookieConsent />
          <GoogleAnalytics />
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;

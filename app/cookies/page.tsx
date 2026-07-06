import type { Metadata } from 'next';
import { CookiesClient } from './CookiesClient';
import { Footer } from '../components/Footer';

const baseUrl = 'https://vexor.team';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Інформація про cookies, які використовує сайт Vexor, та їх призначення.',
  alternates: { canonical: `${baseUrl}/cookies` },
  robots: { index: true, follow: true },
};

export const CookiesPage = () => {
  return (
    <>
      <main className="cookies-page-main">
        <CookiesClient />
      </main>
      <Footer />
    </>
  );
};

export default CookiesPage;

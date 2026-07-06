import { Hero } from './components/sections/Hero';
import dynamic from 'next/dynamic';
import uk from './i18n/uk.json';

const Services = dynamic(() => import('./components/sections/Services').then(mod => mod.Services), {
  ssr: true,
});
const Work = dynamic(() => import('./components/sections/Work').then(mod => mod.Work), {
  ssr: true,
});
const About = dynamic(() => import('./components/sections/About').then(mod => mod.About), {
  ssr: true,
});
const FAQ = dynamic(() => import('./components/sections/FAQ').then(mod => mod.FAQ), { ssr: true });
const Contact = dynamic(() => import('./components/sections/Contact').then(mod => mod.Contact), {
  ssr: true,
});
const Footer = dynamic(() => import('./components/Footer').then(mod => mod.Footer), { ssr: true });

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: uk.faq.items.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

export const Home = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        <Hero />
        <Services />
        <Work />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;

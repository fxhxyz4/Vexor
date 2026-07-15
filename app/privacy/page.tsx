'use client';

import { LegalSection } from '../components/ui/LegalSection';
import { privacyTranslations } from '../data/privacy';
import { Footer } from '../components/Footer';
import { useApp } from '../lib/context';
import './privacy.css';

export const PrivacyPage = () => {
  const { lang } = useApp();

  const currentLang = (lang === 'uk' ? 'uk' : 'en') as 'en' | 'uk';
  const t = privacyTranslations[currentLang];

  return (
    <>
      <main className="privacy-main">
        <article className="privacy-article">
          <div className="privacy-header">
            <span className="privacy-tag">{t.tag}</span>
            <h1 className="privacy-title">{t.title}</h1>
            <p className="privacy-updated">{t.updated}</p>
          </div>

          <div className="privacy-divider" />

          {t.sections.map((section, idx) => (
            <LegalSection key={idx} title={section.title}>
              {section.listIntro && <p>{section.listIntro}</p>}

              {section.list && (
                <ul>
                  {section.list.map((item, itemIdx) => (
                    <li key={itemIdx}>{item}</li>
                  ))}
                </ul>
              )}

              {section.content?.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </LegalSection>
          ))}

          <div className="privacy-divider footer-divider" />

          <p className="privacy-footer-note">
            {t.footerNote}
            <a href="mailto:hello@vexor.team">hello@vexor.team</a>
            {t.orVia}
            <a href="https://t.me/vexor_studio" target="_blank" rel="noopener noreferrer">
              @vexor_studio
            </a>
            .
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPage;

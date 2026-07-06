'use client';

import { EXT_LINK_PROPS } from '../lib/constants';
import { socialLinks } from '../data/site';
import { DiamondMark } from './ui/Logo';
import { useApp } from '../lib/context';
import { FadeIn } from './FadeIn';
import './Footer.css';

export const Footer = () => {
  const { tr, toggleTheme, toggleLang, lang, theme } = useApp();
  const f = tr.footer;
  const isDark = theme === 'dark';

  return (
    <FadeIn>
      <footer className="footer">
        <div className="footer-row">
          <div className="footer-brand">
            <DiamondMark size={22} />
            <span className="footer-rights">© 2026 Vexor. {f.rights}</span>
          </div>
          <div className="footer-links">
            <a href={socialLinks.github} {...EXT_LINK_PROPS} className="footer-link">
              {f.github}
            </a>
            <a href={socialLinks.telegram} {...EXT_LINK_PROPS} className="footer-link">
              {f.telegram}
            </a>
            <a href="/#contact" className="footer-link">
              {f.contact}
            </a>
            <a href="/privacy" className="footer-link">
              {f.privacy}
            </a>
            <a href="/cookies" className="footer-link">
              {f.cookies}
            </a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('vexor-open-consent'))}
              className="footer-link footer-link--btn"
            >
              {f.cookie_settings}
            </button>
            <a href="/sitemap.xml" className="footer-link">
              {f.sitemap}
            </a>
            <div className="footer-btn-container">
              <button onClick={toggleLang} className="footer-btn">
                {lang === 'uk' ? 'EN' : 'UA'}
              </button>
              <button onClick={toggleTheme} className="footer-btn footer-btn--size">
                {isDark ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </FadeIn>
  );
};

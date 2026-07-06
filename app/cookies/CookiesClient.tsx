'use client';

import { COOKIES_DATA, COOKIES_T } from './cookiesTranslations';
import { Button } from '../components/ui/Button';
import { useApp } from '../lib/context';
import Link from 'next/link';
import './cookies.css';

export const CookiesClient = () => {
  const { lang } = useApp();

  const currentLang = (lang === 'uk' ? 'uk' : 'en') as 'en' | 'uk';
  const t = COOKIES_T[currentLang];

  const categoriesList = [
    { label: t.cat_necessary, desc: t.necessary_desc },
    { label: t.cat_functional, desc: t.functional_desc },
    { label: t.cat_analytics, desc: t.analytics_desc },
  ];

  return (
    <div className="legal-article">
      <span className="section-tag">{t.tag}</span>
      <h1 className="cookies-title">{t.title}</h1>
      <p className="cookies-updated">{t.updated}</p>

      <p className="cookies-intro">{t.intro}</p>

      <h2 className="cookies-h2">{t.what_title}</h2>
      <p className="cookies-p legal-section-body">{t.what_text}</p>

      <h2 className="cookies-h2">{t.categories_title}</h2>
      <div className="cookies-categories-list">
        {categoriesList.map(cat => (
          <div key={cat.label} className="cookies-category-card">
            <div className="cookies-category-label">{cat.label}</div>
            <div className="cookies-category-desc">{cat.desc}</div>
          </div>
        ))}
      </div>

      <h2 className="cookies-h2">{t.full_list}</h2>
      <div className="cookies-table-container">
        <table className="cookies-table">
          <thead>
            <tr>
              <th>{t.table_name}</th>
              <th>{t.table_purpose}</th>
              <th>{t.table_duration}</th>
              <th>{t.table_category}</th>
            </tr>
          </thead>
          <tbody>
            {COOKIES_DATA.map(row => (
              <tr key={row.name}>
                <td className="cookies-table-name">{row.name}</td>
                <td>{row.purpose[currentLang]}</td>
                <td>{row.duration}</td>
                <td>{row.category[currentLang]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="cookies-h2">{t.manage_title}</h2>
      <p className="cookies-p">{t.manage_text}</p>
      <Button
        variant="ghost"
        className="cookies-manage-btn"
        onClick={() => window.dispatchEvent(new CustomEvent('vexor-open-consent'))}
      >
        {t.manage_btn}
      </Button>

      <h2 className="cookies-h2">{t.contact_title}</h2>
      <p className="cookies-p">
        {t.contact_text}{' '}
        <Link href="/#contact" className="cookies-contact-link">
          hello@vexor.team
        </Link>
      </p>
    </div>
  );
};

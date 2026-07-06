'use client';

import { useConsent } from '../lib/hooks/useConsent';
import { useEffect, useState } from 'react';
import { useApp } from '../lib/context';
import { SettingsIcon } from './icons';
import { Button } from './ui/Button';
import Link from 'next/link';
import './CookieConsent.css';

const COPY = {
  uk: {
    text: 'Ми використовуємо cookies для роботи сайту (мова, тема) та аналітики відвідувань. Аналітика вмикається лише після вашої згоди.',
    acceptAll: 'Прийняти всі',
    necessaryOnly: 'Тільки необхідні',
    settings: 'Налаштування',
    policyLink: 'Детальніше про cookies',
    necessaryLabel: 'Необхідні (завжди активні)',
    functionalLabel: 'Функціональні (мова, тема)',
    analyticsLabel: 'Аналітика (Google Analytics тощо)',
    save: 'Зберегти',
  },
  en: {
    text: 'We use cookies to run the site (language, theme) and for analytics. Analytics only loads after your consent.',
    acceptAll: 'Accept all',
    necessaryOnly: 'Necessary only',
    settings: 'Settings',
    policyLink: 'Learn more about cookies',
    necessaryLabel: 'Necessary (always on)',
    functionalLabel: 'Functional (language, theme)',
    analyticsLabel: 'Analytics (Google Analytics, etc.)',
    save: 'Save',
  },
};

export const CookieConsent = () => {
  const { lang } = useApp();
  const t = COPY[lang];

  const { consent, loaded, acceptAll, rejectAll, save } = useConsent();

  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const [functionalPref, setFunctionalPref] = useState(true);
  const [analyticsPref, setAnalyticsPref] = useState(true);

  useEffect(() => {
    if (!loaded) return;
    if (!consent) setVisible(true);
  }, [loaded, consent]);

  useEffect(() => {
    const reopen = () => {
      setVisible(true);
      setExpanded(true);
    };

    window.addEventListener('vexor-open-consent', reopen);
    return () => window.removeEventListener('vexor-open-consent', reopen);
  }, []);

  const closeAfter = (action: () => void) => {
    action();
    setVisible(false);
    setExpanded(false);
  };

  if (!visible) return null;

  return (
    <div role="dialog" aria-label="Cookie consent" className="consent-dialog">
      <p className="consent-text">
        {t.text}{' '}
        <Link href="/cookies" className="consent-policy-link">
          {t.policyLink}
        </Link>
      </p>

      {expanded && (
        <div className="consent-expanded">
          <label className="consent-checkbox-row consent-checkbox-row--muted">
            <input type="checkbox" checked disabled />
            {t.necessaryLabel}
          </label>
          <label className="consent-checkbox-row">
            <input
              type="checkbox"
              checked={functionalPref}
              onChange={e => setFunctionalPref(e.target.checked)}
            />
            {t.functionalLabel}
          </label>
          <label className="consent-checkbox-row">
            <input
              type="checkbox"
              checked={analyticsPref}
              onChange={e => setAnalyticsPref(e.target.checked)}
            />
            {t.analyticsLabel}
          </label>
        </div>
      )}

      <div className="consent-actions">
        <Button variant="primary" onClick={() => closeAfter(acceptAll)}>
          {t.acceptAll}
        </Button>

        <Button variant="ghost" onClick={() => closeAfter(rejectAll)}>
          {t.necessaryOnly}
        </Button>

        {expanded ? (
          <Button
            variant="ghost"
            className="consent-actions-end"
            onClick={() =>
              closeAfter(() => save({ functional: functionalPref, analytics: analyticsPref }))
            }
          >
            {t.save}
          </Button>
        ) : (
          <Button
            variant="icon"
            className="consent-actions-end"
            onClick={() => setExpanded(true)}
            aria-label={t.settings}
            icon={<SettingsIcon />}
          >
            {t.settings}
          </Button>
        )}
      </div>
    </div>
  );
};

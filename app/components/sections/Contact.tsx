'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { ArrowRightIcon, TelegramIcon } from '../icons';
import { EXT_LINK_PROPS } from '../../lib/constants';
import { socialLinks } from '../../data/site';
import { useApp } from '../../lib/context';
import { FadeIn } from '../FadeIn';
import './Contact.css';

const containsScriptTag = (value: string) => {
  return /<\s*script\b[^>]*>(.*?)<\s*\/\s*script>/gi.test(value);
};

const isValidContact = (value: string) => {
  const clean = value.trim();
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean);

  const isTelegram = clean.startsWith('@') && clean.length >= 3;
  const isPhone = /^\+?[0-9\s\-()]{7,15}$/.test(clean);

  return isEmail || isTelegram || isPhone;
};

export const Contact = () => {
  const { tr } = useApp();
  const [sent, setSent] = useState(false);

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);

  const [hasError, setHasError] = useState(false);
  const [currency, setCurrency] = useState<'uah' | 'usd'>('uah');

  const [nameValue, setNameValue] = useState('');
  const [contactValue, setContactValue] = useState('');

  const [typeValue, setTypeValue] = useState('');
  const [budgetValue, setBudgetValue] = useState('');

  const [descValue, setDescValue] = useState('');
  const [requiredError, setRequiredError] = useState(false);

  const [validationErrorMessage, setValidationErrorMessage] = useState('');
  const sentTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (sentTimerRef.current) clearTimeout(sentTimerRef.current);
    };
  }, []);

  const c = tr.contact;
  const f = c.form;

  const checkHasError = (overrides: Record<string, string> = {}) => {
    const fields = {
      name: nameValue,
      contact: contactValue,
      desc: descValue,
      ...overrides,
    };

    const stillInvalid = Object.values(fields).some(containsScriptTag);

    setHasError(stillInvalid);
    return stillInvalid;
  };

  const validateField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldKey: string
  ) => {
    const value = e.target.value;
    const invalid = containsScriptTag(value);

    e.target.style.borderColor = invalid ? '#ef4444' : '';
    checkHasError({ [fieldKey]: value });
  };

  const validateRequired = () => {
    if (!nameValue.trim() || !contactValue.trim()) {
      setRequiredError(true);
      setValidationErrorMessage(c.missing_fields);
      return false;
    }

    if (nameValue.trim().length < 2) {
      setRequiredError(true);
      setValidationErrorMessage(c.name_too_short);
      return false;
    }

    if (contactValue.trim().length < 4) {
      setRequiredError(true);
      setValidationErrorMessage(c.contact_too_short);
      return false;
    }

    if (!isValidContact(contactValue)) {
      setRequiredError(true);
      setValidationErrorMessage(c.contact_invalid);
      return false;
    }

    setRequiredError(false);
    setValidationErrorMessage('');
    return true;
  };

  const handleSubmit = async () => {
    if (hasError || loading) return;
    if (!validateRequired()) return;

    setLoading(true);
    setServerError(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: nameValue,
          contact: contactValue,
          projectType: typeValue,
          budget: budgetValue,
          desc: descValue,
        }),
      });

      if (!res.ok) throw new Error('Server error');

      setSent(true);
      setNameValue('');

      setContactValue('');
      setTypeValue('');

      setBudgetValue('');
      setDescValue('');

      sentTimerRef.current = setTimeout(() => setSent(false), 3000);
    } catch {
      setServerError(true);
      setTimeout(() => setServerError(false), 4000);
    } finally {
      setLoading(false);
    }
  };

  const info = useMemo(
    () => [
      {
        icon: '📬',
        label: c.email_label,
        value: socialLinks.emailDisplay,
        href: socialLinks.email,
      },
      {
        icon: '✈️',
        label: c.telegram_label,
        value: socialLinks.telegramDisplay,
        href: socialLinks.telegram,
      },
      { icon: '🕐', label: c.response_label, value: c.response_value, href: null },
      {
        icon: '📍',
        label: c.location_label,
        value: c.location_value,
        href: socialLinks.location,
      },
    ],
    [c]
  );

  const submitBtnClass = [
    'contact-submit-btn',
    hasError && 'contact-submit-btn--error',
    !hasError && sent && 'contact-submit-btn--success',
    loading && 'contact-submit-btn--loading',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <FadeIn>
      <section id="contact" className="section-wrap">
        <div className="animate-fade-in-up">
          <span className="section-tag">{c.tag}</span>
          <h2 className="section-title">{c.title}</h2>
          <p className="section-sub">{c.sub}</p>
        </div>
        <div className="contact-layout">
          <div className="contact-info contact-fade-el">
            {info.map(item => (
              <div key={item.label} className="contact-info-row">
                <div className="contact-info-icon no-select">{item.icon}</div>
                <div>
                  <div className="contact-info-label">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.href.startsWith('http') ? EXT_LINK_PROPS : {})}
                      className={item.icon === '✈️' ? 'contact-info-tg-link' : 'contact-info-link'}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="contact-info-value">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="contact-form contact-fade-form-el">
            <div className="contact-inputs-row">
              <div className="contact-field">
                <label className="contact-label no-select" htmlFor="contact-name">
                  {f.name_label} *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder={f.name_placeholder}
                  className="contact-input-field"
                  value={nameValue}
                  onChange={e => {
                    setNameValue(e.target.value);
                    validateField(e, 'name');
                    if (requiredError) setRequiredError(false);
                  }}
                />
              </div>
              <div className="contact-field">
                <label className="contact-label no-select" htmlFor="contact-value">
                  {f.contact_label} *
                </label>
                <input
                  id="contact-value"
                  name="contact"
                  type="text"
                  placeholder={f.contact_placeholder}
                  className="contact-input-field"
                  value={contactValue}
                  onChange={e => {
                    setContactValue(e.target.value);
                    validateField(e, 'contact');
                    if (requiredError) setRequiredError(false);
                  }}
                />
              </div>
            </div>
            <div className="contact-field">
              <label className="contact-label no-select" htmlFor="contact-type">
                {f.type_label}
              </label>
              <select
                id="contact-type"
                name="type"
                className="contact-input-field"
                value={typeValue}
                onChange={e => setTypeValue(e.target.value)}
              >
                <option value="" disabled>
                  {f.type_placeholder}
                </option>
                {f.types.map(o => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div className="contact-field">
              <div className="contact-budget-row">
                <label className="contact-label no-select" htmlFor="contact-budget">
                  {f.budget_label}
                </label>
                <div className="contact-currency-toggle">
                  {(['uah', 'usd'] as const).map(cur => (
                    <button
                      key={cur}
                      type="button"
                      onClick={() => {
                        setCurrency(cur);
                        setBudgetValue('');
                      }}
                      className={
                        'contact-currency-btn' +
                        (currency === cur ? ' contact-currency-btn--active' : '')
                      }
                    >
                      {cur === 'uah' ? '₴ UAH' : '$ USD'}
                    </button>
                  ))}
                </div>
              </div>
              <select
                id="contact-budget"
                name="budget"
                className="contact-input-field"
                value={budgetValue}
                onChange={e => setBudgetValue(e.target.value)}
              >
                <option value="" disabled>
                  {f.budget_placeholder}
                </option>
                {(currency === 'uah' ? c.budget_uah : c.budget_usd).map(o => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div className="contact-field">
              <label className="contact-label no-select" htmlFor="contact-desc">
                {f.desc_label}
              </label>
              <textarea
                id="contact-desc"
                name="desc"
                placeholder={f.desc_placeholder}
                rows={4}
                className="contact-input-field"
                value={descValue}
                onChange={e => {
                  setDescValue(e.target.value);
                  validateField(e, 'desc');
                }}
              />
            </div>

            {(hasError || requiredError) && (
              <div className="contact-error-message">
                {hasError ? c.invalid_script : validationErrorMessage}
              </div>
            )}

            <button type="button" onClick={handleSubmit} className={submitBtnClass}>
              {hasError ? (
                c.button_error
              ) : serverError ? (
                c.server_error
              ) : sent ? (
                `✓ ${f.submitted}`
              ) : loading ? (
                c.sending
              ) : (
                <>
                  {f.submit}
                  <ArrowRightIcon className="contact-submit-arrow" />
                </>
              )}
            </button>

            <a href={socialLinks.telegram} {...EXT_LINK_PROPS} className="contact-tg-link">
              <TelegramIcon size={23} />
              <span className="tg-btn-full">{f.tg_btn}</span>
              <span className="tg-btn-short">Telegram</span>
            </a>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

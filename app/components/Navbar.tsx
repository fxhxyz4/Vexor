'use client';

import { useEffect, useState } from 'react';
import { useApp } from '../lib/context';
import { DiamondMark } from './ui/Logo';
import { BurgerIcon } from './icons';
import Link from 'next/link';
import './Navbar.css';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, lang, tr, toggleTheme, toggleLang } = useApp();
  const isDark = theme === 'dark';

  const n = tr.nav;

  useEffect(() => {
    let active = false;

    const handleScroll = () => {
      const isOverThreshold = window.scrollY > 20;
      if (isOverThreshold !== active) {
        active = isOverThreshold;
        setScrolled(isOverThreshold);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const links = [
    { href: '/#services', label: n.services },
    { href: '/#work', label: n.work },
    { href: '/#about', label: n.team },
    { href: '/#faq', label: n.faq },
  ];

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo-link">
            <span className="nav-logo-mark">
              <DiamondMark size={34} className="nav-logo-icon" />
            </span>
            <span className="no-select nav-logo-text">vexor</span>
          </Link>

          <div className="nav-links-desktop">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                prefetch={false}
                className="nav-link-item"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <div className="nav-controls-desktop">
              <button onClick={toggleTheme} className="nav-icon-btn" aria-label="Toggle theme">
                {isDark ? '☀️' : '🌙'}
              </button>
              <button
                onClick={toggleLang}
                className="nav-icon-btn nav-lang-btn"
                aria-label="Toggle language"
              >
                {lang === 'uk' ? 'EN' : 'UA'}
              </button>
            </div>

            <Link href="/#contact" prefetch={false} className="nav-cta-desktop">
              {n.cta}
              <span className="nav-cta-arrow" aria-hidden="true">
                →
              </span>
            </Link>

            <button
              className="nav-burger nav-icon-btn"
              onClick={() => setMenuOpen(p => !p)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <BurgerIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav-mobile-overlay">
          <div className="nav-mobile-links">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                prefetch={false}
                className="nav-mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="nav-mobile-controls">
            <button onClick={toggleTheme} className="nav-icon-btn mobile-ctrl-btn">
              {isDark ? '☀️' : '🌙'}
              <span className="burger-btn-text">{isDark ? 'Light' : 'Dark'}</span>
            </button>
            <button onClick={toggleLang} className="nav-icon-btn mobile-ctrl-btn nav-lang-btn">
              {lang === 'uk' ? '🇬🇧' : '🇺🇦'}
              <span className="burger-btn-text">{lang === 'uk' ? 'EN' : 'UA'}</span>
            </button>
          </div>

          <Link
            href="/#contact"
            prefetch={false}
            onClick={() => setMenuOpen(false)}
            className="nav-mobile-cta"
          >
            {n.cta}
          </Link>
        </div>
      )}
    </>
  );
};

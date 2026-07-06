'use client';

import { useEffect, useState } from 'react';
import { useApp } from '../../lib/context';
import { DiamondMark } from '../ui/Logo';
import { motion } from 'framer-motion';
import { FadeIn } from '../FadeIn';
import './Hero.css';

export const Hero = () => {
  const { tr } = useApp();
  const [isMounted, setIsMounted] = useState(false);
  const h = tr.hero;
  const s = tr.stats;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const statsData = [
    { num: '30+', label: s.projects },
    { num: '4+', label: s.years },
    { num: '92%', label: s.clients },
    { num: 'UA ➜ EU', label: s.vector },
  ];

  return (
    <FadeIn>
      <section id="hero" className="hero-section">
        <div className="hero-grid-overlay" />
        <div className="hero-glow" />

        <div className="hero-content">
          <div className="hero-mark-wrap">
            <motion.div
              animate={isMounted ? { y: [0, -10, 0], rotate: [0, 3, -3, 0] } : {}}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <DiamondMark size={60} />
            </motion.div>
          </div>

          {/* Badge */}
          <div className="hero-badge-wrap">
            <span className="hero-badge no-select">
              <span className={`hero-badge-dot${isMounted ? ' hero-badge-dot--pulse' : ''}`} />
              {h.badge}
            </span>
          </div>

          <h1 className="hero-title">
            {h.title1}
            <span className="hero-title-muted">{h.title2}</span>
          </h1>

          <p className="hero-sub">{h.sub}</p>

          <div className="hero-cta-row">
            <motion.a
              href="#contact"
              className="hero-cta hero-cta--sheen"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {h.cta_primary}
              <span className="hero-cta-sheen" aria-hidden="true" />
            </motion.a>
            <motion.a
              href="#work"
              className="hero-cta-secondary"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              {h.cta_secondary}
            </motion.a>
          </div>

          <div className="hero-stats">
            {statsData.map(st => (
              <div key={st.label} className="no-select">
                <div className="hero-stat-num">{st.num}</div>
                <div className="hero-stat-label">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
};

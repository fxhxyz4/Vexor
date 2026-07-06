'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../../lib/context';
import { FadeIn } from '../FadeIn';
import { useState } from 'react';
import './FAQ.css';

export const FAQ = () => {
  const { tr } = useApp();
  const [open, setOpen] = useState<number | null>(null);
  const f = tr.faq;

  return (
    <FadeIn>
      <section id="faq" className="section-wrap">
        <div className="animate-fade-in-up">
          <span className="section-tag">{f.tag}</span>
          <h2 className="section-title">{f.title}</h2>
          <p className="section-sub">{f.sub}</p>
        </div>

        <div className="faq-list">
          {f.items.map((item, i) => (
            <div key={i} className="faq-item-card" style={{ animationDelay: `${i * 0.05}s` }}>
              <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
                <span className="faq-question-text">{item.q}</span>
                <motion.span
                  className="faq-toggle-icon"
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    <div className="faq-answer">{item.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
};

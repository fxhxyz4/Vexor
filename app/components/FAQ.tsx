'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../lib/context';

export function FAQ() {
  const { tr } = useApp();
  const [open, setOpen] = useState<number | null>(null);
  const f = tr.faq;

  return (
    <section id="faq" className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">{f.tag}</span>
        <h2 className="section-title">{f.title}</h2>
        <p className="section-sub">{f.sub}</p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {f.items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            style={{
              borderRadius: 10,
              border: '1px solid var(--border-c)',
              overflow: 'hidden',
              background: 'var(--bg2)',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--text-muted)')}
            onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-c)')}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%',
                padding: '18px 22px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                gap: 16,
              }}
            >
              <span
                style={{
                  fontSize: 15,
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  lineHeight: 1.4,
                }}
              >
                {item.q}
              </span>
              <motion.span
                animate={{ rotate: open === i ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ fontSize: 20, color: 'var(--text-muted)', flexShrink: 0, lineHeight: 1 }}
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
                  <div
                    style={{
                      padding: '0 22px 20px',
                      fontSize: 14,
                      color: 'var(--text-secondary)',
                      lineHeight: 1.75,
                      borderTop: '1px solid var(--border-c)',
                      paddingTop: 16,
                    }}
                  >
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import { useEffect, useState, useRef } from 'react';
import { useApp } from '../../lib/context';
import { StarIcon } from '../icons/index';
import { FadeIn } from '../FadeIn';
import Link from 'next/link';
import './Testimonials.css';

const VISIBLE_COUNT = 3;
const ROTATE_INTERVAL_MS = 5000;

const StarRating = ({ rating = 5 }: { rating?: number }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <div className="testimonial-stars" role="img" aria-label={`Rating: ${rating} out of 5 stars`}>
      {stars.map((filled, index) => (
        <StarIcon
          key={index}
          size={16}
          className={`testimonial-star-icon ${filled ? 'star-filled' : 'star-empty'}`}
        />
      ))}
    </div>
  );
};

export const Testimonials = () => {
  const { lang, tr } = useApp();
  const prefersReducedMotion = useReducedMotion();

  const [startIndex, setStartIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (total <= VISIBLE_COUNT || prefersReducedMotion) return;
    if (paused) return;

    intervalRef.current = setInterval(() => {
      setStartIndex(prev => (prev + 1) % total);
    }, ROTATE_INTERVAL_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, total, prefersReducedMotion]);

  const visible = Array.from({ length: Math.min(VISIBLE_COUNT, total) }, (_, i) => {
    return testimonials[(startIndex + i) % total];
  });

  const tag = tr.testimonials?.tag || (lang === 'uk' ? '// відгуки' : '// testimonials');
  const title =
    tr.testimonials?.title || (lang === 'uk' ? 'Що кажуть клієнти' : 'What clients say');

  return (
    <FadeIn>
      <section
        id="testimonials"
        className="section-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="animate-fade-in-up">
          <span className="section-tag">{tag}</span>
          <h2 className="section-title">{title}</h2>
        </div>

        <div className="testimonials-grid">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map(t => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="testimonial-card"
              >
                <div className="testimonial-card-header">
                  <div className="testimonial-quote-mark no-select" aria-hidden="true">
                    “
                  </div>
                  <StarRating rating={t.rating} />
                </div>

                <p className="testimonial-quote">{t.quote[lang]}</p>

                <div className="testimonial-card-bottom">
                  <div className="testimonial-footer">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="testimonial-avatar no-select"
                      loading="lazy"
                    />
                    <div>
                      <div className="testimonial-author no-select">{t.author}</div>
                      <div className="testimonial-role no-select">{t.role[lang]}</div>
                    </div>
                  </div>
                  {t.projectSlug && (
                    <Link href={`/work/${t.projectSlug}`} className="testimonial-project-link">
                      {tr.work.view_case} →
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {total > VISIBLE_COUNT && (
          <div className="testimonials-dots" role="tablist" aria-label="Testimonial pages">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={i === startIndex}
                aria-label={`Show testimonial ${i + 1}`}
                className={
                  'testimonials-dot' + (i === startIndex ? ' testimonials-dot--active' : '')
                }
                onClick={() => setStartIndex(i)}
              />
            ))}
          </div>
        )}
      </section>
    </FadeIn>
  );
};

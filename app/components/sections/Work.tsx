'use client';

import { useState, useEffect } from 'react';
import { useApp } from '../../lib/context';
import { FadeIn } from '../FadeIn';
import Image from 'next/image';
import Link from 'next/link';
import './Work.css';

export const Work = () => {
  const { tr } = useApp();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const w = tr.work;
  const projects = w.projects_list || [];

  if (!mounted) {
    return <div className="section-wrap" style={{ minHeight: '600px' }} />;
  }

  return (
    <FadeIn>
      <section id="work" className="section-wrap">
        <div className="animate-fade-in-up">
          <span className="section-tag">{w.tag}</span>
          <h2 className="section-title">{w.title}</h2>
          <p className="section-sub">{w.sub}</p>
        </div>

        <div className="work-grid">
          {projects.map((p, i) => (
            <div
              key={p.slug || i}
              className="work-card-anim"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <Link href={`/work/${p.slug}`} className="work-card-link">
                <div className="work-card-container">
                  <div className="work-card-image" style={{ background: p.gradient }}>
                    {(p as { image?: string }).image ? (
                      <Image
                        src={(p as { image?: string }).image!}
                        alt={`${p.name} — ${p.type} by Vexor. ${p.desc}`}
                        fill
                        sizes="(max-width: 560px) 33vw, (max-width: 900px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                        priority={i === 0}
                        loading={i === 0 ? undefined : 'lazy'}
                      />
                    ) : (
                      <div className="work-card-placeholder">
                        <div className="work-card-placeholder-box" />
                      </div>
                    )}
                    <span className="work-card-arrow no-select">↗</span>
                  </div>

                  <div className="work-card-body">
                    <span className="work-card-type no-select">{p.type}</span>
                    <h3 className="work-card-title">{p.name}</h3>
                    <p className="work-card-desc">{p.desc}</p>
                    <div className="work-card-tags no-select">
                      {p.stack.map(tag => (
                        <span key={tag} className="work-card-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="work-footer-btn-wrap">
          <Link href="/work" className="work-view-all-btn">
            {w.view_all}
          </Link>
        </div>
      </section>
    </FadeIn>
  );
};

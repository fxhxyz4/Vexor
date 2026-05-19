'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useApp } from '../lib/context';
import { projects } from '../data/site';

export function Work() {
  const { tr } = useApp();
  const w = tr.work;

  return (
    <section id="work" className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-tag">{w.tag}</span>
        <h2 className="section-title">{w.title}</h2>
        <p className="section-sub">{w.sub}</p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link href={`/work/${p.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
              <div
                style={{
                  borderRadius: 12,
                  overflow: 'hidden',
                  background: 'var(--bg2)',
                  border: '1px solid var(--border-c)',
                  transition: 'all 0.2s',
                  height: '100%',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--text-muted)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border-c)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    height: 180,
                    background: p.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <div
                    style={{
                      width: 80,
                      height: 52,
                      borderRadius: 8,
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                    }}
                  />
                  <span
                    className="no-select"
                    style={{
                      position: 'absolute',
                      top: 12,
                      right: 14,
                      fontSize: 16,
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    ↗
                  </span>
                </div>
                <div style={{ padding: '18px 20px 22px' }}>
                  <span
                    className="no-select"
                    style={{
                      fontSize: 10,
                      fontFamily: 'Geist Mono,monospace',
                      color: 'var(--accent)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: 6,
                    }}
                  >
                    {p.type}
                  </span>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      letterSpacing: -0.4,
                      marginBottom: 7,
                    }}
                  >
                    {p.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: 14,
                    }}
                  >
                    {p.desc}
                  </p>
                  <div className="no-select" style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {p.stack.map(tag => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 11,
                          fontFamily: 'Geist Mono,monospace',
                          color: 'var(--text-secondary)',
                          background: 'var(--bg3)',
                          border: '1px solid var(--border-c)',
                          padding: '3px 9px',
                          borderRadius: 5,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{ textAlign: 'center', marginTop: 40 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link
          href="/work"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 14,
            color: 'var(--text-secondary)',
            padding: '10px 24px',
            borderRadius: 9,
            border: '1px solid var(--border-c)',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--text-primary)';
            e.currentTarget.style.borderColor = 'var(--text-muted)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.borderColor = 'var(--border-c)';
          }}
        >
          {w.view_all}
        </Link>
      </motion.div>

      <style>{`@media(max-width:768px){#work [style*="repeat(3,1fr)"]{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

'use client';

import { BackLink } from '../components/ui/BackLink';
import { Footer } from '../components/Footer';
import type { WorkMeta } from '../lib/mdx';
import { useApp } from '../lib/context';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './WorkPageClient.css';

const CATEGORY_KEYS = [
  'all',
  'Landing Page',
  'Mobile App',
  'SaaS Platform',
  'Web App',
  'Design',
  'Automation & AI',
] as const;

const FilterButton = ({
  active,
  label,
  count,
  showCount,
  onClick,
}: {
  active: boolean;
  label: string;
  count: number;
  showCount: boolean;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} className={`work-filter-btn ${active ? 'active' : ''}`}>
      {label}
      {showCount && <span className="work-filter-count">{count}</span>}
    </button>
  );
};

const ProjectListCard = ({
  p,
  cats,
  index,
}: {
  p: WorkMeta;
  cats: Record<string, string>;
  index: number;
}) => {
  return (
    <motion.div
      key={p.slug}
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="work-card-motion-wrapper"
    >
      <Link href={`/work/${p.slug}`} className="work-card-link">
        <div className="work-card-container">
          {/* Top Banner */}
          <div className="work-card-banner" style={{ background: p.gradient }}>
            {p.image ? (
              <Image
                src={p.image}
                alt={`${p.title} — ${p.type} by Vexor. ${p.description.slice(0, 80)}`}
                width={1200}
                height={675}
                loading="eager"
                className="work-card-image"
              />
            ) : (
              <div className="work-card-image-placeholder">
                <div className="work-card-placeholder-thumb" />
              </div>
            )}
            <span className="work-card-arrow">↗</span>
            <span className="work-card-year">{p.year}</span>
          </div>

          {/* Content Body */}
          <div className="work-card-body">
            <span className="work-card-category">
              {cats[p.type as keyof typeof cats] ?? p.type}
            </span>
            <h3 className="work-card-title">{p.title}</h3>
            <p className="work-card-desc">{p.description}</p>

            {/* Tech Stack Tags */}
            <div className="work-card-stack">
              {p.stack.map(tag => (
                <span key={tag} className="work-card-stack-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const WorkPageClient = ({
  projectsUk,
  projectsEn,
}: {
  projectsUk: WorkMeta[];
  projectsEn: WorkMeta[];
}) => {
  const [active, setActive] = useState('all');
  const { tr, lang } = useApp();
  const w = tr.work;
  const cats = w.categories as Record<string, string>;

  const projects = lang === 'en' ? projectsEn : projectsUk;
  const filtered = active === 'all' ? projects : projects.filter(p => p.type === active);

  return (
    <>
      <main className="work-main-wrap">
        <div className="work-content-container">
          <BackLink href="/" label={w.back2} marginBottom={40} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="work-page-tag">{w.tag}</span>
            <h1 className="work-page-title">{w.all_title}</h1>
            <p className="work-page-sub">{w.all_sub.replace('{n}', String(projects.length))}</p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="work-filters"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {CATEGORY_KEYS.map(cat => {
              const label = cats[cat] ?? cat;
              const count =
                cat === 'all' ? projects.length : projects.filter(p => p.type === cat).length;
              return (
                <FilterButton
                  key={cat}
                  active={active === cat}
                  label={label}
                  count={count}
                  showCount={cat !== 'all'}
                  onClick={() => setActive(cat)}
                />
              );
            })}
          </motion.div>

          {/* Grid */}
          <div className="work-grid">
            {filtered.map((p, i) => (
              <ProjectListCard key={p.slug} p={p} cats={cats} index={i} />
            ))}
          </div>

          {filtered.length === 0 && <div className="work-grid-empty">{w.empty}</div>}
        </div>
      </main>
      <Footer />
    </>
  );
};

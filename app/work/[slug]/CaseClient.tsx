'use client';
import { ReactNode } from 'react';
import { useApp } from '../../lib/context';
import { socialLinks } from '../../data/site';
import type { WorkMeta, WorkPost } from '../../lib/mdx';

const EXT = { target: '_blank' as const, rel: 'noopener noreferrer nofollow' };

export function BackLink({ href }: { href: string }) {
  const { tr } = useApp();
  return (
    <a
      href={href}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 13,
        color: 'var(--text-muted)',
        marginBottom: 48,
        transition: 'color 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M19 12H5M12 5l-7 7 7 7" />
      </svg>
      {tr.work.back}
    </a>
  );
}

export function CaseContent({
  postUk,
  postEn,
  mdxUk,
  mdxEn,
}: {
  postUk: WorkPost;
  postEn: WorkPost;
  mdxUk: ReactNode;
  mdxEn: ReactNode;
}) {
  const { tr, lang } = useApp();
  const w = tr.work;
  const post = lang === 'en' ? postEn : postUk;
  const mdx = lang === 'en' ? mdxEn : mdxUk;
  const cats = w.categories;

  return (
    <div>
      <div style={{ marginBottom: 48 }}>
        <span
          style={{
            fontSize: 11,
            fontFamily: 'Geist Mono, monospace',
            color: 'var(--accent)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: 12,
          }}
        >
          {cats[post.type as keyof typeof cats] ?? post.type} · {post.year}
        </span>
        <h1
          style={{
            fontSize: 'clamp(32px,5vw,52px)',
            fontWeight: 700,
            letterSpacing: -2,
            color: 'var(--text-primary)',
            marginBottom: 16,
            lineHeight: 1.1,
          }}
        >
          {post.title}
        </h1>
        <p
          style={{
            fontSize: 18,
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: 24,
          }}
        >
          {post.description}
        </p>
        <div
          style={{
            height: 'clamp(180px,25vw,300px)',
            borderRadius: 14,
            background: post.gradient,
            marginBottom: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--border-c)',
          }}
        >
          <div
            style={{
              width: 100,
              height: 70,
              borderRadius: 10,
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          />
        </div>
        <MetaRow client={post.client} year={post.year} stack={post.stack} />
      </div>
      <div style={{ lineHeight: 1.8 }}>{mdx}</div>
    </div>
  );
}

export function MetaRow({
  client,
  year,
  stack,
}: {
  client: string;
  year: number;
  stack: string[];
}) {
  const { tr } = useApp();
  const w = tr.work;
  return (
    <div
      style={{
        display: 'flex',
        gap: 32,
        flexWrap: 'wrap',
        padding: '20px 0',
        borderTop: '1px solid var(--border-c)',
        borderBottom: '1px solid var(--border-c)',
        marginBottom: 48,
      }}
    >
      <div>
        <div
          style={{
            fontSize: 11,
            color: 'var(--text-muted)',
            marginBottom: 4,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontFamily: 'Geist Mono, monospace',
          }}
        >
          {w.client}
        </div>
        <div style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 500 }}>{client}</div>
      </div>
      <div>
        <div
          style={{
            fontSize: 11,
            color: 'var(--text-muted)',
            marginBottom: 4,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontFamily: 'Geist Mono, monospace',
          }}
        >
          {w.year}
        </div>
        <div style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 500 }}>{year}</div>
      </div>
      <div>
        <div
          style={{
            fontSize: 11,
            color: 'var(--text-muted)',
            marginBottom: 4,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontFamily: 'Geist Mono, monospace',
          }}
        >
          {w.stack}
        </div>
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 2 }}>
          {stack.map(tag => (
            <span
              key={tag}
              style={{
                fontSize: 11,
                fontFamily: 'Geist Mono, monospace',
                color: 'var(--text-secondary)',
                background: 'var(--bg3)',
                border: '1px solid var(--border-c)',
                padding: '2px 8px',
                borderRadius: 4,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CTARow({ caseLink }: { caseLink: string }) {
  const { tr } = useApp();
  const w = tr.work;
  return (
    <div
      style={{
        marginTop: 64,
        paddingTop: 40,
        borderTop: '1px solid var(--border-c)',
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
      }}
    >
      <a
        href="/#contact"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 14,
          fontWeight: 600,
          padding: '11px 24px',
          borderRadius: 9,
          background: 'var(--text-primary)',
          color: 'var(--bg)',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        {w.discuss}
      </a>
      <a
        href={caseLink}
        {...EXT}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 14,
          padding: '11px 24px',
          borderRadius: 9,
          border: '1px solid var(--border-c)',
          color: 'var(--text-secondary)',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--text-muted)';
          e.currentTarget.style.color = 'var(--text-primary)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--border-c)';
          e.currentTarget.style.color = 'var(--text-secondary)';
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
        {w.github}
      </a>
    </div>
  );
}

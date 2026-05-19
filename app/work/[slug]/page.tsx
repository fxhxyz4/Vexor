import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getWorkBySlug, getAllWorkSlugs } from '../../lib/mdx';
import { BackLink, CTARow } from './CaseClient';

export async function generateStaticParams() {
  return getAllWorkSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getWorkBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      style={{
        fontSize: 'clamp(20px,3vw,28px)',
        fontWeight: 700,
        letterSpacing: -0.8,
        color: 'var(--text-primary)',
        marginTop: 48,
        marginBottom: 16,
        lineHeight: 1.2,
      }}
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 18 }}
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      style={{
        paddingLeft: 20,
        marginBottom: 18,
        display: 'flex',
        flexDirection: 'column' as const,
        gap: 8,
      }}
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7 }} {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }} {...props} />
  ),
};

export default async function WorkCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getWorkBySlug(slug);
  if (!post) notFound();

  return (
    <main style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: 80 }}>
      <article
        style={{
          maxWidth: 760,
          margin: '0 auto',
          padding: 'clamp(40px,6vw,80px) clamp(16px,5vw,48px)',
        }}
      >
        <BackLink href="/work" label="Всі проєкти" />

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
            {post.type} · {post.year}
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
                Клієнт
              </div>
              <div style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 500 }}>
                {post.client}
              </div>
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
                Рік
              </div>
              <div style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 500 }}>
                {post.year}
              </div>
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
                Стек
              </div>
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 2 }}>
                {post.stack.map(tag => (
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
        </div>

        <div style={{ lineHeight: 1.8 }}>
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        <CTARow caseLink={post.link} />
      </article>
    </main>
  );
}

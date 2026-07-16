'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import { useApp } from '../../lib/context';
import type { WorkPost } from '../../lib/mdx';
import { EXT_LINK_PROPS } from '../../lib/constants';
import { BackLink } from '../../components/ui/BackLink';
import {
  GitHubIcon,
  DribbbleIcon,
  FigmaIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
} from '../../components/icons';

import styles from './CaseContent.module.css';

export const CaseBackLink = ({ href }: { href: string }) => {
  const { tr } = useApp();
  return <BackLink href={href} label={tr.work.back} />;
};

interface CaseContentProps {
  postUk: WorkPost;
  postEn: WorkPost;
  mdxUk: ReactNode;
  mdxEn: ReactNode;
}

export const CaseContent = ({ postUk, postEn, mdxUk, mdxEn }: CaseContentProps) => {
  const { tr, lang } = useApp();
  const w = tr.work;

  const post = lang === 'en' ? postEn : postUk;
  const mdx = lang === 'en' ? mdxEn : mdxUk;
  const cats = w.categories as Record<string, string>;

  return (
    <div>
      <div className={styles.header}>
        <span className={styles.categoryYear}>
          {cats[post.type as keyof typeof cats] ?? post.type} · {post.year}
        </span>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.description}</p>

        <div className={styles.imageWrapper} style={{ background: post.gradient }}>
          {post.image ? (
            <Image
              src={post.image}
              alt={`${post.title} — ${post.type} by Vexor. ${post.description}`}
              width={1200}
              height={675}
              className={styles.imageElement}
              loading="eager"
              priority
            />
          ) : (
            <div className={styles.imagePlaceholder}>
              <div className={styles.placeholderIcon} />
            </div>
          )}
        </div>

        <MetaRow client={post.client} year={post.year} stack={post.stack} />
      </div>
      <div className={styles.mdxBody}>{mdx}</div>
    </div>
  );
};

export const MetaRow = ({
  client,
  year,
  stack,
}: {
  client: string;
  year: number;
  stack: string[];
}) => {
  const { tr } = useApp();
  const w = tr.work;

  return (
    <div className={styles.metaRow}>
      <div>
        <div className={styles.metaLabel}>{w.client}</div>
        <div className={styles.metaValue}>{client}</div>
      </div>
      <div>
        <div className={styles.metaLabel}>{w.year}</div>
        <div className={styles.metaValue}>{year}</div>
      </div>
      <div>
        <div className={styles.metaLabel}>{w.stack}</div>
        <div className={styles.tagList}>
          {stack.map(tag => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

interface CaseLinkButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
  accentColor?: string;
  simple?: boolean;
}

export const CaseLinkButton = ({
  href,
  icon,
  label,
  accentColor,
  simple = false,
}: CaseLinkButtonProps) => {
  const customStyle = accentColor
    ? ({ '--btn-accent': accentColor } as React.CSSProperties)
    : undefined;

  return (
    <a
      href={href}
      {...EXT_LINK_PROPS}
      style={customStyle}
      className={`${styles.caseLinkBtn} ${simple ? styles.simple : ''}`}
    >
      {icon}
      {label}
    </a>
  );
};

export const CTARow = ({ post, postEn }: { post: WorkPost; postEn?: WorkPost }) => {
  const { tr, lang } = useApp();
  const w = tr.work;

  const p = lang === 'en' && postEn ? postEn : post;

  return (
    <div className={styles.ctaRow}>
      <a href="/#contact" className={styles.primaryCta}>
        {w.discuss}
        <span className={styles.ctaArrow} aria-hidden="true">
          <ArrowRightIcon />
        </span>
      </a>

      {p.demo && (
        <CaseLinkButton href={p.demo} icon={<ExternalLinkIcon />} label={w.demo ?? 'Demo'} />
      )}

      {p.github && (
        <CaseLinkButton href={p.github} icon={<GitHubIcon />} label={w.github ?? 'GitHub'} />
      )}

      {p.dribbble && (
        <CaseLinkButton
          href={p.dribbble}
          icon={<DribbbleIcon />}
          label="Dribbble"
          accentColor="var(--dribbble-color)"
        />
      )}

      {p.figma && (
        <CaseLinkButton
          href={p.figma}
          icon={<FigmaIcon />}
          label="Figma"
          accentColor="var(--figma-color)"
        />
      )}

      {!p.demo && !p.github && !p.dribbble && !p.figma && p.link && (
        <CaseLinkButton href={p.link} icon={<ExternalLinkIcon />} label="Link" simple />
      )}
    </div>
  );
};

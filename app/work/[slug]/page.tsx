import { CaseBackLink, CTARow, CaseContent } from './CaseClient';
import { getWorkBySlug, getAllWorkSlugs } from '../../lib/mdx';
import { Footer } from '@/app/components/Footer';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import './CasePage.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => {
  return getAllWorkSlugs().map(slug => ({ slug }));
};

const baseUrl = 'https://vexor.team';

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params;

  const postUk = getWorkBySlug(slug, 'uk');
  const postEn = getWorkBySlug(slug, 'en');
  const post = postUk || postEn;

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${baseUrl}/work/${slug}` },
    openGraph: {
      title: `${post.title} — Vexor`,
      description: post.description,
      url: `${baseUrl}/work/${slug}`,
      type: 'article',
      images: post.image
        ? [{ url: post.image, width: 1200, height: 630, alt: post.title }]
        : [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
};

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => <h2 className="mdx-h2" {...props} />,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => <p className="mdx-p" {...props} />,
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => <ul className="mdx-ul" {...props} />,
  li: (props: React.HTMLAttributes<HTMLLIElement>) => <li className="mdx-li" {...props} />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="mdx-strong" {...props} />
  ),
};

const WorkCasePage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const postUk = getWorkBySlug(slug, 'uk');
  const postEn = getWorkBySlug(slug, 'en');

  if (!postUk && !postEn) notFound();

  const isEn = !postUk && !!postEn;
  const currentPost = isEn ? postEn! : postUk!;

  const mdxUk = postUk ? <MDXRemote source={postUk.content} components={mdxComponents} /> : null;
  const mdxEn = postEn ? <MDXRemote source={postEn.content} components={mdxComponents} /> : mdxUk;

  const projectsTitle = isEn ? 'Projects' : 'Проєкти';

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Vexor', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: projectsTitle, item: `${baseUrl}/work` },
      {
        '@type': 'ListItem',
        position: 3,
        name: currentPost.title,
        item: `${baseUrl}/work/${slug}`,
      },
    ],
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: currentPost.title,
    description: currentPost.description,
    url: `${baseUrl}/work/${slug}`,
    creator: { '@id': `${baseUrl}/#organization` },
    dateCreated: String(currentPost.year),
    keywords: currentPost.stack.join(', '),
    ...(currentPost.image ? { image: `${baseUrl}${currentPost.image}` } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="case-main-wrap">
        <article className="case-article-container">
          <CaseBackLink href="/work" />
          <CaseContent
            postUk={postUk ?? currentPost}
            postEn={postEn ?? currentPost}
            mdxUk={mdxUk ?? mdxEn!}
            mdxEn={mdxEn!}
          />
          <CTARow post={postUk ?? currentPost} postEn={postEn ?? currentPost} />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default WorkCasePage;

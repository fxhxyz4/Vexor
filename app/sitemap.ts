import { MetadataRoute } from 'next';
import { getAllWorkSlugs } from './lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://vexor.team';
  const now = new Date();

  const workPages = getAllWorkSlugs().map(slug => ({
    url: `${base}/work/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/work`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ...workPages,
  ];
}

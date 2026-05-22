import { MetadataRoute } from 'next';
import { getAllWorkSlugs } from './lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://vexor.team';
  const now = new Date();

  const workPages = getAllWorkSlugs().map(slug => ({
    url: `${base}/work/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${base}/work`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...workPages,
    {
      url: `${base}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];
}

import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

const WORK_DIR = path.join(process.cwd(), 'content/work');

export interface WorkMeta {
  slug: string;
  title: string;
  type: string;
  description: string;
  gradient: string;
  image?: string;
  stack: string[];
  year: number;
  client: string;
  // code projects
  demo?: string;
  github?: string;
  // design projects
  dribbble?: string;
  figma?: string;
}

export interface WorkPost extends WorkMeta {
  content: string;
  // legacy - keep for backwards compat
  link?: string;
}

const getLangDir = (lang: string): string => {
  return path.join(WORK_DIR, lang === 'en' ? 'en' : 'uk');
};

export const getAllWorkSlugs = (): string[] => {
  const dir = path.join(WORK_DIR, 'uk');
  return fs
    .readdirSync(dir)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''));
};

export const getAllWork = (lang = 'uk'): WorkMeta[] => {
  return getAllWorkSlugs().map(slug => {
    const dir = getLangDir(lang);
    const filePath = path.join(dir, `${slug}.mdx`);
    const file = fs.existsSync(filePath)
      ? fs.readFileSync(filePath, 'utf8')
      : fs.readFileSync(path.join(WORK_DIR, 'uk', `${slug}.mdx`), 'utf8');
    const { data } = matter(file);
    return { slug, ...data } as WorkMeta;
  });
};

export const getWorkBySlug = (slug: string, lang = 'uk'): WorkPost | null => {
  try {
    const dir = getLangDir(lang);
    const filePath = path.join(dir, `${slug}.mdx`);
    const file = fs.existsSync(filePath)
      ? fs.readFileSync(filePath, 'utf8')
      : fs.readFileSync(path.join(WORK_DIR, 'uk', `${slug}.mdx`), 'utf8');
    const { data, content } = matter(file);
    return { slug, ...data, content } as WorkPost;
  } catch {
    return null;
  }
};

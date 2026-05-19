import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const WORK_DIR = path.join(process.cwd(), 'content/work');

export interface WorkMeta {
  slug: string;
  title: string;
  type: string;
  description: string;
  gradient: string;
  stack: string[];
  year: number;
  client: string;
  link: string;
}

export interface WorkPost extends WorkMeta {
  content: string;
}

export function getAllWorkSlugs(): string[] {
  return fs
    .readdirSync(WORK_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''));
}

export function getAllWork(): WorkMeta[] {
  return getAllWorkSlugs().map(slug => {
    const file = fs.readFileSync(path.join(WORK_DIR, `${slug}.mdx`), 'utf8');
    const { data } = matter(file);
    return { slug, ...data } as WorkMeta;
  });
}

export function getWorkBySlug(slug: string): WorkPost | null {
  try {
    const file = fs.readFileSync(path.join(WORK_DIR, `${slug}.mdx`), 'utf8');
    const { data, content } = matter(file);
    return { slug, ...data, content } as WorkPost;
  } catch {
    return null;
  }
}

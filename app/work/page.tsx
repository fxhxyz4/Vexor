import { WorkPageClient } from './WorkPageClient';
import { getAllWork } from '../lib/mdx';
import type { Metadata } from 'next';

export const generateMetadata = async ({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> => {
  const locale = params.lang === 'en' ? 'en' : 'uk';

  const dict = (await import(`../i18n/${locale}.json`)).default;

  return {
    title: dict.work.meta_title || 'Проєкти',
    description: dict.work.meta_desc || 'Всі реалізовані проєкти команды Vexor...',
  };
};

const WorkPage = () => {
  const projectsUk = getAllWork('uk');
  const projectsEn = getAllWork('en');

  return <WorkPageClient projectsUk={projectsUk} projectsEn={projectsEn} />;
};

export default WorkPage;

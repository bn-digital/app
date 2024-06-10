import type { Metadata } from 'next';

import AboutPage from '@/pageComponents/AboutPage';
import seo from '@/utils/seo';

export const metadata: Metadata = {
  title: seo.makeTitle({ title: 'About page' }),
  description: (`
    About page description
  `),
};

export default function Home() {
  return (
    <AboutPage />
  );
}

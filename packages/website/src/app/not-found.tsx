import { Metadata } from 'next';

import NotFoundPage from '@/pageComponents/NotFoundPage';
import seo from '@/utils/seo';

export const metadata: Metadata = {
  title: seo.makeTitle({
    title: '404 | Not Found',
    postfix: false,
    prefix: false,
  }),
};

export default function NotFound() {
  return (
    <NotFoundPage />
  );
}

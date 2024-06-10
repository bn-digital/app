import type { Metadata } from 'next';

import HomePage from '@/pageComponents/HomePage';

export const metadata: Metadata = {
  description: (`
    Home page description
  `),
};

export default function Home() {
  return (
    <HomePage />
  );
}

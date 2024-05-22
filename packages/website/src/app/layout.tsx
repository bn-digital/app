import type { Metadata, Viewport } from 'next';
import { ReactElement } from 'react';

import App from '@/components/App';
import { lato } from '@/fonts/lato';
import seo from '@/utils/seo';
import { getByHeader } from "@/utils/userAgent"

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  title: seo.makeTitle({
    title: 'Default Title',
    prefix: process.env.NEXT_PUBLIC_APP_NAME,
    postfix: false,
  }),
  description: (`
    Some
    Default
    Description
  `),
  applicationName: process.env.NEXT_PUBLIC_APP_NAME,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: ReactElement | ReactElement[]
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <App userAgent={getByHeader()}>
          {children}
        </App>
      </body>
    </html>
  );
}

import { Flex, Layout, Typography } from 'antd';
import Link from 'next/link';
import { ComponentProps } from 'react';

import App from '@/components/App';
import { routes } from '@/routes';

export type FooterProps = (
  Omit<ComponentProps<typeof Layout.Footer>, 'children'>
);

export function Footer(props: FooterProps) {
  const { version } = App.useContext();

  return (
    <Layout.Footer
      {...props}
    >
      <Flex
        justify="space-between"
      >
        <Link href={routes.home}>
          Home
        </Link>
        <Typography.Text type="secondary">
          Version: {version}
        </Typography.Text>
      </Flex>
    </Layout.Footer>
  );
}

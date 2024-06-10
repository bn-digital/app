import { Flex, Layout } from 'antd';
import { ComponentProps } from 'react';

import Logo from '@/components/Logo';

import { HeaderMenu } from './Header.menu';

export type HeaderProps = (
  Omit<ComponentProps<typeof Layout.Header>, 'children'>
);

Header.Menu = HeaderMenu;

export function Header(props: HeaderProps) {
  return (
    <Layout.Header
      {...props}
    >
      <Flex
        align="center"
        justify="start"
      >
        <Logo />
        <HeaderMenu />
      </Flex>
    </Layout.Header>
  );
}

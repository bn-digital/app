'use client';

import { Layout as AntdLayout, LayoutProps as AntdLayoutProps } from 'antd';

import App from '@/components/App';
import styled from '@emotion/styled';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';

export type LayoutProps = AntdLayoutProps & {
  dark?: boolean
};

const StyledLayout = styled(AntdLayout)`
  overflow-y: initial;
  min-height: 100vh;
`;

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;

export function Layout({
  children,
  dark = false,
  ...props
}: LayoutProps) {
  return (
    <StyledLayout
      {...props}
    >
      <App.ConfigProvider dark={dark}>
        <Layout.Header />
      </App.ConfigProvider>
      <Layout.Content>
        {children}
      </Layout.Content>
      <App.ConfigProvider dark={dark}>
        <Layout.Footer />
      </App.ConfigProvider>
    </StyledLayout>
  );
}

'use client';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { UserAgent } from '@/utils/userAgent';
import { ReactElement } from 'react';

import ApolloProvider from './ApolloProvider';
import { AppContext, AppProvider, useAppContext } from './App.context';
import ConfigProvider from './ConfigProvider';
import EmotionProvider from './EmotionProvider';
import ErrorBoundary from './ErrorBoundary';

export type AppProps = {
  children: ReactElement | ReactElement[]
  userAgent: UserAgent
};

App.Context = AppContext;
App.Provider = AppProvider;
App.useContext = useAppContext;
App.ThemeProvider = EmotionProvider;
App.ConfigProvider = ConfigProvider;
App.ErrorBoundary = ErrorBoundary;
App.ApolloProvider = ApolloProvider;

export function App({
  children,
  userAgent,
}: AppProps) {
  return (
    <AntdRegistry>
      <App.ErrorBoundary>
        <App.ApolloProvider>
          <App.Provider userAgent={userAgent}>
            <ConfigProvider includeGlobalStyles>
              {children}
            </ConfigProvider>
          </App.Provider>
        </App.ApolloProvider>
      </App.ErrorBoundary>
    </AntdRegistry>
  );
}

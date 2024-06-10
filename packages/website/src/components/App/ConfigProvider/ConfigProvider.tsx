import {
  ConfigProvider as AntdConfigProvider,
  theme as antdTheme,
  MappingAlgorithm,
  ThemeConfig as AntdThemeConfig,
} from 'antd';
import { merge } from 'lodash';
import { ReactElement, useCallback, useMemo } from 'react';

import App from '@/components/App';

export type AppThemeToken = Required<AntdThemeConfig['token']> & {
  primaryDarkColor: string
  primaryLightColor: string
  titleColor: string
  accentColor: string
  paddingXXL: number
  colorTextDarkSolid: string
};

export type ThemeConfig = Omit<AntdThemeConfig, 'token'> & {
  token?: Partial<AppThemeToken>
};

export type ConfigProviderProps = {
  children: ReactElement | ReactElement[]
  dark?: boolean
  theme?: ThemeConfig,
  includeGlobalStyles?: boolean
};

export const primaryLightColor = '#1c2c53';

export const primaryDarkColor = '#f8d74a';

export const accentColor = '#f59300';

export function ConfigProvider({
  children,
  dark,
  theme,
  includeGlobalStyles = false,
}: ConfigProviderProps) {
  const { isMobile } = App.useContext();

  const getAlgorithm = useCallback((): MappingAlgorithm[] => {
    const algorithm: MappingAlgorithm[] = [
      dark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    ];

    if (isMobile) {
      algorithm.push(antdTheme.compactAlgorithm);
    }

    return algorithm;
  }, [isMobile, dark]);

  const getPrimaryColor = useCallback(() => {
    if (dark) return primaryDarkColor;

    return primaryLightColor;
  }, [dark]);

  const getTitleColor = useCallback(() => {
    if (dark) return 'rgba(255, 255, 255, 0.85)';

    return '#1c2c53';
  }, [dark]);

  const defaultTheme: ThemeConfig = useMemo(() => ({
    algorithm: getAlgorithm(),
    token: {
      primaryLightColor,
      primaryDarkColor,
      accentColor,
      colorTextDarkSolid: 'rgba(0, 0, 0, 0.88)',
      colorPrimary: getPrimaryColor(),
      fontFamily: 'inherit',
      titleColor: getTitleColor(),
      colorBgLayout: '#fff',
      paddingXXL: 48,
    },
    components: {
      Layout: {
        headerBg: dark ? '#141414' : '#fff',
        footerBg: dark ? '#141414' : '#fff',
      },
    },
  }), [
    getAlgorithm,
    getPrimaryColor,
    getTitleColor,
    dark,
  ]);

  const getTheme = (): ThemeConfig => {
    if (!theme) return defaultTheme;

    return merge(defaultTheme, theme);
  };

  return (
    <AntdConfigProvider
      theme={getTheme()}
    >
      <App.ThemeProvider
        isDark={!!dark}
        includeGlobalStyles={includeGlobalStyles}
      >
        {children}
      </App.ThemeProvider>
    </AntdConfigProvider>
  );
}

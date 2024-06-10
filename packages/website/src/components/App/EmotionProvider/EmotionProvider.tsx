import { theme } from 'antd';
import { ReactElement } from 'react';

import { ThemeProvider, CSSObject } from '@emotion/react';

import GlobalStyles from './GlobalStyles';

export type EmotionProviderProps = {
  children: ReactElement | ReactElement[]
  includeGlobalStyles?: boolean
  isDark?: boolean
};

export type Presets = Record<PresetKey, CSSObject>;

type PresetKey = (
    | 'invisible'
    | 'wordBreakable'
    | 'allBreakable'
);

export function EmotionProvider({
  children,
  includeGlobalStyles = false,
  isDark = false,
}: EmotionProviderProps) {
  const { token } = theme.useToken();

  const presets: Presets = {
    invisible: {
      height: 0,
      width: 0,
      opacity: 0,
      padding: 0,
      margin: 0,
      visibility: 'hidden',
      overflow: 'hidden',
    },
    wordBreakable: {
      textOverflow: 'ellipsis',
      wordBreak: 'normal',
      whiteSpace: 'break-spaces',
    },
    allBreakable: {
      textOverflow: 'ellipsis',
      wordBreak: 'break-all',
      whiteSpace: 'break-spaces',
    },
  };

  return (
    <ThemeProvider
      theme={{
        presets,
        isDark,
        token: token || {},
      }}
    >
      {includeGlobalStyles && <GlobalStyles />}
      {children}
    </ThemeProvider>
  );
}

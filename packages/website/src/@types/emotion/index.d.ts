import '@emotion/react';

import type { Presets, AppThemeToken } from '@/components/App';

declare module '@emotion/react' {
  export interface Theme {
    token: Partial<AppThemeToken>
    presets: Presets
    isDark: boolean
  }
}

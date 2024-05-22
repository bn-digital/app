'use client';

import {
  createContext,
  useContext,
  ReactElement,
} from 'react';

import { IUseResponsive, useResponsive } from '@/hooks/useResponsive';

import type { UserAgent } from '@/utils/userAgent';

type AppContextValue = IUseResponsive & {
  userAgent: UserAgent
};

type AppProviderProps = {
  children: ReactElement | ReactElement[]
  userAgent: AppContextValue['userAgent']
};

export const AppContext = createContext({} as AppContextValue);

export function AppProvider({
  children,
  userAgent,
}: AppProviderProps) {
  const responsive = useResponsive({ userAgent });

  const context: AppContextValue = {
    userAgent,
    ...responsive,
  }

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext<AppContextValue>(AppContext);
}

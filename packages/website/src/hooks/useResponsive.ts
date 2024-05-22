/**
 * IMPORTANT!!!
 *
 * Try to not use this hook directly, it may cause performance issues
 *
 * Instead, use the result of this hook from AppContext
 */

import { useMediaQuery } from 'react-responsive';
import type { UserAgent } from '@/utils/userAgent';

export const breakpoints = {
  XS: 480,
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
} as const;

export type Breakpoints = typeof breakpoints;

type DeviceType = 'mobile' | 'desktop' | 'tablet' | 'XL' | 'MD' | 'SM' | 'LG' | 'XS';

export type IUseResponsive = (
  Record<`is${Capitalize<DeviceType>}`, boolean> & {
    breakpoints: Breakpoints
  }
);

export type UseResponsiveArgs = {
  userAgent: UserAgent
};

export function useResponsive({
  userAgent
}: UseResponsiveArgs): IUseResponsive {
  const mediaXS = useMediaQuery({ minWidth: breakpoints.XS });
  const mediaSM = useMediaQuery({ minWidth: breakpoints.SM });
  const mediaMD = useMediaQuery({ minWidth: breakpoints.MD });
  const mediaLG = useMediaQuery({ minWidth: breakpoints.LG });
  const mediaXL = useMediaQuery({ minWidth: breakpoints.XL });

  const isServer = typeof window === 'undefined';

  const isXS = isServer ? userAgent.isMobile : mediaXS;
  const isSM = isServer ? userAgent.isTablet : mediaSM;
  const isMD = isServer ? userAgent.isTablet : mediaMD;
  const isLG = isServer ? userAgent.isDesktop : mediaLG;
  const isXL = isServer ? userAgent.isDesktop : mediaXL;

  const isMobile = isServer ? userAgent.isMobile : !isSM;
  const isDesktop = isServer ? userAgent.isDesktop : isLG;
  const isTablet = isServer ? userAgent.isTablet : !isMobile && !isDesktop;

  return {
    isMobile,
    isDesktop,
    isTablet,
    isXS,
    isSM,
    isMD,
    isXL,
    isLG,
    breakpoints,
  };
}

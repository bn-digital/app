import { headers } from 'next/headers';
import {
    isMobileOnly,
    isDesktop,
    isTablet,
    getSelectorsByUserAgent,
} from 'react-device-detect';

export type UserAgent = {
  isDesktop: boolean
  isTablet: boolean
  isMobile: boolean
};

export const getByHeader = (): UserAgent => {
  /**
   * IMPORTANT!!!
   *
   * It can be used in client components (under "use client" directive)
   */
  const byHeader = getSelectorsByUserAgent(headers().get('user-agent') || '');

  return {
    isDesktop: byHeader.isDesktop ?? isDesktop,
    isTablet: byHeader.isTablet ?? isTablet,
    isMobile: byHeader.isMobileOnly ?? isMobileOnly,
  }
}


import Link, { LinkProps } from 'next/link';

import { routes } from '@/routes';
import styled from '@emotion/styled';

import LogoSvg from './assets/Logo.svg';

const StyledLogo = styled(LogoSvg)`
  fill: ${({ theme }) => (theme.isDark ? 'white' : 'black')};
`;

const StyledLink = styled(Link)`
  display: flex;
`;

export type LogoProps = Omit<Partial<LinkProps>, 'children'> & {
  height?: string | number
  width?: string | number
};

export function Logo({
  height = 32,
  width = 32,
  ...linkProps
}: LogoProps) {
  return (
    <StyledLink
      href={routes.home}
      aria-label="Home"
      {...linkProps}
    >
      <StyledLogo
        height={height}
        width={width}
      />
    </StyledLink>
  );
}

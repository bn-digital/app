import { ComponentPropsWithoutRef, ReactNode } from 'react';

import styled from '@emotion/styled';

export type ExternalLinkProps = ComponentPropsWithoutRef<'a'> & {
  href: HTMLAnchorElement['href'] | undefined
  children?: ReactNode;
  className?: string
  hidden?: boolean
  block?: boolean
};

const StyledLink = styled('a', {
  shouldForwardProp: (prop) => prop !== 'block',
})<{ block?: boolean }>`
  line-height: initial;
  width: ${({ block }) => (block ? '100%' : 'auto')};
`;

export function ExternalLink({
  href,
  children,
  className,
  hidden,
  ...props
}: ExternalLinkProps) {
  return (
    <StyledLink
      href={href}
      hidden={!href || hidden}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children || href}
    </StyledLink>
  );
}

'use client';

import { Typography } from 'antd';
import { ComponentProps } from 'react';

import { breakpoints } from '@/hooks/useResponsive';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledTitle = styled(Typography.Title, {
  shouldForwardProp: (prop) => !['centered', 'responsive'].includes(prop),
})<TitleProps>(({
  level,
  theme,
  centered,
  responsive,
}) => ([
  css`
      &&& {
        margin-top: 0;
        margin-bottom: ${theme.token.paddingXL}px;
        font-weight: 600;
        color: ${theme.token.titleColor};
        letter-spacing: -1px;
        ${theme.presets.wordBreakable};
      }
    `,
  centered && css`
      text-align: center;
    `,
  level === 1 && responsive && css`
      && {
        font-size: min(4.6vmax, 68px);
        @media(max-width: ${breakpoints.LG - 1}px) {
          font-size: max(6vmin, 40px);
          font-weight: 700;
        }
      }
    `,
  level === 2 && responsive && css`
      && {
        font-size: min(3.6vmax, 54px);
        @media(max-width: ${breakpoints.LG - 1}px) {
          font-size: max(4.8vmin, 35px);
        }
      }
    `,
  level === 3 && responsive && css`
      && {
        font-size: min(2.8vmax, 40px);
        @media(max-width: ${breakpoints.LG - 1}px) {
          font-size: max(3.6vmin, 30px);
        }
      }
    `,
]));

export type TitleProps = ComponentProps<typeof Typography.Title> & {
  centered?: boolean
  responsive?: boolean
};

export function Title({
  level = 2,
  responsive = true,
  ...props
}: TitleProps) {
  return (
    <StyledTitle
      level={level}
      responsive={responsive}
      {...props}
    />
  );
}

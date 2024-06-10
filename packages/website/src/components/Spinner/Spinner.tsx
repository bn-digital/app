'use client';

import { Spin, SpinProps } from 'antd';

import { LoadingOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledIndicator = styled(LoadingOutlined)`
  color: ${({ theme }) => theme.token.colorPrimary};
`;

const StyledSpin = styled(Spin, {
  shouldForwardProp: (prop) => prop !== 'centered',
})<{ centered?: boolean }>(({
  centered,
}) => ([
  centered && css`
      position: absolute;
      z-index: 10;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,
]));

export type SpinnerProps = Omit<SpinProps, 'size'> & {
  size?: number
  centered?: boolean
};

export function Spinner({
  size = 24,
  ...props
}: SpinnerProps) {
  return (
    <StyledSpin
      indicator={(
        <StyledIndicator
          style={{ fontSize: size }}
        />
      )}
      spinning
      {...props}
    />
  );
}

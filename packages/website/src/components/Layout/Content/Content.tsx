import { Layout } from 'antd';
import { ComponentProps } from 'react';

import styled from '@emotion/styled';

const StyledContent = styled(Layout.Content)`
  padding-inline: ${({ theme }) => theme.token.paddingXXL}px;
`;

export type ContentProps = ComponentProps<typeof Layout.Content>;

export function Content(props: ContentProps) {
  return (
    <StyledContent
      {...props}
    />
  );
}

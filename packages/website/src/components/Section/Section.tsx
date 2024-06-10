import { Flex, FlexProps, Typography } from 'antd';

import Title, { TitleProps } from '@/components/Title';
import styled from '@emotion/styled';

const Container = styled(Flex)`
  width: 100%;
  flex-direction: column;
  gap: ${({ theme }) => theme.token.padding}px;
  align-items: center;
  justify-content: center;
`;

const Content = styled(Flex)`
  flex-direction: column;
  gap: ${({ theme }) => theme.token.padding}px;
  width: 100%;
`;

export type SectionProps = Partial<FlexProps> & {
  title?: TitleProps['children']
  subtitle?: TitleProps['children']
  titleLevel?: TitleProps['level']
  description?: string
};

export function Section({
  title,
  description,
  subtitle,
  titleLevel,
  children,
  ...props
}: SectionProps) {
  return (
    <Container {...props}>
      <Title level={titleLevel}>
        {title}
      </Title>
      <Title level={5}>
        {subtitle}
      </Title>
      <Typography.Paragraph>
        {description}
      </Typography.Paragraph>
      <Content>
        {children}
      </Content>
    </Container>
  );
}

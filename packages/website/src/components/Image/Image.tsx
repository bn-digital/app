import NextImage, { ImageProps as NextImageProps } from 'next/image';

import styled from '@emotion/styled';

export type ImageProps = NextImageProps;

const StyledImage = styled(NextImage)`
  object-fit: contain;
  height: auto;
  max-width: 100%;
`;

export function Image(props: ImageProps) {
  return (
    <StyledImage
      {...props}
    />
  );
}

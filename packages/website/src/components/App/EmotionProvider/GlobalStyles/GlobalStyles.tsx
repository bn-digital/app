import { theme } from 'antd';

import { css, Global } from '@emotion/react';

export function GlobalStyles() {
  const { token } = theme.useToken();

  return (
    <Global
      styles={[
        css({
          '*': {
            boxSizing: 'border-box',
            padding: 0,
            margin: 0,
          },
          body: {
            maxWidth: '100vw',
            color: token.colorText,
            background: token.colorBgLayout,
            height: '100%',
          },
          html: {
            maxWidth: '100vw',
            height: '100%',
          },
        }),
      ]}
    />
  );
}

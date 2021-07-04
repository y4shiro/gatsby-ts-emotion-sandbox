import React from 'react';
import normalizeCss from 'emotion-normalize';
import { Global, css } from '@emotion/react';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${normalizeCss}
        `}
      ></Global>
      {children}
    </>
  );
};

export default Layout;

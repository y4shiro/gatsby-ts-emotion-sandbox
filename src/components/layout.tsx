import React from 'react';
import normalizeCss from 'emotion-normalize';
import { Global, css } from '@emotion/react';

const globalStyles = css`
  * {
    color: lightblue;
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${normalizeCss}
          ${globalStyles}
        `}
      ></Global>
      {children}
    </>
  );
};

export default Layout;

import React from 'react';
import { Global, css } from '@emotion/react';

const globalStyles = css`
  * {
    color: lightblue;
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles}></Global>
      {children}
    </>
  );
};

export default Layout;

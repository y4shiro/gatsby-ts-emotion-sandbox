import React from 'react';
import { css } from '@emotion/react';

const Footer: React.FC = () => {
  return (
    <footer css={footer}>
      <p className="text">&copy; 2021 y4shiro</p>
    </footer>
  );
};

const footer = css`
  width: 100%;
  padding: 30px 0;
  background-color: #333;
  text-align: center;

  .text {
    color: #eee;
  }
`;

export default Footer;

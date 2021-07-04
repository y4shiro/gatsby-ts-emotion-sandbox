import React from 'react';
import { css } from '@emotion/react';

const Header: React.FC = () => {
  return (
    <header css={header}>
      <h1>タイトルロゴ</h1>
      <nav>
        <ul css={menu}>
          <li>
            <a href="#">メニュー</a>
          </li>
          <li>
            <a href="#">メニュー</a>
          </li>
          <li>
            <a href="#">メニュー</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  background-color: #222;
  color: white;
`;

const menu = css`
  display: flex;
  list-style: none;

  li > a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 16px;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default Header;

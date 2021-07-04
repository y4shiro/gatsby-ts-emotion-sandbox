import * as React from 'react';
import { css } from '@emotion/react';

const header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  background-color: #222;
  color: white;
`;

const IndexPage = () => {
  return (
    <>
      <header css={header}>
        <h1>タイトルロゴ</h1>
        <nav>
          <ul>
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
    </>
  );
};

export default IndexPage;

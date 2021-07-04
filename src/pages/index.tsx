import * as React from 'react';
import { Global, css } from '@emotion/react';
import Layout from '../components/layout';

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
    <Layout>
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
    </Layout>
  );
};

export default IndexPage;

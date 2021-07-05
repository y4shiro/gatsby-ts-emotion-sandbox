import React from 'react';
import { css } from '@emotion/react';
import { StaticImage } from 'gatsby-plugin-image';

const MainVisual: React.FC = () => {
  return (
    <section css={mainVisual}>
      <StaticImage className="image" src="../images/mbp.jpg" alt="mainvisual" />
    </section>
  );
};

const mainVisual = css`
  margin-bottom: 80px;

  .image {
    width: 100%;
  }
`;

export default MainVisual;

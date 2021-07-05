import React from 'react';
import { css } from '@emotion/react';

const About: React.FC = () => {
  return (
    <section css={content}>
      <h1 className="title">About</h1>
      <p>
        　あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
        　またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。
      </p>
    </section>
  );
};

const content = css`
  max-width: 960px;
  width: 80vw;
  margin: 0 auto 80px;

  .title {
    text-align: center;
  }
`;

export default About;

# Gatsby ts + Emotion sandbox

TypeScript + Emotion を導入、スタイルは css Prop に String Styles を渡す方法を選択しました。  
https://emotion.sh/docs/css-prop#string-styles

## Netlify にデプロイ

https://flamboyant-roentgen-8c4594.netlify.app/

GitHub / GitLab 等と連携するだけでデプロイ可能だが、  
Netlify 側の環境変数で Node.js のバージョンを指定する必要があります。  
今回は下記の環境変数を設定しました。

```
key: NODE_VERSION
value: v14.15.1
```

## Gatsby で CSS Modules と Emotion を両方試した際の気付き

間違いや疑問点などあればご指摘いただけると幸いです。

### 環境構築時

CSS Modules は Gatsby で最初からサポートされているので、新たなパッケージの導入などが不要。  
Emotion は最初からサポートされているわけではないが、Gatsby CLI でプロジェクトを作成する際にインストールするか尋ねられるので導入は簡単です。

TS の型定義に関しては、CSS Modules は自前で用意するか npm のパッケージ or Gatsby Plugin をインストールする必要がありました。  
対して Emotion はデフォで用意されているので楽でした。

### CSS-in-JS の書き味

私は Vue.js からフロントエンドに足を踏み入れたので、Vue.js の SFC / ScopedCSS に近い印象を受けました。  
Vue.js から React.js へ移行する方は、CSS-in-JS が使えるライブラリを選ぶと移行しやすいかも。

### Emotion の記法に関して

今回は css Prop に String Styles を渡す方法を選択した。
理由は 2 つあり、

1. Styled Components よりもコードが読みやすい
2. 通常の CSS 記法や SCSS のような記法がそのまま使える

1 に関しては、以前 Material-UI を使用した際に自分が作成したコンポーネントと Material-UI のコンポーネントの区別がつきにくく、コードが読みにくかった経験に起因します。

この件に関しては他にも言及している方がいらっしゃるので下記リンクを参照。

[レシピサービスのフロントエンドに CSS in JS を採用した話 - クックパッド開発者ブログ](https://techlife.cookpad.com/entry/2021/03/15/090000)

> パスカルケースの JSX タグを見たときに、それが「機能を持つコンポーネント」なのか、もしくは「スタイルが当てられたコンポーネント」なのか、ひと目で判断しにくいです。この理由から styled-components の記法は不採用となりました。

2 に関しては Object Styles との比較になりますが、Object Styles の方は Lower camel case で記述する必要があり、既存の CSS を移植する場合は書き換えやコンバートが必要でした。  
String Styles は通常の CSS 記法と同様なので、移植や書き換えも容易でした。

また、SCSS のような nest 記法が使えるのも魅力的です。

```jsx
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const color = 'darkgreen';

render(
  <div
    css={css`
      background-color: hotpink;
      &:hover {
        color: ${color};
      }
    `}
  >
    This has a hotpink background.
  </div>
);
```

nest 記法は Object Styles でも使用できますが、nest するセレクタをセミコロンで囲う必要があったりと記法が直感的でない印象を受けました。

```jsx
/** @jsx jsx */
import { jsx } from '@emotion/react';

render(
  <div
    css={{
      backgroundColor: 'hotpink',
      '&:hover': {
        color: 'lightgreen',
      },
    }}
  >
    This has a hotpink background.
  </div>
);
```

### CSS Modules が css-loader で deprecated となっている

小規模なら CSS Modules を使っても問題無いのでは? と思っていたのですが、掲題の通り今後 Webpack の css-loader でのサポートが怪しい模様です。  
https://github.com/webpack-contrib/css-loader/issues/1050

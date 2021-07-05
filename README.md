# Gatsby ts + Emotion sandbox

TypeScript + Emotion を導入、スタイルは css Prop に String Object を渡す方法を選択した。  
https://emotion.sh/docs/css-prop#string-styles

## Netlify にデプロイ

GitHub / GitLab 等と連携するだけでデプロイ可能だが、Netlify 側の環境変数で Node.js のバージョンを指定する必要がある。  
今回は下記の環境変数を設定した。

```
key: NODE_VERSION
value: v14.15.1
```

## CSS Modules と Emotion を両方試した際の気付き

間違い等あればご指摘いただけると幸いです。
今回は特に記法まわりの用語が曖昧

### 環境構築時

CSS Modules は Gatsby で最初からサポートされているので、新たなパッケージの導入などが不要。
Emotion は最初からサポートされているわけではないが、Gatsby CLI でプロジェクトを作成する際にインストールするか尋ねられるので導入は簡単。

TS の型定義に関しては、CSS Modules は自前で用意するか npm のパッケージ or Gatsby Plugin をインストールする必要があった。
対して Emotion はデフォで用意されているので楽でした。

### Emotion の記法に関して

今回は css Prop に String Object を渡す方法を選択した。
理由は 2 つあり、

1. Styled Components よりもコードが見やすい
2. バニラ CSS の書き方がそのまま使える

1 に関しては、以前 Material-UI を使用していた際に
この件に関しては他にも言及している方がいらっしゃったので記事リンクを張っておきます。

[レシピサービスのフロントエンドに CSS in JS を採用した話 - クックパッド開発者ブログ]
(https://techlife.cookpad.com/entry/2021/03/15/090000)

> パスカルケースの JSX タグを見たときに、それが「機能を持つコンポーネント」なのか、もしくは「スタイルが当てられたコンポーネント」なのか、ひと目で判断しにくいです。この理由から styled-components の記法は不採用となりました。

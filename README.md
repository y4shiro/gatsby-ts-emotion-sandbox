# Gatsby ts + Emotion sandbox

TypeScript + Emotion を導入、css Props にスタイルを当て、String Object で記述する。  
https://emotion.sh/docs/css-prop#string-styles

## Netlify にデプロイ

GitHub / GitLab 等と連携するだけでデプロイ可能だが、Netlify 側の環境変数で Node.js のバージョンを指定する必要がある。  
今回は下記の環境変数を設定した。

```
key: NODE_VERSION
value: v14.15.1
```

## CSS Modules と Emotion で両方試した比較や気付き

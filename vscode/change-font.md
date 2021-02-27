## Change Font
プログラミング用フォントMyricaを設定してみる。

### コードを書く時
1. ファイル < ユーザー設定 < 設定
2. `Editor: Font Family`で検索
3. 以下のように設定
```
'Myrica M', Consolas, 'Courier New', monospace
```
4. (Editor: Render Whitespaceで検索し、`none`と設定？)
[ホワイトスペースを表示していると半角スペースでも全角スペースで表示されてしまう？](https://wonwon-eater.com/vscode-font-myrica/)

### mdファイルのプレビュー時
1. ファイル < ユーザー設定 < 設定
2. `Markdown Preview: Font Family`で検索
3. 以下のように設定
```
'Myrica M', -apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', 'HelveticaNeue-Light', 'Ubuntu', 'Droid Sans', sans-serif
```

### 設定後は、vscodeをリロードする。
1. ctrl + p
2. `>Reload Window`
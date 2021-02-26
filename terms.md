## Terms
---
### case sensitive
```
大文字小文字を区別
⇔ case insensitive
```

### whitespaces
```
leading whitespaces: 先頭の空白
trailing whitespaces: 末尾の（末尾に後続している）空白
duplicate whitespaces
```
### context
```
利用者の意図や状況、環境などの総体を表したり、同じ処理や記述でも状況に応じて動作などが異なる場合に、その選択基準となる判断材料や条件などを指す場合が多い。

例えば、
function shopping($item: string){
    addCart($item);
    pos($item);
    payment($item);
    intoBag($item);
}
$itemが何であっても処理は変わらない。ここでいう$itemがcontextみたいなもの。
```
### state
```
例えば、
function shopping($item: string){
    if ($item === 'banana') {
        ***
    }
    if ($item === 'apple') {
        ***
    }
}
$itemによって処理が変わる。ここでいう$itemがstateみたいなもの。
```
[qiita: context?state?](https://qiita.com/dojyorin/items/0bd3ef167991cfc703b1)

### REPL
```
Read Eval Print Loop。対話型実行環境。
Read - キーボードから打ち込まれた命令を読み込む。
Eval - 評価・実行。
Print - 結果を表示する。
Loop - それを繰り返す。
ターミナルでの実行環境みたいな感じ。
```
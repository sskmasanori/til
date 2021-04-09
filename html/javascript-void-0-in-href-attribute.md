## Javascript Void 0 In href Attribute
2021.04.09

```
<a href="javascript:void(0)" id="***" class="***">link</a>
```

以下のようなジレンマを満たすための書き方。
- aタグを利用して、クリック可能であるとユーザーに認識させたい。
- hrefを設定しないとaタグは、リンクと見なさないことがある。
- hrefを設定すると、JavaScriptが動く前にリンク先に遷移する。
- hrefを設定したいけど、リンク先に飛ばさず、JavaScriptを動かしたい。

### void()
常に`undefined`(未定義であること示す値)を返すJavaScriptの演算子。

[TECH PLAY: javascript void(0)の意味](https://techplay.jp/column/559)<br>
[Tech Academy: javascript void(0)の使い方](https://techacademy.jp/magazine/31321)<br>
[MDN: undefined](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/undefined)<br>
[MDN: void演算子](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/void)

NOTE: 現在ではあまり推奨されていない。

- リンク先が`javascript:void(0);`と表示される。
- CSSのcursorを利用すればいい。
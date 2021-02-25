## Annotation Comments
---

```
TODO: 後で追加、修正する。
```
```
FIXME: 修正が必要。
```
```
OPTIMIZE: 無駄が多い。どこかにまとめたいなど。
```
```
NOTE: 理由。なぜこうしたかなど。
```
[qiita: アノテーションコメントまとめ](https://qiita.com/taka-kawa/items/673716d77795c937d422)

vscodeの拡張機能 Better Commentsを入れると、コメント部分がハイライトされる。

vscodeのsetting.json
```
"better-comments.tags": [
        {
            "tag": "TODO",
            "color": "#FF8C00",
            "strikethrough": false,
            "underline": false,
            "backgroundColor": "transparent",
            "bold": false,
            "italic": false
        },
    ]
```

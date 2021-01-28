## content negotiation with header
---
|  レクエストヘッダー  |  レスポンスヘッダー  |  ネゴシエーション対象  |
| ---- | ---- | ---- |
|  Accept  |  Content-Type  |  MINEタイプ  |
|  Accept-Language  |  Content-Language  |  表示文字  |
|  ~~Accept-Charset~~  |  ~~Content-Type~~  |  ~~文字のキャラクターセット~~  |
|  Accept-Encoding  |  Content-Encoding  |  ボディ圧縮  |
<br>
content-length : （圧縮後の）ボディサイズ
<br>
<br>

```
Accept : text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,

qは優先順位(0 - 1)

text/html : 1

application/xhtml+xml : 1

application/xml : 0.9

image/avif : 1

image/webp : 1

image/apng : 1

*/* : 0.8
```
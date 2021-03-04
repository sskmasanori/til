## Check Tags
2021.02.25

注釈付き(annotated)タグを検索。
```
$ git describe
```
軽量(lightweight)タグも検索対象に。
```
$ git describe --tags
```

```
// 1.0.2-32-g5ko90h2

g5ko90h2: g(git) + {最新コミットのはハッシュ値の先頭値}
1.0.2: 最新コミットから見た直近のタグ名
32: 最新コミットが1.0.2のタグができてから32番目
```
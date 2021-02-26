## Describe Tags
---
```
$ git describe
$ git describe --tags
```
 - git describeが対象とするタグは、注釈付き(annotated)タグ。
 - 対象に軽量(lightweight)タグを加えたい場合、--tagsオプション追加。
```
// 1.0.2-32-g5ko90h2

g5ko90h2: g(git) + {最新コミットのはハッシュ値の先頭値}
1.0.2: 最新コミットから見た直近のタグ名
32: 最新コミットが1.0.2のタグができてから32番目
```
## Semantic Versioning
2021.03.02
```
MAJOR.MINOR.PATCH
```
```
semantic: 意味の
意味を持たせるversioning的な？
```
```
MAJOR: 以前のAPIに対して互換性がない場合は、このバージョンを上げる。

MINOR: 互換性があり、機能の追加をした場合はこのバージョンを上げる。

PATCH: 互換性があり、バグを修正した場合はこのバージョンを上げる。
```

[Semantic Versioning 2.0.0公式](https://semver.org/spec/v2.0.0.html)

> git tag v1.2.3 -m" Release version 1.2.3 " では『v1.2.3』はタグ名であり、<br>
セマンティック バージョンは『1.2.3』

<br>
思ったこと:<br>
パブリックなAPIを宣言すると、公式ドキュメントにあった。他のパッケージなどからAPIで利用される場合は、このバージョン管理を行うことで、APIを利用する側から見てこのパッケージは依存性の観点から扱いやすくなる。もし、他のパッケージなどからAPIで利用されない場合の、このバージョン管理を行う意味とは？そのパッケージの開発者達にとって、自分たちのバージョンがいくつでどんな種類の変更があったのかを共有する？<br>
->もし、外部から使われないようなAPIを持っていないのであれば、やる必要はない。しかし、特定コミットへversionなどのタグを付ける意味はある。例えば、本番環境でtag0.0.4が付いたコミットまで正常に動いていたが、tag0.0.5が付いたコミットまでが反映されたときにバグが確認されたら、0.0.4と0.0.5間のコミットの中にバグがあったと推測できる。
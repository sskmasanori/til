## Add Tag On A Commit
2021.02.25

tagは特定のコミットに付与する。特に指定しない場合は、最新コミットに付与される。

注釈付き(annotated)タグ
```
$ git tag -a {tag name} -m 'message'

-a: annotatedのa?
```

軽量(lightweight)タグ
```
$ git tag {tag name}
```
[git公式: タグ](https://git-scm.com/book/ja/v2/Git-%E3%81%AE%E5%9F%BA%E6%9C%AC-%E3%82%BF%E3%82%B0)
## Project Bye Bye Git
2021.03.04

project directoryごとgit管理下から外す。
git initの際に実は作成されている`.git/`を削除する。
```
(on local project)
$ rm -rf .git/
```
[qiita: git管理をやめる](https://qiita.com/b4b4r07/items/cac4abd9ae66537e2833)
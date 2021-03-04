## Stash Apply Changes
2021.02.28

addしていたものがaddしていない状態で戻る。
```
$ git stash apply stash@{index}
```
addしていたものがaddのまま。
```
$ git stash apply stash@{index} --index
```
退避させた変更を取り込んで、リストから削除する。
```
$ git stash pop stash@{index}
```
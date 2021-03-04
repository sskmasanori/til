## Stash Uncommited Changes
2021.02.28

退避させた変更を取り込んで、リストから削除する。
```
$ git stash pop stash@{index}
```
リストから削除する。
```
$ git stash drop stash@{index}
```
一掃する。
```
$ git stash clear
```
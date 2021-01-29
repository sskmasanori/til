## Save Not Commited Changes
---
```
> git stash
```
```
> git stash save {message}
```
```
> git stash list
```
addしていたものがaddしていない状態で戻る
```
> git stash apply 'stash@{0}'
```
addしていたものがaddのまま
```
> git stash apply 'stash@{0}' --index
```
```
> git stash drop 'stash@{0}'
```
退避させた変更を取り込んで、リストから削除する
```
> git stash pop 'stash@{0}'
```
一掃する
```
> git stash clear
```
## Rename Local Branch
2021.03.01

新しいブランチ名が存在するとエラーに。
```
$ git branch -m {old-branch} {new-branch}
```
もし、変更したいブランチ上にいるなら。
```
$ git branch -m {new-branch}
```
強制上書き。
```
$ git branch -M {new-branch}
```

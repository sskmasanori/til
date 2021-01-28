## content negotiation with header
---
```
> git status
↓
> g st
```
gitについては、windows power shell側で設定。
<br>
<br>
PC全体
```
> git config --system alias.st status
```

ログインユーザー単位
```
> git config --global alias.st status
```

リポジトリ単位
（プロジェクトのあるディレクトリ上で）
```
> git config alias.st status
```

設定一覧
```
> git config --list
> git config --global --list
```
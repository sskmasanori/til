## Set Upstream Branch
2021.01.28

初回push時
```
$ git push -u origin {branch-name}
```
pushしたローカルブランチのUpstramブランチに、新規作成されたリモートブランチがセットされる。<br>

次回コミット時から、
```
$ git push
```
Upstreamブランチの確認方法
```
$ git remote -vv
```
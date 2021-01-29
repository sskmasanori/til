## Set Upstream Branch
---
ローカルブランチfeature/sample-functionからリモートへの初回push時
```
> git push -u origin feature/sample-function
```
ローカルfeature/sample-functionのupstreamブランチはリモートfeature/sample-functionとなる。
次回コミット時、
```
> git push
```
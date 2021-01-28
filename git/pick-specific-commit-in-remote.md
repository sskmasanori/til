## pick up specific commit in remote
---
リモートに存在する特定のコミットを、ローカルのブランチに反映させる。
<br>
<br>
例えば、
リモートブランチfix/sample_testにおけるPRをレビューする。

```
> git fetch
> git checkout fix/sample_test
```

リモートブランチfix/sample_testに新しいコミット(ID : 12345A)が追加された。
<br>
そのコミットのみローカルブランチfix/sample_testに反映させる。

```
> git cherry-pick 12345A
```
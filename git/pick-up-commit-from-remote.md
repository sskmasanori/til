## Pick Up Commit From Remote
2021.01.26

リモートに存在する特定のコミットを、ローカルのブランチに反映させる。
```
$ git cherry-pick {commit-id}
```

利用シーン
```
// 例えば、リモートブランチfix/review-branchにおけるPRをレビューするとして。
$ git fetch
$ git checkout fix/review-branch

// リモートブランチfix/review-branch追加された新しいコミット(12345A)を、ローカルブランチfix/review-branchに反映する。
$ git cherry-pick 12345A
```
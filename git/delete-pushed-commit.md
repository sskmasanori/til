## Delete Pushed Commit
2021.03.04

コミット履歴は残したい
```
$ git revert {commit-id} {commit-id}

$ git push origin {branch-name}
```

残したくない(チームメンバーへの配慮が必要)
```
$ git reset --soft HEAD~{戻りたいコミットまでの数}

$ git push -f origin {branch-name}
```
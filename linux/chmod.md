## Chmod Command
---
ファイルやディレクトリのpermission変更を行う。
```
$ chmod 400 {file} or -r {directory}

change access mode (= permission)
```

```
所有者(に対して) / 所有グループ / その他
4 / 0 / 0
自分にのみread権限がある。
```

```
4 : read
2 : write
1 : execute
0 : no permission
```

```
4+2+1 = 7 : 全権限
```

## Chmod Command
2021.02.16

ファイルやディレクトリのpermission変更を行う。<br>
change access mode (= permission)
```
$ chmod 400 {file-path}
$ chmod 400 -r {directory-path}
```
```
所有者(に対して) / 所有グループ / その他
4 / 0 / 0
-> 自分にのみread権限がある。

所有者: permissionは別として、そのファイルやフォルダを持っている人？
所有グループ: 所有者が属するグループに属する他のユーザーを指す？
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

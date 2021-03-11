## Chage Access Mode
2021.02.16
2021.03.11

ファイルやディレクトリのpermission変更を行う。<br>
change access mode (= permission)

### First Way
```
$ chmod 400 {file-path}
$ chmod 400 -R {directory-path}
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

### Second Way
こっちの方がパッと見て分かりやすい気がする。権限のタイプの頭文字だし。
```
chmod a+w {file-path}
chmod -R a+w {directory-path}
chmod -R a+w {directory-path} {directory-path}

R: r(read権限)と区別するためかな？
```
```
u: 所有者の権限
g: グループの権限
o: その他ユーザーの権限
a: すべての権限
```
```
+: 後述の権限を追加
-: 後述の権限を削除
=: 後述の権限にする
```
```
r: read権限
w: write権限
x: execute権限
```
```
a+w: すべてのユーザー(a)にwrite権限(w)を加える(+)。
o-r: その他ユーザー(o)からread権限()を剥奪する(-)。
```
### Use Case
```
(in Dockerfile)
RUN chmod a+w storage/
```
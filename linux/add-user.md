## Add User

ユーザーの追加
```
useradd [option] {user name}
```
-m: --create-home。ユーザーのホームディレクトリが存在しない場合作成。<br>
-s: --shell。 ユーザーのログインシェル（フルパスで指定）を指定。<br>
-u: --iud。 作成するユーザーのユーザーIDを指定。

[参考: Linuxコマンド useradd](https://www.atmarkit.co.jp/ait/articles/1811/02/news035.html)

### Dockerfile
```
RUN useradd -m -s /bin/bash -u 1000 {user name}
```
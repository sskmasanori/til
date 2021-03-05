## Add User
2021.03.02

```
useradd -m -s /bin/bash -u 1000 {user-name}
```
-m:<br>
--create-home。ユーザーのホームディレクトリが存在しない場合作成。<br>

-s:<br>
--shell。 ユーザーのログインシェル（フルパスで指定）を指定。<br>

-u:<br>
--iud。 作成するユーザーのユーザーIDを指定。

[atmarkit: useraddコマンド](https://www.atmarkit.co.jp/ait/articles/1811/02/news035.html)

### Use Case
```
(Dockerfile)
RUN useradd -m -s /bin/bash -u 1000 {user name}
```
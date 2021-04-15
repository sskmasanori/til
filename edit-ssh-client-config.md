## Edit SSH Client Config
2021.04.15

例えば、EC2インスタンスにSSH接続する際に、以下のコマンドを打つが
```
ssh -i {path-to-file-written-secret-access-key-or-pem-file} ec2-user@{ip-address-of-the-instance} -p {port-number}
```

`~/.ssh/config`ファイルの設定を行えば、記述量の少ないコマンドでSSH接続できる。
```
ssh sample
```

### Procedure
1.ホームディレクトリ配下の`.ssh`ディレクトリへ。
```
$ cd ~/.ssh
```
2.sshクライアント設定ファイルである`.ssh/config`を編集する。
```
$ vim config
```
~/.ssh/config
```
Host sample
  HostName {ip-address-of-the-instance}
  User ec2-user
  IdentityFile {path-to-file-written-secret-access-key-or-pem-file}
  Port {port-number}
```
3.秘密鍵を新規ファイルに置くなら
```
$ mkdir aws
$ chmod 700 aws
$ cd aws
$ touch sample
$ chmod 600 sample
```
4.秘密鍵を置く

~/.ssh/aws/sample
```
-----BEGIN RSA PRIVATE KEY-----
***
-----END RSA PRIVATE KEY-----
```

### Use
githubへのSSH接続の際にも利用できる。

[Qiita: .ssh/configでSSH接続の管理](https://qiita.com/0084ken/items/2e4e9ae44ec5e01328f1)<br>

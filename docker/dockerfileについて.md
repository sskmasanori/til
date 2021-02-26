## Install Composer


Dockerfileを指定してbuildする。
```
infraフォルダと同じ階層にいるとして。
docker build -f ./infra/app/Dockerfile {build context}
docker build -f ./infra/app/Dockerfile ./infra/app
```

これだと恐らく最新版を取ってくる
```
RUN curl -sS https://getcomposer.org/installer | php && \
    mv composer.phar /usr/local/bin/composer
```
composer ver2以上だと、hirak/prestissimoは動かない。どゆことか？
```
RUN composer global require hirak/prestissimo
```
[参考](https://qiita.com/lighthawk/items/dc9ba08206b02ffca8a0)


パスの書き方
```
docker-compose.ymlとdockerフォルダは同じ階層
app:
    build:
        context: ./docker/app
        context: docker/app
```

ユーザーの追加 [参考](https://www.atmarkit.co.jp/ait/articles/1811/02/news035.html)
```
RUN useradd -m -s /bin/bash -u 1000 {user name}

useradd [option] {user name}
-m : --create-home ユーザーのホームディレクトリが存在しない場合、作成する
-s : --shell ユーザーのログインシェル（フルパスで指定）を指定する
-u : --iud 作成するユーザーのユーザーIDを指定する
```

Dockerfile.localとDockerfile.remoteでCOPY時のパスの書き方が違う。どうして？
build contextが関係している？

```
RUN cp /etc/localtime /etc/localtime.org && \
    ln -sf  /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

cp /etc/localtime /etc/localtime.org : nginxコンテナ内の/etc/localtimeを/etc/localtime.orgとしてコピー。cpの第一引数はホスト側のディレクトリやファイルを指定するものだと思っていたけど

ln -sf  /usr/share/zoneinfo/Asia/Tokyo /etc/localtime : ln -s シンボリックリンクを作成する。-fは、リンクファイルと同じ名前のファイルがあっても強制的に上書き。シンボリックとは？windowsでいうショートカット？みたいなもの。UNIX系における、参照したいファイルへの中継役。
In -s ファイル名 リンク名
```

 - nginx
 - ~~シンボリックリンク~~
 - ~~アノテーションコメント~~
 - ~~takeda stack~~
 - ~~composer version指定~~
 - コンテキストとは
 - dockerにcomposerをインストールするベストプラクティス
 - GRPC : smart-managementのgrpc使ってた firebaseとかチャットとかって行ってた
 - ~~ラウンドロビン~~
 - ~~Blue Green deploy~~
 - ~~canary release~~

```
php -r "{php command}"
```
ファイルを複製する。 [php公式: copy](https://www.php.net/manual/ja/function.copy.php)
```
copy ( string $source , string $dest , resource $context = ? ) : bool
dest: destnination。コピー後のファイル名。
```

ファイルを削除する。 [php公式: unlink](https://www.php.net/manual/ja/function.unlink.php)
```
unlink ( string $filename , resource $context = ? ) : bool
contextとは？
```
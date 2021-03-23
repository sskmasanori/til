## Artisan Package Discover
2021.03.24

Laravel5.6

[CONSOLE DOT LOG: Laravel5.6のartisanコマンド集](https://blog.capilano-fw.com/?p=768#packagediscover)

```
php artisan package:discover
```

bootstrap/cache/packages.phpを作成し直す。
composerで管理されているpackage情報のキャッシュを再構築する。

### Use Case
sentry-laravelをプロジェクトにインストール後、
```
$ docker-compose exec app php artisan sentry:publish --dsn=https://***

There are no commands defined in the "sentry" namespace.
```
原因は、packageのキャッシュが残っていて最新ではなく、Sentry-laravelが見つからない・使えないということだった？

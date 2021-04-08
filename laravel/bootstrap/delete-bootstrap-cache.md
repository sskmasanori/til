## Dlete Bootstrap Cache
2021.04.08

Laravel:5.5.50

```
rm bootstrap/cache/*.php
```

### Case
未マージの別ブランチでlaravel-sentryを導入していた。
別の作業ブランチにてdocker開発環境を立ち上げ、php artisanコマンドをapplication containerに渡す。
```
Class 'Sentry\Laravel\ServiceProvider' not found
```
laravel-sentryはこのブランチでは、インストールしてないけどな。<br>
`bootstrap\cache\packages.php`に
```
  array (
    'providers' =>
    array (
      0 => 'Sentry\\Laravel\\ServiceProvider',
    ),
  ),
```
が残っていたのが原因だった。

[Laravel5でサービスプロバイダが見つからなくなる場合](https://s8a.jp/laravel-error-service-provider-not-found)
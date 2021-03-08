## Root Package
2021.03.08
```
composerでは、composer.jsonがあるディレクトリ以下をpacakgeと呼ぶ。自分のプロジェクトをroot packageと呼ぶ。composerにとって、自分のプロジェクトもパッケージである。
```
root packageの情報を見るには、
```
(on your project)
$ composer show -s
or
$ composer show -self
```
```
name     : laravel/laravel
descrip. : The Laravel Framework.
keywords : framework, laravel
versions : * dev-feature/docker-file-for-production
type     : project
license  : MIT License (MIT) (OSI approved) https://spdx.org/licenses/MIT.html#licenseText
homepage :
source   : []  3e81332d84a4f12ac416308a22f27ed51f99608c
dist     : []  3e81332d84a4f12ac416308a22f27ed51f99608c
path     :
names    : laravel/laravel

autoload
psr-4
App\ => app/
Database\Factories\ => database/factories/
Database\Seeders\ => database/seeders/

requires
php 7.4.x
ext-json *
barryvdh/laravel-dompdf ^0.8.6
doctrine/dbal ^2.12.1
fideloper/proxy ^4.4
fruitcake/laravel-cors ^2.0
guzzlehttp/guzzle ^7.2
laravel/framework ^8.14.0
laravel/tinker ^2.0
laravel/ui ^3.1
league/flysystem-aws-s3-v3 ^1.0
phpoffice/phpspreadsheet ^1.15
squizlabs/php_codesniffer ^3.5

requires (dev)
deployer/deployer ^6.8
facade/ignition ^2.5
fzaninotto/faker ^1.9.1
mockery/mockery ^1.4.2
nunomaduro/collision ^5.1
pestphp/pest ^0.3.12
phpunit/phpunit ^9.4
```
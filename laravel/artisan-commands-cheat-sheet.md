## Cheat Commands
2021.03.17

Laravel: -

コマンドリスト確認
```
php artisan list
```

ヘルプを表示
```
php artisan make:model -h
```

migrationファイルの作成
```
php artisan make:migration create_samples_table --create=samples
```

modelファイルの作成
```
php artisan make:model Sample

php artisan make:model Models/Sample
```

seederの作成
```
php artisan make:seeder SampleTableSeeder
```

factoryの作成
```
php artisan make:factory SampleFactory
```

controllerの作成
```
php artisan make:controller SampleController
```

requestクラスの作成
```
php artisan make:request SampleRequest
```

ルーティングのリスト表示
```
php artisan route:list
```

まとめて作る
```
// with migration
php artisan make:model Sample -m

// with factroy Laravel:8.x?
php artisan make:model Sample -f

// with seeder Laravel:8.x?
php artisan make:model Sample -s

// with controller Laravel:8.x?
php artisan make:model Sample -c

// with all Laravel:8.x?
php artisan make:model Sample -mfsc
```

[Laravel8.x公式: Eloquentの準備](https://readouble.com/laravel/8.x/ja/eloquent.html)

TODO: 各コマンドについて、Laravelの対応version更新していく。
## Make ID Column Methods
2021.04.09

laravel:8.x

```
// bigIncrements, 'id'column
$table->id()
```
```
// bigIncrements, UNSIGNED BIGINT
$table->bigIncrements('id');
```
```
// increments, UNSIGNED INTEGER(0と正の数)
$table->increments('id')
```
```
// increments, integer
$table->integer('id')->autoIncrement()
```

[Laravel8.x公式: マイグレーション](https://readouble.com/laravel/8.x/ja/migrations.html)

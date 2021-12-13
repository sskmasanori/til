# Array Slice Result List

2021.12.13

php4,5,7,8

[array_slice php official document](https://www.php.net/manual/ja/function.array-slice.php)

```php
array_slice(
    array $array,
    int $offset,
    ?int $length = null,
    bool $preserve_keys = false
): array
```

## Result List

```
$array = array(1,2,3,4,5);
```

```php
// [ 0 => 1, 1 => 2, 2 => 3, 3 => 4, 4 => 5]
array_slice($array, 0)
```

```php
// [ 0 => 3, 1 => 4, 2 => 5]
array_slice($array, 2)
```

```php
// [ 0 => 4, 1 => 5]
array_slice($array, -2)
```

```php
// [ 0 => 3 ]
array_slice($array, 2, 1)
```

```php
// [ 0 => 4 ]
array_slice($array, -2, 1)
```

```php
// [ 2 => 3, 3 => 4, 4 => 5]
array_slice($array, 2, 3, true)
```
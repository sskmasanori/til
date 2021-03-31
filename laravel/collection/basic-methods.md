## Basic Methods
2021.03.30

laravel:6.x

### キーをリセット
```
// collect([1,2])
collect([2 => 1, 4 => 2])->values();
```

### 重複を排除
```
// collect([0 => 1, 1 => 2, 3 => 3])。歯抜けになる。
collect([1,2,2,3])->unique();

// collect([1,2,3])。歯抜け防止。
collect([1,2,2,3])->unique()->values();
```

### 指定キーのコレクション
```
// collect(['taro', 'hanako'])
collect([
    ['id' => 1, 'name' => 'taro'],
    ['id' => 2, 'name' => 'hanako'],
])->pluck('name');
```

[Laravel6.x公式: コレクション](https://readouble.com/laravel/6.x/ja/collections.html)
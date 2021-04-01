## Difference Between assertSame and assertEquals
2021.04.01

PHPUnit:9

### assertSame
phpで言うところの、`===`による比較に該当する。基本的にはこちらを使用し、厳密な比較を行う。
```
// 2つの変数が同じ型・値でない場合に、$messageを表示する。
assertSame(mixed $expected, mixed $actual[, string $message = '']);
```

### assertEquals
phpで言うところの、`==`による比較に該当する。
```
// 2つの変数が等しくない場合に、$messageを表示する。
assertEquals(mixed $expected, mixed $actual[, string $message = ''])
```

[PHPUnit公式: assertEquals](https://phpunit.readthedocs.io/ja/latest/assertions.html#assertsame)<br>
[PHPUnit公式: assertEquals](https://phpunit.readthedocs.io/ja/latest/assertions.html#assertequals)

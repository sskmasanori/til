## Prepare For Unit Test
2021.03.09

[PHPUnit公式: テストの書き方](https://phpunit.readthedocs.io/ja/latest/writing-tests-for-phpunit.html)

1. PHPUnitをインストール。*1
2. `Sample`クラスのテストは、`SampleTest`クラスに記述。
3. `SampleTest`クラスのファイル名は、`SampleTest.php`。*2
4. `SampleTest`クラスはほとんどの場合、`PHPUnit\Framework\TestCase`を継承する。[DB接続などLaravelの機能を利用するテストを作成する場合は、それ用に拡張されたTestCaseを使う。](../../../../laravel/call-to-a-member-function-connection-on-null-in-unit-test.md)

*1 インストールの仕方:
```
$ composer require --dev phpunit/phpunit
$ composer require --dev phpunit/phpunit:9.5.2
$ composer require --dev phpunit/phpunit:~9.0
```
```
(in composer.json)
"require-dev": {
    "phpunit/phpunit": "9.5.2"
},

"require-dev": {
    "phpunit/phpunit": "~9.0"
},

and then
$ composer update
```

*2 ファイル名とクラス名:<br>
同じにしないとテストが動かないようだった。
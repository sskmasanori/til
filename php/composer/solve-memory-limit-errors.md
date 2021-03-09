## Solve Memory Limit Errors
2021.03.09

```
(when run composer update)
$ COMPOSER_MEMORY_LIMIT=-1 composer update
```

現在の`memory_limit`を取得する。
```
php -r "echo ini_get('memory_limit').PHP_EOL;"
```
[composer公式: Memory limit errors](https://getcomposer.org/doc/articles/troubleshooting.md#memory-limit-errors)
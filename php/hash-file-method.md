## Hash File Method
---
 ファイルのハッシュ値を取得。

 [php公式: hash_file](https://www.php.net/manual/ja/function.hash-file.php)
```
hash_file ( string $algo , string $filename , bool $binary = false ) : string|false
algo: ハッシュアルゴリズム
binary: よくわからんかったので下記で検証
```
```
<?php
/* ハッシュ値を計算するファイルを作成 */
file_put_contents('example.txt', 'The quick brown fox jumped over the lazy dog.');

echo hash_file('sha384', 'example.txt');
// b7273c05ad141ccb6696b3659e57137c453b6d64690fa7d5cf96368df4a7138703a8c6ead31727b487b3628746510391


echo hash_file('sha384', 'example.txt', true);
// '<feW|E;mdiϖ6'bFQ
?>
```
## Declare Strict Types Directive
2021.04.01

PHP:4,5,7,8

厳密な型チェックを行う。
```
declare(strict_types=1);
```

```
<?php
declare(strict_types=1);

function sum(int $first, int $second): int
{
    return $first + $second;
}

// int(3)
var_dump(sum(1,2));

// PHP Fatal error:  Uncaught TypeError: Argument 1 passed to sum() must be of the type int, float given...
var_dump(sum(1.5,2.5));
```

NOTE:<br>
① 唯一の例外は、int の値が float 型の宣言に渡せること。
```
<?php
declare(strict_types=1);

function sum(float $first, float $second) {
    return $first + $second;
}

// float(3)
var_dump(sum(1,2));
```
② declareが書かれたファイルのコードに対してのみ影響する。<br>
[Qiita: declare(strict_types=1)の効力範囲](https://qiita.com/Hiraku/items/734f0666ab3d34c52efa)

③ コンパイラーへ渡すディレクティブの処理は、ファイルをコンパイルする際に行われる。directiveの値として渡せるのはリテラルのみ。変数や定数は渡せない。
```
<?php
// OK
declare(strict_type=1);

// NG。プログラムが実行されないとSTRICT_TYPEの中身が分からない。
const STRICT_TYPE = 1;
declare(STRICT_TYPE);
```

[PHP公式: 型宣言](https://www.php.net/manual/ja/language.types.declarations.php#language.types.declarations.strict)<br>
[PHP公式: declare](https://www.php.net/manual/ja/control-structures.declare.php)<br>

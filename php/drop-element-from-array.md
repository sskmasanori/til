## Drop Element From Array
2021.03.29

PHP:7.4.10

```
// 以下の配列から2を削除したい。
$array = [1,2,3];

// 削除対象のインデックスを探す。
$targetIndex = array_search(2, $array);
```

### Unset
```
// $array = [0 => 1, 2 => 3]
unset($array[$targetIndex]);

// unsetは値を返さない。このコードでエラーになる。
$droppedElements = unset($array[$targetIndex]);
```
キーの歯抜けを防ぐ場合。
```
// $array = [0 => 1, 1 => 3]
// array_valuesで、配列から全ての値を取り出し、数値添字をつけた配列を返す。
$array = array_values($array);
```

### Splice
```
// $array = [0 => 1, 1 => 3]
array_splice($array, $targetIndex, 1);

// 配列を返す。$droppedElements = [0 => 2]
$droppedElements = array_splice($array, $targetIndex, 1);
```

[PHP公式: unset](https://www.php.net/manual/ja/function.unset.php)<br>
[PHP公式: array_splice](https://www.php.net/manual/ja/function.array-splice.php)

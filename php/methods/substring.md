## Substring
2021.02.23

```
$sample = "abcde";
echo substr($sample,1,3); // bcd
```
日本語を切り取り。
```
$sample = "あいうえお";
echo mb_substr($sample,0,2); // あい
```
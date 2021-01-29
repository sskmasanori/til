## Elements Iteration
---
```
const array = [1,2,3,4];

$.each(array, function(index, value) {
    console.log(index + ' : ' + value);
})
```
```
return false;
```
で抜けれる。false以外の返り値は無視。

[参照](http://semooh.jp/jquery/api/utilities/jQuery.each/object%2C+callback/)
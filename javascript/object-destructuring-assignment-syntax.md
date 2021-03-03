## Object Destructuring Assignment Syntax
2021.03.03
```
const {a, b} = {a: 0, b: 1};
console.log(a, b);
// 0 1
```
```
const {a, b, c} = {a: 0, b: 1, d: 2};
console.log(a, b, c);
// 0 1 undifined
```
```
const {a, b, c = 3} = {a: 0, b: 1, d: 2};
console.log(a, b, c);
// 0 1 3
```
残余プロパティ(Rest Properties)。オブジェクトにまとまる。
```
const {a, b, ...c} = {a: 0, b: 1, c: 2, d: 3};
console.log(a, b, c);
// 0 1 {c: 2, d: 3}
```
[qiita: オブジェクトの分割代入](https://qiita.com/FumioNonaka/items/58358a29850afd7a0f37#%E5%88%86%E5%89%B2%E4%BB%A3%E5%85%A5%E3%82%92%E4%BD%BF%E3%81%86)
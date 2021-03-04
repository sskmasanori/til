## Object Spread Syntax
2021.03.03<br>
ECMAScript 2018
```
{...object}
```
```
const object1 = {first: 'val1', second: 'val2'};
const object2 = {...object1};

console.log(object2);
// {first: 'val1', second: 'val2'}
```
```
const object1 = {first: 'val1', second: 'val2'};
const object2 = {...object1, third: 'val3'};

console.log(object2);
// {first: 'val1', second: 'val2', third: 'val3'}
```

Caution!<br>
{third: 'val3', forth: 'val4'}のように値がオブジェクトの時は、参照が渡される。
```
const object1 = {first: 'val1', second: {third: 'val3', forth: 'val4'}};
const object2 = {...object1};

object1.second.forth = 'val5';

console.log(object2);
// {first: 'val1', second: {third: 'val3', forth: 'val5'}}

object2.second.forth = 'val4';

console.log(object1);
// {first: 'val1', second: {third: 'val3', forth: 'val4'}}
```
[qiita: オブジェクトのスプレッド構文を使う](https://qiita.com/FumioNonaka/items/58358a29850afd7a0f37#%E3%82%B9%E3%83%97%E3%83%AC%E3%83%83%E3%83%89%E6%A7%8B%E6%96%87%E3%82%92%E4%BD%BF%E3%81%86)
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

Caution!
```
{third: 'val3', forth: 'val4'}のように値がオブジェクトの時は、参照が渡される。

const object1 = {first: 'val1', second: {third: 'val3', forth: 'val4'}};
const object2 = {...object1};

object1.second.forth = 'val5';

console.log(object2);
// {first: 'val1', second: {third: 'val3', forth: 'val5'}}

object2.second.forth = 'val4';

console.log(object1);
// {first: 'val1', second: {third: 'val3', forth: 'val4'}}
```
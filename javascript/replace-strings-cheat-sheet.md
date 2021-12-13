# Replace Strings Cheat Sheet

2021.12.13

```js
const sample = 'あ、い、う、え、あ';
```

```js
// 'か、い、う、え、あ'
console.log(sample.replace('あ', 'か'));
```

```js
// 'か、い、う、え、か'
console.log(sample.replace(/あ/g, 'か'));
```

```js
// 'か、き、う、え、か'
console.log(sample.replace(/あ/g, 'か').replace('い', 'き'));
```

```js
// '、い、う、え、'
console.log(sample.replace(/あ/g, ''));

// 'い、う、え'
console.log(sample.replace(/あ/g, '').replace(/、/g, ''));
```

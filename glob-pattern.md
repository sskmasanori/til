## Glob Pattern

```
- ab
    - sample1.ts

- abc
    - sample2.ts

- abd
    - sample3.ts

- cd
    - sample4.ts
```

ab/sample1.ts, abc/sample2.ts, abd/sample3.tsを得る。
```
ab*/**/*.ts
```

abc/sample2.ts, abd/sample3.tsを得る。
```
ab?/**/*.ts
```

abc/sample2.ts, abd/sample3.tsを得る。
```
ab[a-z]/**/*.ts
```

ab/sample1.tsを得る。
```
!(cd|ab?)/**/*.ts
```

全てを得る。
```
**/*.ts
```

ユースケースとして、ESlint/Prettierでチェックするディレクトリを指定する時に使ったりする。
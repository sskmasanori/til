## Summarize Relative Path
---
```
./ : 同じ階層
../ : 一つ上の階層
```
```
- bin
    - sample1.ts

- lib
    - sample2.ts

- package.json
```

package.jsonからsample1.tsを見る
```
./bin/sample1.ts or bin/sample1/.ts
```

sample1.tsからpackage.jsonを見る
```
../package.json
```
## Package Lock File Version
2021.04.07

`package-lock.json`のversionを表す。使用するnpmのversionによって、このversionが異なる。

### "lockfileVersion": 1
```
npm v5 and v6によって使用されるバージョン。
```
### "lockfileVersion": 2
```
npm v7によって使用されるバージョン。
```
### "lockfileVersion": 3,
```
npm v7によって使用されるバージョン。隠しファイルであるnode_modules/.package-lock.jsonに使われる。
将来的なnpmのversionによって使われる。
```

### Case Study
npm v6で、`"lockfileVersion": 2`である`package-lock.json`を使おうとすると
```
$ npm -v
6.14.11
$ npm install
This version of npm is compatible with lockfileVersion@1, but package-lock.json was generated for lockfileVersion@2. I'll try to do my best with it!
```

[npm DOC: lockfileVersion](https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json#lockfileversion)

TODO: 何のためにある項目なのか？<br>
TODO: ドキュメントにあった、v2とv1の下位互換性の意味について

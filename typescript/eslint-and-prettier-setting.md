## ESlint and Prettier Setting
2020.02.27<br>
ESlintによる構文チェックとPrettierによる整形を併用する。
 - Prettierの整形機能は優秀。設定もシンプル。
 - ESlintによる整形を厳密に行うためには、複雑な設定が必要。
 - Prettierは構文チェックはしない。

`git commit`と同時にそれを行えるようにする。<br>
[参考youtube](https://www.youtube.com/watch?v=R35LJL6a-p0)
<br>
<br>
### 必要パッケージのインストール
```
npm install --save-dev eslint eslint-config-prettier prettier @typescript-eslint/parser @typescript-eslint/eslint-plugin husky lint-staged
```
### 関連パッケージ一覧
 - eslint-config-prettier: ESlintとPrettierを併用する際に。
 - @typescript-eslint/parser: ESlintでTypeScriptのコードを解析するため。
 - @typescript-eslint/eslint-plugin: ESlintでTypeScriptのコードをチェック、parserと何が違う？
 - husky: gitコマンドをフックに、別のコマンドを呼び出せる。
 - lint-staged: commitしたファイルにESlintを実行。

### .prettierrc
```
{
    "printWidth": 120, // 1行あたり120文字まで
    "singleQuote": true
}
```
NOTE: `singleQuote` - [Prettier 公式](https://prettier.io/docs/en/options.html#quotes)を参照。

### .eslint.js
jsonなどでも書ける。
```
module.exports = {
    env: {
        browser: false, // browserで使うtypescriptコードならtrue？
        es2017: true // どのバージョンのJSでチェックしたいか？
    },
    extends: [ // 以下の順番が推奨らしい、なぜ？
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/@typescript-eslint",
    ],
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "sourceType": "module",
        "project": "path to tsconfig.json",
        "ecmaVersion": 2018
    },
    root: true, // このファイルがrootのファイルであることを示す？
    rules: {}
}
```
### package.json
```
"scripts": {
    ***,
    "fix-syntax": "eslint --fix '**/*.ts' && prettier --write '**/*.ts'"
},
***,
"husky": {
    "hooks": {
        "pre-commit": "lint-staged"
    }
},
"lint-staged": {
    "bin/**/*.ts": [ // npm run fix-sintaxで指定している対象と被っているな。
        "npm run fix-syntax"
    ],
    "lib/**/*.ts": [
        "npm run fix-syntax"
    ]
}
```
NOTE: `**/*.ts` - [globe pattern topic in my til](../glob-pattern.md)を参照。<br>
NOTE: windowsだと`'**/*.ts'`ではなく、`**/*.ts`かも。
<br>
<br>
NOTE: git hooks関連のエラーがたまに起きるらしい。`ls .git/hooks`の結果が.sampleしかなかったら調べる。<br>
TODO: 上の内容で分からないところを調べる。
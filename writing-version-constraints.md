## Writing Version Constraints
2021.03.09

[Composer公式: Writing Version Constraints](https://getcomposer.org/doc/articles/versions.md#writing-version-constraints)

Exact Version Constraint
```
"1.0.1"
```
Hyphenated Version Range
```
"1.0 - 2.0": 1.0.0 <= version < 2.1.0
"1.0.0 - 2.1.0": 1.0.0 <= version <= 2.1.0
```

Wildcard Version Range
```
"1.*": 1.0.0 <= version < 2.0.0
"1.0.*": 1.0.0 <= version < 1.1.0
```

Tilde Version Range: 指定した最後の桁`2`は上げてもよい。
```
"~1.2": 1.2.0 <= version < 2.0.0
"~1.1.2": 1.1.2 <= version < 1.2.0
```

Caret Version Range: 0以外で始まる最初の桁`2`を固定。
```
"^2.1.1": 2.1.1 <= version < 3.0.0
"^0.2.1": 0.2.1 <= version < 0.3.0
```

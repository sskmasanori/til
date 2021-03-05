## Options When Install
2021.02.23

composer install
```
--verbose : -v。詳細メッセージの表示。詳細メッセージとは？
```
```
--prefer-dist : zipでダウンロード。高速。
```
```
--prefer-source : git cloneでダウンロード。
```
```
--no-progress : ダウンロードの状況を表示しない。
```
```
--no-interaction : 対話型のメッセージ表示しない。
```
```
--no-dev : composer.jsonのrequire-dev内のライブラリをダウンロードしない。
```
```
--optimize-autoloader : オートローダーを高速化する。
```
```
--no-suggest : ライブラリがsuggestを指定している場合ログに吐き出してしまうが、それをさせない。suggestとは、このライブラリ使うならこれらのライブラリがオススメだよというやつ。
```

### Use Case
```
(Dockerfile)
RUN composer install --verbose --prefer-dist --no-progress --no-interaction --no-dev --optimize-autoloader --no-suggest

--verboseを付けると、
Installs: voku/portable-ascii:1.5.6, symfony/polyfill-php80:v1.20.0, symfony/polyfill-mbstring:v1.20.0, symfony/polyfill-ctype:v1.20.0, phpoption/phpoption:1.7.5, graham-campbell/result-t***
とインストールするライブラリとversionの情報を表示してくれる。
エラーが出た際、この詳細メッセージの中に手がかりがあるかもなので、表示させておこうくらい。
```
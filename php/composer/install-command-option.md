## Install Command Option
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
--no-suggest : ライブラリがsuggestを指定している場合ログに吐き出してしまうが、それをさせない。suggestとは？
```

docker file内でcomposer installコマンドを記述するとすれば、
```
RUN composer install --verbose --prefer-dist --no-progress --no-interaction --no-dev --optimize-autoloader --no-suggest
```
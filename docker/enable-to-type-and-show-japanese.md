## Enable To Type And Show Japanese
---

 - コンテナ内で、日本語が入力すらできない。
 - mysqlコンテナ内で、日本語が含まれるレコードを表示させると文字化けする。

原因 : 日本語ロケールがない
```
(in the container)
$ locale

LANG=
LANGUAGE=
LC_CTYPE="POSIX"
LC_NUMERIC="POSIX"
LC_TIME="POSIX"
LC_COLLATE="POSIX"
LC_MONETARY="POSIX"
LC_MESSAGES="POSIX"
LC_PAPER="POSIX"
LC_NAME="POSIX"
LC_ADDRESS="POSIX"
LC_TELEPHONE="POSIX"
LC_MEASUREMENT="POSIX"
LC_IDENTIFICATION="POSIX"
LC_ALL=

```

```
(in docker file)

RUN apt-get update && \
    apt-get install -y
        locales &&\
        locale-gen ja_JP.UTF-8

ENV LANG=ja_JP.UTF-8 LANGUAGE=ja_JP:ja LC_ALL=ja_JP.UTF-8

RUN localedef -f UTF-8 -i ja_JP ja_JP.utf8
```

localesのインストール：



日本語表示の文字化けは以下でも解消。
```
(git bash)
$ chcp.com
現在のコード ページ: 932　// shift_jis

$ chcp.com 65001 // utf-8に
```
[windows コードページ](https://www.ipentec.com/document/windows-codepage-list)


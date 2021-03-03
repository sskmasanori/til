## ADD vs COPY
2021.03.03

ADD
```
ローカルにある圧縮されたファイルをコンテナへ複製したい時に。
自動で解凍をしてくれる。
ADD {path to compressed source in local} {path to destination in container}
```
COPY
```
ファイルをコンテナへ複製したい時に。
ADD {path to source in local} {path to destination in container}
```

>ADD のベストな使い方は、ローカルの tar ファイルをイメージに自動展開する用途です。

[docker公式: ADD vs COPY](https://docs.docker.jp/engine/userguide/eng-image/dockerfile_best-practice.html#add-copy)
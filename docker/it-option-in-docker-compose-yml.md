## it Option In Docker Compose Yml
2021.03.02<br>
```
$ docker run -it *** bash
$ docker exec -it *** bash
```
-itを付けて起動し中に入りたいコンテナについて、docker-compose.ymlではどのように書けばよいか。<br>

`docker-compose.yml`
```
services:
    app:
        tty: true // t option
        stdin_open: true // i option
```
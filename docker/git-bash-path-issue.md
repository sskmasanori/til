## Git Bash Path Issue
git bashで
- /{path to mounted source}の先頭にgit bashのルートディレクトリのpathが追加される
- ;Cフォルダがsource側に作成される
- /{path to mounted source};Cと解釈される

```
docker run -it --rm -u -v /$PWD/{path to mounted source}:/{path to target directory} {image id} bash
```

```
docker run -it --rm -v /$PWD/source:/root/target 6a7b7ca24774 bash
```
## How To See The Result Of ls -la
2021.03.11

```
ls -la

-a: allの意味。すべて表示。
-l: longの意味。詳細も表示。
```
```
$ ls -la

drwxr-xr-x 1 taro 111111    0  3月  9 16:47 .
drwxr-xr-x 1 taro 111111    0  3月  8 15:21 ..
drwxr-xr-x 1 taro 111111    0  3月 11 20:15 .git
-rw-r--r-- 1 taro 111111  756  2月 26 18:12 annotation-comments.md
drwxr-xr-x 1 taro 111111    0  3月  5 11:12 aws
drwxr-xr-x 1 taro 111111    0  1月 30 14:17 cypress
drwxr-xr-x 1 taro 111111    0  3月  8 11:55 docker
```
```
d / rwxr-xr-x / 1 / taro / 111111 / 0 / 3月  8 11:55 / docker

file-type / permission / counts-of-hardlink / owner-name / group-name / bite-size / time-stamp / file-name-or-directory-name-or-symbolic-link-name
```
file type
```
-: file
d: directory
l: symbolic link
```
permission
```
r: read権限
w: write権限
x: execute権限

rwxr-xr-x
rwx / r-x / r-x
所有者のアクセス権限 / グループユーザのアクセス権限 / その他ユーザのアクセス権限
```
file-name-or-directory-name
```
symbolic linkの場合、
fileA-symbolic -> fileAと表示される。
```

TODO: hardlinkについて調べる。
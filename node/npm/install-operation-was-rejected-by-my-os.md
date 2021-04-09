## Install Operation Was Rejected By My OS
2021.04.09

npm: 6.14.6

```
$ npm install

npm ERR! The operation was rejected by your operating system.
npm ERR! It is likely you do not have the permissions to access this file as the current user
npm ERR!
npm ERR! If you believe this might be a permissions issue, please double-check the
npm ERR! permissions of the file and its containing directories, or try running
```

### Solution
今回はこの方法で解決。下記の記事では、様々な解決方法が紹介されていた。<br>
対ウイルスソフトウェアによって、拒否されている場合。
1. Windowsセキュリティー
2. ウイルスと脅威の防止
3. ウイルスと脅威の防止の設定
4. 設定の管理
5. 除外(Microsoft Defenderウイルス対策項目から除外)
6. 除外の追加または削除
7. npmパッケージをインストールするディレクトリを除外対象として登録

[stack overflow: lockfileVersion](https://stackoverflow.com/questions/56829352/error-the-operation-was-rejected-by-your-operating-system-when-trying-to-crea)

## Infrastructure Terms

Blue/Greenデプロイ
```
現在稼働している環境(Blue)とは別に本稼働予定環境(Green)を用意し、ロードバランサーなどでルーティングを新しい環境にパッと向ける。
```
 - [qiita: AWS CodeDeploy でEC2のBlue/Greenデプロイを作成する](https://qiita.com/keitakn/items/6abe6c971e4dec3b69ef)
 - [Google Cloud: アプリケーションのデプロイとテストの戦略](https://cloud.google.com/solutions/application-deployment-and-testing-strategies?hl=ja#bluegreen_deployment_pattern)

Canary Release
```
現在稼働している環境(Blue)とは別に本稼働予定環境(Green)を用意し、ロードバランサーなどで、一部のユーザーだけを新バージョンにアクセスさせる。徐々に稼働環境を切り替える。
Google Cloudの記事では、Rolling Updateと表現されていた。
```
 - [日経TECH: カナリアリリース](https://xtech.nikkei.com/atcl/nxt/keyword/18/00002/081900087/)
 - [Google Cloud: アプリケーションのデプロイとテストの戦略](https://cloud.google.com/solutions/application-deployment-and-testing-strategies?hl=ja#rolling_update_deployment_pattern)
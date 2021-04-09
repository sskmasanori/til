## Run Workflow Manually
2021.04.08

### workflow_dispatch
手動でworkflowを実行できる。

### How to define
.github\workflows\sample.yml
```
on:
  workflow_dispatch:
    inputs:
      stage:
        description: 'which environment'
        required: true
        default: 'production'
      tag:
        description: 'docker image tag name'
        required: false
        default: 'latest'
```
GitHubのActions画面から手動でworkflowを実行する際に、今回で言うstageとtag項目に値を入力できる。それらは、`sample.yml`にて`${{ github.event.inputs.stage }}`や`${{ github.event.inputs.stage }}`と書くことで参照される。

[GitHub公式: ワークフロートリガーイベント](https://docs.github.com/ja/actions/reference/events-that-trigger-workflows#)

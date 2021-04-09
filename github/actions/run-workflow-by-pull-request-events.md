## Run Workflow by Pull Request Events
2021.04.09

### pull_request
pull requestに関するイベントが発生した時に、workflowを実行できる。

### How to define
.github\workflows\sample.yml
```
on:
  pull_request:
    branches:
      - rc
      - main
    types: [opened, reopened, synchronize, closed]
```
rcブランチ、mainブランチに向けられたpull requestが open / reopen / synchronize / close された時に、workflowが実行される。default以外(closed)のeventを使う時は、typesキーワードで拡張する。

### Event List
- assigned
- unassigned
- labeled
- unlabeled
- opened: default
- edited
- closed
- reopened: default
- synchronize: default、pushされたcommitがpull requestに反映された時
- ready_for_review
- locked
- unlocked
- review_requested
- review_request_removed


[GitHub公式: ワークフロートリガーイベント](https://docs.github.com/ja/actions/reference/events-that-trigger-workflows#)

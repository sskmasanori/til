## Command Events
2021.03.08

composerにはあらかじめ特定のcomposerのeventで発火するように設定できるコマンドが用意されている。

```
post-install-cmd:
occurs after the install command has been executed with a lock file present.
```

```
post-root-package-install:
occurs after the root package has been installed during the create-project command (but before its dependencies are installed).
```
 - [composer公式: Command Events](https://getcomposer.org/doc/articles/scripts.md#command-events)
 - [qiita: Composerコマンド定義](https://qiita.com/yousan/items/94d035a838297b4afb8f)

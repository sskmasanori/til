## What Is Monolog IN PHP?

channel
```
// $logはチャンネル
$log = new Logger('channel-name');
```

handler：出力処理を行うプログラム
```
// StreamHandlerは、単一のファイルにログを書き込むプログラムを持ったクラス
// __DIR__.'/your.log' : 現在のファイルのディレクトリ / your.logへログを出力
// Logger::WARNING : warning 以上のログレベルを書き込む
$log->pushHandler(new StreamHandler(__DIR__.'/your.log', Logger::WARNING));
```

出力する
```
$log->warning('warning!!');
```

ログデフォルトフォーマット
```
[%datetime%] %channel%.%level_name%: %message% %context% %extra%\n
```

Contextにてログのメッセージに情報追加
```
$log->error('Adding a new user', array('username' => 'Taro'));
```

Processorでextraに情報追加
```
$log->pushProcessor(function ($record) {
    $record['extra']['username'] = 'Taro';
    return $record;
});
```

HandlerやProcessorはすでにいくつか用意されている。

[参考](https://reffect.co.jp/php/monolog-to-understand#monolog)
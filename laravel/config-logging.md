## config/logging.php
---
```
'default' => env('LOG_CHANNEL', 'stack'),
// envファイルで'LOG_CHANNEL'があればそちらを使用。なければstack channelを使用。
```

stack channel : どのchannelを使ってログメッセージを処理するのか設定するchannel
```
'stack' => [
    'driver' => 'stack',
    'channels' => ['stderr', 'stdout'], // stderr, stdout channelを使う
    'ignore_exceptions' => false, // exceptionも記録する
],
```

attributes
 - driver : -
 - path : -
 - with : -
 - stream : -

[参考1](https://reffect.co.jp/laravel/laravel-logging-setting)
[参考2](https://qiita.com/hrdaya/items/b01d5621937a0710ca64)

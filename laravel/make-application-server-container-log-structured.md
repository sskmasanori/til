## Make Application Server Container Log Structured
2021.03.02

 - laravelにおけるlogをjson形式に構造化。
 - php-fpmを使ったapplication serverコンテナのログとして出力。
 - exceptionが投げられた際には、stack traceもそのログに含める。

NOTE: ログを構造化することで検索がしやすくなり、特定のログが発見しやすくなる。<br>
NOTE: stack traceまで含めるのは、エラーが起きるまでの出来事も把握することで、より正確で迅速なエラー対応ができるように。
<br>
<br>
```
Log::error('error message');
throw new Exception('exception message')
```

### www.conf (php-fpm設定ファイル)
```
catch_workers_output = yes // 標準出力を可能に
decorate_workers_output = no // php-fpmがログ出力時に吐く接頭辞を出さない(php7.3.0以降で利用可)
```
[qiita: エラーログに余計な接頭辞をつけない](https://qiita.com/takamichi/items/cbb1a9edb44c0b7f5594)

### app/config/logging.php
```
'default' => env('LOG_CHANNEL', 'stack');

'channels' => [
        'stack' => [
            'driver' => 'stack',
            'channels' => ['stdout', 'stderr'], // 標準出力と標準エラー出力を指定することで、コンテナにログを出力できる。
            'ignore_exceptions' => false,
        ],

        'stdout' => [
            'driver' => 'monolog',
            'handler' => StreamHandler::class,
            'tap' => [CustomizeFormatter::class],
            'with' => [
                'stream' => 'php://stdout',
            ],
        ],

        'stderr' => [
            'driver' => 'monolog',
            'level' => 'error',
            'handler' => StreamHandler::class,
            'tap' => [CustomizeFormatter::class],
            'with' => [
                'stream' => 'php://stderr',
            ],
        ],
```

### app/Logging/CustomizeFormatter.php
```
app/Loggingというディレクトリ構造は任意。

class CustomizeFormatter
{
    public function __invoke(Logger $logger): void
    {
        $formatter = new AppLogFormatter();
        // stack traceを表示させるために必要。LineFormatterクラスのメソッド。
        $formatter->includeStacktraces();

        foreach ($logger->getHandlers() as $handler) {
            $handler->setFormatter($formatter);
        }
    }
}
```

### app/Logging/Formatters/AppLogFormatter.php
```
// LineFormatter::includeStacktraces()を使いたいので、継承する。
class AppLogFormatter extends LineFormatter
{
    // LineFormatter::format()を上書きする。
    public function format(array $record): string
    {
        // LineFormatter::format()を参考にした。
        $vars = NormalizerFormatter::format($record);

        $output = [
            'level' => $vars['level_name'],
            'datetime' => $vars['datetime'],
            'env' => $vars['channel'],
            'message' => $vars['message'],
            'extra' => $vars['extra'],
        ];

        // Exceptionの場合は、ログにstacktraceも含める。
        if (array_key_exists('exception', $vars['context'])) {
            $output['stacktrace'] = $vars['context']['exception'];
        }

        return json_encode($output) . PHP_EOL;
    }
}
```

TODO: ログ出力の仕組みを追う。<br>
TODO: AWSとの連携について。
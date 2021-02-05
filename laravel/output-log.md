## Output Log
```
logger()->info('Something happends');
```
```
use Illuminate\Support\Facades\Log;

Log::info('Something happends');
```
```
//channel指定
Log::channel('single')->error('Something happends');
```

```
emergency > alert > critical > error > warning > notice > info > debug
```
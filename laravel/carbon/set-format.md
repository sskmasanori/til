## Set Format
2021.03.30

carbon:2.14.3
laravel:6.18.43

```
use Carbon\Carbon;
```

### 2021-03-30
```
Carbon::now()->toDateString()
```

### 2021-03-30 21:48:06
```
Carbon::now()->toDateTimeString()
```

### 2021年03月30日 21時48分06秒
```
Carbon::now()->format('Y年m月d日 H時i分s秒');
```

### 21-03-30 09-48-00
```
Carbon::now()->format('y-m-d h-i-s');
```

[CONSOLE DOT LOG: Carbon時間操作例](https://blog.capilano-fw.com/?p=867)
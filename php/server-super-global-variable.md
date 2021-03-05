## Server Super Global Variable
2021.03.05

```
$_SERVER
```
> $_SERVER is an array containing information such as headers, paths, and script locations. The entries*1 in this array are created by the web server. There is no guarantee that every web server will provide any of these; servers may omit some, or provide others not listed here. That said, a large number of these variables are accounted for in the [CGI/1.1 specification](http://www.faqs.org/rfcs/rfc3875.html), so you should be able to expect those.

*1 entries: データの入力・挿入といった意味合い。


$_SERVERはスーパーグローバル変数で、どこからでも呼び出せる。
> This is a 'superglobal', or automatic global, variable. This simply means that it is available in all scopes throughout a script. There is no need to do global $variable; to access it within functions or methods.

[php公式: $_SERVER](https://www.php.net/manual/en/reserved.variables.server.php)

<br>

### How To Use
```
echo $_SERVER['SERVER_NAME'];
// www.example.com
```
```
$_SERVER['NEW_KEY'] = 'new value';
```
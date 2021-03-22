## Call To A Member Function Connection() On Null In Unit Test
2021.03.22

laravelで作成したアプリケーションにおいて、phpunitを使って単体テストを実行したところ、以下のようなエラーが。
```
Error : Call to a member function connection() on null
```

### Solution
DB接続など、Laravelの機能を利用するテストを作成する際は、それ用に拡張されたTestCaseを利用する。
```
use PHPUnit\Framework\TestCase;
↓
use Tests\TestCase;
```
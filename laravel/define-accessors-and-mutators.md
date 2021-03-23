## Define Accessors And Mutators
2021.03.23

Laravel8.x

[Laravel8.x公式](https://laravel.com/docs/6.x/eloquent-mutators#accessors-and-mutators)<br>
[RitoLabo: Laravelのアクセサとミューテタ](https://www.ritolab.com/entry/126)

```
users table
id | first_name | last_name
1  | taro       | tanaka
```

### Define Accessors
カラムの値を取得する際のフォーマットを定義する。

```
get{Attribute}Attribute
```

```
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    // get{アクセスするカラムのupper camel case}Attribute
    public function getFirstNameAttribute(string $value): string
    {
        // ucfirst(): 文字列の最初の文字を大文字にする
        return ucfirst($value);
    }
}
```
```
use App\Models\User;

$user = User::find(1);

// taroではなく、Taroが取得できる。
$firstName = $user->first_name;
```
単一のカラムに対してだけではなく、このような使い方もできる。
```
public function getFullNameAttribute()
{
    return "{$this->first_name} {$this->last_name}";
}

// taro tanakaを取得。
$fullName = $user->full_name;
```

### Define Mutators
カラムに値を入れる際のフォーマットを定義する。
mutator: 突然変異誘発遺伝子

```
set{Attribute}Attribute
```
```
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    public function setFirstNameAttribute(string $value): void
    {
        // strtolower(): 文字列を小文字にする。
        // first_nameカラムには、全て小文字にした値を入れることを定義。
        $this->attributes['first_name'] = strtolower($value);
    }
}
```
```
use App\Models\User;

$user = User::find(1);

// usersテーブルのfirst_nameには、hanakoが入る。
$user->first_name = 'Hanako';
```
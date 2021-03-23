## One To One Relation
2021.03.22

laravel8.x

[laravel8.x公式: 1対1](https://readouble.com/laravel/8.x/ja/eloquent-relationships.html#one-to-one)

```
return $this->hasOne(Phone::class, 'foreign_key', 'local_key'); // localとはusersテーブルを指す。

return $this->belongsTo(User::class, 'foreign_key', 'owner_key'); // ownerとはusersテーブルを指す。
```

### Use Case
```
users table
id | name

phones table
id | number | valid_user_id
```
User model
```
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class User extends Model
{
    public function phone(): HasOne
    {
        // phonesテーブルにforegin_key:user_idがあると想定。
        return $this->hasOne(Phone::class);

        // valid_user_idでover ride。
        return $this->hasOne(Phone::class, 'valid_user_id');

        // usersテーブルが、idまたは$primaryKeyプロパティ以外の主キー値を使用する場合。
        return $this->hasOne(Phone::class, 'valid_user_id', 'local_key');
    }
}
```
Phone model
```
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Phone extends Model
{
    public function user(): BelongsTo
    {
        // phones tableにあるuser_idカラムの値をもとに探そうとする。
        return $this->belongsTo(User::class);

        // valid_user_idでover ride。
        return $this->belongsTo(User::class, 'valid_user_id')

        // usersテーブルが、idまたは$primaryKeyプロパティ以外の主キー値を使用する場合。
        return $this->belongsTo(User::class, 'valid_user_id, 'owner_key')
    }
}
```
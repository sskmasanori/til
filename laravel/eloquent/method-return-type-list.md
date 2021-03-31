## Method Return Type List
2021.03.30

laravel:6.x

```
schools table
id | name
1 | school1
2 | school2
```
```
use App\Models\School;
```

### find
1つのSchoolModelインスタンスを返す。
```
>>> $school = School::find(1);
=> App\Models\School {#3488
     id: 1,
     name: "school1",
   }
```

### first
１つのSchoolModelインスタンスを返す。
```
>>> $school = School::where('id', 1)->first();
=> App\Models\School {#3498
     id: 1,
     name: "school1",
   }
```

### get
Collectionインスタンスを返す。要素はSchoolModelインスタンス。
```
>>> $school = School::where('id', 1)->get();
=> Illuminate\Database\Eloquent\Collection {#3488
     all: [
       App\Models\School {#3492
         id: 1,
         name: "school1",
       },
     ],
   }
```
中身はSchoolModelインスタンスのままで、配列へ。
```
>>> $school = School::where('id', 1)->get()->all();
=> [
     App\Models\School {#3498
       id: 1,
       name: "school1",
     },
   ]
```

### all
Collectionインスタンスを返す。要素はSchoolModelインスタンス。
```
>>> $school = School::all();
=> Illuminate\Database\Eloquent\Collection {#3499
     all: [
       App\Models\School {#3471
         id: 1,
         name: "school1",
       },
       App\Models\School {#3496
         id: 2,
         name: "school2",
       },
     ],
   }
```

### where
Builderインスタンスを返す。
```
>>> $school = School::where('id', 1);
=> Illuminate\Database\Eloquent\Builder {#3477}
```

[Laravel6.x公式: Eloquent](https://readouble.com/laravel/6.x/ja/eloquent.html)<br>
[Qiita: 返り値早見表](https://qiita.com/sola-msr/items/fac931c72e1c46ae5f0f)
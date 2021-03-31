## Difference Between all and toArray
2021.03.30

laravel:6.x

```
schools table
id | name
1 | school1
2 | school2

>>> $school = School::where('id', 1)->get();
=> Illuminate\Database\Eloquent\Collection {#3477
     all: [ // allってある。
       App\Models\School {#3482
         id: 1,
         name: "school1",
       },
     ],
   }
```

### all
```
>>> $school = School::where('id', 1)->get()->all();
// SchoolModelインスタンスが配列要素の0番目に入っている。
// foreachで回して、->idみたいなことが可能。
=> [
     App\Models\School {#3498
       id: 1,
       name: "school1",
     },
   ]
```

### toArray
```
>>> $school = School::where('id', 1)->get()->toArray();
// SchoolModelインスタンスのデータが連想配列化されたものが、配列要素の0番目に入っている。
=> [
     [
       "id" => 1,
       "name" => "school1",
     ],
   ]
>>>
```

### この場合は一緒
```
// [1,2,3]
collect([1, 2, 3])->all();
collect([1, 2, 3])->toArray();
```
```
// ["name" => "Desk", "price" => 10000]
collect(['name' => 'Desk', 'price' => 10000])->all();
collect(['name' => 'Desk', 'price' => 10000])->toArray();
```

[Laravel6.x公式: コレクション](https://readouble.com/laravel/6.x/ja/collections.html)<br>
[Qiita: toArrayとallの違い](https://qiita.com/ucan-lab/items/47638a7b52090f59c2bf)
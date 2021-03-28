## ES6 Basic
2021.03.27

ES6

### Concatenation
```
// 田中さん！おはようございます。
console.log('田中さん！' + 'おはようございます。');
```

### Templateliteral
```
const message = 'おはようございます。';

// 田中さん！おはようございます。
// バッククオーテーションで囲む。
cosole.log(`田中さん！${message}`);
```

### Switch Case
```
const color = 'green';

// go
switch (color) {
    case 'red':
        console.log('stop');
        break;
    case 'green':
        console.log('go');
        break;
    case 'yellow':
        console.log('slow');
        break;
    default:
        console.log('unknown');
        break;
}
```
```
// go, slow, unknown
switch (color) {
    case 'red':
        console.log('stop');
        break;
    case 'green':
        console.log('go');
    case 'yellow':
        console.log('slow');
    default:
        console.log('unknown');
        break;
}
```

### Array Length
```
const array = ['apple', 'banana', 'peach'];

// 3
console.log(array.length);
```

### Object
```
const object = {
    itemName: 'bread',
    price: 300
};

// bread
console.log(object.itemName)

object.price = 500;
```

### For Syntax
```
const array = [1,2,3];

// iを条件式内で定義する。
for (let i = 0; i < array.length; i ++)
```

### Undefined
```
const object = {
    itemName: 'coffee',
    price: 350
};

if (object.tax === undifend) {
    ***
}
```

### Function
```
const showMessage = function() {
    console.log('hello');
};

showMessage();
```
use arrow function
```
const showMessage = (text) => {
    console.log(`${text}, guys.`);
};

const text = 'hello';
showMessage(text);
```
```
const object = {
    name: 'Taro',
    skill: () => {
        console.log('no skill');
    }
};

object.skill();
```

### Class
上のObjectを効率敵に生成するため。Objectって連想配列のことだと思ってたけど、変わらずオブジェクトの理解で良いんだ。
```
class Animal {}
// undefined
const animal = new Animal();
// undefined
console.log(animal);
// VM262:1 Animal {}__proto__: constructor: class Animalarguments: (...)caller: (...)length: 0name: "Animal"prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM140:1[[Scopes]]: Scopes[2]__proto__: Object
// undefined
```

constructor
```
class Item {
    constructor() {
        ***
    }
}
```

property
```
class User {
    // 不要？
    let name;
    // 不要？
    let age;

    // 引数は、constructorで受け取るんだったな。
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const user = new User('田中', 25);
console.log(`名前: ${user.name}`);
console.log(`年齢: ${user.age}`);
```

method
```
class User {
    constructor(name, birthday) {
        this.name = name;
        this.birthday = birthday;
    }

    // functionとか要らんのか。へえ。
    getAge() {
        ***
        const today = this.getToday();
        ***
    }

    getToday() {
        ***
    }
}
```

override constructor
```
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class AdminUser extends User {
    constructor(name, age, role) {
        // 親クラスのUserのconstructorを呼び出している。
        super(name, age);

        this.role = role;
    }
}
```

divide responsibility<br>
user.js
```
class User {
    ***
}
export default User;
```

adminUser.js
```
// 拡張子jsは省略可能。
import User from "{path-to-user.js}";

class AdminUser extends User {
    ***
}
```
定数をexport/importすることも可能。変数はできないのかな？<br>
user.js
```
const name = 'taro';

export default name;
```
import.js
```
import name from "path to user.js";

// taro
console.log(name);
```

use different name between export and import<br>
user.js
```
class User {
    ***
}

export defult User;
```
adminUser.js
```
import UserTemplate from "{path-to-user.js}"
```

export default constraints
```
const firstUser = ***;
const secondUser = ***;

export default firstUser;

// NG。export defaultは１つのみ。
export default secondUser;
```

multi export and import
```
const name = ***;
const age = ***;

export {name, age};
```
```
import {name, age} from "{file-path}";

// NG。exportされた名前に合わせる。
import {userName, userAge};
```

### Package
import package
```
import {const-name} from "{package-name}";
```

### Array Manipulation
push
```
const array = [1,2,3];

// [1,2,3,4]
array.push(4);
```
forEach
```
const array = [1,2,3];

// arrow function syntax
array.forEach((number) => {
    const doubledNumber = number*2;
    console.log(doubledNumber);
});
```
find
```
const array = [1,2,3];

// 2
const firstNumberOverOne = array.find((number) => {
    return number > 1;
});
```
filter
```
const array = [1,2,3];

// [2,3]
const allNumbersOverOne = array.filter((number) => {
    return number > 1;
});
```
find and filter against object array
```
const heros = [
    {name: 'hero1', age: '30'},
    {name: 'hero2', age: '19'}
];

// {name: 'hero2', age: '19'}
const firstYoungHero = heros.find((hero) => {
    return hero.age < 20;
});
```

map
```
const array = [1,2,3];

// [2,4,6]
const doubledArray = array.map((number) => {
    return number*2;
});
```

### Callback Function
```
const greeting = (callbackFunction) => {
    console.log('My Profile is');

    // ()をつけて関数を実行する。
    callbackFunction('taro', 'tanaka');
};

const showFullName = (firstName, lastName) => {
    console.log(firstName + lastName);
}

// 関数名を渡す。
greeting(showFullName);
```
```
const greeting = (callback) => {
    console.log('My Profile is');
    callback('taro', 'tanaka');
};

greeting((firstName, lastName) => {
    console.log(firstName + lastName);
});
```

### Reference
[GoogleJSスタイルガイド](https://w.atwiki.jp/aias-jsstyleguide2/pages/1.html)<br>
[誰かの個人的なJS命名規則](https://analogic.jp/naming-convention/)
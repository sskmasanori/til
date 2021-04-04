// カートに入っている商品の合計金額を計算してコンソールに表示する

// ファイルからimportする場合。
// import Item from "./item.mjs";
// import Cart from "./cart.mjs";

class Item {
    // 項目(プロパティ)name, priceを持つ
    constructor(itemName, price) {
        this.name = itemName;
        this.price = price;
    }

    getPrice() {
        return this.price*1.10;
    }
}

class Cart {
    // 項目(プロパティ)cartを持つ
    constructor() {
        this.cart = [];
    }

    put(item) {
        this.cart.push(item);

        return this;
    }

    showTotalPrice() {
        let totalPrice = 0;
        this.cart.forEach(item => {
            totalPrice+=item.getPrice();
        })

        console.log(totalPrice);
    }
}

const item1 = new Item('item1', 100);
const item2 = new Item('item2', 200);
const cart1 = new Cart();

cart1.put(item1).put(item2).showTotalPrice();
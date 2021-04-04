// カートに入っている商品の合計金額を計算してコンソールに表示する

const item1 = {
    name: 'item1',
    price: 100,
};

const item2 = {
    name: 'item2',
    price: 200,
};

const cart = [item1, item2];

let totalPrice = 0;

cart.forEach(item => {
    // totalPrice = totalPrice + item.price;と同じ意味
    totalPrice += item.price;
});

console.log(totalPrice);

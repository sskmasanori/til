class Cart {
    constructor() {
        this.cart = [];
    }

    update(item) {
        this.cart.push(item);

        return this;
    }

    getTotalPrice() {
        let totalPrice = 0;
        this.cart.forEach(item => {
            totalPrice+=item.getPrice();
        })

        return totalPrice;
    }
}

export default Cart;
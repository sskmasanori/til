class Item {
    constructor(itemName, price, size) {
        this.name = itemName;
        this.price = price;
        this.size = size;
    }

    getPrice() {
        return this.price;
    }
}

export default Item;
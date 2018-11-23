class Product {
    constructor(id, name, price, quantity, status) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.status = status;
    }
    total() {
        return this.price * this.quantity;
    }
    toString() {
        return 'id: ' + this.id + '\nName ' + this.name + '\nPrice ' + this.price + '\nQuantity ' + this.quantity + '\nStatus ' + this.status;

    }
}

let product1 = new Product();
product1.id = 'po1';
product1.name = ' name 1';
product1.price = 5.6;
product1.quantity = 4;
product1.status = true;
console.log(product1.toString());
console.log("Total "+product1.total());


class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }


    toString() {
        return "ID : " + this.id + "\nName " + this.name + "\nPrice " + this.price + "\nQuantity " + this.quantity;
    }
}


let product1 = new Product("p01", "product 1", 4, 2);
let product2 = new Product("p02", "product 2", 11, 6);
let product3 = new Product("p03", "product 3", 7, 8);
let product4 = new Product("p04", "product 4", 15, 3);

let products = new Set([product1, product2, product3, product4]);

console.log('Product List');
products.forEach(p => {
    console.log(p.toString());
    console.log('-------------');
});

console.log('Product List');
for (let product of products) {
    console.log(peoduct.toString());
    console.log('-------------');
}
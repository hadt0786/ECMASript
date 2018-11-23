let Product = require('./product');

let product1 = new Product("p01", "product 1", 4, 2);
let product2 = new Product("p02", "product 2", 11, 6);
let product3 = new Product("p01", "product 3", 7, 8);

let products = [product1, product2, product3];

let result1 = products.reduce((a, b) => +a + +b.quantity, 0);
console.log('Result1 ' + result1);


let result2 = products.reduce((a, b) => +a + +b.quantity * +b.price, 0);
console.log('Result2 ' + result2);
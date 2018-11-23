let Product = require('./product');

let product1 = new Product("p01", "product 1", 4, 2);
let product2 = new Product("p02", "product 2", 11, 6);
let product3 = new Product("p01", "product 3", 7, 8);

let products = [product1, product2, product3];

let productInfo = products.find(p=> p.id === 'p01');

console.log(productInfo.toString());
console.log("Total "+productInfo.total());
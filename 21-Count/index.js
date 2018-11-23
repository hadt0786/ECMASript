let Product = require('./product');

let product1 = new Product("p01", "product 1", 4, 2);
let product2 = new Product("p02", "product 2", 11, 6);
let product3 = new Product("p03", "product 3", 7, 8);
let product4 = new Product("p04", "product 4", 15, 3);


let products = [product1, product2, product3];

let result1 = products.length;
console.log("Result1 " + result1);

let result2 = products.filter(p => p.price > 5).length;
console.log("result 2 " + result2);
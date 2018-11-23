let Product = require('./product');

let product1 = new Product("p01", "product 1", 4, 2);
let product2 = new Product("p02", "product 2", 11, 6);
let product3 = new Product("p01", "product 3", 7, 8);

let products = [product1, product2, product3];

console.log("Starts with");
products.filter(p => p.name.startsWith("top 2"))
    .forEach(function (product, index) {

        console.log(product.toString());

        console.log("Total " + product.total());

        console.log("=========================");

    });

console.log("Contains");
products.filter(p => p.name.includes("top 2"))
    .forEach(function (product, index) {

        console.log(product.toString());

        console.log("Total " + product.total());

        console.log("=========================");

    });
let Product = require('./product');

let product1 = new Product("p01", "product 1", 4, 2);
let product2 = new Product("p02", "product 2", 11, 6);
let product3 = new Product("p03", "product 3", 7, 8);
let product4 = new Product("p04", "product 4", 15, 3);


let products = [product1, product2, product3];

console.log("User Limit");

products.slice(0, 2).forEach(function (product, index) {

    console.log(product.toString());
    console.log('Total ' + product.total());
    console.log("==============================");
});

console.log("User Limit and Order By");

products.sort((p, q) => p.price - q.price <= 0).slice(0, 2).forEach(function (product, index) {

    console.log(product.toString());
    console.log('Total ' + product.total());
    console.log("==============================");
});

console.log("Use Limit and Where and OrderBy");

products.filter(p => p.price - q.price <= 0).slice(0, 1).forEach(function (product, index) {

    console.log(product.toString());
    console.log('Total ' + product.total());
    console.log("==============================");
});
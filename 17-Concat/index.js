let Product = require('./product');

let product1 = new Product("p01", "product 1", 4, 2);
let product2 = new Product("p02", "product 2", 11, 6);
let product3 = new Product("p03", "product 3", 7, 8);
let product4 = new Product("p04", "product 4", 15, 3);


let products = [product1, product2, product3];

prodicts = products.concat(product4);

products.forEach(function (product, index) {
    console.log("Product " + index + " Info")
    console.log(product.toString());
    console.log('Total ' + product.total());
    console.log("==============================");
});
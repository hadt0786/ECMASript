let Product = require('./product');

let product1 = new Product("p01", "product 1", 5, 2);
let product2 = new Product("p02", "product 2", 11, 6);
let product3 = new Product("p01", "product 3", 12, 8);

let products = [product1, product2, product3];

let result = products.filter(p=> p.price>5);

result.forEach(function(product, index){
    console.log(product.toString());
    console.log("Total "+product.total());
    console.log("=========================");

});

   
let module1 = require('./demo1.js');
let module2 = require('./demo2.js');
let module3 = require('./demo3.js');

console.log('AGE '+module1.age);
console.log('Full Name '+module1.fullname);
console.log('Price '+module1.price);

console.log('generate random '+module2.generateRandom());
console.log('Sum '+module2.sum(1,2));

let product = new module3.Product('p01','name 1', 5, 2);
console.log(product.toString());
console.log('total '+product.total());
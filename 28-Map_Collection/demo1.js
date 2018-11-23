// demo1.js

var student = new Map();
student.set('p01', 'st01');
student.set('name', 'name1');
student.set('age', 20);

console.log("Size " + student.size); // 3
console.log("Name " + student.get('name')); // Name : name 1
console.log("Check id key " + student.has('id')); // true

student.delete('age'); // 
console.log('studetn size ' + student.size); // 2

student.clear();
console.log('Size ' + student.size); // 0

// demo2.js

var student2 = new Map();
student2.set('p01', 'st01');
student2.set('name', 'name1');
student2.set('age', 20);

console.log("Student Info");
student2.forEach((value, key) => {
    console.log(key + '; ' + value);
});

var product = new Map([
    ['id', 'p01'],
    ['name', 'name 1'],
    ['price', 100]
]);
console.log('Product Info');
product.forEach((value, key)=>{
    console.log(key+' : '+value);
});
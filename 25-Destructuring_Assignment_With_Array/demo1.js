let [firstName, middleName, lastName] = ['John', 'Thomas', 'Smith'];

console.log('First Name ' + firstName);
console.log('Middle Name ' + middleName);
console.log('last Name ' + lastName);

// output
//  1| First name John
//  2| Middle name Thomas
//  3| Last name Smith

//demo2.js

let [, , lastName1] = ['John1', 'Thomas1', 'smith1'];
console.log('Last Name' + lastname);

// output
// 1| Last name : smith1

//demo3.js
let firstName2, middleName2, lastName2;
[firstName2, middleName2, lastName2] = ['John', 'Thomas', 'Smith'];

console.log('First Name ' + firstName2);
console.log('Middle Name ' + middleName2);
console.log('last Name ' + lastName2);

// output
//  1| First name John
//  2| Middle name Thomas
//  3| Last name Smith


//demo4.js
let [firstName4, ...rest] = ['John', 'Thomas', 'Smith'];

console.log('First Name ' + firstName2);
console.log('rest ' + rest);

// output
//  1| First name John
//  2| rest Thomas,Smith

//demo5.js
let [name = "Guest", surname = "Anonymous"] = ['Julius'];

console.log('Name ' + name);
console.log('Surname ' + surname);

// output
//  1| Name Julius
//  2| Surname Anonymuous
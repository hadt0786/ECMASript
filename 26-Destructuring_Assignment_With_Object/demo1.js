// demo1.js

let person = { firstName:'John', middleName:'Smith', lastName:'Thomas'};
let { firstName, middleName, lastName } = person;

console.log('first name '+firstName);
console.log('Middle name '+middleName);
console.log('last name '+lastName);

//output 
// 1| First Name John
// 2| Middle name Smith
// 3| last Name thomas

// demo2.js

let animal = {
    dog:'Dog1',
    cat: {
        biggerCat: 'Cat1',
        smallerCat: 'Cat2'
    },
    turtle: 'Turtle'
};

const { dog, turtle } = animal;
console.log(dog+' '+turtle);

const { bigger, smaller } = animal.cat;

console.log("bigger cat "+bigger+" \nSmaller cat"+animal.cat);


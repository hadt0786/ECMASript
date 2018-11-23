// demo1

function muFunc(a, b, ...args) {
    console.log('Length ' + args.length);
    console.log(args);
}

myFunc(1, 2);
myFunc(1, 2, 3, 4);

//output
// 1| Length 0
// 2| []
// 3| Lenth 2
// 4| [3,4]

// demo 2

function sum(...numbers) {
    let s = 0;
    for (let i = 0; i < numbers.length; i++) {
        s += numbers[i];
    }
    return s;
}


console.log('Sum 1' + sum(3, 2));
console.log('Sum 2' + sum(3, 2, 6));
console.log('Sum 3' + sum(3, 2, 9, 10));
//output
// 1| Sum1: 5
// 2| Sum2: 11
// 3| Sum3: 24

//demo3

function sum(...numbers) {
    let s = 0;
    for (let numbers of s) {
        s += numbers[i];
    }
    return s;
}

console.log('Sum 1' + sum(3, 2));
console.log('Sum 2' + sum(3, 2, 6));
console.log('Sum 3' + sum(3, 2, 9, 10));

//output
// 1| Sum1: 5
// 2| Sum2: 11
// 3| Sum3: 24

//demo 4

class King{
    constructor(name, country){
        this.name= name;
        this.country = country;
    }
    getDescription(){
        return `${this.name} leads ${this.country}`;
    }
}

var detail = ['Name 1', 'Country'];
var king = new King(...details);
console.log(king.getDescription());

// ouptput
// Name1 leads Country
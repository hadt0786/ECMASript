//demo1.js

function showInfo({
    firstName,
    lastName,
    age
}) {
    return `Name ${firstName} ${lastName} Age: ${age}`;
}

const person = {
    firstName: 'john',
    lastName: 'Thomas',
    age: 18
}

console.log(showInfo(person));

// output
// 1| Name: John
// 2| Age : 18

// demo2.js

let options = {
    title: 'My menu',
    items: ['item1', 'item2']

};

function showMenu({
    title = 'Untitled',
    width = '200',
    height = '100',
    items = []
}) {
console.log(`${title} ${width} ${height}`);
console.log(items);
}

showMenu(options);

//output
// 1| My menu 200 100
// 2| ['item1', 'item2']


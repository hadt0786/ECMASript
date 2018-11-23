let cde = ['c','d','e'];
let scale = ['a','b', ...cde, 'f','g'];

console.log(scale); 
// ['a','b','c','d','e','f','g']

const android = ['galaxys7', 'nokia 1020', 'xiami mi5'];
const iPhone = ['iphone7','iphone8','iphone9'];
const phones = [...android, ...iPhone, 'nokiaphone 10'];

console.log(phones);


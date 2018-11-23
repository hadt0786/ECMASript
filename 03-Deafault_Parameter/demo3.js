function getFullPrice(price){
    return price*1.13;
}

function getValue(price, pricePlusTax = getFullPrice(price)){
    console.log("Price : "+price.toFixed(2));
    console.log('Price plus tax '+pricePlusTax.toFixed(2));
}

getValue(25);
console.log('--------------------------------');
getValue(25,30);

// output- node demo3.js

// 1| Price: 25.00
// 2| Price Plus Tax : 28.25
// 3|-----------------------
// 4| Price : 25.00
// 5| Price Plus Tax : 30.00


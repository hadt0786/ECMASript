const sum1 = (x,y)=> x+y;
console.log('Result 1: '+sum1(6,15));

const sum2 = (x,y)=> {
    x+y;
};
console.log('Result 2: '+sum2(12,3));

const sum3 = (x)=> {
    return(y)=>{
        return x+y;
    }
};
console.log('Result 3: '+sum3(21)(3));

var setIdNameAndAge = (id, name, age ) =>({id: id, name: name, age: age});
console.log(setIdNameAndAge('st01', 'name 1', 20));

// output - node index.js
// 1 | Result 1 : 21
// 2 | Result 2 : 15
// 3 | Result 3 : 25
// 4 | { id: 'st01', name: 'name01', age: 20} 


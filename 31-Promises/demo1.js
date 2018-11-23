var p = new Promise((resolve, reject)=> resolve(5));

p.then((val)=>console.log('Value '+val));

// 1| value 5

const isSmallThenTen=(num)=>{
    return new Promise((resolve,reject)=>{
        if(num>10) resolve(10);
        else reject(false);
    })
};

isSmallThenTen(91)
.then(res=>console.log('the number is smaller than ten'))
.catch((err)=>console.log('The number is greater than 10'));

isSmallThenTen(5)
.then(res=>console.log('the number is smaller than ten'))
.catch((err)=>console.log('The number is greater than 10'));

// 1| The number is smaller then 10
// 2| the number is greater then 10

// demo3.js

const timeoutIn = (time)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>
            resolve(time),time
        )
    })
}
timeoutIn(2000).then(res=>console.log(`resolved in ${res/1000} seconds`));


// 1| resolved in 2 seconds

// demo4.js

var p1 = new Promise((resolve, reject)=>{
    if(true) throw new Error("rejected");
    else resolve(4);
});

p2.then((val)=>val+2).then((val)=>console.log("got ", val)).catch((err)=>console.log("error : "+err.message));

var p2 = new Promise((resolve, reject)=>{
    if(true) throw new Error("rejected");
    else resolve(4);
});

p2.then((val)=>val+2).then((val)=>console.log("got ", val)).catch((err)=>console.log("error : "+err.message));

// 1| error: rejected!
// 2| error: step 2failed



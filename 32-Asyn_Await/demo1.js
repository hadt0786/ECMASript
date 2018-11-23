async function process() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done1"), 1000)
    });
    let result = await promise;
    console.log(result);

}

process();

// 1| Done!

//demo2.js

function calculateAreaAfter2Sec(param) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(param * 2);
        }, 2000);
    });
}
async function sum(a, b) {
    a = calculateAreaAfter2Sec(a);
    b = calculateAreaAfter2Sec(b);
    return a * b;
}

sum(1, 2).then(console.log);

// 1| 6
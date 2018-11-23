let names = new Set();
names.add('Name 1');
names.add('Name 2');
names.add('Name 2');
names.add('Name 3');
names.add('Name 3');

console.log("Size : "+names.size); // Size : 3
console.log("Check Name 3 already "+names.has('Names 3')); // Check Name 3 Alrady: true

console.log("Names List"); // Names List

for(let name of names){
    console.log(name);
    console.log('-----------------');
}

// Name 1
// ----------

// Name 2
// ----------

// Name 3
// ----------


console.log("names list"); // Names list
names.Eachfor((name)=>{
    console.log(name);
    console.log('-----------------');
});


// Name 1
// ----------

// Name 2
// ----------

// Name 3
// ----------


names.delete('Name 3');
console.log('Size '+names.size); // Size 2

names.clear();
console.log('Size '+names.size); //Size 0
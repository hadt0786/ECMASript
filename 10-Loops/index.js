const NAMES = ['Name1', 'Name2', 'Name3', 'Name4'];

console.log("Name list");

for(const index in NAMES){
    console.log(index+" : "+NAMES[index]);
}


for(const name of NAMES){
    console.log(name);
}
const arr = [1,2,3,4,5,6];

for(const num of arr){
    // console.log(`value of num ${num}`);
}

const greeting = 'shivam_kumar';

for (const greet of greeting){
    // console.log(`Each char is ${greet}`);
}

// const map = new Map()
// map.set('In','India')
// map.set("USA","United State Of America")
// map.set("Fr","France")

// console.log(map);

for(const [key,value] of map){
    // console.log(key, ":-", value);
}

const myObject2 = {
    'game1' : "NFS",
    'game2' : "Spiderman"
}

// for(const {key,value} of myObject){
    // console.log(key,":-",value);
// }

//Object pe kaise loop lagate hai 

const myObject = {
    js : "javaScript",
    cpp : "C++",
    rb : "rubby",
    swift : "swift by apple"
}

for(const key in myObject){
    // console.log(`${key} shortkey is for ${myObject[key]}`);
}

const programming = ["c++",'java',"js","rubby","swift"]

for(const key in programming){
    console.log(programming[key]);
}

const map = new Map()
map.set('In','India')
map.set("USA","United State Of America")
map.set("Fr","France")

for(const key1 in map){
    console.log(key1);
}
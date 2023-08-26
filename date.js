const date = new Date();
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());

const creatDate = new Date("2023-01-24");
// console.log(creatDate.toLocaleString());

const myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

date.toLocaleString('default',{
    weekday: "long"
})

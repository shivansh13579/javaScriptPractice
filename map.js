const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNumbers = myNumbers.map((num)=>num + 10);
// console.log(newNumbers);
const newNums = myNumbers
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=40);

// console.log(newNums);

//***************************************  reducer  ************************************** */

const myNum = [1,2,3]

// const myTotal = myNum.reduce(function(acc,carrValue){
//     console.log(`acc: ${acc} and carrValue: ${carrValue}`);
//     return acc + carrValue;
// },3);

const myTotal = myNum.reduce((acc,carrvalue)=>
{
    return acc + carrvalue;
},0);

// console.log(myTotal);

const shoppingCartCourse = [
    {
        itemName : "js course",
        price : 9099
    },
    {
        itemName : "java course",
        price : 909
    },
    {
        itemName : "Data Science course",
        price : 10099
    },
    {
        itemName : "C++ course",
        price : 999
    },
]

const totalValue = shoppingCartCourse.reduce((acc,carrvalue)=>(acc + carrvalue.price),0)

console.log(totalValue);
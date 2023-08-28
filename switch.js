// const month = 8 ;
// switch(month){
//     case 1 :
//         console.log("january");
//         break;
//     case 2 :
//         console.log("February");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4 :
//         console.log("April");
//         break;
//     case 5 :
//         console.log("may");
//         break;
//     case 6 :
//         console.log("june");
//         break;
//     case 7:
//         console.log("july");
//         break;

//         default:
//             console.log("default case match");
//             break;
// }

const userEmail = [];
if(userEmail){
    // console.log("Got user Email");
}else{
    // console.log("Dont have email");
}

//false values :- false,Nan,"",BigInt 0n,null,undefined,0,-0

const emptyObject = {}

if(Object.keys(emptyObject).length===0){
    // console.log("Object is empty");
}

//Nullish Coalesing Operator (??): null undefine;

let val1;
val1 = 5 ?? 10;

// console.log(val1);

//Ternari operator
//condition ? "true":"False"
const iceCream = 100;

iceCream >=80 ? console.log("true"):console.log("false");

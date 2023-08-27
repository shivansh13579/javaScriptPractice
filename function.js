function sayMyName(){
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("H");
}
// console.log(sayMyName());

function addTwoNumber(num1,num2){
     console.log(num1+num2);
}

// const result = addTwoNumber(3,5);


function addTwoNumber(num1,num2){
    let result = num1+num2;
    return result;
}

const result = addTwoNumber(4,6);
// console.log("result",result);

function loginUserMessage(username){
    if(username===undefined){
       console.log("please enter a username")
       return;
    }
      return `${username} just logged in`
}

// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){
      return num1;
} 

// console.log(calculateCartPrice(200,300,400,500)

const user = {
    username : "shivam",
    price: 555
}

function handleObject (anyObject){
     console.log(`Username is ${anyObject.username} and is price is ${anyObject.price}`);
}

// handleObject(user);

handleObject({
   username:"shivam",
   price: 999
})

// const myNewArray = [200,300,400];

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200,3000,400]));



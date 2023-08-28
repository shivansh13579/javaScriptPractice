// const  score = 200;

// if(score>100){
//     const power = "fly";
//     console.log(`user power : ${power}`);
// }

// console.log(`user Power : ${power}`);

// const balance = 1000;

// if(balance>100)console.log("test");

// const balance = 1000;

// if(balance<500){
//        console.log("less than 500");
// } else if (balance<700){
//      console.log("less than 7000");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

if(userLoggedIn   &&  debitCard){
    console.log("You have loggedIN");
}

if(userLoggedInFromGoogle || userLoggedInFromEmail){
    console.log("You have loggedIn3");
}

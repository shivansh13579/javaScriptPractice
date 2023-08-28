const user = {
    username : "shivam",
    price : 555,

   welcomeMessage : function(){
      console.log(`${this.username} ,welcome to website`);
      console.log(this);
   }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();
// console.log(this);

// function chai(){
    // let username = "shivam"
    // console.log(this.username);
// }

// chai();

const chai=()=>{
    const username = "shivam"
    console.log(this);
}

// chai();

const addTwo = (num1,num2)=>{
    return num1 + num2;
}
// console.log(addTwo(1,5));

const addOne = (num1,num2) => (num1 + num2)
console.log(addOne(5,5));

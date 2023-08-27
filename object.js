//objects literals

const mySym = Symbol("key");

const jsUser = {
    name:"shivam",
    "full Name": "shivam singh",
    [mySym]: "myKey1",
    age: 18,
    location: "purnea",
    email: "shivam.google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"])
// console.log(jsUser["full Name"])
// console.log(jsUser[mySym]);

jsUser.email = "shivkumar.chatgtp.com"
// Object.freeze(jsUser)
jsUser.email = "ram.goo.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("ram is a good boy");
}
console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`)
}
console.log(jsUser.greeting2());
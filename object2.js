//const tinderUser = new Object();

const tinderUser1 = new Object();
tinderUser1.name = "shivam"
tinderUser1.id = "123dfsa"
tinderUser1.isLoggedIn = false
// console.log(tinderUser1);

const regularUsar = {
    email: "shivam.google.com",
    fullName:{
        userfullname:{
           firstname: "hitesh",
           lastname: "singh"
    }
    }
}

// console.log(regularUsar.fullName.userfullname.firstname)

const onj1 = {1:"a",2:"b"}
const onj2 = {3:"a",4:"b"}
const onj3 = {5:"a",6:"b"}

// const onj4 = Object.assign({},onj1,onj2,onj3);
const obj = {...onj1,...onj2}
// console.log(obj)
// console.log(onj4);

// console.log(Object.keys(tinderUser1));
// console.log(Object.values(tinderUser1));
// console.log(Object.entries(tinderUser1));

const course = {
    courseName: "shivam course book",
    price : "999",
    courseInstructor: "hitesh"
}

const {courseInstructor} = course;
console.log(courseInstructor);
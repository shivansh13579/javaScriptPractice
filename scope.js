let a = 300;
if(true){
    let a = 10;
    let b = 20;
    // console.log('inner: ',a);
}
// console.log(a);

function one(){
    const username = "shivam"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    // two();
}
//   one();

if(true){
    const username = "shivam"
    if(username==="shivam"){
        const website = "  Youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//******************************************* Hosting ********************************************** */
console.log(addOne(5));
function addOne(num){
    return num+1;
}


console.log(addTwo(5));
const addTwo = function(num){
    return num + 2;
}

// const myNums = [1,2,3,4,5,6,7,8,9,10]

//  const values = myNums.filter((num)=>num>4);
//  console.log(values);

// const values2 = myNums.filter((num)=>{
//     return num>7
// })

// console.log(values2);
// const newNums = []

// myNums.forEach((num)=>{
//     if(num>4){
//        newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {title : 'Book One', genere : 'Fiction', Published : 1981,
edition : 2004},
    {title : 'Book Two', genere : 'Non-Fiction', Published : 1982,
edition : 2005},
    {title : 'Book Three', genere : 'Fiction', Published : 1983,
edition : 2006},
    {title : 'Book Four', genere : 'History', Published : 1984,
edition : 2007},
    {title : 'Book Five', genere : 'Non-Fiction', Published : 1985,
edition : 2008},
    {title : 'Book Six', genere : 'Non-Fiction', Published : 1991,
edition : 2009},
    {title : 'Book Seven', genere : 'Fiction', Published : 2008,
edition : 2010},
    {title : 'Book Eight', genere : 'History', Published : 2003,
edition : 2003},
    {title : 'Book Nine', genere : 'History', Published :2007,
edition : 2001},
]

// const users = books.filter((bk)=>bk.genere === 'History')
const users = books.filter((bk)=>bk.Published>=2000 && bk.genere === 'History')

// console.log(users);

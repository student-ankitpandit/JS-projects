//1: primitive data type or reference types
//primitive type are based on call by value that means they provide the copy of original data then change will happen in given copy data.

// 7 types : string, number, boolean, null, undefined, symbol, bigInt

// const score = 100
// const scoreVal = 100.3

// const isLooggesIn = false;
// const outsideTemp = null;
// let userEmail;

// const id = Symbol('12345')
// const anotherId = Symbol('12345')

// console.log(id === anotherId);

//const bigNumber = 4645365468456547668768n

//2 : Reference data type (non-primitve)
// 3 types : arrays, objects, functions

// const heroes = ["shaktiman", "gangadhar", "spiderman"];
// let beObj = {
//     name : "ankit",
//     age : 20,
// }

// const myfunc = function() {
//     console.log("hello world");
// }

// console.log(typeof userEmail);

//******************************** memory ***************************** */

//stack (primitive), heap(non-primitive)

let myYoutubeName = "ankitpandit@gmail.com"
let anotherName = myYoutubeName
anotherName = "coffeeaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "abcuser@google.com",
    upi : "user@ptm",
}

let usertwo = userOne
usertwo.email = "ankitpandit@gmail.com"

console.log(userOne);
console.log(usertwo);
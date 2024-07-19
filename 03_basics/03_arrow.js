const user = {
    name: "ankit",
    email: "ankit@google.com",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.name} , welcome to the website`); //here this refers current context
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.name = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "ankit"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "ankit"
//     console.log(this.username);
// }

// chai()

// const chai =  () => {
//     let username = "ankit"
//     console.log(this.username);
// }

// chai()

// const chai = (num1, num2) => { //here we use curly braces thar's why we have to use return function 
//     return num1 + num2 
// }

// console.log(chai(5, 7));

// const chai = (num1, num2) => (num1 + num2) //and here we use parentheses so no need to add return function

 const chai = (num1, num2) => ({name: "ankit"})

console.log(chai(5, 7));
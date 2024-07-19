//singleton
//onject.create //makes constructor and singleton also

//object literals

const mysym = Symbol("key1")

const JsUser = {
    name: "ankit",
    "full name": "ankitpandit",
    [mysym]: "key1",
    age: 20,
    location: "delhi",
    email: "ankitpandit@gmail.com",
    isLoggedIn: false,
    LastLoggedIn: ["sunday", "wednesday"],
}

// console.log(JsUser.email); //dot notation
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);

// JsUser.email = "ankitpandit@microsoft.com"
// Object.freeze(JsUser)
// JsUser.email = "ankitpandit@google.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}  

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
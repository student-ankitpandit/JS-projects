function sayMyName(){
    console.log("a");
    console.log("n");
    console.log("k");
    console.log("i");
    console.log("t");
}

// sayMyName(); //function call

// function addTwoNumbers(number1, number2){ //for notes
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let ans = number1 + number2
    // return ans
    return number1 + number2
}


// const ans = addTwoNumbers(7,7)
// console.log("ans:", ans);

function loggedinUserMessage(usename = "moon"){ 
    if(!usename){
        console.log("please enter a username")
        return
    }
    return `${usename} just logged in` //string interpulation
}
// console.log(loggedinUserMessage())

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(2000, 5000, 150000));

const user = {
    name: "ankit",
    prices: 299,
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.name} and the price is ${anyobject.prices}`);
}  

// handleObject(user)
handleObject({
    name: "sam",
    price: 99
})

const myNewArray = [200, 400, 600, 800, 1000]

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 300, 600, 700, 900]));
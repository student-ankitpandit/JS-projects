//Dates

let myDate = new Date() //we make date as an object and as an instance //ye bana diya date or uska ek instance
//console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString()); //changing format
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString()); 
// console.log(typeof myDate); //object

//let myCreateDate = new Date(2024, 0, 1) 
//let myCreateDate = new Date(2024,  0, 1, 6, 10)
//let myCreateDate = new Date ("2024-02-10")
let myCreateDate = new Date ("05-15-2024")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now() //timestamp gives us the miliseconds 
// console.log(myTimeStamp); 

// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()

// console.log(newDate);
// console.log(newDate.getDay);
// console.log(newDate.getMonth);

//`${newDate.getMonth} and the time is this and then` //then we give .getmonth we get moth and to get time and also the day, this is backticks
// string interpulation means backticks

newDate.toLocaleString('default', {
    weekday: "long"
})
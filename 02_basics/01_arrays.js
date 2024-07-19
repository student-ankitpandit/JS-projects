//arrays

const myArr = [0, 2, 5, 7, 9]
const myNewArr = [5, 40, 15, 60]

const myArr2 = new Array(1, 3, 5, 8)
// console.log(myArr[4]);

//array methods

// myArr.push(10)
// console.log(myArr);
// myArr.pop();

myArr.unshift(10)
// console.log(myArr);

myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(6)); //values that are includes in the myArr
// console.log(myArr.indexOf(7)); //values that are includes in the myArr

const newArr = myArr.join() //use change the type into string

// console.log(myArr);
// console.log(typeof newArr);

//slice or splice

console.log("A", myArr);

const mya1 = myArr.slice(1,3)

console.log(mya1);
console.log("B", myArr);

const mya2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(mya2);
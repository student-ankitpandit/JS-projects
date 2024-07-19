// const score = 400;
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(3));

// const otherName = 124.97864
// console.log(otherName.toPrecision(1));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

//*************************** maths ***************************** */
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.8));
// console.log(Math.min(5, 2, 6, 10));
// console.log(Math.max(5, 2, 6, 10));

console.log(Math.random()); //gives values in range of 0 and 1
console.log((Math.random()*10) + 1); //avoid 0 cases if we use math.floor then function gives round off value that we know  
console.log(Math.floor(Math.random()*10) + 1);

const min = 20
const max = 50 


console.log(Math.floor(Math.random()*(max - min + 1)) + 1); //here we do the same thing that we do above to avoid zero cases here we do min - min because of we get the range that min itna chahiye or min aage kitne bhi ho 
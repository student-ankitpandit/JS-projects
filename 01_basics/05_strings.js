// const name = "ankit" //declaring string type 1
// const repoCount = 2

// console.log(name + repoCount + " value"); //not a good pratice it is outdated now

console.log(`hello my name is ${name} and my repoCount is ${repoCount}`); //this is backtick  syntax

const gameName = new String('ankit-kmr-in') //declaring string type 2

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4);
// console.log(newString);

// const anotherString = gameName.slice(-5, 4);
// console.log(anotherString);

const newStringOne = "    ankit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ankitpandit.com&%20ankitpandit"

console.log(url.replace('&%20', '_'));

console.log(url.includes('ankitpandit'));

console.log(gameName.split('_'));
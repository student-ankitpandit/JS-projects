// var c = 300

let a = 300 //global
if(true) {
    let a = 50
    const b = 90
    // console.log("inner: ", a) //inner
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "ankit"

    function two(){
        const website = "google & youtube"
        // console.log(username);
    }
    // console.log(website);

    // two()
}

// one()

if(true){
    const username = "ankit"
    if(username === "ankit"){
        const web = " google"
        // console.log(username + web);
    }
    // console.log(web);
}

// console.log(username);

console.log(addone(6));
function addone(num){
    return num + 1;
}

addtwo(5)
const addtwo = function(num){ //declare a function a hold it in a variable
    return num + 2;
}
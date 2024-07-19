// Immediately Invoked Function Expression IIFE

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED PERFECTELY ${name}`);
} ) ("ankit")


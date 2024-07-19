const accountId = 155624
let accountEmail = "ankit@google.com"
var accountPassword = "12345"
accountcity = "delhi"
let accountState;

// accountId = 2 //not allowed
/*
prefer not to use var because of issue in block scope and functional scope
*/

accountEmail = "ap@ap.com"
accountPassword = "12121212"
accountcity = "bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountcity, accountState])
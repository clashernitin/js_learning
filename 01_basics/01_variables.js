const accountId = 114229
let accountEmail = "ns@gmail.com"
var accountPassword = "123456"
accountCity = "Greater Noida" // possible but should not be used

let accountState;

// accountId = 2 //Not allowed
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


accountEmail = "ns@ns.com"

accountPassword = "11111"

accountCity = "Delhi"

console.table([accountId, accountEmail, accountPassword, accountCity]);


console.log(accountId);

/* Prefer Not to use Var because of issue in block scope & functional scope . */
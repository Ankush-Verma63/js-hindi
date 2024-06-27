const accountId = 144553
let accountEmail = "ankush@google.com"
var accountPassword = "12345"
accountCity = "Lucknow"
let accountState;
//accountId = 2 // not allowed

accountEmail = "hp@hp.com"
accountPassword = "21212121"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not use to var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
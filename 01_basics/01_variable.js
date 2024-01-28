const accountId = 12315
let accountEmail = "harshit@g.com"
var accountPass = "12345"    /*Prefer not to use var because of issue in block scope and functional scope */
accountCity = "Delhi"


// accountId = 2 //not allowed

accountEmail = "aj@fk.ci"
accountPass = "jsa"
accountCity = "new delhi"


console.log(accountId);

console.table([accountId, accountEmail, accountPass , accountCity])

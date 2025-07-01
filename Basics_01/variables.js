const accountId = 1223334444;
let accountEmail = "vansh@google.com";
var accountPassword = "1234";
accountCity = "Delhi";   // Please not use this method and ensure use keyword for variables
let accountState;

// accountId = 1234567; should not be used for (const)
console.log(accountId); 

// accountEmail = "vansh@apple.com";  should be change for (let) 
accountEmail = "vansh@apple.com";
console.log(accountEmail);

/*
    Prefer: Not to use (var)
    because of issue in block scope and functional scope 
*/
accountPassword = "Hello JS!";
console.log(accountPassword);

accountCity = "Mumbai";
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); 
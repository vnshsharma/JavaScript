// singleton 

// Object literals 

const mySym = Symbol("key1");

const JsUser = {
    name : "Vansh",
    "full name" : "Vansh Sharma",
    [mySym] : "myKey1",
    age : 18,
    location : "Delhi",
    email : "vansh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"],
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);


JsUser.email = "vansh@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "vansh@microsoft.com";
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greetingTwo());
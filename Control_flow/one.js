// if 
// const isUserloggedIn = true;
// const temperature = 51;

// if (temperature < 50){
//     console.log("less than 50");
// } else {
//     console.log("greater than 50");
// }

// console.log("greater than 50");

// <, >, <=, >=, ==, !=, ===



// const score = 200
// if (score > 100){
//     let power = "fly";
//     console.log(`User power ${power}`);
// }
// console.log(`User power ${power}`); 



// const balance = 1000;
// if (balance > 500) console.log("test");

// if (balance < 500){
//     console.log("less than");
// } else if (balance < 750){
//     console.log("less than 500");
// } else if (balance >= 1000){
//     console.log("greater than 1000");
// } else {
//     console.log("NaN");
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard){
    console.log("Allow to buy Course");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged In");
}
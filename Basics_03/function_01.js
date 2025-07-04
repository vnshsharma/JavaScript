// functions 

// function sayMyName(name){
//     console.log(name);
// }
// name = "Vansh";
// console.log(sayMyName(name));

function add(num1, num2){
    let sum = num1+num2;
    return sum;
}
const total = add(2,5);
// console.log(sum);

function loginUserMessage(username = "sam"){
    if (!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
// const message = loginUserMessage("Sam Manekshaw");
const message = loginUserMessage();
// console.log(message);



// NOTICE: 
function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(100,200,300,2000))


// NOTICE:
const user = {
    username : "Vansh",
    price : 199,
}
function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);
handleObject({
    username: "sam",
    price : 100,
})

const Arr = [200, 400, 600, 100];
function returnSecondValue(getArr){
    return getArr[1];
}
console.log(returnSecondValue(Arr));
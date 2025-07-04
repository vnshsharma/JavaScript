// (this) Working in Object not in function

const user = {
    username: "Vansh",
    price: 199,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "vansh";
//     console.log(this.username);
// }
// chai();

// const chai = function(){
//     let username = "vansh";
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "vansh";
    console.log(this);
}

// chai()

// **************** Arror function *****************

// Method 1;
const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(3,4));

// Method 2;
// const one = (num1, num2) => (num1+num2);   Use always parenthesis
const one = (num1, num2) => ({username: "Vansh"});

console.log(one(3,4)); 
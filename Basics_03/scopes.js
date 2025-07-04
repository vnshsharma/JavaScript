// Scope

// var c = 300;
let a = 300;

if (true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("INNER: ",a);
}

// console.log(a); 
// console.log(b);
// console.log(c); 



// NOTICE: (Nested Scope)
function one(){
    const username = "vansh";
    function two(){
        const website = "chrome";
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true){
    const username = "Vansh";
    if (username === "Vansh"){
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);





// ****************** Interesting *********************

// function one
console.log(addone(5));
function addone(num){
    return num+1;
}


//  function Two
const addTwo = function(num){
    return num+2;
}
addTwo(5);
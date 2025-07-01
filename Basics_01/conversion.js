// Conversion into Number 
let score = "23abc";
console.log(typeof(score));

// Conversion of string in Number 
let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);  // Type of NaN


let value = null;
let valueInNumber_01 = Number(value);
console.log(typeof(valueInNumber_01));
console.log(valueInNumber_01);


/* NOTES:
----->(Convert into a Number)
"33" => 33
"33abc" => NaN
true => 1
false => 0
null => 0
undefined => NaN
"Vansh" => NaN     */



// Conversion into boolean
let isLoggedIn = "Vansh";
let booleanIsLoogedIn = Boolean(isLoggedIn);
console.log(booleanIsLoogedIn);
console.log(typeof(booleanIsLoogedIn));

/* NOTES:
---> Conversion into Boolean
1 => true
0 => false
"" => false
"vansh" => fasle    */


// Conversion into String 
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));



// ******************** Operations ********************//
let number = 3;
let negNumber = -number;
console.log(negNumber);

// console.log(3+3);
// console.log(3-3);
// console.log(3*3);
// console.log(3**3);
// console.log(3/3);
// console.log(3%3);

let str1 = "hello";
let str2 = " Vansh";
console.log(str1+str2);


// NOTE: 
console.log(1+"3");
console.log("2"+1);
console.log("1"+2+3);
console.log(1+2+"3");    // Important


// Tricky Conversion
console.log(true);
console.log(+true);  // Tricky  (+ do conversion into number)
console.log(+"");


let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);
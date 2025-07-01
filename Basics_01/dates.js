// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toUTCString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toDateString());



// let myCreateDate = new Date(2025,0,23,5,3);
// let myCreateDate = new Date("2025-00-14")
let myCreateDate = new Date("01-14-2025")
console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
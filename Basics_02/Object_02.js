// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "sam@gmail.com",
    fullname : {
        userfullname : {
            firstname: "Vansh",
            lastname: "Sharma",
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

// Merging of an Object 
const obj1 = {
    1 : "a",
    2 : "b",
}
const obj2 = {
    3 : "c",
    4 : "d",
}
// const obj3 = Object.assign({},obj1,obj2);
const obj3 = {...obj1, ...obj2};
console.log(obj3)

const users = [
    {
        id : 1,
        email : "v@gmail.com",
    }
]
// users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser)); 
// ------------------------------- Exercise Chapter # 1 ------------------------------- 

// Difference between let, var and const in JavaScript 
// var was used before ES6 (ECMAScript-6{Modren Javascript})
// var makes your variable a globle-variable
// let is block-variable(Scope variable)
// var can introduce bugs, means you can redeclare variables i.e. var a = 5; var a = 6 
// const means that value can't be change.

console.log("JavaScript Tutorial no 3");

var a = 45;
var c = undefined;
var d = null;

// Example no1: 
// var b = "harry";
// {
//     var b = "this";
//     console.log(b);
// }
// console.log(b);

// Example no2: 
let b = 7;
{
    let b = "this";
    console.log(b);
}
console.log(b);

// Example no3: 
const author = "saran";
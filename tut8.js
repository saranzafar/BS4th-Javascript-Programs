// ------------------------------- Exercise Chapter # 2 ------------------------------- 

// Q1: Age lies between 10 to 20 using switch
/*  
let age = prompt("what is your age: ");
if (age > 10 && age < 20) {
    console.log("your age lies between 10 and 20");
}
else {
    console.log("your age does't lies between 10 and 20");
}
*/

// Q2: Age lies between 10 to 20 using switch  
/*
let age = prompt("what is your age: ");
age = Number.parseInt(age)//converting the string to aa integer

switch (age) {
    case 12:
        console.log("your age is 12");
        break;
    case 13:
        console.log("your age is 13");
        break;
    case 14:
        console.log("your age is 14");
        break;
    case 15:
        console.log("your age is 15");
        break;

    default:
        console.log("your age is not special");
        break;
}
*/

// Q3: divisible of 2
/*
let num = prompt("what is your age: ");
num = Number.parseInt(num)//converting the string into integer]
if (num % 2 == 0 && num % 3 == 0) {
    console.log("your number is divisible by 2 and 3");
}
else {
    console.log("your number is not divisible by 3");
}
*/
// Q3: using ternory operator
let age = 12;
let a = age > 18 ? "you can Drive" : "You can't drive";
console.log(a);

// ---------------- Conditional Expression ---------------- 
// Run this code in chrome 'console' option 

let a = prompt("Hey what's your age: ");//By default it take input as a "string"

a = Number.parseInt(a)//converting the string to aa integer
// Example no 1:
// if (a>0) {
//     alert("this is a valid age");
// }
// else{
//     alert("this is not valid age");
// }

// Example no 2:
if (a > 0 && a < 7) {
    alert("this is a valid age");
}
else if (a < 15) {
    alert("ja tur ja");
}
else if (a < 18) {
    alert("Ruko Jra Sbr Kro");
}
else {
    alert("this is not valid age");
}

// ternary Operator 
let age = 0;
console.log("Enter your age: ");

console.log("You an ", age < 18 ? "not derive" : "drive");


// HomeWork: use switch 

let name = prompt("Enter Yuor's Favrouit Fruit name:");
switch (name) {
    case "Apple", "apple":
        alert("Apple is your Favrouit Fruite");
        break;
    case "Mangow", "mangow":
        alert("Mangow is your Favrouit Fruite");
        break;
    case "banana":
        alert("Banana is your Favrouit Fruite");
        break;

    default:
        alert("Sorry this Fruit is not Available");
        break;
}
/* 
------------- Expressions and Operators -------------

Expressions : value that canbe given to a const/variable
Operators: 2+2 = 4, '2' is operand '=' is operator and '4' is result
binod 
*/
let a = 4;
let b = 8;
// Arithmetic Operators 
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a / b = ", a / b);//it shows acurate value
console.log("a * b = ", a * b);//times
console.log("a ** b = ", a ** b);//4 power 8
console.log("a % b = ", a % b);//4 divided by 8 and reminder comes Ans:
console.log("a++ = ", a++);//post-incremental
console.log("a = ", a);//incremental
console.log("++a = ", ++a);//pre-incremental
console.log("a = ", a);//incremental
console.log("a-- = ", a--);//decremental
console.log("a = ", a);//incremental

// Assignment Operators 
a = 7;
console.log("a  ", a);//incremental
// a += 5 same as a = a+5, and so on 
console.log("a  ", a);//incremental

// Comparison Operators 
let comp1 = 6;
let comp2 = 7;
let comp3 = 10;
let comp4 = '10';
console.log("comp1 == comp2 ", comp1 == comp2);
console.log("comp1 != comp2 ", comp1 != comp2);
console.log("comp3 === comp4 ", comp3 === comp4);//it matches its data-type
console.log("comp3 !== comp4 ", comp3 !== comp4);//it matches its data-type
console.log("comp3 < comp4 ", comp3 < comp4);

// Logical Operators 
let x = 5;
let y = 6;
console.log("x > y && x == 5", x > y && x == 5);//AND operator: true true = true, otherwise it is false.
console.log("x > y || x == 5", x > y || x == 5);//OR operator: False False = False, otherwise it is true.
console.log("!true = ", !true);//NOT operator: reverse output.

// Bitwise Operators...

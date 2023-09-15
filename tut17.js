// ------------------- Chapter # 5 -------------------

// More about Array(methods, functions etc)

let num = [1, 2, 3, 4];
// 1. 
let b = num.toString();//changing numbers to string
console.log(b);
console.log(typeof b);

// 2. 
let c = num.join("_");//joining "_" into array
console.log(c);
console.log(typeof c);

// 3.
let r = num.pop();//remove last element from array
console.log(num);
console.log(r);//it returns poped element or return number of element that were poped
console.log(typeof r, "\n\n");

// 4.
let r1 = num.push(5577);
console.log(num);
console.log(r);
console.log(typeof r1, "\n\n");

// 5.
let num1 = [101, 22, 33, 44, 3]
let r2 = num1.shift();//remove element from start of the arry and pop it up
console.log(num1);
console.log(r2);
console.log(typeof r2, "\n\n");

// 6.
let num2 = [12, 13, 14, 15, 5]
let r3 = num2.unshift(76);//add element from start of the arry 
console.log(num2);
console.log(r3);//return how many elements stored in array
console.log(typeof r3, "\n\n");
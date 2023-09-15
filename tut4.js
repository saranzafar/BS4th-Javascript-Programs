// ------------------------------- Chapter # 2 ------------------------------- 

// Primitives Data-Type/ Non-Primitives Data-Type 
// DataType: type of data that can a variable store. 

// there ane 7 Primitives data types in js 
// N umber
// N ULL
// S ymbol
// S tring 
// B oolean 
// B igInt 
// U  ndefined

// Non-Primitives Data-Type 
// Object 

let a = null;
let b = 56;
let c = true;
let d = BigInt("656") + BigInt("4");
let e = "harry";
let f = Symbol("I am a nice Symbol");
let g = undefined;// by default all variables that are not initilize are "undefined";

console.log(a, b, c, d, e, f, g);

console.log(typeof (d));

//  Non-Primitives data types in js 
const item = {
    age: 66,
    "name": true,
    "harry": false,
    "d": 67,
    "sam": undefined,
}
// console.log(item);
console.log(item.age);
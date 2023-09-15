// ------------------- Chapter # 5 -------------------

// loops with Array 
let num = [3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < num.length; i++) {
    // console.log(num[i]);
}

num.forEach((element) => {
    // console.log(element * element);
});


let nam = "harry"
let arr = Array.from(nam);//convert string(,object) into Array
console.log(arr);


// for of 
for (let i of num) {
    console.log(i);//shortcut way to print array and more
}


// for in 
for (let i in num) {
    console.log(i);//it returns key( or index number) of array
    console.log(num[i]);//it returns key( or index number) of array

}




/*
--> ---------- usage of Array.from ------------------
-->  document.getElementsByClassName('.error-code ')
-->  HTMLCollection []length: 0[[Prototype]]: HTMLCollection

-->  let a = document.getElementsByClassName('.error-code ')
-->  undefined
-->  typeof a
-->  'object'

-->  a.forEach()
-->  VM826:1 Uncaught TypeError: a.forEach is not a function
-->      at <anonymous>:1:3
-->  (anonymous) @ VM826:1

-->  Array.from(a)
-->  [] //returns array
*/
// ------------------- Chapter # 5 -------------------

// map filter and reduce 
// these functions does't change original array 


//1. Array Map Method 
// let arr = [45, 23, 21];
// let a = arr.map((value, index, array) => {
//     //map makes additional array
//     console.log(value, index, array);
//     return value + index;
// })
// console.log(a);

//2. Array Filter method 
// let arr2 = [23, 34, 91, 2, 12];
// let a2 = arr2.filter((a) => {
//     return a < 30;//this function return 'true' for those elements whose is less then 30.  
// });
// console.log(a2);

// 3. reduce method 
let arr3 = [1, 2, 3, 5, 2, 1];
let a3 = arr3.reduce((h1, h2) => {
    return h1 + h2;
    //working: 1+2 = 3; 3+3 = 6; 6+5 = 11; 11+2 = 13; 13+1 = 14, which is your answer.
});
console.log(a3);
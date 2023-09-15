// ------------------- Chapter # 5 Exercise -------------------

// Qno1: Push a number to array
// let arr = [1, 2, 3, 4, 5, 83];
// let a = prompt("Enter a number: ");
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);


// Qno2: add number until '0' added
// let arr = [1, 2, 3, 4, 5, 83];
// let a;
// do {
//     a = prompt("Enter a number: ");
//     a = Number.parseInt(a);
//     arr.push(a);
//     console.log(arr);
// } while (a != 0);

// Qno3: use filter, print number that is divisible by 10.
// let arr = [10, 2, 3, 40, 5, 23, 440, 80];
// let n = arr.filter((x) => {
//     return x % 10 == 0;
// });
// console.log(n);

// Qno4: return square of given array
// let arr = [10, 2, 3, 40, 5, 23, 440, 80];
// let n = arr.map((x) => {
//     return x * x;
// });
// console.log(n);

// Qno5: calculate factorial using reduce method
let arr = [1, 2, 3, 4];
let n = arr.reduce((x1, x2) => {
    return x1 * x2;
});
console.log(n);

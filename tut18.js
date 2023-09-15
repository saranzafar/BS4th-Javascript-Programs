// ------------------- Chapter # 5 -------------------

// More about Array
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num2 = [11, 12, 13, 14, 15, 16, 17]
let num3 = [561, 962, 143, 314, 215, 816, 17]

// // 1. delete 
// delete num[2];//length does't effect but it delete element permanent
// console.log(num);

// // 2. concat
// let newArr = num.concat(num2, num3);
// console.log(newArr);

// 3. sort
let compair = (a, b) => {
    console.log("a and b is", a, b);
    return b - a;
}
console.log(num3.sort(compair));//it will change real array order
num3.reverse();
console.log(num3);

// 4. splice 
let num4 = [11, 12, 13, 14, 15, 16, 17]
let ret = num4.splice(2, 3, 1001, 1002, 1003)//(k-Han pr number add krny hain, kitny numbers delete krny hsain)
console.log(num4);
console.log(ret);//return deleted value


// 5. slice 
let num5 = [101, 102, 103, 104, 105, 106, 107, 108, 109];
// let retu = num5.slice(3);
let retu = num5.slice(3, 7);
console.log(num5);
console.log(retu);

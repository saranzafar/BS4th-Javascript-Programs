// ------------------- Chapter # 5 -------------------

// Array in js 
let marks_class_12 = [41, 52, 93, 48, 75, null, undefined, "not present"];
console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log("length of marks of class 12 is", marks_class_12.length);

marks_class_12[3] = "abc";//changing values of array

console.log(marks_class_12);
console.log(typeof marks_class_12);

// Quick Quiz: print array value using loop
let arr = ['we', 2, 3, "this is ", null, 334, false];
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    // console.log(arr);//printing whole array in one line
}
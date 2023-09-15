// --------------------------------- Chapter # 3 Exercise ---------------------------------

// Qno1: print marks and name of student.
let marks = {
    harry: 90,
    abc: 30,
    def: 9,
    ghi: 72,
    jkl: 92,
}
// for (let i = 0; i < Object.keys(marks).length; i++) {
//     //it "  Object.keys(marks) " returns keys as an array i.e. [harry],[abc] vice versa.
//     console.log("the marks of ", Object.keys(marks)[i], "are", marks[Object.keys(marks)[i]]);
// }
for (const key in marks) {
    console.log("the marks of", key, "are", marks[key]);
}

// Qno2: program will not terminate until user enter correct number
let cn = 4;
let i;
while (i != cn) {
    i = prompt("Enter a number: ");
}
alert("You entered correct number");

// Qno3:calculate mean of four number
let mean = (a, b, c, d) => {
    return (a + b + c + d) / 4;
}
console.log(mean(4, 5, 6, 7));

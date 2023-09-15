// ------------------------------- Chapter # 3 -------------------------------

/*
Loops, Types of loop

1. for loop 
2. for in loop 
3. for of loop
4. while loop
5. do-while loop
*/

// 1. for loop 
let sum = 0;
let n = 4;

for (let index = 0; index < n; index++) {
    sum += index;
}
console.log(`the sum of first ${n} numbers is: ${sum}`);

// Quick Quiz: write a sample for loop program 

// 2. for in loop 
let obj = {
    harry: 90,
    abc: 40,
    def: 74,
    ghi: 95,
    jkl: 20,
}
for (const a in obj) {
    console.log("Marks of " + a + " is " + obj[a]);
}

// 3. for of loop 

for (let b of "harry") {
    console.log(b);
}

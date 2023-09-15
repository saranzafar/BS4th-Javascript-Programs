// ----------------------- Ch # 4 ----------------------- 
// More About String 
//original string can't be change
let nm = "harry\n";
let friend = "shubam";
let friend2 = "          mena  manana       manana    "
console.log(nm.length);
console.log(nm.toUpperCase());
console.log(nm.toLowerCase());
console.log(nm.slice(2, 4));
console.log(nm.slice(2));
console.log(nm.replace("rry", "bam"));
console.log(nm.concat("this is ", friend));
console.log(friend2.trim());//remove spaces from start and end
console.log(friend[2]);

// Quick Quiz: use for loop to print string character by character
let str = "hi how are you\ni am fine";
for (i = 0; i < str.length; i++) {
    console.log(str[i]);
}
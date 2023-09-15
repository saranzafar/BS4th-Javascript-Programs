// ----------------------- Ch # 4 ----------------------- 
// Strings in js 

let name = "harry";
console.log(name.length);//The declaration was marked as deprecated here.

let abc = 'abc';
console.log(abc);
console.log(abc[0]);
console.log(abc[1]);
console.log(abc[2]);

// templet literals
let boy1 = "abc";
let boy2 = "def";
let sentencs = `${boy1} is friend of ${boy2}`//string interpulation
console.log(sentencs);


// Escape Sequence 
let fruit = 'Banana\'s and \napple mango \t are \" good\r enough';
console.log(fruit);

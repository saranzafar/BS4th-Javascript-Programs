// ----------------------- Ch # 4 Exercise ----------------------- 

// Qno1:
console.log("har\"".length);

// Qno2:
const sentence = "The Quick Brown Fox Jumps Over A Lazy Dog";
const word = "Fox"
// console.log(sentence.includes(word));//returns "return "true" if "word" exist in sentence, otherwise it return "false"
console.log(`the word ${word} ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// Qno3:
console.log("start with");

// Qno4:
console.log("ends with");

// Qno5:
console.log(sentence.toLowerCase());

// Qno6:
let str1 = "please give RS 1000"
// let str2 = str1.slice("please give RS".length)
let str2 = Number.parseInt(str1.slice(15));

console.log(str2);

// Qno7:
let friend = "dipika";
friend[3] = 'z';// it does't change its fourth character because string is "immutable"
console.log(friend);

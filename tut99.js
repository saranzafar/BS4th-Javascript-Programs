// Regular Expressions: use to help out for searching and manipulating text
// website: regExr, goto this webSite and explore it

// const regx = /very/g//it means to change all occurance of very
const regx = /(harry){2}/gi //it means to change all occurance of very
// . for many, \d for digit, /^a/ for whole line, \. for special character, () for group,(abc)* for 0 or more, ('harry){2}
const text = " harryharry is a very very nice very awsome nice very body"
console.log(text.replace('very', 'VERY'));//chande only one occcurance
console.log(text.replace(regx, 'VERY'));//chande all occcurance
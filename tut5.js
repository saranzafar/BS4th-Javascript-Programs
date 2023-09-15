// Chapter 1 Practice

// Q1: Create a variable of string and add a number 
let a = "harry";
let b = 56;
console.log(a + b);

// Q2: now find its datatype
console.log("type of a+b is:", typeof (a + b));

// Q3: create a const object in Js, can u change it to hold a number 
const c = {
    name: "harry",
    section: 1,
    isprincipal: false
}
// c = "ss";

// Q4: try to add a new key to const
c['friend'] = "shubam";//adding friend in c
c['name'] = "hi";//adding friend in c, you can't change object value but you can change a const obj

console.log(c);

// Q5: create a dictonary
const dict = {
    save: "saving something",
    avtar: "a movie",
    saran: "the begning",
}
console.log(dict['saran']);// there are two types of syantex to acces it
console.log(dict.saran);// there are two types of syantex to acces it

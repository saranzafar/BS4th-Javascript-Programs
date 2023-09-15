//  ---------------------- Ch # 9 ------------------  
// intro to promisis  


// the solution of call-back hell is promisis 

let promise = new Promise(function (resolve, reject) {
    // there is two properties in promise 1.state  2.result 
    console.log("i am in promise");
    resolve(56);
})


console.log("hello 1");
setTimeout(() => {
    console.log(" hellow in 2 sec");

}, 2000);
console.log("hellow 3");
console.log(promise);


// we want to run this code parallelly so no need to run this code one-by-one
// fetch google.com home page ==> console.log("google.com home page")
// fetch data API
// fetch pictures from the server
// rest of js


// ------------------- Modules in js -------------------  

// 1. Commom JS 
const hello = () => {
    console.log('hello harry 1');
}
const ahello = (name) => {
    console.log('hello harry 2', name);
}

// module.exports = hello//exporting 'hello to 'tut97b.js'
// export default hello//exporting 'hello

module.exports = { hello, ahello }
// module.export = { hello: hello, ahello: ahello }//no need to do like this


// 2. ES6 Modules
// tut97b 



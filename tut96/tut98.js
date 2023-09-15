// Express: used to make custome backed for web pages 

/* 
1. npm install express 
2. goto express official website, goto 'getting starting => hello world', paste app/code
3. npm i -g nodemon
4. run file 'nodemon tut98.js' 
5. configure 'tailwind css' to express
6. how to serve file using express
7. npm i -g nodemon
8. nodemon .\tut98.js
*/
const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));//(__dirname 
  // console.log(req);//http://localhost:3000/?name=Harry
  // console.log(req.query);//{ name: 'Harry' }  this comes on console
  // res.send('Hello World!')
})
app.get('/about', (req, res) => {
  // app.use(express.static(path.join(__dirname, 'public')))
  // res.send('about')//http://localhost:3000/about
  res.sendFile(path.join(__dirname, './about.html'));//(__dirname 
})
app.get('/contactUs', (req, res) => {
  res.send('contactUs')
})
app.get('/map', (req, res) => {
  res.send('map')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
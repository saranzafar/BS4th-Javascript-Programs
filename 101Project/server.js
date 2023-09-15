// npm i express
// npm i -g nodemon
// npm i multer
const express = require('express')
const path = require('path')
const app = express()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const { mergepdf } = require('./merge.js')
app.use('/static', express.static('public'))
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "templet/index.html"))
});

app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
    console.log(req.files)
    let d = await mergepdf((path.join(__dirname, req.files[0].path)), (path.join(__dirname, req.files[1].path)))
    res.redirect(`http://localhost:3000/static/${d}.pdf`)

    // res.send({ data: res.files })
    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});
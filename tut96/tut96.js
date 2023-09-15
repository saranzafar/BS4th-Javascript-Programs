// if you type 'code .', vs code will open  
// console.log('hey i am good');

// 1. npm init: (node package manager) if you want to create an npm folder 
// 1. npm init -y: if you want to create npm folder quickely 
//2. advantages of this is we can add modules to our project
//3. npm i pdf-node: here you can download any module i download it for test purposes
//4. node modules: A folder arrives in this directry/Folder which contain all modules that are downloaded and there all information stored in "package.json"
//                 so if u delete "node_modules" folder(its size will grow as doller value increse), u can regenrate using "package.json" by running this 
//                 command in terminal "npm install"
//5. we can use 'yarn' instead of 'npm' package manager
//6. 

//Required package
var pdf = require("pdf-node");
var fs = require("fs");

// Read HTML Template
var html = fs.readFileSync("tut96.html", "utf8");
var options = {
    format: "A3",
    orientation: "portrait",
    border: "10mm",
    header: {
        height: "45mm",
        contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    },
    footer: {
        height: "28mm",
        contents: {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }
    }
};

var users = [
    {
      name: "tom",
      age: "21",
    },
    {
      name: "jack",
      age: "23",
    },
    {
      name: "harry",
      age: "29",
    },
  ];
  var document = {
    html: html,
    data: {
      users: users,
    },
    path: "./output.pdf",
    type: "pdf",
  };
  // By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.
// console.log(pdf.create)
  pdf(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
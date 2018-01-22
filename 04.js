const fs = require('fs');

let path = process.argv[2];

fs.readFile(path, (err, content)=>{
    console.log(content.toString().split("\n").length-1);
});
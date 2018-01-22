const fs = require('fs');

let path = process.argv[2];
let str = fs.readFileSync(path).toString();

let str2 = str.split("\n");

console.log(str2.length-1);
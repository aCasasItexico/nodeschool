var path = require('path');
var modulo = require('./06b');
var carpeta = process.argv[2];
var ext = process.argv[3];

var call = (err, list) => {
    if (err) throw err;
    list.forEach(file => console.log(file));
}

modulo(carpeta, ext, call);
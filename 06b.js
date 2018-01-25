var fs = require('fs');
var p = require('path');

// call is a keyword in js, may you can use 'cb' instead
// https://www.w3schools.com/js/js_function_call.asp

module.exports = (path, ext, call) => {
    fs.readdir(path, (err, list) => {
        if (err) return call(err);
        else {
            list = list.filter(function (file) {
                if(p.extname(file) === '.' + ext) return true;
            })
            return call(null, list);
        }
    })
}
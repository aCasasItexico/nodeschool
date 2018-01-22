var fs = require('fs');
var p = require('path');

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
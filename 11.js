const http = require('http');
const fs = require('fs');
const port = process.argv[2];
const fileName = process.argv[3];

let server = http.createServer((request, response) => {
    fs.createReadStream(fileName).pipe(response);
});

server.listen(port);
import video from './video.js';

var http = require('http');
var fs = require('fs');

fs.readFile('./public/index.html', (err, html) => {
    if (err) throw err;

    http.createServer((req, res) => {
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write(html);
        res.end();
    }).listen(process.env.PORT || 5000);
});

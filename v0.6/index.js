var http = require('http');
var fs = require('fs');

const PORT = 8000;

http.createServer((request, response) => {
    var filePath = '.' + http.request.url;

    console.log(http.request);

    fs.readFile(filePath, (error, content) => {
        response.writeHead(200, { 'Access-Control-Allow-Origin': '*' });

        if (error) {
            if (error.code == 'ENOENT') {
                fs.readFile('./404.html', (error, content) => {
                    response.end(content, 'utf-8');
                });
            } else {
                response.writeHead(500);
                response.end('An unknonw error as occured. Error code: ' + error.code);
                response.end();
            }
        }
        else {
            response.end(content, 'utf-8');
        }
    });
}).listen(PORT);

console.log('Server running at port : ' + PORT);

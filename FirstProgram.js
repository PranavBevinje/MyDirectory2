var http = require('http');

http.createServer(function (req, res) 
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World! Its me Pranav from my sweet home');
}).listen(9999);

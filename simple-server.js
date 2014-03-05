var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world\n');
});

server.listen(3000);
console.log('App is running on port 3000');

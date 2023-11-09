const http = require('http');

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8 '});
    res.write('<h1>서버가 동작 중입니다.</h1>')
    res.end('<h1>Hello Node!</h1>');
})

server.listen(3000, function() {
    console.log('Listening Server at 3000');
})
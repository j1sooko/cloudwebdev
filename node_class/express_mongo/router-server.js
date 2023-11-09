const http = require('http');
const fs = require('fs').promises;
const url = require('url');

http.createServer(async (req, res) => {
    let pathname = url.parse(req.url).pathname;
    console.log(pathname);
    console.log(req.method);
    if (req.method == 'GET') {
        if (pathname == '/') {
            const data = await fs.readFile('./index.html');
            res.end(data);
        } else if (pathname == '/person') {
            console.log(pathname);
            res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8',
            });
            res.end(
            JSON.stringify({ name: '손흥민', age: 30, email: 'a@.naver.com' })
            );}
 } else if (req.method == 'POST') {
        res.end(req.method);
    }
}).listen(3000, () => {
    console.log('Server running at 3000');
});
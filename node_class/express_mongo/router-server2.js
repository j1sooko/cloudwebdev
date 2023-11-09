const http = require('http');
const url = require('url');

http.createServer(async (req, res) => {
    let pathname = url.parse(req.url, true).pathname;

    if (pathname === '/user') {
        res.end("[user] name : jisoo, age: 24");
    } else if (pathname === "/feed") {
        res.end(`<meta> charset="utf-8">
        <ul><li>picture1</li>
        <li>picture2</li>
        <li>picture3</li></ul>`);
    } else {
        res.statusCode = 404;
        res.end("404 page not found");
    }
}).listen(3000, () => {
    console.log('라우터를 만들어보자!');
});
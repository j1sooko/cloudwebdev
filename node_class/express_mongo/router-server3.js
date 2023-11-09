const http = require('http');
const url = require('url');

const user = (req, res) => {
    const user = url.parse(req.url, true).query;
    res.end(`[user] name : ${user.name}, age: ${user.age}`);
};

const feed = (req, res) => {
    res.end(`<ul>
    <li>picture1</li>
    <li>picture1</li>
    <li>picture1</li></ul>`);
};

const notFound = (req, res) => {
    res.statusCode = 404;
    res.end("404 NOT FOUND");
};

const urlMap = {
    "/" : (req, res) => res.end("HOME"),
    "/user" : user,
    "/feed" : feed
};


http.createServer((req, res) => {
    const pathname = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "test/html");

    if (pathname in urlMap) {
        urlMap[pathname](req, res);
    } else {
        notFound(req, res);
    }
}).listen(3000, () => {
    console.log('라우터를 리팩토링 해보자!');
});
const http = require("http");
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("OK");
});

server.listen("3000", () => console.log("Server Listening at 3000"));



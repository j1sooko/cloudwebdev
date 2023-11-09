const http = require('http');
const fs = require('fs')

// const htmlData = fs.readFile('./index.html', (err, data) => {
//     if (err)
//         throw err;
//     return data.toString();
// })

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' });
//     res.write(htmlData);

// });

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
        res.end(data);
    })
});

server.listen(3000, () => {
    console.log('Listening Server at 3000');
})
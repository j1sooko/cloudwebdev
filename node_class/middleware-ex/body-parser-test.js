const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;

app.use(morgan('dev'));
// 요청을 application/json으로 보냈을때 파싱해서 req.body에 담아줌
app.use(express.json());
// 요청을 application/x-www-form-urlencoded로 보냈을때 파싱해서 req.body에 담아줌
app.use(express.urlencoded({ extended: true }));
app.post('/', (req, res) => {
    console.log('req.body: ', req.body);
    console.log(`${req.body.name}은 ${req.body.age} 세이고 ${req.body.team} 소속이다`);
    res.send(req.body);
})

app.listen(port, () => {
    console.log(`Server start at ${port}`);
})
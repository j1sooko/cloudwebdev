const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 3000;

app.use(morgan('dev')); // dev, combined, common, short, tiny 등의 인자가 올 수 있다
// 개발 환경에서는 dev를, 배포 환경에서는 combined를 이용하면 좋다

app.get('/', (req, res) => {
    res.send('OK');
});

app.get('/', (req, res) => {
    res.send('OK');
});

app.listen(port, () => {
    console.log(`Server start at ${port}`);
})
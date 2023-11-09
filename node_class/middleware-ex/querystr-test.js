const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const query = req.query;
    console.log(query);
    console.log(`이름은 ${query.name}이고 나이는 ${query.age}세 입니다. `);
    res.send(query);
})

app.listen(port);
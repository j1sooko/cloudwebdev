const express = require('express');
const app = express();
const port = 3000;

let person = [];

app.use(express.json());

app.get("/", (req, res) => {
    res.send('Hello Express!');
});

app.get("/user", (req, res) => {
    res.json(
        {   datas: person,
            success: true,
            dataLength: person.length,
            message: "조회 한도를 초과했습니다."
        });
    console.log(person);
});

app.post("/user", (req, res) => {
    person.push(req.body);
    res.json(req.body);
});

app.listen(port, () => {
    console.log(`server is Listening at localhost: ${port}`);
})
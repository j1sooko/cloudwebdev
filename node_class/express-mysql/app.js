const express = require('express');
const dotenv = require('dotenv');
const mysql = require('mysql');
const morgan = require('morgan');
dotenv.config();

const dbconfig = require('./config/db');
const conn = mysql.createConnection(dbconfig);
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));   

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.listen(port, () => {
    console.log(`Server is listening at ${port}`);
}) 

app.get('/', (req, res) => {
    res.send('Home');
})

app.get('/students', (req, res) => {
    let sql = `SELECT * FROM STUDENT`;
    const query = req.query;
    if (query.major && query.grade) {
        sql += ` WHERE major = ${query.major} AND grade >= ${query.grade}`
    }

    conn.query(sql, (error, rows) => {
        if (error) {
            res.status(500).send({ sucess: false, message: error.message });
        } else {
            res.status(200).send({ sucess: true, datas: rows });
        }
    });
})


app.get('/students/:no', (req, res) => {
    const no = req.params.no;
    const sql = `SELECT * FROM STUDENT WHERE NO = ${no}`;
    conn.query(sql, (error, rows) => {
        if (error) {
            res.status(500).send({ sucess: false, message: error.message });
        } else {
            res.status(200).send({ sucess: true, datas: rows });
        }
    });
})

app.get('/cars', (req, res) => {
    let sql = `SELECT s.no AS sno, s.name, s.major, c.no AS cno, c.model FROM student s, car c WHERE s.no = c.student_no `;
    conn.query(sql, (error, rows) => {
        if (error) {
            res.status(500).send({ sucess: false, message: error.message });
        } else {
            res.status(200).send({ sucess: true, datas: rows });
        }
    });

});


app.get('/students/:no/cars', (req, res) => {
    const no = req.params.no;
    const sql = `SELECT s.no AS sno, s.name, s.major, c.no AS cno, c.model FROM student s, car c WHERE s.no = ${no} AND s.no = c.student_no`;
    conn.query(sql, (error, rows) => {
        if (error) {
            res.status(500).send({ sucess: false, message: error.message });
        } else {
            res.status(200).send({ sucess: true, datas: rows });
        }
    });

});

app.get('/students/:no/lent/books', (req, res) => {
    const no = req.params.no;
    const sql = `SELECT * FROM student WHERE no = ${no}`;
    conn.query(sql, (error, rows) => {
        let student = rows[0];
        const sql = `SELECT * FROM book WHERE student_no = ${no}`;
        conn.query(sql, (error, rows) => {
            if (error) {
                res.status(500).send({ sucess: false, message: error.message });
            } else {
                student.books = rows;
                res.status(200).send({ sucess: true, datas: student });
            }
        })
        
    });

});


app.post('/students', (req, res) => {
    const {no, name, major, grade, gender} = req.body;
    const sql = 'INSERT INTO STUDENT VALUES(?, ?, ?, ?, ?)';
    const params = [no, name, major, grade, gender];
    conn.query(sql, params, (error) => {
        let result = {};
        if (error) {
            result = { sucess: false, message: error.message, error: error };
            res.status(401).send(result);
        } else {
            result = { sucess: true, message: '추가에 성공했습니다.' };
            res.status(201).send(result);
        }
    });
})

app.put('/students/:no', (req, res) => {
    const no = req.params.no;
    const name = req.body.name;
    const sql = 'UPDATE STUDENT SET name = ? WHERE no = ?';
    const params = [name, no];
    conn.query(sql, params, (error) => {
        if (error) {
            res.status(500).send({ sucess: false, data: [], message: error.message });
        } else {
            res.status(200).send({ sucess: true, data: [], message: '수정에 성공했습니다.' });
        }
    });
})

app.delete('/students/:no', (req, res) => {
    const no = req.params.no;
    const sql = 'DELETE FROM student WHERE no = ?';
    const params = [no];
    conn.query(sql, params, (error) => {
        if (error) {
            res.status(500).send({ sucess: false, message: error.message });
        } else {
            res.status(200).send({ sucess: true, data: req.body, message: '삭제에 성공했습니다.' });
        }
    });
})





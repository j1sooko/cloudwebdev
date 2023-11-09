const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const { Op } = require('sequelize');

// model
const { Student, Car, Book } = require('./models/index.js');

const sync = require('./sync.js');
const { options } = require('./models/Student.js');
sync();
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/students', (req, res) => {
    const newStudent = {
        no: 1006,
        name: "윤재은",
        major: "사학과",
        grade: 4,
        gender: "여"
    }

    // 'INSERT INTO students VALUES(?, ?, ?, ?, ?)
    Student.create(newStudent)
        .then((data) => {
            res.status(201).send({ success: true, data: data });
        })
        .catch((error) => {
            res.status(500).send({ success: false, message: error.message });
        })
});

app.get('/students', async (req, res) => {
    // select no, name, major, grade, gender from students where major='컴퓨터공학' and grade>1 order by grade, no asc limit 1;
    const query = req.query; // major, grade
    options = { 
        attributes: ['no', 'name', 'major', 'grade', 'gender'],
        where: {
            [Op.or]: {
                major: query.major,
                grade: { [Op.gt] : query.grade }
            }
        },
        order: [['no', 'asc'], ['grade', 'asc']],
        limit: +query.size // 정수형 변환
    }; 

    try {
        const result = await Student.findAll(options);
        res.send({ success: true, data: result });
    } catch(error) {
        res.send({ success: false, message: error.message });
    }
})

app.get('/students/:id', async (req, res) => {
    // select * from student where no = :no;
    const id = req.params.id;
    const options = {
        where: {
            id: id
        }
    };
    try {
        const result = await Student.findAll(options);
        res.send({ success: true, data: result });
    } catch(error) {
        res.send({ success: false, message: error.message });
    }

})

app.put('/students/:id', async (req, res) => {
    const id = req.params.id;
    const modefied = req.body;
    const options = {
        where: {
            id: id
        }
    }

    try {
        const result = await Student.update(modefied, options);
        res.send({ success: true, data: result });
    } catch(error) {
        res.send({ success: false, message: error.message });
    }
})

app.delete('/students/:id', async (req, res) => {
    const id = req.params.id;
    const options = {
        where: {
            id: id
        }
    }

    try {
        const result = await Student.destroy(options);
        res.send({ success: true, data: result });
    } catch(error) {
        res.send({ success: false, message: error.message });
    }
});

app.post('/cars', async (req, res) => {
    const result = await Car.create(req.body);
    res.send({ success: true, data: result });
})

app.get('/students/:no/cars', async (req, res) => {
    const options = {
        include: [
            {
                model: Car,
                where: {
                    student_no: req.params.no
                },
                attributes:['no', 'model']
            }
        ]
    }
    const result = await Student.findAll(options);
    res.send({ success: true, data: result });
})

app.listen(port);
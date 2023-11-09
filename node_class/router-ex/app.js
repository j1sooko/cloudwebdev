const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config;
const port = process.env.PORT || 3000;

const mainRouter = require('./routes'); // index.js 파일명 생략가능
const studentRouter = require('./routes/student'); 
const booksRouter = require('./routes/books'); 

app.use(morgan('dev'));
app.use('/', mainRouter);
app.use('/student', studentRouter);
app.use('/books', booksRouter);

app.listen(port, () => {
    console.log(`Server start at ${port}`)
})
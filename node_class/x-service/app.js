const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const post_router = require('./routers/post_router');
const auth_router = require('./routers/auth_router');
const cookieParser = require('cookie-parser');
const isAuth = require('./routers/authorization');

dotenv.config();
const sync = require('./models/sync');
sync();

const port = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
    if (req.cookies.id) { // 없으면 {} 빈 객체 생성. null 아님 주의
        console.log(req.cookies)
    } else {
        res.cookie('id', 'jisoo', {
            maxAge: 1000000,
            httpOnly: true
        })
    }
    res.send('Hello Cookies');
});

app.use('/posts', post_router)
app.use('/auth', auth_router)
app.listen(port, () => {
    console.log(`Server Listening at ${port}`);
});
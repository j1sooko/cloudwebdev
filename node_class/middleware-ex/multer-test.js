const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;


dotenv.config();
try {
    fs.readdirSync('files');
} catch (error) {
    console.log('file 폴더 생성');
    fs.mkdirSync('files');
}

const upload = multer({ // multer 객체 생성
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'files/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
           done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
       limits: { FileSize: 10 * 1024 * 1024}
})

app.post('/upload', upload.single('image'), (req, res) => { // 하나의 파일 전송
    console.log('req.file: ', req.file);
    console.log(`${req.body.name}`);
    res.send('ok');
})

app.post('/uploadfiles', upload.fields([{ name: 'image'}, {name: 'file'}]), 
    (req, res) => { // 여러 파일을 각각의 키로 전송
    console.log('req.file: ', req.files);
    console.log(`${req.body.name}`);
    res.send('ok');
})

app.post('/uploadimages', upload.array('image'), (req, res) => { // 여러파일을 하나의 키로 전송
    console.log('req.files: ', req.files);
    console.log(`${req.body.name}`);
    res.send('ok');
})

app.listen(port, () => {
    console.log(`Server start at ${port}`);
})
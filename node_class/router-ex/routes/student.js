const express = require('express');
const router = express.Router();

// path는 기존 경로에 현재 경로가 합쳐져서 라우팅
router.get('/', (req, res) => {
    res.send('Hello, student!');
});

router.get('/admin', (req, res) => {
    res.send('Hello, admin student!');
});

router.get('/:name', (req, res) => {
    // param이 있을때는 순서에 유의 ex. 학생 이름이 admin인 경우 => 특정 path가 있는 걸 앞으로
    res.send(`안녕 ${req.params.name} 학생!`);
});

module.exports = router;
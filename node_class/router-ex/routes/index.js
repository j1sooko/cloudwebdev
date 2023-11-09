const express = require('express');
const router = express.Router();

// path는 기존 경로에 현재 경로가 합쳐져서 라우팅
router.get('/', (req, res) => {
    res.send('Hello, index');
});

module.exports = router;
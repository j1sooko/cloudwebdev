const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello books/');
})

router.post('/', (req, res) => {
    res.send('post books/');
})

module.exports = router;
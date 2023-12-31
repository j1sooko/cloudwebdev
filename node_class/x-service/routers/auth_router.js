const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || "secret";

// model
const { User } = require('../models'); // /models/index.js { User, Post }-> db

const create_hash = (async (password, saltAround) => {
    let hashed = bcrypt.hashSync(password, saltAround);
    console.log(`${password} : ${hashed}`);
    return hashed;
});

router.post('/sign-up', async (req, res) => {
    const new_user = req.body;
    new_user.password = await create_hash(new_user.password, 10);

    try {
        const result = await User.create(new_user);
        res.status(201).send({ success: true, result: result });
    } catch {
        res.status(500).send({ success: false, message: error.message });
    }

});

router.post('/sign-in', async (req, res) => {
    const user = req.body;
    
    options = { 
        attributes: ['password'],
        where: {
            user_id: user.user_id
        }
    }; 

    try {
        const result = await User.findOne(options);
        if (result) {
            const compared = await bcrypt.compare(user.password, result.password);
            console.log(`${user.password} : ${result.password}, ${compared} `)
            if (compared) {
                const token = jwt.sign({ uid: user.user_id, rol: 'admin'}, secret);
                res.send({ success: true, user_id: user.user_id, toekn: token });
            } else {
                res.send({ "success": false, message: "해당 사용자가 존재하지 않거나 비밀번호가 틀렸습니다." });
            }
        }
    } catch(error) {
        res.send({ success: false, message: error.message });
    }
});



module.exports = router;
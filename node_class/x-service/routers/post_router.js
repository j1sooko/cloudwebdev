const express = require('express');
const router = express.Router();
const isAuth = require('./authorization');
// model
const { User, Post } = require('../models'); // /models/index.js { User, Post }-> db

router.post('/', isAuth, async (req, res) => {
    const new_post = req.body;
    try {
        new_post.user_id = req.user_id; // token의 user_id
        const result = await Post.create(new_post);
        console.log(result);
        res.send({ success: true, data: new_post });
    } catch(error) {
        res.send({ success: false, message: "포스트 등록에 실패" });
    }
});

router.get('/:id', isAuth, async (req, res) => {
    const post_id = req.params.id;
    const result = await Post.findAll({
        where: { id: post_id },
        attributes: ['content', 'user_id', 'updated_at'],
    });
    res.send({ success: true, data: result});
});

router.get('/', async (req, res) => {
    const user_id = req.query.user_id;

    if (user_id) {
        const result = await User.findAll({
            attributes: ['user_id', 'user_name', 'created_at' ],
            order: [[{model: Post}, 'id', 'desc']],
            where: { user_id: user_id },
            include: [{
                model: Post,
                where: { user_id: user_id },
                attributes: ['id', 'content', 'updated_at'],
                order: [['id', 'DESC']]
            }]
        });
        res.send({ success: true, data: result});
    } else {
        const result = await Post.findAll({
            attributes: ['content', 'user_id', 'updated_at'],
            order: [['id', 'desc']]
        });
        res.send({ success: true, data: result});
    }
});

router.put('/:id', isAuth, async (req, res) => {
    const post_id = req.params.id;
    const result = await Post.update(req.body, {where: {id: post_id}});
    res.send({ success: true, data: result});
});

router.delete('/:id', isAuth, async (req, res) => {
    const post_id = req.params.id;
    const result = await Post.destroy({where: {id: post_id}});
    res.send({ success: true, data: result});
});

module.exports = router;
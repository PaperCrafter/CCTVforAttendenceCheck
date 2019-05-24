const express = require('express');
const {Post} = require('../models');

const router = express.Router();

router.get('/', async (req, res, next)=>{
    const post = await Post.findAll({
        raw:true,
    });

    console.log(post);

    res.send(post);
})

module.exports = router;
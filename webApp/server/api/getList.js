const express = require('express');
const {Post} = require('../models');

const router = express.Router();

router.get('/', async (req, res, next)=>{

    const page = parseInt(req.query.page || 1, 10);
    
    if(page<1){
        res.status=400;
        return;
    }

    try{
        const post = await Post.findAll({
            limit: 10,
            order:[['id', 'DESC']],
            offset:(page-1)*10,
        });

        let postCount = 0;
        await Post.count().then(c => {
            console.log("There are " + c + " projects!");
            postCount = c;
        });

        const lastPage = Math.ceil(postCount/10);
        res.set('last-page', lastPage);

        res.send(post);
    }catch(e){
        console.log('err');
    }
})

module.exports = router;
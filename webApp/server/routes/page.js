const express = require('express');

const router = express.Router();

router.get('./profile', (req, res)=>{
    res.render('profile', {title:'info - ' ,user:null});
});

module.exports = router;
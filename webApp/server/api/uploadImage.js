const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const {Post} = require('../models');

const router = express.Router();
fs.readdir('uploads', (error)=>{
    if(error){
        console.log('folder doesnt exist');
        fs.mkdirSync('uploads');
    }
})

const upload = multer({
    storage:multer.diskStorage({
        destination(req, file, cb){
            cb(null, 'uploads/');
        },
        filename(req, file, cb){
            let ext = path.extname(file.originalname);
            console.log(ext);
            if(ext === ''){
                ext = '.jpg';
            }
            cb(null, path.basename(file.originalname, ext) + new Date().valueOf() + ext);
        },
    }),    
    limits:{fileSize:5*1024*1024},
});

router.post('/img',upload.fields([{name:'before'},{name:'after'}]),(req, res)=>{
    console.log(req.files);
    const date = new Date();
    //const time = date.getTime();
    const time = new Date().toISOString().slice(11, 19).replace('T', ' ');
    console.log(req.files.before[0].filename);
    
    Post.create({
        Date: date,
        Time: time,
        ImgBefore:req.files.before[0].filename,
        ImgAfter:req.files.after[0].filename
    })
    .then((result)=>{
        console.log(result);
    }).catch({

    })
    
    //console.log(req);
    //res.json({url:`/img/${req.files}`});
    res.send({key:'sucsess!!'});
});



module.exports = router;
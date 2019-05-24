const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

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
    //console.log(req);
    //res.json({url:`/img/${req.files}`});
    res.send({key:'sucsess!!'});
});

module.exports = router;
const express = require('express');
const {Lecture} = require('../models');

const router = express.Router();

router.get('/', async (req, res, next)=>{
    let LecInfo = {
        className: '',
        maxStudent : 0,
        todayMaxStudent :0,
        before : 0,
        currentStudent :0,
    };

    await Lecture.findAll({  
        where:{LectureName : 'ComputerArchitecture'},
        raw:true,
    })
    .then((lecture)=>{
        console.log(lecture);
        LecInfo.className = lecture[0].LectureName;
        LecInfo.maxStudent = lecture[0].StudentNumber;
        LecInfo.todayMaxStudent = lecture[0].ProperNumber;
        LecInfo.before = lecture[0].CurrentNumber;
        LecInfo.currentStudent = lecture[0].CurrentNumber;
        console.log(LecInfo);
        next();
    })
    .catch((error)=>{
        console.log('cant find db!');
        next(error);
    })

    res.json(LecInfo);
});

module.exports = router;
const express = require('express');

const router = express.Router();

router.get('/api', (req,res)=>{
    res.send(
        {
            className: 'computerStructure',
            maxStudent : 15,
            todayMaxStudent :15,
            before : 15,
            currentStudent :15,
            
        }
    );
});

module.exports = router;
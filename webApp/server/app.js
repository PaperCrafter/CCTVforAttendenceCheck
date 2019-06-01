const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
require('dotenv').config();
const {sequelize} = require('./models');

const getLectureInfoApi = require('./apiML/getLectureInfo');
const uploadApi = require('./apiML/uploadImage');

const GetPostApi = require('./api/getList');

const app = express();
sequelize.sync();
app.set('port', process.env.PORT||8001);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave:false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false,
    }
}));

app.use(flash());
app.use('/img', express.static(path.join(__dirname, 'uploads')));

//ML서버용 api
app.use('/getLectureInfo', getLectureInfoApi);
app.use('/uploadImage', uploadApi);

//react api
app.use('/GetPost', GetPostApi);


app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기중');
});


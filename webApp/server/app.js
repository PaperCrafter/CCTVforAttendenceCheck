const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
require('dotenv').config();

const pageRouter = require('./routes/page');
const api = require('./api/getInfo');

const app = express();

app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', pug);
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

//app.use('/', pageRouter);
app.use('/', api);

app.listen(app.get('port'), ()=>{
    console.log(app.get('port'), '번 포트에서 대기중');
});
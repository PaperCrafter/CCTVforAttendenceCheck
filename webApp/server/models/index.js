'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Post = require('./post')(sequelize, Sequelize);
db.Lecture = require('./lecture')(sequelize, Sequelize);
db.Professor = require('./professor')(sequelize, Sequelize);
db.Student = require('./student')(sequelize,Sequelize);

db.Lecture.hasMany(db.Post);
db.Post.belongsTo(db.Lecture);

db.Lecture.hasOne(db.Professor);
db.Professor.belongsTo(db.Lecture);

db.Lecture.hasMany(db.Student);
db.Student.belongsTo(db.Lecture);

module.exports = db;

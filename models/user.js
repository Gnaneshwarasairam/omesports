const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    fullname: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    gameid: { type: DataTypes.STRING, unique: true },
    dateofregistration: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = User;

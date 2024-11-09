const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Blocked = sequelize.define('Blocked', {
    gameid: { type: DataTypes.STRING, unique: true },
    phonenumber: DataTypes.STRING,
    email: DataTypes.STRING
});

module.exports = Blocked;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SlotBooking = sequelize.define('SlotBooking', {
    gamenumber: DataTypes.INTEGER,
    solo: DataTypes.INTEGER,
    duo: DataTypes.INTEGER,
    squad: DataTypes.INTEGER,
    soloprice: DataTypes.DECIMAL,
    duoprice: DataTypes.DECIMAL,
    squadprice: DataTypes.DECIMAL,
    time: DataTypes.STRING,
    duration: DataTypes.STRING,
    orderid: { type: DataTypes.STRING, unique: true }
});

module.exports = SlotBooking;

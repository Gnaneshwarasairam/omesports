const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Payment = sequelize.define('Payment', {
    payment_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: DataTypes.STRING,
    order_id: DataTypes.STRING,
    payment_amount: DataTypes.DECIMAL,
    payment_status: DataTypes.STRING,
    payment_method: DataTypes.STRING,
    payment_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    payment_reference: DataTypes.STRING,
    gateway_response_code: DataTypes.STRING,
    currency: DataTypes.STRING,
    payment_gateway: DataTypes.STRING,
    is_refunded: DataTypes.BOOLEAN,
    refund_date: DataTypes.DATE,
    notes: DataTypes.TEXT
});

module.exports = Payment;

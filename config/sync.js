const sequelize = require('./database');
const User = require('../models/User');
const Blocked = require('../models/Blocked');
const SlotBooking = require('../models/SlotBooking');
const Payment = require('../models/Payment');
const Achievement = require('../models/achievements');
const Game = require('../models/games');

sequelize.sync({ alter: true })
    .then(() => console.log('Database synchronized'))
    .catch((error) => console.log('Error synchronizing database', error));

const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Blocked = require('../models/Blocked');

exports.register = async (req, res) => {
    const { fullname, phonenumber, email, username, password, gameid } = req.body;

    const isBlocked = await Blocked.findOne({
        where: { [Op.or]: [{ gameid }, { email }, { phonenumber }] }
    });

    if (isBlocked) {
        return res.status(403).json({ message: 'User is blocked' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ fullname, phonenumber, email, username, password: hashedPassword, gameid });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
};

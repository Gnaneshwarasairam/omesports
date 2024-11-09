const express = require('express');
const app = express();
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

app.use(express.json());
app.use('/auth', authRoutes);

sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('Error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

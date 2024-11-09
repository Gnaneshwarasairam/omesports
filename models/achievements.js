// models/achievements.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have set up Sequelize in config/database.js

const Achievement = sequelize.define('Achievement', {
  gameId: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  soloMatchesPlayed: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  soloMatchesWon: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  duoMatchesPlayed: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  duoMatchesWon: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  squadMatchesPlayed: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  squadMatchesWon: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt timestamps
  tableName: 'achievements'
});

module.exports = Achievement;

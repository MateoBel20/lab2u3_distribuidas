// src/models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de que esta ruta sea correcta

const User = sequelize.define('User', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'Users', // Nombre de la tabla en la base de datos
  timestamps: true,   // Habilita createdAt y updatedAt
});

module.exports = User;
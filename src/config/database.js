const { Sequelize } = require('sequelize');
const { databaseUrl } = require('./env');

const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: { // Necesario para ElephantSQL/Railway
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
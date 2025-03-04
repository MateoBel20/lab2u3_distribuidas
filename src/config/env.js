require('dotenv').config();
module.exports = {
  environment: process.env.NODE_ENV || 'production',
  databaseUrl: process.env.DATABASE_URL,
  port: process.env.PORT || 3000,
};
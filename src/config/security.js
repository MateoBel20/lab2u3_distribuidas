const cors = require('cors');
const helmet = require('helmet');

module.exports = (app) => {
  app.use(cors({ origin: '*' })); // Ajusta según tu frontend
  app.use(helmet());
};
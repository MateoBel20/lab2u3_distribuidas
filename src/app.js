require('dotenv').config();
// src/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const apiRouter = require('./routes/users.router');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api', apiRouter);
app.get("/", (req, res) => {
  res.send("¡Backend en producción funciona!");
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
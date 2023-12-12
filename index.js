const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./Routes/index.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept', 'Content-Type: application/javascript');
  next();
});
app.use(express.json());

app.use("/", routes);

app.get("/api", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
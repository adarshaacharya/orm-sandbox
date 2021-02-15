const express = require('express');
const initDB = require('./database/init');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

initDB();

// server setup
const hostname = 'localhost';
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});

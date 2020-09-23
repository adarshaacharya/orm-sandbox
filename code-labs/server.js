const express = require('express');
const { sequelize } = require('./database/db');
const User = require('./models/user.model');

User.sync({ foce: true });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// server setup
const hostname = 'localhost';
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});

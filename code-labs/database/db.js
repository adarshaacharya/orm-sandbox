const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config.js');

const sequelize = new Sequelize(
  `${dbConfig.DB}`,
  `${dbConfig.USER}`,
  `${dbConfig.PASSWORD}`,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    operatorsAliases: 0,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('🐊 Connected to database successfully.');
  })
  .catch((err) => {
    console.log('🦊 Error: ' + err);
    process.exit;
  });

// sequelize.sync({
//   force: true,
// });
module.exports = { sequelize, Sequelize };

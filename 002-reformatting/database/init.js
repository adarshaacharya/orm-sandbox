const db = require('../models');

const initDB = () => {
  db.sequelize
    .authenticate()
    .then(() => {
      console.log('🐊 Connected to database successfully.');
    })
    .catch((err) => {
      console.log('🦊 Error: ' + err);
      process.exit;
    });

  db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and re-sync db.');
  });
};

module.exports = initDB;

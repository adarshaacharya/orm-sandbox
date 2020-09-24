module.exports = {
  HOST: 'localhost',
  USER: 'postgres',
  PASSWORD: 12345,
  DB: 'one-to-many',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

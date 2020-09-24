const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');

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

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require('./tutorial.model.js')(sequelize, Sequelize);
db.comments = require('./comment.model.js')(sequelize, Sequelize);

// pattern
db.tutorials.hasMany(db.comments, { as: 'comments' });
db.comments.belongsTo(db.tutorials, {
  foreignKey: 'tutorialId', // if no option is passed then automatically tutorialId is created
  as: 'tutorial', // useful while querying { includes[]}
});

module.exports = db;

/*
CREATE TABLE Comments (
    id int NOT NULL,
    title STRING NOT NULL,
    description STRING NOT NULL,
    tutorialId int,
    PRIMARY KEY (id),
    FOREIGN KEY (tutorialId) REFERENCES Tutorials(id)
)
We use hasMany() to help one Tutorial have many Comments, and belongsTo() to indicate that one Comment only belongs to one Tutorial.


*/

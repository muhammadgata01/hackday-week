const { HOST, USER, PASS, DB, dialect } = require('../config/dbConfig');

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(DB, USER, PASS, {
  host: HOST,
  dialect: dialect,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected...');
  })
  .catch((error) => {
    console.log(`error : ${error}`);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.posts = require('./postsModel.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log('yes re-sync done!');
});

module.exports = db;

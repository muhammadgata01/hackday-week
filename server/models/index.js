// import identitas dari dbConfig
const { HOST, USER, PASS, DB, dialect } = require('../config/dbConfig');

// Import sequalize dan datatypes
const { Sequelize, DataTypes } = require('sequelize');

// Buat instance sequalize dengan memasukkan identitas dari DB
const sequelize = new Sequelize(DB, USER, PASS, {
  host: HOST,
  dialect: dialect,
});

// Tes koneksi sudah terhubung ke DB
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

// Import mode PostModel untuk digunakan membuat tabel
db.post = require('./postModel.js')(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  // Membuat table berdasarkan model yang telah di buat di DB
  console.log('yes re-sync done!');
});

module.exports = db;

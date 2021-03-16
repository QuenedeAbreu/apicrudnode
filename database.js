const Sequelize = require('sequelize');

const database = new Sequelize(
  'yourchurch',  
  'root',
  '@Quenede1393',
  {
    host:"localhost",
    dialect:"mysql",
    port: '3307'
  }
);
// database.sync();

module.exports = database;
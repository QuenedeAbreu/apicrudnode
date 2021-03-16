var Sequelize = require('sequelize');

var sequelize = require('../database');

var Usuario = sequelize.define('usuarios',{
  id:{
    type:Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: Sequelize.STRING,
  email:Sequelize.STRING
});

module.exports = Usuario;
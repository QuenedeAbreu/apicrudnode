const Sequelize = require('sequelize');

const sequelize = require('../database/database');
const NivelAcesso = require('./nivelAcesso');

const Cargo = sequelize.define('cargos',{
  id:{
    type:Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  name: Sequelize.STRING,
  descricao:Sequelize.STRING,
});



NivelAcesso.hasMany(Cargo,{
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});    //uma categoria tem muitos artigos
Cargo.belongsTo(NivelAcesso);   //um artigo pertence a uma categoria

// Cargo.sync({force: true});

module.exports = Cargo;
const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const NivelAcesso = sequelize.define('nivelAcessos',{
  id:{
    type:Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    unique: true
  },

  title_acesso: Sequelize.STRING,
  tipo_acesso:Sequelize.INTEGER,
});

// NivelAcesso.sync({force: true});
module.exports = NivelAcesso;
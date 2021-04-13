const Sequelize = require('sequelize');
const sequelize = require('../database/database');

const TipoAtividade = sequelize.define('tipoatividades',{
  id:{
    type:Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    unique: true
  },

  nome_atividade: Sequelize.STRING,
  modalidade_atividade:Sequelize.INTEGER,
  gera_arrecadacao_atividade:Sequelize.STRING,
  descricao_atividade:Sequelize.STRING
});

// TipoAtividade.sync({force: true});
module.exports = TipoAtividade;
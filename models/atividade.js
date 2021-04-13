const Sequelize = require('sequelize');
const sequelize = require('../database/database');
const TipoAtividade = require('./tipoAtividade');
const Igreja = require('./igreja');

const Atividade = sequelize.define('atividades',{
  id:{
    type:Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
    unique: true
  },

  nome_atividade: Sequelize.STRING,
  data_atividade:Sequelize.DATE,
  hora_inicio_atividade:Sequelize.TIME,
  hora_termino_atividade:Sequelize.TIME,
  qtd_visitante_atividade:Sequelize.INTEGER,
  qtd_membros_atividade:Sequelize.INTEGER,
  tema_atividade:Sequelize.STRING,
  nome_responsavel_atividade:Sequelize.STRING,
  total_dizimo_atividade:Sequelize.FLOAT,
  total_oferta_atividade:Sequelize.FLOAT,
  total_reconciliacao_atividade:Sequelize.INTEGER,
  total_decisoes_atividade:Sequelize.INTEGER,
  preleitor_atividade:Sequelize.STRING,
  observacao_atividade:Sequelize.STRING
});

TipoAtividade.hasMany(Atividade);    //uma categoria tem muitos artigos
Atividade.belongsTo (TipoAtividade);   //um artigo pertence a uma categoria

Igreja.hasMany(Atividade);    //uma categoria tem muitos artigos
Atividade.belongsTo (Igreja);   //um artigo pertence a uma categoria

// Atividade.sync({force: true});
module.exports = Atividade;
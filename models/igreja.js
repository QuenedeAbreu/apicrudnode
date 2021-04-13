const Sequelize = require('sequelize');
const sequelize = require('../database/database');


const Usuario = require('./usuario');

const Igreja = sequelize.define('igrejas',{
  id:{
    type:Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  nome_igreja: Sequelize.STRING,
  logo_igreja:Sequelize.STRING,
  matriz_igreja:Sequelize.BOOLEAN,
  qtd_membro_igreja:Sequelize.INTEGER,
  numero_igreja:Sequelize.INTEGER,
  rua_igreja:Sequelize.STRING,
  bairro_igreja:Sequelize.STRING,
  cidade_igreja:Sequelize.STRING,
  estado_igreja:Sequelize.STRING,
  pais_igreja:Sequelize.STRING,
  complemento_igreja:Sequelize.STRING,
  
});


Igreja.hasMany(Igreja,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});    //uma categoria tem muitos artigos
Igreja.belongsTo(Igreja);   //um artigo pertence a uma categoria

Usuario.hasOne(Igreja,{
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});    //uma categoria tem muitos artigos
Igreja.belongsTo(Usuario);   //um artigo pertence a uma categoria


// Igreja.sync({force: true});

module.exports = Igreja;
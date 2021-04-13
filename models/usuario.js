const Sequelize = require('sequelize');

const sequelize = require('../database/database');
const Cargo = require('./cargo');

const Usuario = sequelize.define('usuarios',{
  id:{
    type:Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  primeiro_nome: Sequelize.STRING,
  sobre_nome:Sequelize.STRING,
  email:Sequelize.STRING,
  senha:Sequelize.STRING,
  foto_perfil:Sequelize.STRING,
  rua_usuario:Sequelize.STRING,
  bairro_usuario:Sequelize.STRING,
  numero_residencia_usuario:Sequelize.INTEGER,
  cidade_usuario:Sequelize.INTEGER,
  estado_usuario:Sequelize.INTEGER,
  pais_usuario:Sequelize.INTEGER,
  complemento_residencia_usuario:Sequelize.STRING,
});

Cargo.hasMany(Usuario,{
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});    //uma categoria tem muitos artigos
Usuario.belongsTo (Cargo);   //um artigo pertence a uma categoria

// Usuario.sync({force: true});

module.exports = Usuario;
const controller = {}
var nivelAcesso = require('../models/nivelAcesso');
const uuid = require('uuidv4');
const { Op } = require('sequelize');


controller.index = (req, res) => {
  const data = {
    name: "Quenede abreu",
    age: 20,
    cyte: "Rio Brnaco"
  }
  res.json(data);
}

controller.listNivelAcesso = async (req, res) => {
  try {
    const response = await nivelAcesso.findAll()
      .then(function (data) {
        const res = { success: true, message: 'Load Success', data }

        return res;
      })
      .catch(error => {
        const res = { success: false, message: error }
      })

    return res.json(response);

  } catch (error) {
    console.log('Error controler.list');
    console.log(error);
  }
}

controller.listNivelAcessoOne = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    const response = { "success": "false", "message": "error" }
    return res.json(response);
  } else {

    try {
      const response = await nivelAcesso.findByPk(id)
        .then(function (data) {
          const res = { success: true, message: 'Load Success', data }

          return res;
        })
        .catch(error => {
          const res = { success: false, message: error }
        })

      return res.json(response);

    } catch (error) {
      console.log('Error controler.list');
      console.log(error);
    }
  }
}


controller.listNivelAcessOneName = async (req, res) => {
  const name = req.params.titleacesso;
  if (!name) {
    const response = { "success": "false", "message": "error" }
    return res.json(response);
  } else {

    try {
      const response = await nivelAcesso.findAll({
        where:{
          title_acesso:{
            [Op.like]:"%"+name+"%"
          }
        }
      })
        .then(function (data) {
          const res = { success: true, message: 'Load Success', data }

          return res;
        })
        .catch(error => {
          const res = { success: false, message: error }
        })

      return res.json(response);

    } catch (error) {
      console.log('Error controler.list');
      console.log(error);
    }
  }
}


controller.createNivelAcesso = async (req, res) => {


  const nivelacesso = await nivelAcesso.findOne({ where: { title_acesso: req.body.title_acesso } });
  if(nivelacesso){
    res.status(400).json({message: 'O nivel de acesso já existe'})
  }else{
  
  try {
    const response = await nivelAcesso.create({
      id: uuid.uuid(),
      title_acesso: req.body.title_acesso,
      tipo_acesso: req.body.tipo_acesso,

    })
      .then(function (data) {
        const res = {
          success: true,
          message: "Usuario criado com sucesso",
          data: data
        }
        return res;
      })
      .catch(error => {
        const res = { success: false, message: error }
        return res;
      })
    res.json(response);
  } catch (error) {
    console.log(error);
  }
  }
}

controller.updateNivelAcesso = async (req, res) => {
 
  try {
    const response = await nivelAcesso.update({
      title_acesso: req.body.title_acesso,
      tipo_acesso: req.body.tipo_acesso,
    }, {
      where: { id:  req.body.id }
    })
      .then(function (data) {
        const re = data[0];
        if(re > 0){
          const res = {
            success: true,
            message: "Atualizado com sucesso",
            
          }
          return res;
        }else{
          const res = { 
            success: false, 
            message: "error ao atualizar" 
          }
          return res;
        }
      })
      .catch((error) => {
        const res = { 
          success: false, 
          message: "error ao atualizar" 
        }
        return res;
      })
    res.json(response);
  } catch (error) {
    console.log(error);
  }

}
controller.deleteNivelacesso = async (req, res) => {
 
  try {
    const response = await nivelAcesso.destroy({
      where: { id: req.params.id}
    })
    .then( function(data){
      const res = { success: true, data: data, message:"Deleted successful" }
      return res;
    })
    .catch(error => {
      const res = { success: false, error: error }
      return res;
    })
    res.json(response);

  } catch (e) {
    console.log(e);
  }
}


module.exports = controller;

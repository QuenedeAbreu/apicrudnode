const controller = {}
var Usuario = require('../models/usuario');
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

controller.listUser = async (req, res) => {
  try {
    const response = await Usuario.findAll()
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

controller.listUserOne = async (req, res) => {
  const id = req.query.id;
  if (!id) {
    const response = { "success": "false", "message": "error" }
    return res.json(response);
  } else {

    try {
      const response = await Usuario.findByPk(id)
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


controller.listUserOneName = async (req, res) => {
  const name = req.query.name;
  if (!name) {
    const response = { "success": "false", "message": "error" }
    return res.json(response);
  } else {

    try {
      const response = await Usuario.findAll({
        where:{
          name:{
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


controller.creatUser = async (req, res) => {
  // const teste = req.body;

  // return res.json(teste);

  try {
    const response = await Usuario.create({
      id: uuid.uuid(),
      name: req.body.name,
      email: req.body.email,

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

controller.updateUser = async (req, res) => {
  try {
    const response = await Usuario.update({
      name: req.body.name,
      email: req.body.email
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
controller.deleteUser = async (req, res) => {

  try {
    const response = await Usuario.destroy({
      where: { id: req.query.id }
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

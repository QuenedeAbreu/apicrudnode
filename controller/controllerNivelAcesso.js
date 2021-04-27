
const nivelAcesso = require('../models/nivelAcesso');
const uuid = require('uuidv4');
const { Op } = require('sequelize');


exports.listNivelAcesso = async (req, res) => {
  try {
    const response = await nivelAcesso.findAll()
      .then(function (data) {
        const res = { success: true, message: 'Load Success', data }

        return res;
      })
      .catch(error => {
        const res = { success: false, message: error }
        return res; 
      })

    return res.json(response);

  } catch (error) {
    console.log('Error controler.list');
    console.log(error);
    return res.json(error);
  }
}

exports.listNivelAcessoOne = async (req, res) => {
  const idNivelAcessoParams = req.params.id;

  if (!idNivelAcessoParams) {
    const response = { "success": "false", "message": "error" }
    return res.json(response);
  } else {

    try {
      const response = await nivelAcesso.findByPk(idNivelAcessoParams)
        .then(function (data) {
          if(data){
            const res = { success: true, message: 'Load Success', data }
            return res;
          }else{
            const res = { success: true, message: 'Load Success', data:'Não existe nível de acesso com esse id.' }
            return res;
          }
        })
        .catch(error => {
          const res = { success: false, message: error }
          return res;
        })

      return res.json(response);

    } catch (error) {
      console.log('Error controler.list NivelAcessoOne');
      console.log(error);
      res.json(error)
    }
  }
}


exports.listNivelAcessOneName = async (req, res) => {
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
      res.json(error)
    }
  }
}


exports.createNivelAcesso = async (req, res) => {
  const titleAcesso = req.body.title_acesso;
  const tipo_acesso = req.body.tipo_acesso;

  const nivelacesso = await nivelAcesso.findOne({ where: { title_acesso:  titleAcesso} });

  if(nivelacesso){
    res.status(400).json({message: 'O nivel de acesso já existe'})
  }else{
  
  try {
    const response = await nivelAcesso.create({
      id: uuid.uuid(),
      title_acesso: titleAcesso,
      tipo_acesso: tipo_acesso,

    })
      .then(function (data) {
        const res = {
          success: true,
          message: "Nível de acesso criado com sucesso",
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
    res.json(error);
  }
  }
}

exports.updateNivelAcesso = async (req, res) => {
 const idNivelAcessoParams = req.params.id;

 const titleAcesso = req.body.title_acesso;
 const tipo_acesso = req.body.tipo_acesso;
 
  try {
    const response = await nivelAcesso.update({
      title_acesso: titleAcesso,
      tipo_acesso: tipo_acesso,
     
    }, {
      where: { id: idNivelAcessoParams  }
    })
      .then(async function (data) {
      const responsenivelacesso = await nivelAcesso.findByPk(idNivelAcessoParams)
        const re = data[0];
        if(re > 0){
          const res = {
            success: true,
            message: "Nível de acesso atualizado com sucesso",
            data:responsenivelacesso
          }
          return res;
        }else{
          console.log(data);
          const res = { 
            success: false, 
            message: "Error ao atualizar" 
          }
          return res;
        }
      })
      .catch((error) => {
        const res = { 
          success: false, 
          message: "Error ao atualizar" 
        }
        return res;
      })
    res.json(response);
  } catch (error) {
    console.log(error);
  }

}
exports.deleteNivelacesso = async (req, res) => {
  const idNivelAcessoParams = req.params.id;
  try {
    const response = await nivelAcesso.destroy({
      where: { id: idNivelAcessoParams}
    })
    .then( function(data){
      const res = { success: true, data: data, message:"Nível de acesso deletado com sucesso." }
      return res;
    })
    .catch(error => {
      const res = { success: false, error: error }
      return res;
    })
    res.json(response);

  } catch (error) {
    res.json(error);
    console.log(error);
  }
}


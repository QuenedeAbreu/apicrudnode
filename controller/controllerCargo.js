const Cargo = require('../models/cargo');
const NivelAcesso = require('../models/nivelAcesso');
const uuid = require('uuidv4');
const { Op } = require('sequelize');


exports.listCargo = async (req,res) =>{
  try {
    const response = await Cargo.findAll({
      include: [{
        model: NivelAcesso,
        required: false
       }]
    })
    .then(function(data){
      const res = { success: true, message: 'Load Success', data }
      return res;
    })
    .catch(error=>{
      const res = { success: false, message: error }
    })

    return res.json(response);

  } catch (error) {
    console.log('Error controler.list');
    console.log(error);
    return res.json(error);
  }
}

exports.listCargoOne = async (req,res) =>{
  const idCargoParams = req.params.id;

  try {
    const response = await Cargo.findByPk(idCargoParams)
    .then(function (data) {
      if(data){
        const res = { success: true, message: 'Load Success', data }
        return res;
      }else{
        const res = { success: true, message: 'Load Success', data:'Não existe cargo com esse id.' }
        return res;
      }
    })
    return res.json(response);
  } catch (error) {
    console.log('Error controler.list CargoOne');
    console.log(error);
    res.json(error)
  }
}



exports.createCargo = async (req,res) =>{
  const nomecargo =  req.body.nome_cargo;
  const descricaocargo = req.body.descricao_cargo;
  const idnivelacesso = req.body.id_nivel_acesso;
  
  const cargo = await Cargo.findOne({where : {nome_cargo : nomecargo}});
  console.log(cargo);
  if(cargo){
    res.status(400).json({message:"O cargo já exite!"});
  }else{
    try {
      const response = await Cargo.create({
        id: uuid.uuid(),
        nome_cargo:nomecargo,
        descricao:descricaocargo,
        nivelAcessoId: idnivelacesso
      })
      .then(function(data){
        const res = {
          success : true,
          message: "Cargo cadastrado com sucesso",
          data:data
        }
        return res;
      }).catch(error =>{
        const res = { success: false, message: error }
        return res;
      });
      res.json(response);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
}

exports.updadeCargo = async (req,res) =>{
  const idCargoParams = req.params.id;
  const nomecargo =  req.body.nome_cargo;
  const descricaocargo = req.body.descricao_cargo;
  const idnivelacesso = req.body.id_nivel_acesso;

  try {
    const response = await Cargo.update({
      nome_cargo:nomecargo,
      descricao:descricaocargo,
      nivelAcessoId: idnivelacesso
      },{
        where: {id : idCargoParams}
        })
    .then(async function(data){
      const responsecargo = await Cargo.findByPk(idCargoParams)
      const res = {
        success : true,
        message: "Cargo atualizado com sucesso",
        data:responsecargo
      }
      return res;
    }).catch(error =>{
      const res = { success: false, message: error }
      return res;
    });
    res.json(response);
  } catch (error) {
    console.log(error);
    res.json(error);
  }

}

exports.deleteCargo = async (req,res) =>{
  const idCargoParams = req.params.id;
  try {
    const response = await Cargo.destroy({
      where: { id: idCargoParams}
    })
    .then(function(data){
      const res = { success: true, data: data, message:"Cargo deletado com sucesso." }
      return res;
    }).catch(error => {
      const res = { success: false, error: error }
      return res;
    })
    res.json(response);

  } catch (error) {
    res.json(error);
    console.log(error);
  }
}
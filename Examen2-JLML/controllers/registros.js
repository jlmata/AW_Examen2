const path = require('path')

const Ciudad = require('../utils/database').models.ciudad
const Atractivo = require('../utils/database').models.atractivo
 

//Agregar
exports.postAgregarCiudad = (req,res) =>{
    console.log(req.body)
    Ciudad.create(req.body)
        .then(ci=>{
            console.log("Registro Existoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
    
}
    

exports.postAgregarAtractivo = (req,res) =>{
    console.log(req.body)
    Atributo.create(req.body)
        .then(atr=>{
            console.log("Registro Existoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })

}


//Obtener
exports.getObtenerCiudad = (req,res)=>{
    Ciudad.findAll()
        .then(ciudades =>{
            console.log(ciudades)
            res.json(ciudades)
        })
        .catch(err=>console.log(err))
}

exports.getObtenerAtractivo = (req,res)=>{
    Atractivo.findAll()
        .then(atractivos =>{
            console.log(atractivos)
            res.json(atractivos)
        })
        .catch(err=>console.log(err))
}

//Borrar
exports.postBorrarCiudad = (req,res)=>{
    console.log(req.body)
    Ciudad.destroy({
       where:{
           id: req.body.id
       } 
    })
    .then(() =>{
        console.log("Ciudad eliminada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}


exports.postBorrarAtractivo = (req,res)=>{
    console.log(req.body)
    Atractivo.destroy({
       where:{
           id: req.body.id
       } 
    })
    .then(() =>{
        console.log("Descripcion eliminada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

//Actualizar
exports.postActualizarCiudad = (req,res)=>{
    console.log(req.body)
    Ciudad.update({
        autor:req.body.autor
    },{
      where:{
          id: req.body.id
      }  
    })
    .then(() =>{
        console.log("Ciudad actualizada")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarAtractivo = (req,res)=>{
    console.log(req.body)
    Atractivo.update({
        autor:req.body.autor
    },{
      where:{
          id: req.body.id
      }  
    })
    .then(() =>{
        console.log("Atractivo actualizado")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}


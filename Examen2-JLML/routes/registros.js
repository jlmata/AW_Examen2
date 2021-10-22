const express = require("express")
const plController = require('../controllers/registro')
const router = express.Router()

//Agregar
router.post('/agregarCiudad', plController.postAgregarCiudad)
router.post('/agregarAtractivo', plController.postAgregarAtractivo)

//Obtener
router.post('/obtenerCiudad', plController.getObtenerCiudad)
router.post('/obtenerAtractivo', plController.getObtenerAtractivo)

//Borrar
router.post('/borrarCiudad', plController.postBorrarCiudad)
router.post('/borrarAtractivo', plController.postBorrarAtractivo)

//Actualizar
router.post('/actualizarCiudad', plController.postActualizarCiudad)
router.post('/actualizarAtractivo,', plController.postActualizarAtractivo)

module.exports = router

const express = require('express');
const controller = require('../controllers/index');
const router = new express.Router();

router.get('/createMotor', controller.createMotor);
router.get('/createFichaIncidenciasM', controller.createFichaIncidenciasM);

router.get('/showMotor', controller.showMotor);
router.post('/addMotor', controller.addMotor);

router.post('/addFichaIncidenciaM', controller.addFichaIncidenciaM);

router.get('/showHistoriales', controller.showHistoriales);
router.post('/showHistorialM', controller.showHistorialM);


module.exports = router;
const express = require('express');
const controller = require('../controllers/index');
const router = new express.Router();

router.get('/createMaquinaria', controller.createMaquinaria);
router.get('/createFichaIncidenciasC', controller.createFichaIncidenciasC);

router.get('/showMaquinaria', controller.showMaquinaria);
router.post('/addMaquinaria', controller.addMaquinaria);

router.post('/addFichaIncidenciaC', controller.addFichaIncidenciaC);

router.get('/showHistoriales', controller.showHistoriales);
router.post('/showHistorialC', controller.showHistorialC);



module.exports = router;
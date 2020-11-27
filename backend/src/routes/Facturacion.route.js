const {Router} = require('express');
const router = Router();
const FacturacionCtrl=require('../controllers/Facturacion.controllers');

router.post('/crear', FacturacionCtrl.createFacturacion);
router.get('/listarfacturacion', FacturacionCtrl.listar);
router.get('/listar/:id', FacturacionCtrl.listarid);
router.delete('/eliminar/:id', FacturacionCtrl.eliminar);
router.put('/actualizar/:id', FacturacionCtrl.actualizar);


module.exports = router
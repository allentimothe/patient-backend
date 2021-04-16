const express = require('express');
const router = express.Router();
const patientsCtrl = require('../../controllers/patients');

router.get('/', patientsCtrl.index);
router.post('/', patientsCtrl.create);
router.delete('/:id', patientsCtrl.delete);
router.put('/:id', patientsCtrl.update);


module.exports = router;
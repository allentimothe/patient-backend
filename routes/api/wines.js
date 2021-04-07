const express = require('express');
const router = express.Router();
const winesCtrl = require('../../controllers/wines');

router.get('/', winesCtrl.index);
router.post('/', winesCtrl.create);



module.exports = router;
const express = require('express');
const { getRockets, getRocketById } = require('../controllers/rocketController');
const router = express.Router();

router.get('/', getRockets);
router.get('/:id', getRocketById);
module.exports = router;
const express = require('express');
const { getRockets } = require('../controllers/rocketController');
const router = express.Router();

router.get('/', getRockets);
module.exports = router;
const express = require('express');
const router = express.Router();
const CarController = require('../controllers/carController');

router.get('/getList', CarController.getAllCars);

module.exports = router;
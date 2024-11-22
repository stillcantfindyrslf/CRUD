const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

router.post('/createOrder', OrderController.createOrder);
router.get('/orders', OrderController.getAllOrders);

module.exports = router;
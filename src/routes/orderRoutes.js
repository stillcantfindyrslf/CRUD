const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');

router.post('/createOrder', OrderController.createOrder);
router.get('/orders', OrderController.getAllOrders);
router.get('/checkStatus/:orderId', OrderController.checkStatus);
router.put('/changeStatus/:orderId', OrderController.changeStatus);
router.put('/cancelOrder/:orderId', OrderController.cancelOrder);

module.exports = router;
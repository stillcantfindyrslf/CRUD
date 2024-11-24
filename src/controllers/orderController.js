const orderUsecase = require('../usecase/orderUsecase');
const CheckOrderStatusUsecase = require('../usecase/checkOrderStatusUsecase');
const ChangeOrderStatusUsecase = require('../usecase/changeOrderStatusUsecase');
const CancelOrderUsecase = require('../usecase/cancelOrderUsecase');
const orderRepository = require('../repository/orderRepository');

class OrderController {
    async createOrder(req, res) {
        try {
            const order = await orderUsecase.execute(req.body);
            res.status(200).json({ message: 'Order created successfully', order });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAllOrders(req, res) {
        try {
            const orders = await orderRepository.getAllOrders();
            res.status(200).json({ orders });
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch orders' });
        }
    }

    async checkStatus(req, res) {
        try {
            const { orderId } = req.params;
            const status = await CheckOrderStatusUsecase.execute(orderId);
            res.status(200).json({ status });
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async changeStatus(req, res) {
        try {
            const { orderId } = req.params;
            const { status } = req.body;

            const changeStatus = await ChangeOrderStatusUsecase.execute(orderId, status);
            res.status(200).json({ message: 'Order status changed successfully', changeStatus});
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async cancelOrder(req, res) {
        try {
            const { orderId } = req.params;
            const result = await CancelOrderUsecase.execute(orderId);
            res.status(200).json(result);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = new OrderController();
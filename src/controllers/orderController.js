const orderUsecase = require('../usecase/orderUsecase');
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
}

module.exports = new OrderController();
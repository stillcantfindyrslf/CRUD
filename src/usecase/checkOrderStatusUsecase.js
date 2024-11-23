const orderRepository = require('../repository/orderRepository');

class CheckOrderStatusUsecase {
    async execute(orderId) {
        if (!orderId) {
            throw new Error('Order Id is required');
        }

        const order = await orderRepository.getStatusById(orderId);

        if (!order) {
            throw new Error(`Order with ID ${orderId} not found`);
        }

        return { id: order.id, status: order.status };
    }
}

module.exports = new CheckOrderStatusUsecase();
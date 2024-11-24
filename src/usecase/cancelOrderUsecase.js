const OrderRepository = require('../repository/orderRepository');

class CancelOrderUsecase {
    async execute(orderId) {
        if (!orderId) {
            throw new Error('Order ID is required');
        }

        const cancelOrder = await OrderRepository.cancelOrder(orderId);

        if (!cancelOrder) {
            throw new Error(`Order with ID ${orderId} not found`);
        }

        return { id: cancelOrder.id, status: 'cancelled', message: 'Order cancelled successfully'};
    }
}

module.exports = new CancelOrderUsecase();
const OrderRepository = require('../repository/orderRepository');

class ChangeOrderStatusUsecase {
    async execute(orderId, status) {
        if (!orderId) {
            throw new Error('Order ID is required.');
        }

        if (!status || !['created', 'in_transit', 'delivered'].includes(status)) {
            throw new Error('Invalid status. Allowed statuses: created, in_transit, delivered.');
        }

        const updatedOrder = await OrderRepository.changeStatus(orderId, status);

        if (!updatedOrder) {
            throw new Error(`Order with ID ${orderId} not found.`);
        }

        return { id: updatedOrder.id, status: updatedOrder.status };
    }
}

module.exports = new ChangeOrderStatusUsecase();
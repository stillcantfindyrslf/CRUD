const sequelize = require("../../config/db");
const Order = require('../../models/orderModel')(sequelize);

class OrderRepository {
    async createOrder(orderData) {
        return await Order.create(orderData);
    }
    async getAllOrders() {
        return await Order.findAll();
    }
}

module.exports = new OrderRepository();
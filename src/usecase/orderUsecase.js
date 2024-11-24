const OrderRepository = require('../repository/orderRepository');
const Joi = require('joi');

const orderSchema = Joi.object({
    items: Joi.array()
        .items(Joi.string().min(1).required())
        .min(1)
        .required(),
    customerName: Joi.string()
        .max(100)
        .required(),
    status: Joi.string()
        .valid('created', 'in_transit', 'delivered', 'cancelled')
        .default('created'),
});

class OrderUsecase {
    async execute(orderData) {
        const { error, value } = orderSchema.validate(orderData, { abortEarly: false });

        if (error) {
            throw new Error(
                `Validation failed: ${error.details.map((detail) => detail.message).join(', ')}`
            );
        }

        return await OrderRepository.createOrder(value);
    }
}

module.exports = new OrderUsecase();
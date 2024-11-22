const carUsecae = require('../usecase/carUsecase');

class CarController {
    async getAllCars(req, res) {
        try {
            const orders = await carUsecae.getCarList();
            res.status(200).json({ orders });
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch orders' });
        }
    }
}

module.exports = new CarController();
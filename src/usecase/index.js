const carRepository = require('../repository/carRepository');

class carUseCase {
    async getCarList() {
        return await carRepository.getAllCars();
    }
}

module.exports = new carUseCase();
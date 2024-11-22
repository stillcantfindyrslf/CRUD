const carRepository = require('../repository/carRepository');

class carUsecase {
    async getCarList() {
        return await carRepository.getAllCars();
    }
}

module.exports = new carUsecase();
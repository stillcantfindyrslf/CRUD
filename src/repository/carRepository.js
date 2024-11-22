const sequelize = require("../../config/db");
const CarModel = require('../../models/carModel')(sequelize);
class CarRepository {
    async getAllCars() {
        return await CarModel.findAll();
    }
}

module.exports = new CarRepository();
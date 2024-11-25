const sequelize = require("../config/db");
const {Op} = require("sequelize");
const CarModel = require('../models/carModel')(sequelize);
class CarRepository {
    async getAllCars() {
        return await CarModel.findAll();
    }

    async getFilteredAndSortedCars(filters, sortBy, sortOrder) {
        const where = {};
        if (filters.brandName) {
            where.brandName = { [Op.like]: `%${filters.brandName}%` };
        }
        if (filters.modelName) {
            where.modelName = { [Op.like]: `%${filters.modelName}%` };
        }

        const order = [[sortBy, sortOrder]];

        return await CarModel.findAll({ where, order });
    }
}

module.exports = new CarRepository();
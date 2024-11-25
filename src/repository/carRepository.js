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

    async getCarById(id) {
        return await CarModel.findByPk(id);
    }

    async createCar(carData) {
        return await CarModel.create(carData);
    }

    async updateCar(id, updateData) {
        const car = await CarModel.findByPk(id);
        if (!car) {
            throw new Error(`Car with ID ${id} not found`);
        }

        return await car.update(updateData);
    }

    async deleteCar(id) {
        const car = await CarModel.findByPk(id);
        if (!car) {
            return false;
        }

        return await car.destroy();
    }

    async getSalesCountByModel(modelName) {
        const totalSales = await CarModel.sum('purchaseCount', {
            where: {
                modelName: { [Op.eq]: modelName },
            },
        });
        return totalSales || 0;
    }
}

module.exports = new CarRepository();
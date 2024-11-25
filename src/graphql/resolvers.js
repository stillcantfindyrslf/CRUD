const CarRepository = require('../repository/carRepository');

const resolvers = {
    Query: {
        async getCars(_, {filter, sortBy = 'brandName', sortOrder = 'ASC'}) {
            const filters = {};
            if (filter?.brandName) {
                filters.brandName = filter.brandName;
            }
            if (filter?.modelName) {
                filters.modelName = filter.modelName;
            }

            return await CarRepository.getFilteredAndSortedCars(filters, sortBy, sortOrder);
        },

        async getCarById(_, { id }) {
            const car = await CarRepository.getCarById(id);
            if (!car) {
                throw new Error(`Car with ID &{id} not found`);
            }

            return car;
        },

        async getCarSalesCount(_,  { modelName }) {
            const totalSales = await CarRepository.getSalesCountByModel(modelName);
            return {
                modelName,
                totalSales
            };
        }
    },

    Mutation: {
        async createAuto(_, { input }) {
            const newCar = await CarRepository.createCar(input);
            return newCar;
        },

        async updateAuto(_, { id, input }) {
            const updatedCar = await CarRepository.updateCar(id, input);
            if (!updatedCar) {
                throw new Error(`Failed to update car with ID ${id}`);
            }
            return updatedCar;
        },

        async deleteAuto(_,  { id }) {
            const success = await CarRepository.deleteCar(id);
            if (!success) {
                throw new Error(`Failed to delete car with ID ${id}`);
            }

            return true;
        },
    },
};

module.exports = resolvers;

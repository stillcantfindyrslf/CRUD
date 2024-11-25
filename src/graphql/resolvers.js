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
    }
};

module.exports = resolvers;

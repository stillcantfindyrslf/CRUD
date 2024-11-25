const CarRepository = require('../repository/carRepository');

const resolvers = {
    Query: {
        async getCars() {
            return await CarRepository.getAllCars();
        },
    }
};

module.exports = resolvers;

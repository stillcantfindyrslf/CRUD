'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('car_models', [
      {
        brandName: 'Toyota',
        modelName: 'Corolla',
        fuelType: 'Petrol',
        bodyType: 'Sedan',
        purchaseCount: 120,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brandName: 'Honda',
        modelName: 'Civic',
        fuelType: 'Diesel',
        bodyType: 'Hatchback',
        purchaseCount: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        brandName: 'Tesla',
        modelName: 'Model S',
        fuelType: 'Electric',
        bodyType: 'Sedan',
        purchaseCount: 200,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('car_models', null, {});
  }
};

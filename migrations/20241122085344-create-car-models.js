'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('car_models', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      brandName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      modelName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fuelType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bodyType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      purchaseCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('car_models');
  }
};

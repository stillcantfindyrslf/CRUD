'use strict';

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CarModel = sequelize.define('CarModel', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    brandName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    modelName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fuelType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bodyType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    purchaseCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    tableName: 'car_models',
    timestamps: true
  });

  return CarModel;
};

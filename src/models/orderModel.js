'use strict';

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        items: {
            type: DataTypes.TEXT,
            allowNull: false,
            get() {
                return JSON.parse(this.getDataValue('items'));
            },
            set(value) {
                this.setDataValue('items', JSON.stringify(value));
            }
        },
        customerName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM('created', 'in_transit', 'delivered', 'cancelled'),
            allowNull: false,
            defaultValue: 'created'
        }
    }, {
        tableName: 'orders',
        timestamps: false
    });

    return Order;
};
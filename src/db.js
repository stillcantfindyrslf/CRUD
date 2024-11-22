const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: console.log,
});

sequelize.authenticate()
    .then(() => console.log('Connected to database'))
    .catch((err) => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
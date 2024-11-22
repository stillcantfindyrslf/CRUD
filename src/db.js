const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
});

pool.getConnection()
    .then(() => console.log('Connected to database'))
    .catch((err) => console.error('Failed to connect to database', err));

module.exports = pool;

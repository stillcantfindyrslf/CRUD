const express = require('express');
const logger = require('../logger');
const carUseCase = require('../usecase/index');

const app = express();

app.use(express.json());

app.get('/getList', async (req, res, next) => {
    try {
        const cars = await carUseCase.getCarList();
        res.json(cars);
    } catch (err) {
        next(err);
    }
});


app.use((err, req, res, next) => {
    logger.error(`Error: ${err.message}`);
    res.status(500).json({ success: false, error: err.message });
});

module.exports = app;
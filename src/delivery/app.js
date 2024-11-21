const express = require('express');
const logger = require('../logger');
const IndexUseCase = require('../usecase/index');

const app = express();

app.use(express.json()); // Для работы с JSON

// Пример маршрута
app.get('/', (req, res) => {
    const result = IndexUseCase.execute();
    res.json(result);
});

// Обработка ошибок
app.use((err, req, res, next) => {
    logger.error(`Error: ${err.message}`);
    res.status(500).json({ success: false, error: err.message });
});

module.exports = app;

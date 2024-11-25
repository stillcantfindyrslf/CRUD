const express = require('express');
const logger = require('./utils/logger');
const orderRoutes = require('./routes/orderRoutes');
const carRoutes = require('./routes/carRoutes');
const dotenv = require('dotenv');
const startApolloServer = require('./graphql/server');

dotenv.config();
const app = express();
app.use(express.json());

app.use(
    orderRoutes,
    carRoutes
);

startApolloServer(app);

app.use((err, req, res, next) => {
    logger(`Error: ${err.message}`);
    res.status(500).json({ success: false, error: err.message });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    logger.info(`Server is running on http://localhost:${port}/`);
});
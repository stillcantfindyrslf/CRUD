const dotenv = require('dotenv');
const app = require('./delivery/app');
const logger = require('./logger');

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    logger.info(`Server is running on http://localhost:${port}/`);
});
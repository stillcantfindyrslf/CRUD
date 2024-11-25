const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const cors = require('cors');
const bodyParser = require('body-parser');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

async function startApolloServer(app) {
    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();

    app.use(
        '/graphql',
        cors(),
        bodyParser.json(),
        expressMiddleware(server)
    );
}

module.exports = startApolloServer;

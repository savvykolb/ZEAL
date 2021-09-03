const {ApolloServer} = require('apollo-server')
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({typeDefs})
module.exports = {typeDefs,resolvers};

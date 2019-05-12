import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { merge } from 'lodash';

import {
  resolvers as productsResolvers,
  typeDefs as Products
} from './products';

const BaseQuery = `
  type Query {
    _empty: String
  }
`;

// Provide resolver functions for your schema fields

const schema = makeExecutableSchema({
  typeDefs: [BaseQuery, Products],
  resolvers: merge({}, productsResolvers)
});

const server = new ApolloServer({ schema });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(
    `🚀 Store graph api running on: http://localhost:4000${server.graphqlPath}`
  )
);

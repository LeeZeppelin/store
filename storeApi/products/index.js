import { gql } from 'apollo-server-express';

import productData from './products.json';

export const typeDefs = gql`
  type Product {
    title: String
    brand: String
    price: Int
    description: String
    image: String
  }

  extend type Query {
    getProducts: [Product]
  }
`;

export const resolvers = {
  Query: {
    getProducts: () => productData
  }
};

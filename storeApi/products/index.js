import { gql } from 'apollo-server-express';

import productData from '../data/products.json';

export const typeDefs = gql`
  type Product {
    title: String!
    brand: String!
    price: Int!
    description: String!
    image: String!
  }

  extend type Query {
    products: [Product]
    product(title: String!): Product
  }
`;

export const resolvers = {
  Query: {
    products: () => productData,
    product: (_, { title: titleToMatch }) => {
      const matchingProduct = productData
        .filter(({ title }) => title === titleToMatch)
        .pop();
      return matchingProduct || null;
    }
  }
};

import { gql } from 'apollo-server-express';

import productData from '../data/products.json';

export const typeDefs = gql`
  type LineItem {
    title: String!
    brand: String!
    price: Int!
    description: String!
    image: String!
    quantity: Int!
  }

  type Cart {
    total: Int!
    items: [LineItem]
    totalItems: Int!
  }

  extend type Query {
    cart: Cart
  }

  extend type Mutation {
    addToCart(title: String!, quantity: Int!): Boolean
    removeFromCart(title: String!, quantity: Int): Boolean
  }
`;

// TODO: very dumb, single cart implementation
const cart = {
  items: [],
  total: 0,
  totalItems: 0
};

export const resolvers = {
  Query: {
    cart: () => cart
  },
  Mutation: {
    addToCart: (_, { title: titleToMatch, quantity }) => {
      const matchingProduct = productData
        .filter(({ title }) => title === titleToMatch)
        .pop();

      if (!matchingProduct || quantity < 1) {
        return false;
      }

      const matchingProductInCart = cart.items
        .filter(({ title }) => title === titleToMatch)
        .pop();

      if (matchingProductInCart) {
        matchingProductInCart.quantity += quantity;
      } else {
        cart.items.push({ ...matchingProduct, quantity });
      }

      cart.total += matchingProduct.price * quantity;
      cart.totalItems += quantity;

      return true;
    },
    removeFromCart: (_, { title: titleToMatch, quantity }) => {
      const matchingProductInCart = cart.items
        .filter(({ title }) => title === titleToMatch)
        .pop();

      if (!matchingProductInCart) {
        return false;
      }

      let quantityToRemove = quantity || matchingProductInCart.quantity;

      if (quantityToRemove > matchingProductInCart.quantity) {
        quantityToRemove = matchingProductInCart.quantity;
      }

      if (matchingProductInCart.quantity === quantityToRemove) {
        cart.items = cart.items.filter(({ title }) => title !== titleToMatch);
      } else {
        matchingProductInCart.quantity -= quantityToRemove;
      }

      cart.total -= matchingProductInCart.price * quantityToRemove;
      cart.totalItems -= quantityToRemove;

      return true;
    }
  }
};

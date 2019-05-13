import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';

const getMiniCart = gql`
  query getMiniCart {
    cart {
      items {
        quantity
      }
    }
  }
`;

const CartLink = ({ itemCount }) => (
  <Link href="/cart">
    <a>My Cart ({itemCount})</a>
  </Link>
);

export const MiniCart = () => (
  <Query query={getMiniCart}>
    {({ loading, error, data }) => {
      let itemCount = 0;

      if (!loading && !error) {
        itemCount = data.cart.items.length;
      }

      return <CartLink itemCount={itemCount} />;
    }}
  </Query>
);

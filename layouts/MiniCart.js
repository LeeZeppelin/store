import React from 'react';
import styled from 'styled-components';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { Link } from '../components';

const getMiniCart = gql`
  query getMiniCart {
    cart {
      totalItems
    }
  }
`;

const CartWrapper = styled.nav`
  text-align: right;
  margin: 25px 0;
`;

const CartLink = ({ itemCount }) => (
  <CartWrapper>
    <Link href="/cart">
      My Cart {itemCount ? `(${itemCount})` : null} &#x25BC;
    </Link>
  </CartWrapper>
);

export const MiniCart = () => (
  <Query query={getMiniCart}>
    {({ loading, error, data }) => {
      let itemCount = 0;

      if (!loading && !error) {
        itemCount = data.cart.totalItems;
      }

      return <CartLink itemCount={itemCount} />;
    }}
  </Query>
);

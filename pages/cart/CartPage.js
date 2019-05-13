import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';

import { Main } from '../../layouts';
import { CartTable } from './CartTable';

const getCompleteCart = gql`
  query getCompleteCart {
    cart {
      items {
        title
        brand
        price
        image
        quantity
      }
      total
    }
  }
`;

export const CartPage = () => {
  return (
    <Main>
      <Query query={getCompleteCart}>
        {({ loading, error, data }) => {
          if (loading || error) {
            return null;
          }

          return (
            <>
              {data.cart.items.length ? (
                <CartTable {...data.cart} />
              ) : (
                <p>Your cart is empty</p>
              )}
              <Link href="/">
                <a>Continue Shopping</a>
              </Link>
            </>
          );
        }}
      </Query>
    </Main>
  );
};

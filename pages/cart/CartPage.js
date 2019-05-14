import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { Main } from '../../layouts';
import { CartTable } from './CartTable';
import { CartActions } from './CartActions';

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

          const hasItems = data.cart.items.length > 0;

          return (
            <>
              {hasItems ? (
                <CartTable {...data.cart} />
              ) : (
                <p>Your cart is empty</p>
              )}
              <CartActions hasItems={hasItems} total={data.cart.total} />
            </>
          );
        }}
      </Query>
    </Main>
  );
};

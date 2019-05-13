import React from 'react';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const addToCart = gql`
  mutation Increment($title: String!, $quantity: Int!) {
    addToCart(title: $title, quantity: $quantity)
  }
`;

export const AddToCart = ({ title }) => {
  const [quantity, setQuantity] = React.useState(1);
  return (
    <>
      <button type="button" onClick={() => setQuantity(quantity + 1)}>
        Increment
      </button>
      {quantity}
      <button
        type="button"
        disabled={quantity === 1}
        onClick={() => setQuantity(quantity - 1)}
      >
        Decrement
      </button>
      <Mutation
        mutation={addToCart}
        awaitRefetchQueries
        refetchQueries={['getCompleteCart', 'getMiniCart']}
      >
        {(add, { loading, error }) => {
          return (
            <>
              <button
                disabled={error || loading}
                onClick={() => {
                  add({ variables: { title, quantity } });
                }}
                type="button"
              >
                Add to cart
              </button>
            </>
          );
        }}
      </Mutation>
    </>
  );
};

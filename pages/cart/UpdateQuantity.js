import React from 'react';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { QuantityControl } from '../../components';

const incrementItem = gql`
  mutation Increment($title: String!) {
    addToCart(title: $title, quantity: 1)
  }
`;

const IncrementItem = ({ children }) => {
  return (
    <Mutation
      mutation={incrementItem}
      awaitRefetchQueries
      refetchQueries={['getCompleteCart', 'getMiniCart']}
    >
      {increment => {
        return children(increment);
      }}
    </Mutation>
  );
};

const decrementItem = gql`
  mutation Decrement($title: String!) {
    removeFromCart(title: $title, quantity: 1)
  }
`;

const DecrementItem = ({ children }) => {
  return (
    <Mutation
      mutation={decrementItem}
      awaitRefetchQueries
      refetchQueries={['getCompleteCart', 'getMiniCart']}
    >
      {decrement => {
        return children(decrement);
      }}
    </Mutation>
  );
};

export const UpdateQuantity = ({ title, quantity }) => (
  <IncrementItem>
    {increment => (
      <DecrementItem>
        {decrement => (
          <QuantityControl
            quantity={quantity}
            increment={() => increment({ variables: { title } })}
            decrement={() => decrement({ variables: { title } })}
          />
        )}
      </DecrementItem>
    )}
  </IncrementItem>
);

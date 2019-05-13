import React from 'react';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const decrementItem = gql`
  mutation Decrement($title: String!) {
    removeFromCart(title: $title, quantity: 1)
  }
`;

export const DecrementItem = ({ title }) => {
  return (
    <Mutation
      mutation={decrementItem}
      awaitRefetchQueries
      refetchQueries={['getCompleteCart', 'getMiniCart']}
    >
      {(decrement, { loading, error }) => {
        return (
          <>
            <button
              disabled={error || loading}
              onClick={() => {
                decrement({ variables: { title } });
              }}
              type="button"
            >
              Decrement
            </button>
          </>
        );
      }}
    </Mutation>
  );
};

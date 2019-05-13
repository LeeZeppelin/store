import React from 'react';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const incrementItem = gql`
  mutation Increment($title: String!) {
    addToCart(title: $title, quantity: 1)
  }
`;

export const IncrementItem = ({ title }) => {
  return (
    <Mutation
      mutation={incrementItem}
      awaitRefetchQueries
      refetchQueries={['getCompleteCart', 'getMiniCart']}
    >
      {(increment, { loading, error }) => {
        return (
          <>
            <button
              disabled={error || loading}
              onClick={() => {
                increment({ variables: { title } });
              }}
              type="button"
            >
              Increment
            </button>
          </>
        );
      }}
    </Mutation>
  );
};

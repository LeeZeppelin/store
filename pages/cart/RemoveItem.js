import React from 'react';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const removeItem = gql`
  mutation RemoveItem($title: String!) {
    removeFromCart(title: $title)
  }
`;

export const RemoveItem = ({ title }) => {
  return (
    <Mutation
      mutation={removeItem}
      awaitRefetchQueries
      refetchQueries={['getCompleteCart', 'getMiniCart']}
    >
      {(remove, { loading, error }) => {
        return (
          <>
            <button
              disabled={error || loading}
              onClick={() => {
                remove({ variables: { title } });
              }}
              type="button"
            >
              Remove Item
            </button>
          </>
        );
      }}
    </Mutation>
  );
};

import React from 'react';
import styled from 'styled-components';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const removeItem = gql`
  mutation RemoveItem($title: String!) {
    removeFromCart(title: $title)
  }
`;

const RemoveButton = styled.button`
  background: transparent;
  color: #666666;
  border: 0;
  font-size: 24px;
  cursor: pointer;
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
            <RemoveButton
              disabled={error || loading}
              onClick={() => {
                remove({ variables: { title } });
              }}
              type="button"
            >
              &#10005;
            </RemoveButton>
          </>
        );
      }}
    </Mutation>
  );
};

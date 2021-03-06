import React from 'react';
import styled from 'styled-components';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { QuantityControl, PrimaryButton } from '../../components';

const addToCart = gql`
  mutation Increment($title: String!, $quantity: Int!) {
    addToCart(title: $title, quantity: $quantity)
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AddToCart = ({ title }) => {
  const [quantity, setQuantity] = React.useState(1);
  return (
    <Wrapper>
      <QuantityControl
        quantity={quantity}
        increment={() => setQuantity(quantity + 1)}
        decrement={() => setQuantity(quantity - 1)}
      />
      <Mutation
        mutation={addToCart}
        awaitRefetchQueries
        refetchQueries={['getCompleteCart', 'getMiniCart']}
      >
        {(add, { loading, error }) => {
          return (
            <>
              <PrimaryButton
                disabled={error || loading}
                onClick={() => {
                  add({ variables: { title, quantity } });
                }}
                type="button"
              >
                Add to cart
              </PrimaryButton>
            </>
          );
        }}
      </Mutation>
    </Wrapper>
  );
};

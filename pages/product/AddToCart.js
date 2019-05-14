import React from 'react';
import styled from 'styled-components';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const PrimaryButton = styled.button`
  background: #000000;
  color: #ffffff;
  text-transform: uppercase;
  border: 0;
  font-size: 16px;
  padding: 16px;
`;

const QuantityControl = styled.button`
  font-size: 12px;
  background: #cccccc;
  color: #666666;
  height: 24px;
  width: 24px;
  text-align: center;
  margin-bottom: 2px;
  border: 0;
`;

const Quantity = styled.p`
  font-size: 12px;
  padding: 20px;
  background: #eeeeee;
  color: #666666;
  height: 50px;
  width: 50px;
  text-align: center;
  float: left;
`;

const Controls = styled.div`
  float: left;
  width: 24px;
  margin-left: 2px;
  margin-right: 20px;
`;

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
      <Quantity>{quantity}</Quantity>
      <Controls>
        <QuantityControl
          type="button"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </QuantityControl>
        <QuantityControl
          type="button"
          disabled={quantity === 1}
          onClick={() => setQuantity(quantity - 1)}
        >
          -
        </QuantityControl>
      </Controls>

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

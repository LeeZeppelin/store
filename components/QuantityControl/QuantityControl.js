import React from 'react';
import styled from 'styled-components';

const QuantityButton = styled.button`
  font-size: 12px;
  background: #cccccc;
  color: #666666;
  height: 24px;
  width: 24px;
  text-align: center;
  margin-bottom: 2px;
  border: 0;
  cursor: pointer;
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

export const QuantityControl = ({ quantity, increment, decrement }) => (
  <>
    <Quantity>{quantity}</Quantity>
    <Controls>
      <QuantityButton type="button" onClick={increment}>
        +
      </QuantityButton>
      <QuantityButton
        type="button"
        disabled={quantity === 1}
        onClick={decrement}
      >
        -
      </QuantityButton>
    </Controls>
  </>
);

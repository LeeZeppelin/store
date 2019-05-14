import React from 'react';
import styled from 'styled-components';

import { config } from '../config';

const QuantityButton = styled.button`
  font-size: ${config.fontSize.small};
  background: ${config.palette.lightGray};
  color: ${config.palette.midGray};
  height: 24px;
  width: 24px;
  text-align: center;
  margin-bottom: 2px;
  border: 0;
  cursor: pointer;
`;

const Quantity = styled.p`
  font-size: ${config.fontSize.small};
  padding: 20px;
  background: ${config.palette.nearWhite};
  color: ${config.palette.midGray};
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

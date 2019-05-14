import React from 'react';
import styled from 'styled-components';

import { Row, Col } from 'styled-bootstrap-grid';

import { Link, PrimaryButton } from '../../components';

const CheckoutButton = styled(PrimaryButton)`
  float: right;
`;

const Wrapper = styled.div`
  margin-top: 20px;
`;

export const CartActions = ({ hasItems, total }) => {
  return (
    <Wrapper>
      <Row>
        <Col xs="12" sm="6">
          <Link href="/">Continue Shopping</Link>
        </Col>
        <Col xs="12" sm="6">
          {hasItems ? (
            <CheckoutButton
              onClick={() => window.alert('Thanks for shopping at Hero')}
            >
              Checkout (&#36;{total})
            </CheckoutButton>
          ) : null}
        </Col>
      </Row>
    </Wrapper>
  );
};

import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import { config } from '../../components';
import { CartRow } from './CartRow';

const CartHeader = styled.p`
  text-align: ${({ right }) => (right ? 'right' : 'left')};
  font-size: 12px;
  color: ${({ dark }) =>
    dark ? config.palette.nearBlack : config.palette.midGray};
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const CartSection = styled.div`
  border-bottom: 1px solid ${config.palette.lightGray};
  padding-bottom: 20px;
  margin-bottom: 10px;
`;

const CartHeadings = () => (
  <CartSection>
    <Row>
      <Col xs="12" sm="6">
        <CartHeader>Product</CartHeader>
      </Col>
      <Col xs="12" sm="6">
        <Row>
          <Col xs="4" sm="6">
            <CartHeader>Quantity</CartHeader>
          </Col>
          <Col xs="4" sm="2">
            <CartHeader>Total</CartHeader>
          </Col>
          <Col xs="4" sm="2">
            <CartHeader>Action</CartHeader>
          </Col>
        </Row>
      </Col>
    </Row>
  </CartSection>
);

const CartOverview = ({ total }) => (
  <CartSection>
    <Row>
      <Col xs="6" sm="6" />
      <Col xs="6" sm="6">
        <CartHeader>Cart Overview</CartHeader>
        <Row>
          <Col xs="6" sm="6">
            <CartHeader>Subtotal</CartHeader>
          </Col>
          <Col xs="6" sm="6">
            <CartHeader right>&#36;{total}</CartHeader>
          </Col>
        </Row>
        <Row>
          <Col xs="6" sm="6">
            <CartHeader>Total</CartHeader>
          </Col>
          <Col xs="6" sm="6">
            <CartHeader right dark>
              &#36;{total} CAD
            </CartHeader>
          </Col>
        </Row>
      </Col>
    </Row>
  </CartSection>
);

export const CartTable = ({ items, total }) => (
  <>
    <CartHeadings />
    {items.map(item => (
      <CartRow key={item.title} {...item} />
    ))}
    <CartOverview total={total} />
  </>
);

import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import { CartRow } from './CartRow';

const CartTitle = styled.p`
  font-size: 12px;
  color: #666666;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const CartHeadingsWrapper = styled.div`
  border-bottom: 1px solid #cccccc;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

const CartHeadings = () => (
  <CartHeadingsWrapper>
    <Row>
      <Col xs="6" sm="6">
        <CartTitle>Product</CartTitle>
      </Col>
      <Col xs="2" sm="2">
        <CartTitle>Quantity</CartTitle>
      </Col>
      <Col xs="2" sm="2">
        <CartTitle>Total</CartTitle>
      </Col>
      <Col xs="2" sm="2">
        <CartTitle>Action</CartTitle>
      </Col>
    </Row>
  </CartHeadingsWrapper>
);

const CartOverview = ({ total }) => (
  <Row>
    <Col xs="6" sm="6" />
    <Col xs="6" sm="6">
      <p>Cart Overview</p>
      <Row>
        <Col xs="6" sm="6">
          <p>Subtotal</p>
        </Col>
        <Col xs="6" sm="6">
          <p>&#36;{total}</p>
        </Col>
      </Row>
      <Row>
        <Col xs="6" sm="6">
          <p>Total</p>
        </Col>
        <Col xs="6" sm="6">
          <p>&#36;{total}</p>
        </Col>
      </Row>
    </Col>
  </Row>
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

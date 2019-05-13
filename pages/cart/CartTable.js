import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';

import { IncrementItem } from './IncrementItem';
import { DecrementItem } from './DecrementItem';
import { RemoveItem } from './RemoveItem';

const CartHeadings = () => (
  <Row>
    <Col xs="6" sm="6">
      Product
    </Col>
    <Col xs="2" sm="2">
      Quantity
    </Col>
    <Col xs="2" sm="2">
      Total
    </Col>
    <Col xs="2" sm="2">
      Action
    </Col>
  </Row>
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

const CartRow = ({ brand, title, image, quantity, price }) => (
  <Row>
    <Col xs="6" sm="6">
      <Row>
        <Col xs="8" sm="8">
          {image}
        </Col>
        <Col xs="4" sm="4">
          {brand}
          <br />
          {title}
        </Col>
      </Row>
    </Col>
    <Col xs="2" sm="2">
      {quantity}
      <IncrementItem title={title} />
      <DecrementItem title={title} />
    </Col>
    <Col xs="2" sm="2">
      &#36;{quantity * price}
    </Col>
    <Col xs="2" sm="2">
      <RemoveItem title={title} />
    </Col>
  </Row>
);

export const CartTable = ({ items, total }) => (
  <>
    <CartHeadings />
    {items.map(item => (
      <CartRow {...item} />
    ))}
    <CartOverview total={total} />
  </>
);

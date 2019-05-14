import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';

import { ProductTile } from './ProductTile';

export const ProductGrid = ({ products }) => (
  <Row>
    {products.map(product => (
      <Col key={product.title} xs="12" sm="6" md="4">
        <ProductTile {...product} />
      </Col>
    ))}
  </Row>
);

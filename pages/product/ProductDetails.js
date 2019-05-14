import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';

import { AddToCart } from './AddToCart';
import { ResponsiveImage } from '../../components';

export const ProductDetails = ({ title, brand, price, description, image }) => (
  <Row>
    <Col xs="8" sm="8">
      <ResponsiveImage src={`/static/${image}`} alt={title} />
    </Col>
    <Col xs="4" sm="4">
      <p>{brand}</p>
      <p>{title}</p>
      <p>{price}</p>
      <p>{description}</p>
      <AddToCart title={title} />
    </Col>
  </Row>
);

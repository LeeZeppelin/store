import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import { ResponsiveImage } from '../../components';
import { UpdateQuantity } from './UpdateQuantity';

import { RemoveItem } from './RemoveItem';

const RowWrapper = styled.div`
  border-bottom: 1px solid #cccccc;
  padding-bottom: 40px;
  margin-bottom: 20px;
`;

const BrandTitle = styled.p`
  font-size: 12px;
  color: #666666;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const ProductTitle = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 15px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  color: #666666;
  margin-bottom: 20px;
  font-family: Georgia;
`;

export const CartRow = ({ brand, title, image, quantity, price }) => (
  <RowWrapper>
    <Row>
      <Col xs="12" sm="6">
        <Row>
          <Col xs="4" sm="4">
            <ResponsiveImage src={`/static/${image}`} alt={title} />
          </Col>
          <Col xs="8" sm="8">
            <BrandTitle>{brand}</BrandTitle>
            <ProductTitle>{title}</ProductTitle>
          </Col>
        </Row>
      </Col>
      <Col xs="12" sm="6">
        <Row>
          <Col xs="4" sm="6">
            <UpdateQuantity title={title} quantity={quantity} />
          </Col>
          <Col xs="4" sm="2">
            <ProductPrice>&#36;{quantity * price}</ProductPrice>
          </Col>
          <Col xs="4" sm="2">
            <RemoveItem title={title} />
          </Col>
        </Row>
      </Col>
    </Row>
  </RowWrapper>
);

import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import { ResponsiveImage, config, FormatPrice } from '../../components';
import { UpdateQuantity } from './UpdateQuantity';

import { RemoveItem } from './RemoveItem';

const RowWrapper = styled.div`
  border-bottom: 1px solid ${config.palette.lightGray};
  padding-bottom: 40px;
  margin-bottom: 20px;
`;

const BrandTitle = styled.p`
  font-size: 12px;
  color: ${config.palette.midGray};
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const ProductTitle = styled.p`
  font-size: 14px;
  text-transform: uppercase;
  color: ${config.palette.nearBlack};
  margin-bottom: 15px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  color: ${config.palette.midGray};
  margin-bottom: 20px;
  font-family: ${config.fontFamily.primary};
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
            <ProductPrice>
              <FormatPrice value={quantity * price} />
            </ProductPrice>
          </Col>
          <Col xs="4" sm="2">
            <RemoveItem title={title} />
          </Col>
        </Row>
      </Col>
    </Row>
  </RowWrapper>
);

import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import { AddToCart } from './AddToCart';
import { ResponsiveImage } from '../../components';

const ProductImage = styled(ResponsiveImage)`
  margin-bottom: 20px;
`;

const ProductInfo = styled.div`
  text-align: center;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 20px;
`;

const BrandTitle = styled.p`
  font-size: 14px;
  color: #666666;
  margin-bottom: 20px;
`;

const ProductTitle = styled.p`
  font-size: 28px;
  line-height: 1.5;
  color: #000000;
  margin-bottom: 20px;
  font-family: Georgia;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  color: #666666;
  margin-bottom: 20px;
  font-family: Georgia;
`;

const ProductDescription = styled(BrandTitle)`
  line-height: 1.5;
`;

export const ProductDetails = ({ title, brand, price, description, image }) => (
  <Row>
    <Col xs="12" md="6" lg="8">
      <ProductImage src={`/static/${image}`} alt={title} />
    </Col>
    <Col xs="12" md="6" lg="4">
      <ProductInfo>
        <BrandTitle>{brand}</BrandTitle>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>&#36;{price}</ProductPrice>
        <ProductDescription>{description}</ProductDescription>
      </ProductInfo>

      <AddToCart title={title} />
    </Col>
  </Row>
);

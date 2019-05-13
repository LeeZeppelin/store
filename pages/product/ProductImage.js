import React from 'react';
import { Row, Col } from 'styled-bootstrap-grid';
import styled from 'styled-components';

import { ResponsiveImage } from '../../components';

const ProductImageWrapper = styled.div`
  background-color: #eeeeee;
`;

export const ProductImage = ({ src, alt }) => (
  <ProductImageWrapper>
    <Row>
      <Col xs="12" sm="8" smOffset="2">
        <ResponsiveImage src={src} alt={alt} />
      </Col>
    </Row>
  </ProductImageWrapper>
);

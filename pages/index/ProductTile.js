import React from 'react';

import styled from 'styled-components';
import Link from 'next/link';
import { ResponsiveImage } from '../../components';

const ProductImage = styled(ResponsiveImage)`
  margin-bottom: 15px;
`;

const TileWrapper = styled.a`
  text-decoration: none;
  text-align: center;
  padding-bottom: 15px;
  display: block;
`;

const BrandTitle = styled.p`
  font-size: 14px;
  color: #666666;
  margin-bottom: 15px;
`;

const ProductTitle = styled.p`
  font-size: 16px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 15px;
`;

const ProductPrice = styled.p`
  font-size: 14px;
  color: #666666;
  margin-bottom: 15px;
  font-family: Georgia;
`;

export const ProductTile = ({ image, brand, title, price }) => (
  <Link passHref href={`/product?title=${title}`}>
    <TileWrapper>
      <ProductImage src={`/static/${image}`} alt={title} />
      <BrandTitle>{brand}</BrandTitle>
      <ProductTitle>{title}</ProductTitle>
      <ProductPrice>&#36;{price}</ProductPrice>
    </TileWrapper>
  </Link>
);

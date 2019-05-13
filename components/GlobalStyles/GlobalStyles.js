import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';
import { BaseCSS } from 'styled-bootstrap-grid';

const ShopGlobalStyles = createGlobalStyle`
  body {
    background: #FFFFFF;
    font-family: arial;
  }
`;

export const GlobalStyles = () => (
  <>
    <Reset />
    <BaseCSS />
    <ShopGlobalStyles />
  </>
);

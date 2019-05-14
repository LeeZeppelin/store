import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';
import { BaseCSS } from 'styled-bootstrap-grid';

import { config } from '../config';

const ShopGlobalStyles = createGlobalStyle`
  body {
    background: ${config.palette.white};
    color: ${config.palette.nearBlack};
    font-family: ${config.fontFamily.secondary};
  }
`;

export const GlobalStyles = () => (
  <>
    <Reset />
    <BaseCSS />
    <ShopGlobalStyles />
  </>
);

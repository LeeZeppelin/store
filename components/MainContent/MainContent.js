import React from 'react';
import { Container } from 'styled-bootstrap-grid';

export const MainContent = ({ children }) => (
  <Container as="section">{children}</Container>
);

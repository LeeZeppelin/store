import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import Link from 'next/link';

import { MainContent } from '../components';
import { MiniCart } from './MiniCart';

export const Main = ({ children }) => (
  <>
    <Container>
      <Row>
        <Col xs="4" sm="4">
          <Link href="/">
            <a>Logo to go here</a>
          </Link>
        </Col>
        <Col xs="4" sm="4">
          Menu to go here
        </Col>
        <Col xs="4" sm="4">
          <MiniCart />
        </Col>
      </Row>
    </Container>
    <MainContent>{children}</MainContent>
  </>
);

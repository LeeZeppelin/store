import React from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import { Logo } from '../Logo';

export const Header = () => (
  <Container>
    <Row>
      <Col xs="4" sm="4">
        <Logo />
      </Col>
      <Col xs="4" sm="4">
        Menu to go here
      </Col>
      <Col xs="4" sm="4">
        Cart to go here
      </Col>
    </Row>
  </Container>
);

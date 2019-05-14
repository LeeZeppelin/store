import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'styled-bootstrap-grid';
import Link from 'next/link';

import { MainContent, config } from '../components';
import { MiniCart } from './MiniCart';

import { MainNav } from './MainNav';

const HeaderWrapper = styled.div`
  background-color: ${config.palette.white};
  border-bottom: 1px solid ${config.palette.lightGray};
  margin-bottom: 20px;
`;

const Header = () => (
  <Container fluid as={HeaderWrapper}>
    <Row>
      <Col xs="4" sm="3" md="2">
        <Link href="/">
          <a>
            <img src="/static/logo.png" alt="Hero" />
          </a>
        </Link>
      </Col>
      <Col xs="4" sm="6" md="8">
        <MainNav />
      </Col>
      <Col xs="4" sm="3" md="2">
        <MiniCart />
      </Col>
    </Row>
  </Container>
);

export const Main = ({ children }) => (
  <>
    <Header />
    <MainContent>{children}</MainContent>
  </>
);

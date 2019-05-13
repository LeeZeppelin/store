import React from 'react';
import styled from 'styled-components';

import { Link } from '../components';

const MainNavWrapper = styled.nav`
  text-align: center;
  margin: 25px 0;
`;

const LinkList = styled.ul``;

const LinkItem = styled.li`
  display: inline-block;
  padding: 0 15px;
`;

export const MainNav = () => (
  <MainNavWrapper>
    <LinkList>
      <LinkItem>
        <Link href="/">Home</Link>
      </LinkItem>
      <LinkItem>
        <Link href="/">Shop &#x25BC;</Link>
      </LinkItem>
      <LinkItem>
        <Link href="/">Journal</Link>
      </LinkItem>
      <LinkItem>
        <Link href="/">More &#x25BC;</Link>
      </LinkItem>
    </LinkList>
  </MainNavWrapper>
);

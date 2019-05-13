import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';

const StyledAnchor = styled.a`
  font-size: 12px;
  font-weight: bold;
  color: #000000;
  text-transform: uppercase;
  display: inline-block;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Link = ({ href, children }) => (
  <NextLink passHref href={href}>
    <StyledAnchor>{children}</StyledAnchor>
  </NextLink>
);

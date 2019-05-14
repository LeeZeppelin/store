import React from 'react';
import styled from 'styled-components';
import NextLink from 'next/link';

import { config } from '../config';

const StyledAnchor = styled.a`
  font-size: ${config.fontSize.small};
  font-weight: bold;
  color: ${config.palette.nearBlack};
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

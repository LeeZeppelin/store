import styled from 'styled-components';

import { config } from '../config';

export const PrimaryButton = styled.button`
  background: ${config.palette.nearBlack};
  color: ${config.palette.white};
  text-transform: uppercase;
  border: 0;
  font-size: ${config.fontSize.medium};
  padding: 16px;
  cursor: pointer;
`;

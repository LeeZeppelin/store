import React from 'react';
import { Header, MainContent } from '../components';

export const Main = ({ children }) => (
  <>
    <Header />
    <MainContent>{children}</MainContent>
  </>
);

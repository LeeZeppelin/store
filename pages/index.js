import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { Dummy } from '../components';
import { Main } from '../layouts';

const allProductsQuery = gql`
  {
    getProducts {
      title
    }
  }
`;

const Home = () => {
  return (
    <Main>
      <Dummy>Welcome to Next.js!</Dummy>
      <Query query={allProductsQuery}>
        {({ loading, error, data }) => {
          return JSON.stringify(data);
        }}
      </Query>
    </Main>
  );
};

export default Home;

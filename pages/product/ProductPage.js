import React from 'react';
import { withRouter } from 'next/router';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { Main } from '../../layouts';
import { ProductDetails } from './ProductDetails';

const getProduct = gql`
  query GetProduct($title: String!) {
    product(title: $title) {
      title
      brand
      price
      description
      image
    }
  }
`;

export const ProductPage = withRouter(({ router }) => {
  return (
    <Main>
      <Query query={getProduct} variables={{ title: router.query.title }}>
        {({ loading, error, data }) => {
          if (loading) {
            return null;
          }

          if (error || !data || !data.product) {
            return <p>Product Not Found</p>;
          }

          return <ProductDetails {...data.product} />;
        }}
      </Query>
    </Main>
  );
});

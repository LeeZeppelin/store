import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { Main } from '../../layouts';
import { ProductGrid } from './ProductGrid';

const allProductsQuery = gql`
  {
    products {
      title
      image
      brand
      price
    }
  }
`;

export const CategoryPage = () => {
  return (
    <Main>
      <Query query={allProductsQuery}>
        {({ loading, error, data }) => {
          if (error) {
            return <p>No products found</p>;
          }

          if (loading) {
            return <p>Loading</p>;
          }

          return <ProductGrid products={data.products} />;
        }}
      </Query>
    </Main>
  );
};

import React from 'react';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from 'next/link';

import { Main } from '../../layouts';

const allProductsQuery = gql`
  {
    products {
      title
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

          return (
            <ul>
              {data.products.map(({ title }) => (
                <li>
                  <Link href={`/product?title=${title}`}>
                    <a>{title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          );
        }}
      </Query>
    </Main>
  );
};

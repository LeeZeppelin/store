import React from 'react';

import { render } from 'react-testing-library';
import { PrimaryButton } from '.';

describe('PrimaryButton', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <PrimaryButton>With some text</PrimaryButton>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('passes in children', () => {
    const { getByText } = render(<PrimaryButton>With some text</PrimaryButton>);
    expect(getByText('With some text')).toBeInTheDocument();
  });
});

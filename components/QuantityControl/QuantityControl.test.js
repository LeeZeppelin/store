import React from 'react';

import { render, fireEvent } from 'react-testing-library';
import { QuantityControl } from '.';

describe('QuantityControl', () => {
  it('renders correctly ', () => {
    const { asFragment } = render(
      <QuantityControl quantity={1} increment={() => {}} decrement={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the passed in quantity', () => {
    const { getByText } = render(
      <QuantityControl
        quantity={298}
        increment={() => {}}
        decrement={() => {}}
      />
    );
    expect(getByText('298')).toBeInTheDocument();
  });

  it('calls the passed in increment function on + click', () => {
    const mockIncrement = jest.fn();
    const { getByText } = render(
      <QuantityControl
        quantity={1}
        increment={mockIncrement}
        decrement={() => {}}
      />
    );

    fireEvent.click(getByText('+'));
    expect(mockIncrement).toHaveBeenCalled();
  });

  it('calls the passed in decrement function on - click when quantity is above 1', () => {
    const mockDecrement = jest.fn();
    const { getByText } = render(
      <QuantityControl
        quantity={2}
        increment={() => {}}
        decrement={mockDecrement}
      />
    );

    fireEvent.click(getByText('-'));
    expect(mockDecrement).toHaveBeenCalled();
  });

  it('does not call the passed in decrement function on - click when quantity is 1', () => {
    const mockDecrement = jest.fn();
    const { getByText } = render(
      <QuantityControl
        quantity={1}
        increment={() => {}}
        decrement={mockDecrement}
      />
    );

    fireEvent.click(getByText('-'));
    expect(mockDecrement).not.toHaveBeenCalled();
  });
});

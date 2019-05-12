import React from 'react';

import { render } from 'react-testing-library';
import { Dummy } from '.';

describe('Dummy', () => {
  it('should render without crashing', () => {
    const { container } = render(<Dummy>Component Title</Dummy>);

    expect(container).toHaveTextContent('Component Title');
  });
});

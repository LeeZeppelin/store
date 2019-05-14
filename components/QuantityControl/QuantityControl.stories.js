import React from 'react';
import { storiesOf } from '@storybook/react';

import { QuantityControl } from '.';

storiesOf('QuantityControl', module).add('default', () => (
  <QuantityControl quantity={1} increment={() => {}} decrement={() => {}} />
));

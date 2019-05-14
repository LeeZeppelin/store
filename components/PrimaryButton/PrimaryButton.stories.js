import React from 'react';
import { storiesOf } from '@storybook/react';

import { PrimaryButton } from '.';

storiesOf('PrimaryButton', module).add('default', () => (
  <PrimaryButton>Example of a primary button</PrimaryButton>
));

import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { GlobalStyles } from '../components';

addDecorator(story => (
  <>
    <GlobalStyles />
    {story()}
  </>
));

function loadStories() {
  const req = require.context('../components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

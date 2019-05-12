import React from 'react';
import { storiesOf } from '@storybook/react';

import { Dummy } from './';

storiesOf('Dummy', module).add('with text', () => <Dummy>Hello Dummy</Dummy>).add('with emoji', () => (
	<Dummy>
		<span role="img" aria-label="so cool">
			😀 😎 👍 💯
		</span>
	</Dummy>
));

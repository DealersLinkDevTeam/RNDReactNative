import React from 'react';

import {storiesOf} from '@storybook/react-native';
import {linkTo} from '@storybook/addon-links';

import Welcome from './index';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

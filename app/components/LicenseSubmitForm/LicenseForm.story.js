import React from 'react';
import {storiesOf} from '@storybook/react-native';

import CenterView from '../CenterView';
import LicenseForm from './LicenseForm';

storiesOf('Form', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Manual Scans', () => <LicenseForm />);

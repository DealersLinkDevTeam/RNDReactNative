import React from 'react';
import {storiesOf} from '@storybook/react-native';
import ContainerView from '../ContainerView';
import Camera from './Camera';
import ControlPanel from '../CameraPanels/ControlPanel';
import {BarcodeMask} from '@nartc/react-native-barcode-mask';

storiesOf('Camera', module).add('With Mask', () => (
  <ContainerView>
    <Camera>
      <BarcodeMask maskOpacity={0.2} backgroundColor="#000" />
    </Camera>
    <ControlPanel />
  </ContainerView>
));

import React from 'react';
import {RNCamera} from 'react-native-camera';
import styles from './Styles';

const Camera = ({children}) => (
  <RNCamera
    ref={(ref) => {
      this.camera = ref;
    }}
    style={styles.preview}
    type={RNCamera.Constants.Type.back}
    flashMode={RNCamera.Constants.FlashMode.on}
    androidCameraPermissionOptions={{
      title: 'Permission to use camera',
      message: 'We need your permission to use your camera',
      buttonPositive: 'Ok',
      buttonNegative: 'Cancel',
    }}
    androidRecordAudioPermissionOptions={{
      title: 'Permission to use audio recording',
      message: 'We need your permission to use your audio',
      buttonPositive: 'Ok',
      buttonNegative: 'Cancel',
    }}
    onGoogleVisionBarcodesDetected={({barcodes}) => {
      console.log(barcodes);
    }}>
    {children}
  </RNCamera>
);

export default Camera;

import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Input} from 'react-native-elements';
import styles from './styles';
import TextInputMask from 'react-native-text-input-mask';

const LicenseForm = ({params}) => {
  return (
    <View style={styles.container}>
      <TextInputMask
        refInput={(ref) => {
          this.input = ref;
        }}
        onChangeText={(formatted, extracted) => {
          console.log(formatted); // +1 (123) 456-78-90
          console.log(extracted); // 1234567890
        }}
        mask={'SS-SSSSSSSSSSSSSS'}
      />
    </View>
  );
};

export default LicenseForm;

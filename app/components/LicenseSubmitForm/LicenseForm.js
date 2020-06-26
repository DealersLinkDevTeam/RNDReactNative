import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Input} from 'react-native-elements';
import styles from './styles';

const LicenseForm = ({params}) => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="INPUT WITH ICON"
        leftIcon={{type: 'font-awesome', name: 'chevron-left'}}
      />
    </View>
  );
};

export default LicenseForm;

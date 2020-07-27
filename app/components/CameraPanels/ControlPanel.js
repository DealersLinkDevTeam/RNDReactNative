import React from 'react';
import {Text, View} from 'react-native';
import styles from './Styles';

import BottomSheet from 'reanimated-bottom-sheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ControlPanel = ({...rest}) => {
  const renderContent = () => (
    <View style={styles.panel}>
      <View style={styles.group}>
        <View style={styles.panelButton}>
          <MaterialCommunityIcons name="magnify" color="#FFF" size={45} />
        </View>
        <View style={styles.panelButton}>
          <MaterialCommunityIcons name="camera-iris" color="#FFF" size={56} />
        </View>
        <View style={styles.panelButton}>
          <MaterialCommunityIcons name="arrow-right" color="#FFF" size={35} />
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.group}>
          <View style={styles.panelButton}>
            <MaterialCommunityIcons name="delete" color="#FFF" size={40} />
          </View>
          <View style={styles.panelButton}>
            <MaterialIcons name="photo-library" color="#FFF" size={40} />
          </View>
          <View style={styles.panelButton}>
            <MaterialCommunityIcons name="cog" color="#FFF" size={40} />
          </View>
        </View>
        <View style={styles.group}>
          <View style={styles.panelButton}>
            <MaterialCommunityIcons name="qrcode-scan" color="#FFF" size={40} />
          </View>
          <View style={styles.panelButton}>
            <MaterialIcons name="photo-library" color="#FFF" size={40} />
          </View>
          <View style={styles.panelButton}>
            <MaterialCommunityIcons name="cog" color="#FFF" size={40} />
          </View>
        </View>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  bs = React.createRef();

  return (
    <View style={[styles.container]}>
      <BottomSheet
        initialSnap={2}
        snapPoints={[450, 300, '10%']}
        renderContent={renderContent}
        renderHeader={renderHeader}
      />
    </View>
  );
};

export default ControlPanel;

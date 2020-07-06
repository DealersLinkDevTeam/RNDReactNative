import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import {CardList} from '../components/Lists';
import {SimpleCard} from '../components/Cards';
import {FloatingView} from '../components/UtilityViews';
import StatusBar from '../components/FocusAwareStatusBar/StatusBar';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
        <View style={styles.section}>
          <FloatingView>
            <SimpleCard />
          </FloatingView>
          <CardList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
  },
});

export default HomeScreen;

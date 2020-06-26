/**
 * ReduxBoilerPlate
 * https://github.com/facebook/react-native
 */
import React from 'react';
import {StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import store from './app/store';

if (__DEV__) {
  import('./app/config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

import RootContainer from './app/containers/RootContainer';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <RootContainer />
    </Provider>
  );
};

export default App;

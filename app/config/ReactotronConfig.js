import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';

console.disableYellowBox = true;

// First, set some configuration settings on how to connect to the app
Reactotron.setAsyncStorageHandler(AsyncStorage);
Reactotron.configure({
  name: 'RND',
  // host: '10.0.1.1',
  // port: 9091
});

// add every built-in react native feature.  you also have the ability to pass
// an object as a parameter to configure each individual react-native plugin
// if you'd like.
Reactotron.useReactNative({
  asyncStorage: {ignore: ['secret']},
});

// add some more plugins for redux & redux-saga
// Reactotron.use(reduxPlugin());
// Reactotron.use(sagaPlugin());

// if we're running in DEV mode, then let's connect!
if (__DEV__) {
  Reactotron.connect();
  Reactotron.clear();
}

Reactotron.onCustomCommand('test', () =>
  console.tron.log('This is an example'),
);

console.tron = Reactotron;

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {images, colors} from '../themes';

class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <ImageBackground source={images.ripple} style={styles.image}>
            <Text style={styles.buttonText}>TAKE PHOTO</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.icon,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 300,
    height: 270,
  },
  buttonText: {
    paddingTop: 32,
    color: colors.white,
    fontFamily: 'System',
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default CameraScreen;

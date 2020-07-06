import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {images, colors} from '../themes';

const windowWidth = Dimensions.get('window').width;
console.log('windowWidth', windowWidth);

class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Menu Component */}
        <View style={styles.menu}>
          <Text style={styles.menuText}>Library</Text>
        </View>
        <View style={styles.centeredContent}>
          {/* Button Component */}
          <TouchableOpacity style={styles.button}>
            <ImageBackground source={images.ripple} style={styles.image}>
              <Text style={styles.buttonText}>TAKE PHOTO</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.icon,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: windowWidth - 32,
    height: windowWidth - windowWidth * 0.19,
  },
  buttonText: {
    paddingTop: 32,
    color: colors.white,
    fontFamily: 'System',
    fontSize: 26,
    fontWeight: 'bold',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  menuText: {
    color: colors.white,
    fontFamily: 'System',
    fontSize: 20,
    fontWeight: '400',
  },
});

export default CameraScreen;

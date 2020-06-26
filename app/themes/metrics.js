import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 8,
  marginVertical: 8,
  section: 24,
  baseMargin: 8,
  doubleBaseMargin: 18,
  smallMargin: 4,
  doubleSection: 48,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 14,
    small: 18,
    medium: 24,
    large: 36,
    xl: 48,
  },
  images: {
    small: 18,
    medium: 24,
    large: 36,
    logo: 48,
    xl: 192,
  },
};

export default metrics;

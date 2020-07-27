import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../themes';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 100,
    width: '100%',
    height: 500,
    backgroundColor: colors.transparent,
  },
  panel: {
    // paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: colors.primary.dark,
    height: 500,
  },
  header: {
    backgroundColor: colors.primary.main,
    shadowColor: '#000000',
    paddingVertical: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
  },
  panelButton: {
    alignItems: 'center',
  },
  group: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    flex: 1,
    paddingVertical: 8,
    backgroundColor: colors.text.primary,
    justifyContent: 'flex-start',
  },
});

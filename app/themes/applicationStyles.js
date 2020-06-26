import fonts from './fonts';
import metrics from './metrics';
import colors from './colors';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    container: {
      flex: 1,
      paddingTop: metrics.baseMargin,
      backgroundColor: Colors.transparent,
    },
    section: {
      margin: metrics.section,
      padding: metrics.baseMargin,
    },
    sectionText: {
      ...fonts.style.normal,
      paddingVertical: metrics.doubleBaseMargin,
      color: Colors.snow,
      marginVertical: metrics.smallMargin,
      textAlign: 'center',
    },
    subtitle: {
      color: Colors.snow,
      padding: metrics.smallMargin,
      marginBottom: metrics.smallMargin,
      marginHorizontal: metrics.smallMargin,
    },
    titleText: {
      ...fonts.style.h2,
      fontsize: 14,
      color: Colors.text,
    },
  },
  darkLabelContainer: {
    padding: metrics.smallMargin,
    paddingBottom: metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: metrics.baseMargin,
  },
  darkLabel: {
    fontFamily: fonts.type.bold,
    color: Colors.snow,
  },
  groupContainer: {
    margin: metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  sectionTitle: {
    ...fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: metrics.smallMargin,
    marginTop: metrics.smallMargin,
    marginHorizontal: metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center',
  },
};

export default ApplicationStyles;

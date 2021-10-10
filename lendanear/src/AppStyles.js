import { Platform } from 'react-native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

// Color set
const colorSet = {
  textBlack: '#555555',
}

const imageSet = {
  bkgMainGradient: require('../assets/images/img_bkg_main_gradient.png'),
}

const iconSet = {
}

// Fonts
const fontFamily = {
  blackFont: 'Roboto-Black',
  blackItalicFont: 'Roboto-BlackItalic',
  boldFont: 'Roboto-Bold',
  boldCondensedFont: 'Roboto-BoldCondensed',
  boldCondensedItalicFont: 'Roboto-BoldCondensedItalic',
  boldItalicFont: 'Roboto-BoldItalic',
  condensedFont: 'Roboto-Condensed',
  condensedItalicFont: 'Roboto-CondensedItalic',
  italicFont: 'Roboto-Italic',
  lightFont: 'Roboto-Light',
  lightItalicFont: 'Roboto-LightItalic',
  mediumFont: 'Roboto-Medium',
  mediumItalicFont: 'Roboto-MediumItalic',
  regularFont: 'Roboto-Regular',
  thinFont: 'Roboto-Thin',
  thinItalicFont: 'Roboto-ThinItalic',
};

// Font sizes
const fontSizeSet = {
  sizeTiny: 8,
  sizeSmall: 12,
  sizeNormal: 16,
  sizeBig: 24,
  sizeHuge: 32,
  sizeGiant: 48,
};

// Font weights
const fontWeightSet = {
  normal: 'normal',
  bold: '700',
  light: '100',
  semiBold: '500'
};

// Global App Style Sheet
const styleSet = {
  screenContainer: {
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
    paddingBottom: Platform.OS === 'ios' ? getBottomSpace() : 0,
    backgroundColor: 'transparent',
    flex: 1,
  },
  bkgImageContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  bkgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    opacity: 0.8,
  },
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  fullWidth: {
    width: '100%',
  },
  fullHeight: {
    height: '100%',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignItemCenter: {
    alignItems: 'center',
  }
}

// Export all styles as single dict
const StyleDict = {
  imageSet,
  iconSet,
  colorSet,
  fontFamily,
  fontSizeSet,
  styleSet,
  fontWeightSet,
};

export default StyleDict;

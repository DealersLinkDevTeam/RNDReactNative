/**
 * Defines the application color scheme
 * app/themes/colors.js
 */
const white = '#FFF';
const black = '#000';
const transparent = 'rgba(0,0,0,0)';
const opaque = 'rgba(255,255,255, 0.75)';
const tint = 'rgba(0, 0, 0, 0.4)';

const colors = {
  black,
  white,
  transparent,
  opaque,
  tint,
  primary: {
    contrastText: black,
    light: '#E5E7E9',
    main: '#ABB2B9',
    dark: '#808B96',
  },
  secondary: {
    contrastText: white,
    dark: '#B53D00',
    main: '#EF6C00',
    light: '#FF9D3F',
  },
  success: {
    contrastText: white,
    dark: '#00B248',
    main: '#00E676',
    light: '#66FFA6',
  },
  info: {
    contrastText: white,
    main: '#0083EF',
  },
  warning: {
    contrastText: white,
    main: '#EFE400',
  },
  error: {
    contrastText: white,
    main: '#EF000C',
  },
  text: {
    primary: '#232325',
    secondary: '#2F2F32',
    link: '#0083EF',
  },
  background: {
    default: '#48484C',
    paper: white,
  },
  icon: '#2F2F32',
  divider: '#545459',
};

export default colors;

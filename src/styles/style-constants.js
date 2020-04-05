import {createMuiTheme} from '@material-ui/core/styles';

// COLORS
export const primaryColor = '#455d7a';
export const primaryColorLight = '#AC5D85';

export const secondaryColor = '#233142';
export const secondaryColorLight = '#FDAE75';

// SIZES
export const phoneScreenMaxWidth = '767px';
export const largeScreenMinWidth = '992px';
export const extraLargeScreenMinWidth = '1441px';
export const remBase = 16;

// Customize the default theme
// https://material-ui.com/customization/default-theme/
export const theme = createMuiTheme({
  typography: {
    // fontFamily: ['Open Sans', 'Arial'], // default is Roboto
    fontFamily: ['proxima-nova', 'Arial']
  },
  palette: {
    primary: {
      main: primaryColor,
      light: primaryColorLight,
      dark: primaryColor,
      contrastText: '#fff',
    },
    secondary: {
      main: secondaryColor,
      light: secondaryColorLight,
      dark: secondaryColor,
      contrastText: '#fff',
    },
    background: {
      default: '#fafafa'
    }
  },
});

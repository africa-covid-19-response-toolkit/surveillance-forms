import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import requireContext from 'require-context.macro';
import '@storybook/addon-console';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../src/styles/style-constants';
import '../src/styles/global.css';

const styles = {
  padding: '40px',
};

const CenterDecorator = (storyFn) => (
  <MuiThemeProvider theme={theme}>
    <div style={styles}>
      { storyFn() }
    </div>
  </MuiThemeProvider>
);

const req = requireContext('../src', true, /\.story\.js$/);

function loadStories() {
  addDecorator(CenterDecorator);
  req.keys().sort().forEach(filename => req(filename));
}

configure(loadStories, module);

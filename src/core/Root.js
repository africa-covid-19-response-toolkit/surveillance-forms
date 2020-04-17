import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

import asyncComponent from '../util/asyncComponent';

// == Stores
// common
import languageStore from '../modules/lang/LanguageStore';
import notificationStore from '../modules/notification/NotificationStore';

// == Theme
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../styles/style-constants.js';

// Top Level Controllers (one for auth areas, may have multiple non-auth)
const App = asyncComponent(() => import(/* webpackChunkName: "app" */ './App'));

const Root = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider
        languageStore={languageStore}
        notificationStore={notificationStore}
      >
        <Router basename="/">
          <Switch>
            <Route
              path=""
              component={App}
            />
          </Switch>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default Root;

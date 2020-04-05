import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Switch, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Community from '../containers/Community';
import PortOfEntry from '../containers/PortOfEntry';
import {
  Box,
  Loading
} from '@material-ui/core';

// import Api from '../api';

class App extends Component {
  // unsubscribeFromHistory;
  //
  // componentWillMount() {
  //   const { userStore } = this.props;
  //
  //   // userStore.fetchUser();
  //
  //   this.unsubscribeFromHistory = this.props.history.listen(() => {
  //     // Keep alive on any further route changes
  //     Api.keepAlive(userStore.user.eid);
  //   });
  // }
  //
  // componentWillUnmount() {
  //   if (this.unsubscribeFromHistory) {
  //     this.unsubscribeFromHistory();
  //   }
  // }

  render() {
    return (
      <Box>
        <Header />
        <Route
          exact
          path="/"
          component={observer((props) =>
            <Community
              {...props}
            />)}
        />
         <Route
          exact
          path="/port-of-entry"
          component={observer((props) =>
            <PortOfEntry
              {...props}
            />)}
        />
        <Footer/>
      </Box>
    )
  }
}

export default inject('languageStore')(observer(App));

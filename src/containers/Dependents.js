import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Box, Typography, Loading } from '@material-ui/core';
import DependentsForm from '../components/dependents/DependentsForm';

class Dependents extends Component {
  render() {
    const { languageStore } = this.props;
    const { lang } = languageStore;


    return (
      <Box>
        <DependentsForm lang={lang} />
      </Box>
    )
  }
}

export default inject('languageStore')(observer(Dependents));

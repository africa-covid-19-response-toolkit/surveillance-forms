import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Box, Typography, Loading } from '@material-ui/core';
import PortOfEntryForm from '../components/portofentry/PortOfEntryForm';

class PortOfEntry extends Component {
  render() {
    const { languageStore } = this.props;
    const { lang } = languageStore;


    return (
      <Box>
        <PortOfEntryForm lang={lang} />
      </Box>
    )
  }
}

export default inject('languageStore')(observer(PortOfEntry));

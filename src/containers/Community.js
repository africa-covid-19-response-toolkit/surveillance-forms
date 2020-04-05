import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Box, Typography, Loading } from '@material-ui/core';
import CommunityForm from '../components/community/CommunityForm';

class Community extends Component {
  render() {
    const { languageStore } = this.props;
    const { lang } = languageStore;


    return (
      <Box p={5}>
        <CommunityForm lang={lang} />
      </Box>
    )
  }
}

export default inject('languageStore')(observer(Community));

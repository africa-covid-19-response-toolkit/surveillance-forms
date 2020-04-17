import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Box } from '@material-ui/core';
import PortOfEntryForm from '../components/portofentry/PortOfEntryForm';
import api from '../api';


class PortOfEntry extends Component {
  render() {
    const { languageStore } = this.props;
    const { lang } = languageStore;

    const onSubmit = async (formValues) => {
      return api.submitPortOfEntry(formValues);
    }

    return (
      <Box>
        <PortOfEntryForm onSubmit={onSubmit} lang={lang} />
      </Box>
    )
  }
}

export default inject('languageStore')(observer(PortOfEntry));

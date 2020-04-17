import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Box } from "@material-ui/core";
import CommunityForm from "../components/community/CommunityForm";
import api from '../api';

class Community extends Component {
  render() {
    const { languageStore } = this.props;
    const { lang } = languageStore;

    const onSubmit = async (formValues) => {
      return api.submitCommunity(formValues);
    }

    return (
      <Box>
        <CommunityForm onSubmit={onSubmit} lang={lang} />
      </Box>
    );
  }
}

export default inject("languageStore")(observer(Community));

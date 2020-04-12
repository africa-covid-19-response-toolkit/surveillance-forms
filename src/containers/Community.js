import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Box, Typography, Loading } from "@material-ui/core";
import CommunityForm from "../components/community/CommunityForm";
import api from "../api";

class Community extends Component {
  render() {
    const { languageStore } = this.props;
    const { lang, langCode } = languageStore;

    const onSubmit = async formValues => {
      return api.submitCommunity(formValues);
    };

    return (
      <Box>
        <CommunityForm onSubmit={onSubmit} lang={lang} langCode={langCode} />
      </Box>
    );
  }
}

export default inject("languageStore")(observer(Community));

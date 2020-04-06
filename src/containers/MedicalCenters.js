import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Box } from "@material-ui/core";
import MedicalCentersForm from "../components/medicalcenters/MedicalCentersForm";
import api from '../api';

class MedicalCenters extends Component {
  render() {
    const { languageStore } = this.props;
    const { lang, langCode } = languageStore;

    const onSubmit = async (formValues) => {
      return api.submitMedical(formValues);
    }

    return (
      <Box>
        <MedicalCentersForm onSubmit={onSubmit} lang={lang} langCode={langCode} />
      </Box>
    );
  }
}

export default inject("languageStore")(observer(MedicalCenters));

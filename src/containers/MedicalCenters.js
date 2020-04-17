import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Box } from "@material-ui/core";
import MedicalCentersForm from "../components/medicalcenters/MedicalCentersForm";
import api from '../api';

class MedicalCenters extends Component {
  render() {
    const { languageStore, notificationStore } = this.props;
    const { lang, langCode } = languageStore;

    const onSubmit = async (formValues) => {
      return api.submitMedical(formValues)
        .then(() => {
          notificationStore.showMessage(lang.t('formSubmittedSuccess'), 3000);
        })
        .catch(() => {
          notificationStore.showMessage(lang.t('formSubmittedError'), 5000);
        })
    }

    return (
      <Box>
        <MedicalCentersForm onSubmit={onSubmit} lang={lang} langCode={langCode} />
      </Box>
    );
  }
}

export default inject("languageStore", "notificationStore")(observer(MedicalCenters));

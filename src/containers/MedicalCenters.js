import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Box } from "@material-ui/core";
import MedicalCentersForm from "../components/medicalcenters/MedicalCentersForm";

class MedicalCenters extends Component {
  render() {
    const { languageStore } = this.props;
    const { lang, langCode } = languageStore;

    return (
      <Box p={3}>
        <MedicalCentersForm lang={lang} langCode={langCode} />
      </Box>
    );
  }
}

export default inject("languageStore")(observer(MedicalCenters));

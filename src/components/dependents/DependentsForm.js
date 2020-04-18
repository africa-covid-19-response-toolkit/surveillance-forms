import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { renderField } from "../form/form-util";

import DEPENDENTS_ENTRY_FIELDS from "../../constants/dependents";

const DependentsForm = ({ onSubmit, lang, langCode, props }) => {
  console.log(langCode);
  console.log(lang);
  const [formValues, setFormValues] = useState({});

  const handleFieldChange = (field) => (value) => {
    console.log(field, ": ", value);
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const fields = DEPENDENTS_ENTRY_FIELDS(lang, handleFieldChange, langCode);

  const renderFormField = (property) => {
    const field = fields.find((f) => f.property === property);
    if (!field) {
      return null;
    }
    return renderField(field);
  };
  const renderSectionHeader = (label) => {
    return (
      <Typography className="sectionheader" variant="h2">
        {label}
      </Typography>
    );
  };
  const renderSubsectionheader = (label) => {
    return (
      <Box mt={3} mb={1}>
        <Typography className="subsectionheader" variant="h5">
          {label}
        </Typography>
      </Box>
    );
  };

  const handleSubmit = () => {
    onSubmit(formValues);
    //props.handleClose();
  };

  const isFormValid = () => {
    let isValid = true;
    fields.forEach((f) => {
      if (f.onValidate) {
        isValid = isValid && f.onValidate(formValues[f.property]);
      }
    });
    return isValid;
  };

  const renderForm = () => {
    return (
      <form autoComplete="off">
        {renderSectionHeader(lang.t("passengerDependentsRegistrationForm"))}
        {renderSubsectionheader(lang.t("dependentsBasicInformation"))}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            {renderFormField("firstName")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("middleName")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("lastName")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("sex")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("age")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("dateOfBirth")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("nationality")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("passportNo")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("phoneNo")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("email")}
          </Grid>
        </Grid>

        {renderSubsectionheader(lang.t("travelInfo"))}
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            {renderFormField("travelFrom")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("transitFrom")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("flightNumber")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("seatNumber")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("hotel")}
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            {renderSubsectionheader(lang.t("symptoms"))}
            {renderFormField("fever")}
            {renderFormField("cough")}
            {renderFormField("shortnessOfBreath")}
            {renderFormField("fatigue")}
            {renderFormField("headache")}
            {renderFormField("runnyNose")}
            {renderFormField("feelingUnwell")}
          </Grid>

          <Grid item xs={12} sm={4}>
            {renderSubsectionheader(lang.t("underlyingConditions"))}
            {renderFormField("chronicLungDisease")}
            {renderFormField("heartDisease")}
            {renderFormField("liverDisease")}
            {renderFormField("renalDisease")}
            {renderFormField("autoimmuneDisease")}
            {renderFormField("cancer")}
            {renderFormField("diabetes")}
            {renderFormField("hiv")}
            {renderFormField("pregnancy")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderSubsectionheader(lang.t("generalInformation"))}
            {renderFormField("travelHx")}
            {renderFormField("contactWithSuspected")}
            {renderFormField("contactWithConfirmed")}
            {renderFormField("healthFacility")}
          </Grid>
        </Grid>

        <Box mt={4} textAlign="right">
          <Button
            onClick={handleSubmit}
            variant="contained"
            size="large"
            disabled={!isFormValid()}
          >
            {lang.t("submitDependent")}
          </Button>
        </Box>
      </form>
    );
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={9}>
          {renderForm()}
        </Grid>
        <Grid item xs={12} md={3}></Grid>
      </Grid>
    </Box>
  );
};

export default DependentsForm;

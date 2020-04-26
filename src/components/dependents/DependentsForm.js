import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { renderField } from "../form/form-util";
import {
  BIOGRAPHICALDATA,
  CONTACTINFO,
  UNDERLYING,
  ADDRESS,
  SYMPTOMS,
  RISKS,
} from "../../constants/common-keys";
import { get } from "lodash";
import DependetsInitialState from "./DependentsInitialState";
import DEPENDENTS_ENTRY_FIELDS from "../../constants/dependents-fields";

const DependentsForm = ({ onSubmit, lang, langCode, props }) => {
  console.log(langCode);
  console.log(lang);
  const [formValues, setFormValues] = useState({
    ...DependetsInitialState,
  });

  const handleFieldChange = (field) => (value) => {
    console.log(field, ": ", value);
    if (UNDERLYING.includes(field)) {
      setFormValues({
        ...formValues,
        underlyingConditions: {
          ...formValues.underlyingConditions,
          [field]: value,
        },
      });
    } else if (BIOGRAPHICALDATA.includes(field)) {
      setFormValues({
        ...formValues,
        biographicalData: {
          ...formValues.biographicalData,
          [field]: value,
        },
      });
    } else if (CONTACTINFO.includes(field)) {
      setFormValues({
        ...formValues,
        biographicalData: {
          ...formValues.biographicalData,
          contactInformation: {
            ...formValues.biographicalData.contactInformation,
            [field]: value,
          },
        },
      });
    } else if (ADDRESS.includes(field)) {
      setFormValues({
        ...formValues,
        biographicalData: {
          ...formValues.biographicalData,
          contactInformation: {
            ...formValues.biographicalData.contactInformation,
            address: {
              ...formValues.biographicalData.contactInformation.address,
              [field]: value,
            },
          },
        },
      });
    } else if (SYMPTOMS.includes(field)) {
      setFormValues({
        ...formValues,
        symptoms: {
          ...formValues.symptoms,
          [field]: value,
        },
      });
    } else if (RISKS.includes(field)) {
      setFormValues({
        ...formValues,
        riskFromContact: {
          ...formValues.riskFromContact,
          [field]: value,
        },
      });
    } else {
      setFormValues({
        ...formValues,
        [field]: value,
      });
    }
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
        if (f.property === "email") {
          isValid =
            isValid &&
            f.onValidate(
              get(
                formValues,
                `biographicalData.contactInformation.${f.property}`
              )
            );
        } else {
          isValid =
            isValid &&
            f.onValidate(get(formValues, `biographicalData.${f.property}`));
        }
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
          {renderFormField("firstName")}
          {renderFormField("middleName")}
          {renderFormField("lastName")}
          {renderFormField("age")}
          {renderFormField("dateOfBirth")}
          {renderFormField("gender")}
          {renderFormField("preferredLanguage")}
          {renderFormField("occupation")}
          {formValues.biographicalData.occupation === "other"
            ? renderFormField("occupationOther")
            : null}
          {renderFormField("nationality")}
          {renderFormField("passportNumber")}
          {renderFormField("governmentIssuedId")}
        </Grid>

        {renderSubsectionheader(lang.t("contactInformation"))}
        <Grid container spacing={4}>
          {renderFormField("country")}
          {renderFormField("region")}
          {renderFormField("city")}
          {renderFormField("customField1")}
          {renderFormField("customField2")}
          {renderFormField("postalCode")}
          {renderFormField("street")}
          {renderFormField("building")}

          {renderFormField("email")}
          {renderFormField("phoneNumber")}
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
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
            {renderSubsectionheader(lang.t("riskFromContact"))}
            {renderFormField("hasRecentlyTraveled")}
            {renderFormField("contactWithSuspected")}
            {renderFormField("contactWithConfirmed")}
            {renderFormField("worksAtOrVisitedHealthFacility")}
          </Grid>
        </Grid>
        {renderSubsectionheader(lang.t("travelInfo"))}
        <Grid container spacing={4}>
          {renderFormField("seatNumber")}

          {renderFormField("relationshipToPassenger")}
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

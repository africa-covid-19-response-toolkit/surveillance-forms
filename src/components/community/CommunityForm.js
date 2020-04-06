import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Button,
  Switch,
} from "@material-ui/core";
import { renderField } from "../form/form-util";
import {
  firstNameValidator,
  ageValidator,
} from "../../validation/form/community";
import { green, red, grey, teal, amber } from "@material-ui/core/colors";

const REGION_KEYS = [
  "addisAbaba",
  "afar",
  "amhara",
  "benishangul",
  "direDawa",
  "gambella",
  "harari",
  "oromia",
  "somali",
  "southern",
  "tigray",
];

const CommunityForm = ({ onSubmit, lang }) => {
  const [formValues, setFormValues] = useState({});

  const handleFieldChange = (field) => (value) => {
    console.log(field, ": ", value);
    setFormValues({
      ...formValues,
      [field]: value,
    });
  };

  const fields = [
    {
      type: "text",
      label: lang.t("firstName"),
      property: "firstName",
      focus: true,
      onChange: handleFieldChange("firstName"),
      onValidate: firstNameValidator.validate,
      validationErrorMsg: lang.t(firstNameValidator.validationErrorMsg),
    },
    {
      type: "text",
      label: lang.t("lastName"),
      property: "lastName",
      onChange: handleFieldChange("lastName"),
    },
    {
      type: "text",
      label: lang.t("age"),
      property: "age",
      onChange: handleFieldChange("age"),
      onValidate: ageValidator.validate,
      validationErrorMsg: lang.t(ageValidator.validationErrorMsg),
    },
    {
      type: "select",
      label: lang.t("sex.label"),
      property: "sex",
      onChange: handleFieldChange("sex"),
      choices: [
        { label: lang.t("sex.female"), value: "F" },
        { label: lang.t("sex.male"), value: "M" },
      ],
    },
    {
      type: "text",
      label: lang.t("phoneNumber"),
      property: "phoneNumber",
      onChange: handleFieldChange("phoneNumber"),
    },
    {
      type: "select",
      label: lang.t("language.label"),
      property: "language",
      onChange: handleFieldChange("language"),
      choices: [
        { label: lang.t("language.amharic"), value: "am" },
        { label: lang.t("language.oromo"), value: "or" },
      ],
    },
    {
      type: "text",
      label: lang.t("occupation.label"),
      property: "occupation",
      onChange: handleFieldChange("occupation"),
    },
    {
      type: "select",
      label: lang.t("region.label"),
      property: "region",
      choices: REGION_KEYS.map((r) => ({
        label: lang.t(`region.${r}`),
        value: r,
      })),
      onChange: handleFieldChange("region"),
    },
    {
      type: "text",
      label: lang.t("subcity.label"),
      property: "subcityOrZone",
      onChange: handleFieldChange("subcityOrZone"),
    },
    {
      type: "text",
      label: lang.t("sefer"),
      property: "sefer",
      onChange: handleFieldChange("sefer"),
    },
    {
      type: "text",
      label: lang.t("woreda"),
      property: "woreda",
      onChange: handleFieldChange("woreda"),
    },
    {
      type: "text",
      label: lang.t("kebele"),
      property: "kebele",
      onChange: handleFieldChange("kebele"),
    },
    {
      type: "text",
      label: lang.t("houseNumber"),
      property: "houseNumber",
      onChange: handleFieldChange("houseNumber"),
    },
    {
      type: "check",
      label: lang.t("fever"),
      property: "fever",
      onChange: handleFieldChange("fever"),
    },
    {
      type: "check",
      label: lang.t("cough"),
      property: "cough",
      onChange: handleFieldChange("cough"),
    },
    {
      type: "check",
      label: lang.t("shortnessOfBreath"),
      property: "shortnessOfBreath",
      onChange: handleFieldChange("shortnessOfBreath"),
    },
    {
      type: "switch",
      label: lang.t("travelHistory"),
      property: "travelHx",
      onChange: handleFieldChange("travelHx"),
      onLabel: lang.t("yes"),
      offLabel: lang.t("no"),
    },
    {
      type: "switch",
      label: lang.t("haveSex"),
      property: "haveSex",
      onChange: handleFieldChange("haveSex"),
      onLabel: lang.t("yes"),
      offLabel: lang.t("no"),
    },
    {
      type: "switch",
      label: lang.t("animalMarket"),
      property: "animalMarket",
      onChange: handleFieldChange("animalMarket"),
      onLabel: lang.t("yes"),
      offLabel: lang.t("no"),
    },
    {
      type: "switch",
      label: lang.t("healthFacility"),
      property: "healthFacility",
      onChange: handleFieldChange("healthFacility"),
      onLabel: lang.t("yes"),
      offLabel: lang.t("no"),
    },
  ];

  const renderFormField = (property) => {
    const field = fields.find((f) => f.property === property);
    if (!field) {
      return null;
    }
    return renderField(field);
  };

  const renderSectionHeader = (label) => {
    return (
      <Box p={3} my={3} style={{ backgroundColor: green[700] }}>
        <Typography variant="h4">{label}</Typography>
      </Box>
    );
  };

  const renderSubsectionheader = (label) => {
    return (
      <Box mt={3} mb={1}>
        <Typography variant="h5">{label}</Typography>
      </Box>
    );
  };

  const hadleSubmit = () => {
    onSubmit(formValues);
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
        {renderSectionHeader("Online Suspect Form")}
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            {renderFormField("firstName")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("lastName")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("age")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("sex")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("language")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("phoneNumber")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("occupation")}
          </Grid>
        </Grid>

        {renderSubsectionheader("Address")}
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            {renderFormField("region")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("subcityOrZone")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("sefer")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("woreda")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("kebele")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("houseNo")}
          </Grid>
        </Grid>

        {renderSubsectionheader("Symptoms")}
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            {renderFormField("fever")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("cough")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("shortnessOfBreath")}
          </Grid>
        </Grid>

        {renderSectionHeader("General Information")}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            {renderFormField("travelHx")}
          </Grid>
          <Grid item xs={12} md={6}>
            {renderFormField("animalMarket")}
          </Grid>
          <Grid item xs={12} md={6}>
            {renderFormField("haveSex")}
          </Grid>
          <Grid item xs={12} md={6}>
            {renderFormField("healthFacility")}
          </Grid>
        </Grid>

        <Box mt={4} textAlign="right">
          <Button
            onClick={hadleSubmit}
            variant="contained"
            size="large"
            disabled={!isFormValid()}
          >
            {lang.t("submit")}
          </Button>
        </Box>
      </form>
    );
  };

  return <Box>{renderForm()}</Box>;
};

export default CommunityForm;

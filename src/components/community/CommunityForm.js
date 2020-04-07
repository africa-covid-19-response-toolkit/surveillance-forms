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
import { nameValidator, ageValidator } from "../../validation/form/community";
import { green } from "@material-ui/core/colors";

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

const SEX_VALUE = {
  property: "sex",
  female: "F",
  male: "M",
};

const CommunityForm = ({ onSubmit, lang }) => {
  const [formValues, setFormValues] = useState({
    [SEX_VALUE.property]: SEX_VALUE.female,
  });
  const [clear, setClear] = useState(0);

  const handleFieldChange = (field) => (value) => {
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
      onValidate: nameValidator.validate,
      validationErrorMsg: lang.t(nameValidator.validationErrorMsg),
    },
    {
      type: "text",
      label: lang.t("lastName"),
      property: "lastName",
      onChange: handleFieldChange("lastName"),
      onValidate: nameValidator.validate,
      validationErrorMsg: lang.t(nameValidator.validationErrorMsg),
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
      property: SEX_VALUE.property,
      onChange: handleFieldChange(SEX_VALUE.property),
      choices: [
        { label: lang.t("sex.female"), value: SEX_VALUE.female },
        { label: lang.t("sex.male"), value: SEX_VALUE.male },
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
    return renderField(field, clear);
  };

  const renderSectionHeader = (label) => {
  return (
        <Typography variant="h2">{label}</Typography>
    );
  };

  const renderSubsectionheader = (label) => {
    return (
        <Typography variant="h5" style={{ marginTop: 20, paddingTop: 19, marginBottom: 20, borderTop: '1px solid #ccc'}}>{label}</Typography>
    );
  };

  const hadleSubmit = () => {
    onSubmit(formValues)
      .then(() => {
        // clear form values
        setFormValues({})
        setClear(clear + 1);
      })
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
        {renderSubsectionheader("Basic Information")}
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

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            {renderSubsectionheader("Symptoms")}
            {renderFormField("fever")}
            {renderFormField("cough")}
            {renderFormField("shortnessOfBreath")}
          </Grid>
          <Grid item xs={12} sm={6}>
            {renderSubsectionheader("General Information")}
            {renderFormField("travelHx")}
            {renderFormField("animalMarket")}
            {renderFormField("haveSex")}
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

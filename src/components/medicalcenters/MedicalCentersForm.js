import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Button,
  Switch,
  Dialog,
} from "@material-ui/core";
import { renderField } from "../form/form-util";
import { isEmpty, cloneDeep } from "lodash";
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
const SUBCITY_KEYS = [
  "addisKetema",
  "akakiKality",
  "arada",
  "bole",
  "gulele",
  "kirkos",
  "kolfe",
  "lideta",
  "nifasSilkLafto",
  "yeka",
];

const OCCUPATION_KEYS = [
  "hcp",
  "merchant(Animal)",
  "airport",
  "student",
  "other",
];

const MedicalCentersEntryForm = ({ onSubmit, lang }) => {
  const [formValues, setFormValues] = useState({});

  const [open, setOpen] = useState(false);

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
      onValidate: (val) => {
        return !isEmpty(val) && val.length >= 3;
      },
      validationErrorMsg: "Enter name (min 3 chars)",
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
      label: lang.t("region.label"),
      property: "region",
      onChange: handleFieldChange("region"),
      choices: REGION_KEYS.map((r) => ({
        label: lang.t(`region.${r}`),
        value: r,
      })),
    },
    {
      type: "select",
      label: lang.t("subcity.label"),
      property: "subcity",
      onChange: handleFieldChange("subcity"),
      choices: SUBCITY_KEYS.map((r) => ({
        label: lang.t(`subcity.${r}`),
        value: r,
      })),
    },
    {
      type: "text",
      label: lang.t("kebele"),
      property: "kebele",
      onChange: handleFieldChange("kebele"),
    },

    {
      type: "text",
      label: lang.t("woreda"),
      property: "woreda",
      onChange: handleFieldChange("woreda"),
    },
    {
      type: "select",
      label: lang.t("occupation.label"),
      property: "occupation",
      onChange: handleFieldChange("occupation"),
      choices: OCCUPATION_KEYS.map((r) => ({
        label: lang.t(`occupation.${r}`),
        value: r,
      })),
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
      label: lang.t("headache"),
      property: "headache",
      onChange: handleFieldChange("headache"),
    },
    {
      type: "check",
      label: lang.t("bodyPain"),
      property: "bodyPain",
      onChange: handleFieldChange("bodyPain"),
    },
    {
      type: "check",
      label: lang.t("runnyNose"),
      property: "runnyNose",
      onChange: handleFieldChange("runnyNose"),
    },
    {
      type: "check",
      label: lang.t("shortnessOfBreath"),
      property: "shortnessOfBreath",
      onChange: handleFieldChange("shortnessOfBreath"),
    },
    {
      type: "check",
      label: lang.t("feelingUnwell"),
      property: "feelingUnwell",
      onChange: handleFieldChange("feelingUnwell"),
    },
    {
      type: "switch",
      label: lang.t("travelHx"),
      property: "travelHx",
      onChange: handleFieldChange("travelHx"),
      onLabel: "Yes",
      offLabel: "No",
    },
    {
      type: "switch",
      label: lang.t("haveSex"),
      property: "haveSex",
      onChange: handleFieldChange("haveSex"),
      onLabel: "Yes",
      offLabel: "No",
    },
    {
      type: "switch",
      label: lang.t("animalMarket"),
      property: "animalMarket",
      onChange: handleFieldChange("animalMarket"),
      onLabel: "Yes",
      offLabel: "No",
    },
    {
      type: "switch",
      label: lang.t("healthFacility"),
      property: "healthFacility",
      onChange: handleFieldChange("healthFacility"),
      onLabel: "Yes",
      offLabel: "No",
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

  const handleSubmit = () => {
    onSubmit(formValues);
  };

  const handleModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        {renderSectionHeader("Health Facilities Application Form")}
        {renderSubsectionheader(
          "Health Facilities Reporting Form For COVID-19"
        )}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            {renderFormField("firstName")}
          </Grid>

          <Grid item xs={12} md={4}>
            {renderFormField("lastName")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("age")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("sex")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("phoneNumber")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("region")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("subcity")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("kebele")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("woreda")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("occupation")}
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
            onClick={handleSubmit}
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

export default MedicalCentersEntryForm;

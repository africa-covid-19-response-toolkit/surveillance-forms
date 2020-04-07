import React, { useState, useEffect, useRef } from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { renderField } from "../form/form-util";
import {
  nameValidator,
  ageValidator,
  emailValidator,
} from "../../validation/form/medical";
import { green } from "@material-ui/core/colors";

const NATIONALITY_KEYS = ["ethiopian", "other"];
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
  "merchantAnimal",
  "airport",
  "student",
  "other",
];

const SEX_VALUE = {
  property: "sex",
  female: "F",
  male: "M",
};

const CALLERTYPE_KEYS = ["callerType1", "callerType2"];
const MedicalCentersEntryForm = ({ onSubmit, lang, langCode }) => {
  const [formValues, setFormValues] = useState({
    [SEX_VALUE.property]: SEX_VALUE.female,
  });
  console.log(langCode);
  const [open, setOpen] = useState(false);
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
      label: lang.t("middleName"),
      property: "middleName",
      focus: true,
      onChange: handleFieldChange("middleName"),
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
      type: "text",
      label: lang.t("email"),
      property: "email",
      onChange: handleFieldChange("email"),
      onValidate: emailValidator.validate,
      validationErrorMsg: lang.t(emailValidator.validationErrorMsg),
    },
    {
      type: "select",
      label: lang.t("nationality.label"),
      property: "nationality",
      onChange: handleFieldChange("nationality"),
      choices: NATIONALITY_KEYS.map((r) => ({
        label: lang.t(`nationality.${r}`),
        value: r,
      })),
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
      type: "text",
      label: lang.t("zone"),
      property: "zone",
      onChange: handleFieldChange("zone"),
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
      type: "text",
      label: lang.t("houseNumber"),
      property: "houseNumber",
      onChange: handleFieldChange("houseNumber"),
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
      type: "select",
      label: lang.t("callerType.label"),
      property: "callerType",
      onChange: handleFieldChange("callerType"),
      choices: CALLERTYPE_KEYS.map((r) => ({
        label: lang.t(`callerType.${r}`),
        value: r,
      })),
    },

    {
      type: "date",
      label: lang.t("callDate"),
      property: "callDate",
      langCode: langCode,
      onChange: handleFieldChange("callDate"),
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
      <Typography className="sectionheader" variant="h2">{label}</Typography>
    );
  };

  const renderSubsectionheader = (label) => {
    return (
        <Typography className="subsectionheader" variant="h5">{label}</Typography>
    );
  };

  const handleSubmit = () => {
    onSubmit(formValues)
      .then(() => {
        // clear form values
        setFormValues({})
        setClear(clear + 1);
      })
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
            {renderFormField("middleName")}
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
            {renderFormField("email")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("nationality")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("region")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("zone")}
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
            {renderFormField("houseNumber")}
          </Grid>

          <Grid item xs={12} md={4}>
            {renderFormField("occupation")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("callerType")}
          </Grid>

          <Grid item xs={12} md={4}>
            {renderFormField("callDate")}
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            {renderSubsectionheader("Symptoms")}
            {renderFormField("fever")}
            {renderFormField("cough")}
            {renderFormField("headache")}
            {renderFormField("bodyPain")}
            {renderFormField("runnyNose")}
            {renderFormField("shortnessOfBreath")}
            {renderFormField("feelingUnwell")}
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

  return <Box>{renderForm()}</Box>;
};

export default MedicalCentersEntryForm;

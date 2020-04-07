import React, { useState, useEffect, useRef } from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { renderField } from "../form/form-util";
import { isEmpty, cloneDeep } from "lodash";
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
const underlying = [
  "chronicLungDisease",
  "heartDisease",
  "liverDisease",
  "renalDisease",
  "autoimmuneDisease",
  "cancer",
  "diabetes",
  "hiv",
  "pregnancy",
]

const OCCUPATION_KEYS = [
  "hcp",
  "merchantAnimal",
  "airport",
  "student",
  "other",
];
const CALLERTYPE_KEYS = ["callerType1", "callerType2"];
const MedicalCentersEntryForm = ({ onSubmit, lang, langCode }) => {
  const [formValues, setFormValues] = useState({});
  console.log(langCode);
  const [open, setOpen] = useState(false);

  const handleFieldChange = (field) => (value) => {
    console.log(field, ": ", value);
    if (underlying.includes(field)) {
      setFormValues({
        ...formValues,
        underlyingConditions: {
           ...formValues.underlyingConditions,
           [field] : value
        },
      });

    } else {
      setFormValues({
        ...formValues,
       [field]: value,
      });
    }
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
      label: lang.t("middleName"),
      property: "middleName",
      focus: true,
      onChange: handleFieldChange("middleName"),
      onValidate: (val) => {
        return !isEmpty(val) && val.length >= 3;
      },
    },
    {
      type: "text",
      label: lang.t("lastName"),
      property: "lastName",
      onChange: handleFieldChange("lastName"),
      validationErrorMsg: "Enter name (min 3 chars)",
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
      type: "text",
      label: lang.t("email"),
      property: "email",
      onChange: handleFieldChange("email"),
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
      label: lang.t("fatigue"),
      property: "fatigue",
      onChange: handleFieldChange("fatigue"),
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
      label: lang.t("chronicLungDisease"),
      property: "chronicLungDisease",
      onChange: handleFieldChange("chronicLungDisease"),
    },


    {
      type: "check",
      label: lang.t("heartDisease"),
      property: "heartDisease",
      onChange: handleFieldChange("heartDisease"),
    },

    {
      type: "check",
      label: lang.t("heartDisease"),
      property: "heartDisease",
      onChange: handleFieldChange("heartDisease"),
    },

    {
      type: "check",
      label: lang.t("liverDisease"),
      property: "liverDisease",
      onChange: handleFieldChange("liverDisease"),
    },
    {
      type: "check",
      label: lang.t("renalDisease"),
      property: "renalDisease",
      onChange: handleFieldChange("renalDisease"),
    },

    {
      type: "check",
      label: lang.t("autoimmuneDisease"),
      property: "autoimmuneDisease",
      onChange: handleFieldChange("autoimmuneDisease"),
    },

    {
      type: "check",
      label: lang.t("cancer"),
      property: "cancer",
      onChange: handleFieldChange("cancer"),
    },

    {
      type: "check",
      label: lang.t("diabetes"),
      property: "diabetes",
      onChange: handleFieldChange("diabetes"),
    },


    {
      type: "check",
      label: lang.t("hiv"),
      property: "hiv",
      onChange: handleFieldChange("hiv"),
    },

    {
      type: "check",
      label: lang.t("pregnancy"),
      property: "pregnancy",
      onChange: handleFieldChange("pregnancy"),
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

        {renderSectionHeader("Symptoms")}
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            {renderFormField("fever")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("cough")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("headache")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("bodyPain")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("runnyNose")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("shortnessOfBreath")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("feelingUnwell")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("fatigue")}
          </Grid>
        </Grid>

        {renderSubsectionheader(lang.t("underlyingConditions"))}
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            {renderFormField("chronicLungDisease")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("heartDisease")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("liverDisease")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("renalDisease")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("autoimmuneDisease")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("cancer")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("diabetes")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("hiv")}
          </Grid>
          <Grid item xs={12} md={3}>
            {renderFormField("pregnancy")}
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

  console.log(formValues)

  return (
    <Box>
      {renderForm()}
    </Box>
  );
};

export default MedicalCentersEntryForm;

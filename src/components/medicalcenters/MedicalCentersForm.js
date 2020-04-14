import React, { useState, useEffect} from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { renderField } from "../form/form-util";

import MEDICAL_FIELDS from "../../constants/medicalCenter-fields";
import { UNDERLYING } from "../../constants/common";
import MedicalInitialState from "./MedicalCentersInitialState";

import ReCAPTCHA from "react-google-recaptcha";
import { isEmpty } from "lodash";
import config from "../../config";

const TEST_SITE_KEY = config.captchaKey;
const DELAY = 1500;

const MedicalCentersEntryForm = ({ onSubmit, lang, langCode }) => {
  const [formValues, setFormValues] = useState({
    ...MedicalInitialState
  });

  const [clear, setClear] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [captchaText, setCaptchaText] = useState("");
  const [isCaptchaExpired, setIsCaptchaExpired] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, DELAY);
  });

  const handleChange = value => {
    setCaptchaText(value);
    if (value === null) {
      setIsCaptchaExpired(true);
    }
  };

  const asyncScriptOnLoad = () => {
    console.log("scriptLoad - reCaptcha Ref-", React.createRef());
  };

  const handleFieldChange = field => value => {
    console.log(field, ": ", value);
    if (UNDERLYING.includes(field)) {
      setFormValues({
        ...formValues,
        underlyingConditions: {
          ...formValues.underlyingConditions,
          [field]: value
        }
      });
    } else {
      if (field === "region") {
        setFormValues({
          ...formValues,
          subcity: null,
          [field]: value
        });
      } else {
        setFormValues({
          ...formValues,
          [field]: value
        });
      }
    }
  };

  const fields = MEDICAL_FIELDS(lang, handleFieldChange, langCode, formValues);

  const renderFormField = property => {
    const field = fields.find(f => f.property === property);
    if (!field) {
      return null;
    }
    return renderField(field, clear);
  };

  const renderSectionHeader = label => {
    return (
      <Typography className="sectionheader" variant="h2">
        {label}
      </Typography>
    );
  };

  const renderSubsectionheader = label => {
    return (
      <Typography className="subsectionheader" variant="h5">
        {label}
      </Typography>
    );
  };

  const handleSubmit = () => {
    onSubmit(formValues).then(() => {
      // clear form values
      setFormValues({});
      setClear(clear + 1);
    });
  };

  const isFormValid = () => {
    let isValid = true;
    if (!isEmpty(captchaText) && !isCaptchaExpired) {
      fields.forEach(f => {
        if (f.onValidate) {
          isValid = isValid && f.onValidate(formValues[f.property]);
        }
      });
    } else {
      isValid = false;
    }
    return isValid;
  };

  const renderForm = () => {
    return (
      <form autoComplete="off">
        {renderSectionHeader(lang.t("healthFacilitiesApplicationForm"))}
        {renderSubsectionheader(lang.t("healthFacilitiesApplicationForm"))}
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
          {formValues.occupation === "other" &&
              <Grid item xs={12} md={4}>
                        {renderFormField("occupationOther")}
              </Grid>
          }
          <Grid item xs={12} md={4}>
            {renderFormField("callerType")}
          </Grid>

          <Grid item xs={12} md={4}>
            {renderFormField("callDate")}
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            {renderSubsectionheader(lang.t("symptoms"))}
            {renderFormField("fever")}
            {renderFormField("cough")}
            {renderFormField("shortnessOfBreath")}
            {renderFormField("fatigue")}
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
            {renderFormField("animalMarket")}
            {renderFormField("haveSex")}
            {renderFormField("healthFacility")}
          </Grid>
        </Grid>
        {isLoaded && (
          <ReCAPTCHA
            style={{ paddingTop: 20 }}
            ref={React.createRef()}
            sitekey={TEST_SITE_KEY}
            onChange={handleChange}
            asyncScriptOnLoad={asyncScriptOnLoad}
          />
        )}
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

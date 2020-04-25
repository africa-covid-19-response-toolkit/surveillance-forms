import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";
import { renderField } from "../form/form-util";
import COMMUNITY_FIELDS from "../../constants/community-fields";
import {
  BIOGRAPHICALDATA,
  CONTACTINFO,
  UNDERLYING,
  ADDRESS,
  SYMPTOMS,
  RISKS,
} from "../../constants/common-keys";
import CommunityInitialState from "./CommunityInitialState";
import ReCAPTCHA from "react-google-recaptcha";
import { isEmpty, get } from "lodash";
import config from "../../config";

const TEST_SITE_KEY = config.captchaKey;
const DELAY = 1500;

const CommunityForm = ({ onSubmit, lang, langCode }) => {
  const [formValues, setFormValues] = useState({
    ...CommunityInitialState,
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [captchaText, setCaptchaText] = useState("");
  const [isCaptchaExpired, setIsCaptchaExpired] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, DELAY);
  });

  const handleChange = (value) => {
    setCaptchaText(value);
    if (value === null) {
      setIsCaptchaExpired(true);
    }
  };

  const asyncScriptOnLoad = () => {
    console.log("scriptLoad - reCaptcha Ref-", React.createRef());
  };
  const [clear, setClear] = useState(0);

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

  const fields = COMMUNITY_FIELDS(lang, handleFieldChange, langCode);

  const renderFormField = (property) => {
    const field = fields.find((f) => f.property === property);
    if (!field) {
      return null;
    }
    return renderField(field, clear);
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
      <Typography className="subsectionheader" variant="h5">
        {label}
      </Typography>
    );
  };

  const hadleSubmit = () => {
    onSubmit(formValues).then(() => {
      // clear form values
      setFormValues({});
      setClear(clear + 1);
    });
  };

  const isFormValid = () => {
    let isValid = true;
    console.log(
      "captchaText",
      captchaText,
      isEmpty(captchaText),
      isCaptchaExpired
    );

    if (!isEmpty(captchaText) && !isCaptchaExpired) {
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
    } else {
      isValid = false;
    }
    return isValid;
  };

  const renderForm = () => {
    return (
      <form autoComplete="off">
        {renderSectionHeader(lang.t("onlineSuspectForm"))}
        {renderSubsectionheader(lang.t("basicInformation"))}
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
            {renderFormField("dateOfBirth")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("gender")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("preferredLanguage")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("occupation")}
          </Grid>
          {formValues.biographicalData.occupation === "other" && (
            <Grid item xs={12} md={4}>
              {renderFormField("occupationOther")}
            </Grid>
          )}
          <Grid item xs={12} md={4}>
            {renderFormField("nationality")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("passportNumber")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("governmentIssuedId")}
          </Grid>
        </Grid>

        {renderSubsectionheader(lang.t("contactInformation"))}
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            {renderFormField("country")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("region")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("city")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("customField1")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("customField2")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("postalCode")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("street")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("building")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("email")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("phoneNumber")}
          </Grid>
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

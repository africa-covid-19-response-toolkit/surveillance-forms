import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Slide,
  Switch,
  Dialog,
  List,
  ListItem,
  ListItemSecondaryAction,
  makeStyles
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {
  renderField
} from "../form/form-util";
import PortOfEntryState from "./PortOfEntryState"
import { isEmpty, cloneDeep } from "lodash";
import {SEX_VALUE, UNDERLYING} from "../../constants/common";
import PORT_OF_ENTRY_FIELDS from "../../constants/PortOfEntry-fields"
import { green, red, grey, teal, amber } from "@material-ui/core/colors";
import ReCAPTCHA from "react-google-recaptcha";
import DependantsForm from "../dependents/DependentsForm";


import config from '../../config';

const TEST_SITE_KEY = config.captchaKey;


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const DELAY = 1500;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




const PortOfEntryForm = ({ onSubmit, lang }) => {
  const [formValues, setFormValues] = useState({
      ...PortOfEntryState
  });

  const [open, setOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [captchaText, setCaptchaText] = useState("");
  const [isCaptchaExpired, setIsCaptchaExpired] = useState(false);
  const [clear, setClear] = useState(0);

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

  const handleFieldChange = (field) => (value) => {
    if (UNDERLYING.includes(field)) {
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

  const fields = PORT_OF_ENTRY_FIELDS(lang, handleFieldChange);


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
    if(!isEmpty(captchaText) && !isCaptchaExpired) {
      fields.forEach((f) => {
        if (f.onValidate) {
          isValid = isValid && f.onValidate(formValues[f.property]);
        }
      });
    } else {
      isValid = false;
    }
    return isValid;
  };

  const handleDependentsAdd = (dependent) => {
    setOpen(false);
    const dependents = formValues.dependents || [];
    dependents.push(dependent);
    setFormValues({
      ...formValues,
      dependents
    })
  }

  const renderForm = () => {
    return (
      <form autoComplete="off">
        {renderSectionHeader("Passenger Registration Form")}
        {renderSubsectionheader("Basic Information")}
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
            {renderFormField("nationality")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("passportNo")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("phoneNumber")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("age")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("email")}
          </Grid>
          <Grid item xs={12} md={4}>
            {renderFormField("occupation")}
          </Grid>
          {formValues.occupation === "other" &&
            <Grid item xs={12} md={4}>
                      {renderFormField("occupationOther")}
            </Grid>
          }
        </Grid>

        {renderSubsectionheader("Travel Info")}
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
            {renderFormField("hotelName")}
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            {renderSubsectionheader("Symptoms")}
            {renderFormField("fever")}
            {renderFormField("cough")}
            {renderFormField("shortnessOfBreath")}
            {renderFormField("fatigue")}
          </Grid>
          <Grid item xs={12} sm={6}>
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
        </Grid>
        <Box mt={4} textAlign="left">
          {renderSubsectionheader('Dependents')}
          <Button onClick={handleModal} variant="outlined" size="large">{lang.t('addDependent')}</Button>
          {!isEmpty(formValues.dependents) && (
            <Grid container item xs={12} md={4}>
              <List style={{ width: '100%' }}>
                {formValues.dependents.map((d, index) => {
                  const onRemoveDependent = () => {
                    const dependents = formValues.dependents.filter((d, i) => i !== index);
                    setFormValues({
                      ...formValues,
                      dependents
                    })
                  }

                  return (
                    <ListItem>
                      <Typography>{`${index + 1}. ${d.firstName} ${d.lastName}`}</Typography>
                      <ListItemSecondaryAction>
                        <Button onClick={onRemoveDependent}>Remove</Button>
                      </ListItemSecondaryAction>
                    </ListItem>
                  )
                })}
              </List>
            </Grid>
          )}

          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar style={{ background: 'blue' }}>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <CloseIcon />
                </IconButton>
                <Typography>
                  Passenger Dependents Registration Form
                </Typography>
              </Toolbar>
            </AppBar>
            <Paper style={{ margin: 30, padding: 30 }}>
              <DependantsForm onSubmit={handleDependentsAdd} lang={lang} />
            </Paper>
          </Dialog>
        </Box>
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

  console.log(formValues);

  return <Box>{renderForm()}</Box>;
};

export default PortOfEntryForm;

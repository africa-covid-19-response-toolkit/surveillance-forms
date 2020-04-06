import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Button,
  Switch,
  Checkbox,
} from "@material-ui/core";
import { isEmpty, cloneDeep } from "lodash";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import * as moment from "moment";

import MomentUtils from "@date-io/moment";
import { now as NowEt } from "zemen-qotari";

moment.defineLocale("am", {
  parentLocale: "en",
  months: "መስከረም_ጥቅምት_ህዳር_ታህሳስ_ጥር_የካቲት_መጋቢት_ሚያዚያ_ግንቦት_ሰኔ_ሀምሌ_ነሐሴ".split("_"),
  monthsShort: "መስከረም_ጥቅምት_ህዳር_ታህሳስ_ጥር_የካቲት_መጋቢት_ሚያዚያ_ግንቦት_ሰኔ_ሀምሌ_ነሐሴ".split(
    "_"
  ),
  weekdays: "ማክሰኞ_እሮብ_ሐሙስ_አርብ_ቅዳሜ_እሑድ_ሰኞ".split("_"),
  weekdaysShort: "ማክሰኞ_እሮብ_ሐሙስ_አርብ_ቅዳሜ_እሑድ_ሰኞ".split("_"),
  week: {
    dow: 6,
  },
});

const StatefulTextField = ({ field }) => {
  // fullWidth
  const {
    label,
    property,
    onChange,
    disabled,
    onValidate,
    validationErrorMsg,
    focus,
  } = field;

  const [value, setValue] = useState(field.value || "");
  const [isValid, setIsValid] = useState(true);

  const firstUpdate = useRef(true); // dont run on mount

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    handleValidation();
  }, [value]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  const handleValidation = () => {
    if (onValidate) {
      const result = onValidate(value);
      setIsValid(result);
    }
  };

  const props = {};
  if (!isValid) {
    props["error"] = true;
    props["helperText"] = !isEmpty(validationErrorMsg)
      ? validationErrorMsg
      : "Incorrect Input";
  } else {
    props["error"] = undefined;
    props["helperText"] = undefined;
  }

  if (focus) {
    props["autoFocus"] = true;
  }

  return (
    <Box>
      <Typography>{label}</Typography>
      <TextField
        id={`${property}-outlined`}
        value={value}
        onChange={handleChange}
        onBlur={handleValidation}
        disabled={!!disabled}
        fullWidth={true}
        autoComplete="false"
        size="small"
        variant="outlined"
        {...props}
      />
    </Box>
  );
};
const StatefulDateField = ({ field }) => {
  // fullWidth
  const {
    label,
    property,
    onChange,
    disabled,
    onValidate,
    validationErrorMsg,
    focus,
  } = field;
  var locale = field.langCode;
  var currentDate = new Date();
  const etdate = NowEt()._year + "-" + NowEt()._month + "-" + NowEt()._day;

  if (locale === "am") {
    currentDate = moment(etdate).format("YYYY-MM-DD");
  }

  const [value, setValue] = useState(field.value || "");

  const [isValid, setIsValid] = useState(true);

  const firstUpdate = useRef(true); // dont run on mount
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    handleValidation();
  }, [value]);

  const handleDateChange = (date) => {
    const newValue = date;
    setValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  const handleValidation = () => {
    if (onValidate) {
      const result = onValidate(value);
      setIsValid(result);
    }
  };

  const props = {};
  if (!isValid) {
    props["error"] = true;
    props["helperText"] = !isEmpty(validationErrorMsg)
      ? validationErrorMsg
      : "Incorrect Input";
  } else {
    props["error"] = undefined;
    props["helperText"] = undefined;
  }

  if (focus) {
    props["autoFocus"] = true;
  }

  return (
    <Box>
      <Typography>{label}</Typography>

      <MuiPickersUtilsProvider utils={MomentUtils} locale={locale}>
        <DatePicker
          id={`${property}-outlined`}
          inputVariant="outlined"
          value={currentDate}
          onChange={handleDateChange}
          disabled={!!disabled}
          fullWidth={true}
          disableFuture
          autoComplete="false"
          size="small"
          {...props}
        />
      </MuiPickersUtilsProvider>
    </Box>
  );
};
export const renderTextField = (field) => {
  return <StatefulTextField field={field} />;
};

export const renderDateField = (field) => {
  moment.locale(field.langCode);
  return <StatefulDateField field={field} />;
};

const StatefulSelectField = ({ field }) => {
  const { label, property, onChange, choices } = field;

  const [value, setValue] = useState(field.value || choices[0].value);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Box>
      <Typography>{label}</Typography>
      <FormControl
        style={{
          width: "100%",
        }}
        variant="outlined"
        size="small"
      >
        <Select
          labelId={`label-${property}`}
          id={`select-${property}`}
          value={value}
          onChange={handleChange}
        >
          {choices.map((c, index) => (
            <MenuItem key={index} value={c.value}>
              {c.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export const renderSelectField = (field) => {
  return <StatefulSelectField field={field} />;
};

const StatefulSwitch = ({ field }) => {
  const { label, onChange } = field;
  console.log(label);
  const [value, setValue] = useState(field.value || false);

  const handleChange = () => {
    const newValue = !value;
    setValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  const switchLabel = value ? field.onLabel : field.offLabel;

  return (
    <Box display="flex" alignItems="center">
      <Typography>{label}</Typography>
      <Switch
        checked={value}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <Typography variant="caption">{switchLabel}</Typography>
    </Box>
  );
};

export const renderSwitch = (field) => {
  return <StatefulSwitch field={field} />;
};

const StatefulCheckbox = ({ field }) => {
  const { label, onChange } = field;

  const [value, setValue] = useState(field.value || false);

  const handleChange = () => {
    const newValue = !value;
    setValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <Checkbox
        checked={value}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <Typography>{label}</Typography>
    </Box>
  );
};

export const renderCheckbox = (field) => {
  return <StatefulCheckbox field={field} />;
};

export const renderField = (field) => {
  switch (field.type) {
    case "text":
      return renderTextField(field);
    case "select":
      return renderSelectField(field);
    case "date":
      return renderDateField(field);
    case "check":
      return renderCheckbox(field);
    case "switch":
      return renderSwitch(field);
    default:
      return null;
  }
};

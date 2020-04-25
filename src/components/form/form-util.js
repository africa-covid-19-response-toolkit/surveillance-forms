import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Switch,
  Checkbox,
} from "@material-ui/core";
import { isEmpty } from "lodash";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import moment from "../../modules/lang/moment-lang";

import MomentUtils from "@date-io/moment";
import { toEthiopian as ToEthiopian } from "ethio-qalendar";

const StatefulTextField = ({ field, clear }) => {
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

  useEffect(() => {
    if (clear === 0) {
      return;
    }
    firstUpdate.current = true;
    setValue(field.value || "");
  }, [clear]);

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
      <InputLabel shrink>{label}</InputLabel>
      <TextField
        color="#ffffff"
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
const StatefulNumberField = ({ field, clear }) => {
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

    if (onValidate) {
      const result = onValidate(value);
      setIsValid(result);
    }
  }, [value, onValidate]);

  useEffect(() => {
    if (clear === 0) {
      return;
    }
    firstUpdate.current = true;
    setValue(field.value || "");
  }, [field.value, clear]);

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
      <InputLabel shrink>{label}</InputLabel>
      <TextField
        color="#ffffff"
        type="number"
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

  if (locale === "am") {
    const basicDate = ToEthiopian(
      currentDate.getDate(),
      currentDate.getMonth() + 1,
      currentDate.getFullYear()
    );
    const etdate = basicDate.year + "-" + basicDate.month + "-" + basicDate.day;

    currentDate = moment(etdate).format();
  }
  const [value, setValue] = useState(field.value || currentDate);

  const [isValid, setIsValid] = useState(true);

  const firstUpdate = useRef(true); // dont run on mount
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (onValidate) {
      const result = onValidate(value);
      setIsValid(result);
    }
  }, [value, onValidate]);

  const handleDateChange = (date) => {
    const newValue = date.format();
    setValue(newValue);

    if (onChange) {
      onChange(newValue);
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
      <InputLabel shrink>{label}</InputLabel>
      <MuiPickersUtilsProvider utils={MomentUtils} locale={locale}>
        <DatePicker
          id={`${property}-outlined`}
          inputVariant="outlined"
          value={value}
          onChange={(date) => handleDateChange(date)}
          disabled={!!disabled}
          format="LL"
          fullWidth={true}
          autoComplete="false"
          size="small"
          {...props}
        />
      </MuiPickersUtilsProvider>
    </Box>
  );
};
export const renderTextField = (field, clear) => {
  return <StatefulTextField field={field} clear={clear} />;
};
export const renderNumberField = (field, clear) => {
  return <StatefulNumberField field={field} clear={clear} />;
};
export const renderDateField = (field) => {
  moment.locale(field.langCode);
  return <StatefulDateField field={field} />;
};

const StatefulSelectField = ({ field }) => {
  const { label, property, onChange, disabled, choices } = field;

  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Box>
      <InputLabel shrink>{label}</InputLabel>
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
          disabled={!!disabled}
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
      <Box
        style={{
          borderRadius: "50px",
          border: "1px solid #ccc",
          margin: "5px 10px 5px 0",
        }}
      >
        <Switch
          checked={value}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <Typography variant="caption" style={{ opacity: 0.5, marginRight: 10 }}>
          {switchLabel}
        </Typography>
      </Box>
      <Typography>{label}</Typography>
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
      <div
        style={{ width: "maxContent", cursor: "pointer" }}
        onClick={handleChange}
      >
        <Typography>{label}</Typography>
      </div>
    </Box>
  );
};

export const renderCheckbox = (field) => {
  return <StatefulCheckbox field={field} />;
};

export const renderField = (field, clear) => {
  switch (field.type) {
    case "text":
      return renderTextField(field, clear);
    case "number":
      return renderNumberField(field, clear);
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

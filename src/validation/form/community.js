import { isEmpty } from "../util/text";
import { isIntegerNumber } from "../util/number";
import errorTypes from "../util/errorTypes";

export const firstNameValidator = {
  validate: (value) => {
    return !isEmpty(value);
  },
  validationErrorMsg: errorTypes.empty,
};

export const ageValidator = {
  validate: (value) => {
    const intVal = parseInt(value);
    return isIntegerNumber(value) && intVal > 0 && intVal < 120;
  },
  validationErrorMsg: errorTypes.numberOnly,
};

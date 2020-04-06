import { nameValidator as nameValidatorUtil } from "../util/text";
import { ageValidator as ageValidatorUtil } from "../util/number";
import errorTypes from "../util/errorTypes";

export const nameValidator = {
  validate: (value) => nameValidatorUtil(value),
  validationErrorMsg: errorTypes.empty,
};

export const ageValidator = {
  validate: (value) => ageValidatorUtil(value),
  validationErrorMsg: errorTypes.numberOnly,
};

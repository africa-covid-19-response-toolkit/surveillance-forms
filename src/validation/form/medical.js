import {
  nameValidator as nameValidatorUtil,
  emailIsValid,
  lengthAtMostX,
} from "../util/text";
import { ageValidator as ageValidatorUtil } from "../util/number";
import errorTypes from "../util/errorTypes";

export const nameValidator = {
  validate: (value) => nameValidatorUtil(value),
  validationErrorMsg: errorTypes.empty,
};

export const nameMaxLengthValidator = {
  validate: (value) => lengthAtMostX(value, 100),
  validationErrorMsg: errorTypes.lengthAtMost100,
};

export const ageValidator = {
  validate: (value) => ageValidatorUtil(value),
  validationErrorMsg: errorTypes.numberOnly,
};

export const emailValidator = {
  validate: (value) => emailIsValid(value),
  validationErrorMsg: errorTypes.email,
};

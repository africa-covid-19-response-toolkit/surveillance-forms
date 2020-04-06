/**
 * Util for checking text related validations
 */
import { isEmpty as isEmptyLodash } from "lodash";

export const lengthAtLeastX = (text, x) => {
  return text.length > x;
};

export const isEmpty = (text) => {
  return isEmptyLodash(text);
};

export const nameValidator = (name) => {
  return !isEmpty(name) && name.length < 100;
};

export const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

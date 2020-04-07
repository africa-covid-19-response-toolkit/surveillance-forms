/**
 * Util for checking text related validations
 */
import { isEmpty as isEmptyLodash } from "lodash";

export const lengthAtLeastX = (text, x) => {
  return !isEmpty(text) && text.length >= x;
};

export const lengthAtMostX = (text, x) => {
  return isEmpty(text) || text.length <= x;
};

export const isEmpty = (text) => {
  return isEmptyLodash(text);
};

export const nameValidator = (name) => {
  return !isEmpty(name) && lengthAtMostX(name, 100);
};

export const emailIsValid = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

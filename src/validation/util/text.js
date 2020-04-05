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

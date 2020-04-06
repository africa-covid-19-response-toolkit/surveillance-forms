/**
 * Util for number related validations
 */

export const isIntegerNumber = (val) => Number.isInteger(parseInt(val));

export const ageValidator = (age) => {
  const intVal = parseInt(age);
  return isIntegerNumber(age) && intVal > 0 && intVal < 120;
};

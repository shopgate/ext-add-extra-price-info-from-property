/**
 * @param {string} value String containing a number.
 * @return {number}
 */
export const getNumberFromString = (value) => {
  if (!value) {
    return 0;
  }
  const number = parseInt(value, 10);
  return Number.isNaN(number) ? 0 : number;
};

/**
 * Creates an array with all falsey values removed
 * The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsey.
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 * __compact([1, 3, 0, false, 2, '', 4, undefined, 5, NaN]);
 * // => [1, 3, 2, 4, 5]
 */
const __compact = (array: any[]): any[] => {
  return array.filter((item) => !!item);
};

export { __compact };

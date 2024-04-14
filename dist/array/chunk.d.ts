/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 * @param {Array} array The array to process.
 * @param {number} size The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 * __chunk([1, 2, 3, 4, 5], 2);
 * // => [[1, 2], [3, 4], [5]]
 * __chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
 * // => [[1, 2, 3], [4, 5, 6], [7, 8]]
 * __chunk([1, 2, 3, 4, 5], 4);
 * // => [[1, 2, 3, 4], [5]]
 */
declare const __chunk: (array: any[], size?: number) => any[];
export { __chunk };

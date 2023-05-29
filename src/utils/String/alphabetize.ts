import sortByOrder from "./sortByOrder";

/** Sorts all test in specific order to ensure content is consistent.
 * 
 * @param {object | object[]} data - Object or array of objects to be sorted.
 * @param {string[]} order - `optionally` provide another alphabet to sort by. Default is english alphabet.
 * @param {string} key - The key within `data` to sort by.
 * @returns {object | object[]} The sorted object or array of objects.
 * 
 * @example
 * import {alphabetize} from '@/utils/String';
 * let objectToSort = {
 *      'z': {name: 'z'},
 *      'b': {name: 'b'},
 *      'c': {name: 'c'},
 *      'a': {name: 'a'},
 * }
 * 
 * let sortedData = alphabetize(objectToSort);
 * console.log(sortedData);
 * // returns 👇🏼
 * "{
 *      'a': {name: 'a'},
 *      'b': {name: 'b'},
 *      'c': {name: 'c'},
 *      'z': {name: 'z'},
 * }"
 * 
 * 
 * let arrayOfObjectsToSort = [
 *      {name: 'z'},
 *      {name: 'b'},
 *      {name: 'c'},
 *      {name: 'a'},
 * ]
 * 
 * let sortedData = alphabetize(arrayOfObjectsToSort);
 * console.log(sortedData);
 * // returns 👇🏼
 * "[
 *     {name: 'a'},
 *     {name: 'b'},
 *     {name: 'c'},
 *     {name: 'z'},
 *]"
*/
export default function alphabetize<T>(
    data: T | T[],
    key: keyof T | string
):object|object[]|string[] {
    let order: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
    // if(Array.isArray(data)) throw new Error('Data as an Array of objects is not yet supported.');
    return sortByOrder(data as T[], key as keyof T, 'alphabetize')
}

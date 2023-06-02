/** Utility functions for string management.
 * 
 * @file        String.ts
 * @description A collection of functions designed to manage strings within app.
 * @author      @ErikPlachta
 * @version     1.0.0
 * @since       1.0.0
 * @date        20230226
 * 
 * @exports     toUpperCaseFirstLetter
 * @exports     isValidEmail
 * @xports      pluralize
 * 
 */

import isValidEmail from './isValidEmail';
import capitalize from './capitalize';
import pluralize from './pluralize';
import shortenString from './shortern';

  

export {
    isValidEmail,
    capitalize,
    pluralize,
    shortenString
};
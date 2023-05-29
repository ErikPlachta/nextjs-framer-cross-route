/** Check is `string` email is a valid email address.
 * 
 * @function isValidEmail
 * @requires N/A
 * @author  @ErikPlachta
 * @version 1.0.0
 * @since 1.0.1
 * @date 20230226
 * @exports isValidEmail
 * 
 * @param {string} email - The email address to validate.
 * @returns {boolean} - true if valid email, false if not.
 * @example
 * 
 * isValidEmail('isanemail@email.com') // returns true
 * isValidEmail('notanemail') // returns false
 * isValidEmail('notanemail@') // returns false
 * isValidEmail('notanemail@notanemail') // returns false
 * isValidEmail('notanemail@notanemail.') // returns false
*/
export default function isValidEmail(email:string):boolean {
    let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailRegex.test(String(email).toLowerCase());
}

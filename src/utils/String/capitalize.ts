/** Capitalize first letter a `String` or every word within a `String`.
 * 
 * Use this function to capitalize the first letter of a `string`. Optionally,
 *  you can set `allWords` to `true` if you want every word within the `String`
 *  to be capitalized.
 * 
 * @function capitalize
 * 
 * @requires N/A
 * @author  @ErikPlachta
 * @version 1.0.1
 * @since 1.0.0
 * @date 20230226
 * 
 * @param {string} string - The string to capitalize.
 * @param {boolean} allWords - If `true`, every word within the string will be capitalized.
 * @param {string[]} deliminator - The deliminator(s) used to determine when a new word starts. Default is a space `[' ']`.
 * @param {number} charAt - If `allWords` is `false`, this is the index of the character to capitalize. Default is `0`.
 * @param {deliminator} deliminator - The deliminator(s) used to determine when a new word starts. Default is a space `[' ']`.
 * @param {boolean} validateLength - If `true`, the function will throw an error if the `charAt` index is out of bounds. Default is `true`.
 * @returns {string} The string with the first letter capitalized.
 * 
 * 
 * @todo    20230304 #EP || Add 'allWords' and `deliminator` functionality.
 * 
 * @example
 * 
 * capitalize('hello') // returns 'Hello'
 * capitalize('Hello') // returns 'Hello'
 * capitalize('hello world') // returns 'Hello world'
 *  
 */
export default function capitalize(
    string:string,
    type: 'first' | 'word' | 'all' = 'first',
    charAt:number = 0,
    deliminator ?:string[] | [' '],
    // everyWord:boolean = false,
    validateLength:boolean = true
):string {
    if(!string) throw new Error(`Type 'string' is required, but was provided typeof: '${typeof string}'.`);
    if(string.length < charAt) throw new Error(`The 'charAt' index is out of bounds. The string is only ${string.length} characters long, but the 'charAt' index is ${charAt}.`);

    // console.log("STRING:", string)
    if(type == 'all') {
        try{
            return string?.toUpperCase();
        } catch (error) {
            console.error('Error in capitalize function. Forcing param as string.toString : ', string
                        , '\nError:', error);
            return string.toString();
        }
    }

    //-- Only capitalize single letter based on `charAt` index, where default is first.
    if(type == 'first'){
        
        let charactersBefore = string.slice(0, charAt);
        let charToCapitalize = string.charAt(charAt).toUpperCase();
        let charactersAfter = string.slice(charAt + 1);

        return `${charactersBefore}${charToCapitalize}${charactersAfter}`
        // return string.charAt(charAt).toUpperCase() + string.slice(charAt);
    } 
    
    return ''
    throw new Error('The capitalize `everyWord` functionality is not yet implemented. Please set `allWords` to `false`, and use charAt to specify the index of the character to capitalize.');
    // return string.charAt(0).toUpperCase() + string.slice(1);
}
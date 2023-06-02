//------------------------------------------------------------------------------
//-- Data Manipulation


/** Pluralize a a string dynamically or statically.
 * 
 * This utility is designed to be used by content that needs to be
 * pluralized dynamically based on the total value of an item by adding 
 * punctuation to the end of the string when the value is greater than 1.
 * 
 * Can also be used statically by passing in a `text` argument.
 * 
 * 
 * ---
 * 
 * ### Params
 * 
 * @param {string} text                     `string` value to be evaluated and pluralized.
 * @param {number} count                    `number` value to dynamically manage pluralization of `text`.
 * @param {string} punctuation              `string` character between `text` and `suffix`. Defaults to single quote, with option for any string value.
 * @param {string} suffix                   `string` character after the punctuation. Defaults to `s`, with option for any string value.
 * @param {boolean} pluralizeIfLessThanOne  Feature for use cases when should ALWAYS be pluralized unless 1.  IF count <= 0 return pluralized `text. For example, `1 post` vs `0 posts`. Defaults to `false`, with option for `true`.
 * @returns {string}                        The `text` pluralized or not as `string` if `text` provided. Otherwise throws error.
 * 
 * ---
 *
 * ### Example of using `pluralize` to dynamically pluralize the text `post` based on array length below.
 * 
 * @example 
 * import pluralize from 'utils/text';
 * 
 * var postsArray[] = ['post1', 'post2']
 * pluralize('post', postsArray.length) // returns 'posts'
 * postArray.pop(); // reduce array to 1 item
 * pluralize('post', postsArray.length) // returns 'post'
 * postArray.pop(); // reduce array to 0 items
 * pluralize('post', postsArray.length) // returns 'post'
 \* pluralize('post', postsArray.length, pluralizeIfLessThanOne=true) // returns 'posts'
 * 
 * 
 */
export default function pluralize(
    text                    : string,
    count                   : number | undefined,
    punctuation             : string | `'`,
    suffix                  : string | `s`,
    pluralizeIfLessThanOne  : boolean = false
):string {

    //-- IF for some reason user passes in invalid or undefined `text`, `punctuation`, or `suffix`, throw error.
    if(!text)           throw new Error(`./utils/pluralize requires a 'text' parameter of type string, but was provided type '${typeof text}' & value '${text}'.`);
    if(!punctuation)    throw new Error(`./utils/pluralize requires a 'punctuation' parameter of type string, but was provided type '${typeof punctuation}' & value '${punctuation}.`);
    if(!suffix)         throw new Error(`./utils/pluralize requires a 'suffix' parameter of type string, but was provided type '${typeof suffix}' & value '${suffix}.`);
    

    //-- IF `count` is defined and is less than or equal to 1, return `text`.
    if (count && count == 1 ) return text;


    let pluralizedText = `${text}${punctuation}${suffix}`;

    /** IF feature enabled, and  count <= 0 return `${text}'s`.
     * 
     * Used when the content is only referred to as singular when the content's
     *  count is exactly one.
     * 
     * @example "1 post" vs "0 posts"
     */
    if(pluralizeIfLessThanOne && count && count <= 0 ) return pluralizedText;
    
    
    //-- Otherwise pluralizedText
    return pluralizedText
}
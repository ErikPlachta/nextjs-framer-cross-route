/**
 * Sorts an array of objects based on a specified key and sort order.
 * If no sort order is provided, the function sorts the objects in alphabetical order based on the key.
 * @param data The array of objects to sort.
 * @param key The key to use for sorting.
 * @param order The order in which to sort the data.
 * @param ascending Whether to sort the data in ascending (true) or descending (false) order.
 * @returns The sorted array of objects.
 */
export default function sortByOrder<T>(
    data        : T[],
    key         : keyof T,
    order       : string[] | 'alphabetize',
    ascending   :boolean = true
  ): T[] {
    // Check if data is an array and has elements
    if (!Array.isArray(data) || !data.length) {
      // Return an empty array if data is not an array or has no elements
      return [];
    }
  
    if(order === 'alphabetize'){
        return data.sort((a: T, b: T) => {
            const aTitle = (a[key] as any) as string;
            const bTitle = (b[key] as any) as string;
            return aTitle.localeCompare(bTitle);
        });
    }
    //-- Custom order so Construct an orderMap object that maps each value in the order array to its index in the array
    else if(typeof order === 'object') {
        const orderMap: { [key: string]: number } = {};
        order.forEach((value, index) => {
        orderMap[value] = index;
        });
        // Define the comparison function based on the sort order and whether to sort in ascending or descending order
        const sortFunc = ascending ? (a: T, b: T) => {
        const aIndex = orderMap[a[key] as any] ?? order.length;
        const bIndex = orderMap[b[key] as any] ?? order.length;
        return aIndex - bIndex;
        } : (a: T, b: T) => {
        const aIndex = orderMap[a[key] as any] ?? order.length;
        const bIndex = orderMap[b[key] as any] ?? order.length;
        return bIndex - aIndex;
        };
    }
  
    //-- Otherwise it's undefined so assume alphabetical order
    return data.sort((a: T, b: T) => {
        const aTitle = (a[key] as any) as string;
        const bTitle = (b[key] as any) as string;
        return aTitle.localeCompare(bTitle);
    });
  }
  
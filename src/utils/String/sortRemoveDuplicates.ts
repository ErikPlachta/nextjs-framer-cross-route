export default function sortAndRemoveDuplicates(arr: string[]): string[] {
    const uniqueSet = new Set(arr);
    const uniqueArray = Array.from(uniqueSet);
    return uniqueArray.sort();
  }
  

  
export default function shortenString(str: string, length: number): string {
    if (str.length <= length) {
      return str;
    } else {
      return str.slice(0, length) + "...";
    }
  }
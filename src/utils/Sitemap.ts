import fs from 'fs';
import path from 'path';

export type XmlEntry = {
  loc         : string;
  route       : string;
  lastmod     : string;
  priority    : number
}

/**
 * Parses the sitemap.xml file and returns an array of XmlEntry objects
 * 
 * @returns {XmlEntry[]} Array of XmlEntry objects
 */
export default async function parseSitemapXml():Promise<XmlEntry[]> {
  const filePath = path.join(process.cwd(), 'public', 'sitemap.xml');
  const fileData = fs.readFileSync(filePath, 'utf8');
  const matches = Array.from(
              fileData.matchAll(/<url>[\s\S]*?<loc>(.*?)<\/loc>[\s\S]*?<route>(.*?)<\/route>[\s\S]*?<lastmod>(.*?)<\/lastmod>[\s\S]*?<\/url>/g), m => ({ loc: m[1], route: m[2], lastmod: m[3] }));
  return matches as XmlEntry[]
};



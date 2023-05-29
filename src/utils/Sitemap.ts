import fs from 'fs';
import path from 'path';

export type SitemapXml = {
  loc         : string;
  route       : string;
  lastmod     : string;
  priority    : number
}

/**
 * Parses the sitemap.xml file and returns an array of SitemapXml objects
 * 
 * @returns {SitemapXml[]} Array of SitemapXml objects
 */
export default async function parseSitemapXml():Promise<SitemapXml[]> {
  try {
    const filePath = path.join(process.cwd(), 'public', 'sitemap.xml');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const matches = Array.from(
                fileData.matchAll(/<url>[\s\S]*?<loc>(.*?)<\/loc>[\s\S]*?<route>(.*?)<\/route>[\s\S]*?<lastmod>(.*?)<\/lastmod>[\s\S]*?<\/url>/g), m => ({ loc: m[1], route: m[2], lastmod: m[3] }));
    return matches as SitemapXml[]
    } catch (error) {
      throw new Error('Error parsing sitemap.xml. Verify public/sitemap.xml exists and is valid XML.');
      return [];
    }
};



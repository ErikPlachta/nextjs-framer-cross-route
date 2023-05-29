import React from 'react';
import Head from "next/head";
import parseSitemapXml, {XmlEntry} from '@/utils/Sitemap';

import { capitalize } from '@/utils/String';
import Link from 'next/link';





export default async function SiteMap() {
  let sitemapData:XmlEntry[] = await parseSitemapXml();
  
  return(
    <>
      <Head>
          <title>Sitemap</title>
      </Head>
      <section className='max-w-2xl px-8'>
        <div className='bg-transparent pb-10 grid grid-cols-1 gap-[1.5rem] md:grid-cols-2 relative z-10 rounded-lg w-full col-span-full'>
            {sitemapData && sitemapData.map((urlData:XmlEntry, index) => (
                <div key={index}>
                    <h3 className='text-lg font-bold border-solid border-b-2 border-0 border-blue-900 mt-6 pb-2 mb-4'>
                        { urlData.route ? capitalize(urlData?.route) : "Home" }
                    </h3>
                    <ul className='flex flex-row justify-between'>
                        <li>URL: <Link href={urlData.loc}>{urlData.loc}</Link></li>
                        <li>Last Modified: {urlData.lastmod}</li>
                    </ul>
                </div>
            ))}
        </div>
      </section>
    </>
  );
}

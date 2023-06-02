/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  //-- 
  images: {
    domains: ['images.unsplash.com'],
  },

  publicRuntimeConfig: {
    // Will be available on both server and client
    apiBaseUrl: process.env.NODE_ENV === 'production' ? 'https://your-website.com' : 'http://localhost:3000',
  },
  
  // Reference a variable that was defined in the .env file and make it available at Build Time
  env: {  
    
    
    //-- Placeholders for API Setup:
    // API_URL: process.env.API_URL,
    // API_KEY: process.env.API_KEY,
    // API_TOKEN: process.env.API_TOKEN,
    // API_SECRET: process.env.API_SECRET,
    // API_ID: process.env.API_ID,
    // API_SECRET: process.env.API_SECRET,
  },
  /**
     * Headers allow you to set custom HTTP headers on the response to
     *  an incoming request on a given path.
     * 
     * @source [NextJs | next.config.js > Headers](https://nextjs.org/docs/api-reference/next.config.js/headers)
     */
    headers() {
      return [
        {
          source: '/(.*)',
          headers: securityHeaders,
        },
      ];
    },
}


  
// https://nextjs.org/docs/advanced-features/security-headers
const ContentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'none';
    connect-src *;
    font-src 'self';
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
];


module.exports = nextConfig

// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/user-profile',
          permanent: true  // This is now valid because it's a redirect, not a rewrite
        },
      ];
    },
  };
  
  export default nextConfig;
  
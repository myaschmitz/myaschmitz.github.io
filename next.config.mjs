/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'live.staticflickr.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/solar-system',
        destination: '/solar-system/index.html',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['files.stripe.com'],
  },
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [],
    },
    reactStrictMode: true,
    swcMinify: true,
    staticPageGenerationTimeout: 120,
    poweredByHeader: false,
};

export default nextConfig;
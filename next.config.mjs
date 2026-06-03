// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         remotePatterns: [],
//     },
//     reactStrictMode: true,
//     staticPageGenerationTimeout: 120,
//     poweredByHeader: false,
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "corian-mandir-kirti-nagar.vaishnotemple.in",
        }, ],
    },
};

export default nextConfig;
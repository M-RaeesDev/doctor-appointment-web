/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns : [
            {
                hostname : "plus.unsplash.com"
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                pathname: "/**", // Allow all paths
            },
        ]

    }
};

export default nextConfig;

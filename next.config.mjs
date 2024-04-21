/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "controlbar.app.br" }],
  },
};

export default nextConfig;

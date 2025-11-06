/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: false,
  images: { unoptimized: true },
  basePath: "/python-tutorial",
  assetPrefix: "/python-tutorial/",
  trailingSlash: true,
};

export default nextConfig;

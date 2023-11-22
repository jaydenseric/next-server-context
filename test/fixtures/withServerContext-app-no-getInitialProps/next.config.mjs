// @ts-check

/** @satisfies {import("next").NextConfig} */
const nextConfig = {
  pageExtensions: ["mjs"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

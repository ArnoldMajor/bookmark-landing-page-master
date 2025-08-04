import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    loader: "akamai", // Or your preferred image loader for static sites
    path: "",
  },
  assetPrefix: "./", // Important for correct asset paths on GitHub Pages
};

export default nextConfig;

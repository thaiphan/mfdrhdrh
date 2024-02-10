import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "my-app",
          filename: "remoteEntry.js",
          remotes: {
            settings:
              "settings@https://d3dgo17bvznzj1.cloudfront.net/settings/remoteEntry.js",
          },
        })
      );
    }
    return config;
  },
};

export default nextConfig;

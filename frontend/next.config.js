const withPlugins = require("next-compose-plugins");
const withOptimizedImages = require("next-optimized-images");
const withFonts = require("next-fonts");
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: "upgrade-insecure-requests",
  },
];
const nextConfiguration = {
  images: {
    disableStaticImages: true,
    domains: ["s3.amazonaws.com"],
  },
  webpack: (config) => {
    config.externals = config.externals || {};
    config.externals["styletron-server"] = "styletron-server";
    return config;
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = withPlugins(
  [withOptimizedImages, withFonts],
  nextConfiguration
);

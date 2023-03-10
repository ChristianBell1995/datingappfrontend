/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "media.licdn.com",
      "phantom-marca.unidadeditorial.es",
      "i1.sndcdn.com",
      "upload.wikimedia.org",
      "images.squarespace-cdn.com",
      "media.istockphoto.com",
      "static.independent.co.uk",
    ],
  },
};

module.exports = nextConfig;

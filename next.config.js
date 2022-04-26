module.exports = {
  reactStrictMode: false,
  compress: true,
  swcMinify: true,
  trailingSlash: true,
  images:{
    domains:['localhost:3000/', 'cms.fredmadethis.co.za'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  }
}
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    basePath: '/fotokraftjec',
    images: {
      unoptimized: true
    },
}

module.exports = nextConfig

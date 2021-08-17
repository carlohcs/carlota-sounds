/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  webpack: (config, options) => {
    // config.module.rules.push({
    //   // https://react-svgr.com/docs/webpack/
    //   test: /\.svg$/,
    //   use: ['@svgr/webpack'],
    // })

    return config
  },
}

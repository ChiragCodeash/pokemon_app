// workbox-config.js
module.exports = {
    globDirectory: 'build/',
    globPatterns: ['**/*.{js,css,html,png,svg}'],
    swDest: 'build/service-worker.js',
    // Add precaching configuration
    runtimeCaching: [{
      urlPattern: /\.(?:woff|woff2|html|json)$/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'other-resources',
      },
    }],
  };
  
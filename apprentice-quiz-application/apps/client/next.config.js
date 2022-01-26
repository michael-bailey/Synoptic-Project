// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const process = require('process');

let SERVER_ADDRESS = process.env['server_address'] ?? 'localhost:3333';

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  rewrites: () => {
    return [
      // proxies api requests to server
      {
        source: '/graphql',
        destination: `http://${SERVER_ADDRESS}/graphql`, // Proxy to Backend
      },
    ];
  },
};

module.exports = withNx(nextConfig);

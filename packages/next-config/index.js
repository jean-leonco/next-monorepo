const packages = ['@next/ui'];

const withTranspileModules = require('next-transpile-modules')(packages);

module.exports = withTranspileModules({
  typescript: {
    transpileOnly: true,
    ignoreDevErrors: true,
    ignoreBuildErrors: true,
  },
});

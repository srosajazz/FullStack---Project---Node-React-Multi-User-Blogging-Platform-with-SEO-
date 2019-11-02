const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  publicRuntimeConfig: {
    APP_NAME: 'ENSDASHBOARD',
    API_DEVELOPMENT: 'http://localhost:8000/api',
    API_PRODUCTION: 'http://ensembledashboard.com/api',
    PRODUCTION: false,
    DOMAIN_DEVELOPMENT: 'http://localhost:3000',
    DOMAIN_PRODUCTION: 'ensembledashboard.com',
    FB_APP_ID: '757471834700667'
  },
});
  
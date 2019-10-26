const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  publicRuntimeConfig: {
    APP_NAME: 'ENSDASHBOARD',
    API_DEVELOPMENT: 'http://localhost:8000/api',
    API_PRODUCTION: 'http://ensdashboard.com/api',
    PRODUCTION: false,
  },
});
  
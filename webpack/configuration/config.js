const portNumber = process.env.PORT || 9000; // Port number for the server
const jsFileOutput = 'assets/js/[name].[contenthash].js'; // JavaScript file name once built
const cssFileOutput = 'assets/css/[name].[contenthash].css'; // CSS file name once built

/**
 * Set and export configuration.
 */
export const config = {
  PORT: portNumber,
  JS_FILE_OUTPUT: jsFileOutput,
  CSS_FILE_OUTPUT: cssFileOutput,
  IS_DEV: process.env.NODE_ENV === 'development',
};

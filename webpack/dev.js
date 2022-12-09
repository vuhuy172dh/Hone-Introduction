// Import dependencies.
import { merge } from 'webpack-merge';

// Import Configuration.
import { WebpackCommonConfig } from './common';
import { paths, config } from './configuration';

/**
 * Default dev server settings.
 */
const devServer = {
  open: true,
  compress: false,
  port: config.PORT,
  host: config.HOST || 'localhost',
  hot: true,
  client: {
    progress: true,
  },
  static: [
    {
      watch: true,
      directory: paths.dist,
    },
  ],
};

/**
 * Webpack development configuration.
 */
const WebpackConfig = {
  devServer,
  devtool: 'cheap-module-source-map',
  stats: 'minimal',
};

// Export configuration.
export const WebpackDevConfig = merge(WebpackCommonConfig, WebpackConfig);

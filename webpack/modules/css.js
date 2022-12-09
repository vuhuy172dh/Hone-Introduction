// Import dependencies.
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Import Configuration.
import { config } from '../configuration';

/**
 * Default modules loader for CSS.
 */
export const css = {
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    config.IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
    // Translates CSS into CommonJS
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        // Prefer `dart-sass`
        implementation: require('sass'),
      },
    },
    // Compiles Sass to CSS
    'sass-loader',
  ],
  exclude: /node_modules/,
};

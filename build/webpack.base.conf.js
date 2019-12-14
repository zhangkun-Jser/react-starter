const path = require('path');
const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const resolve = path.resolve;
const publicPath = require('./publicPath');
const theme = require('./theme.js');
const postcssConfigPath = resolve(__dirname, './postcss.config.js');

module.exports = {
  entry: {
    app: './src/app.jsx',
  },
  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: publicPath + '/',
    chunkFilename: '[name].js',
    crossOriginLoading: 'anonymous',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
    alias: {
      common: resolve('src/common'),
      components: resolve('src/components'),
      constants: resolve('src/constants'),
      modules: resolve('src/modules'),
      reduxDir: resolve('src/redux'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css/i,
        include: [
          resolve('src'),
        ],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: postcssConfigPath,
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        include: [resolve('src')],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader:
              'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            options: {
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: postcssConfigPath,
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: theme,
            },
          },
        ],
      },
      {
        test: /\.less/i,
        include: [
          resolve('asset/css'),
          resolve('node_modules/antd/'),
        ],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader?importLoader=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
            options: {
              minimize: true, // css压缩
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: postcssConfigPath,
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: theme,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: ['file-loader?limit=1000&name=files/[md5:hash:base64:10].[ext]'],
      },
      {
        test: /\.(html|htm)$/,
        use: 'html-withimg-loader',
      },
    ],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /^\.\/zh\-cn$/),
    // extract css
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    // clean output bundle directory
    new CleanWebpackPlugin(),
  ],
};

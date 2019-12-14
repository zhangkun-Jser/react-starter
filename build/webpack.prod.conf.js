const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  plugins: [
    // analyze bundle size
    // new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), './template.html'),
      filename: path.resolve(process.cwd(), './dist', 'index.html'), // 写入的文件
    }),
  ],
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        libs: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        styles: {
          test: /(\.less|\.css)$/,
          priority: -10,
        },
      },
    },
  },
};

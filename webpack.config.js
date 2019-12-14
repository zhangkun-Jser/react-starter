const merge = require('webpack-merge');
const Env = require('./build/env');
const baseConfig = require('./build/webpack.base.conf');
const prodConfig = require('./build/webpack.prod.conf');
const devConfig = require('./build/webpack.dev.conf');

let config = devConfig;

if (Env.isQA() || Env.isProduction()) {
  config = prodConfig;
}

module.exports = merge(baseConfig, config);

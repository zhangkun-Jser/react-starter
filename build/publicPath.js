let pkg = require('../package.json');
const Env = require('./env');

// 不同环境下的静态资源的url根路径
let PRODUCT_STATIC_URL = 'http://static.hello.com';
let QA_STATIC_URL = 'http://qa.static.hello.com';
let PROFILE_STATIC_URL = 'http://dev.static.hello.com'; // 联调环境静态资源存放路径
let DEV_STATIC_URL = '/dist';

// 根据环境来获取不同的静态资源部署的根路径
let publicPath = (function getPublicPath() {
  let staticUrl = DEV_STATIC_URL;
  if (Env.isDev()) {
    return staticUrl;
  }

  if (Env.isProduction()) {
    staticUrl = PRODUCT_STATIC_URL;
  }

  if (Env.isQA()) {
    staticUrl = QA_STATIC_URL;
  }

  if (Env.isProfile()) {
    staticUrl = PROFILE_STATIC_URL;
  }

  return `${staticUrl}/${pkg.name}/${pkg.version}`;
})();

module.exports = publicPath;

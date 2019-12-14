
const ENVS = {
  PUB: ['pub', 'production'],
  QA: 'qa',
  PROFILE: 'profile',
  DEV: ['dev', 'development'],
};

const ENVS_ARR = [];

Object.keys(ENVS).forEach(key => {
  const value = ENVS[key];
  if (Array.isArray(value)) {
    value.forEach(i => ENVS_ARR.push(i));
  } else {
    ENVS_ARR.push(value);
  }
});

let currentEnv = process.env.NODE_ENV;

/**
 * 判断当前环境参数是否符合规范
 * @param {string} env
 */
function checkEnv(env) {
  if (!env) {
    throw new Error('NODE_ENV is not defined');
    return false;
  }

  if (ENVS_ARR.indexOf(env) === -1) {
    throw new Error(`NODE_ENV must be one of ${JSON.stringify(ENVS_ARR)}，currentEnv is：${env}`);
  }

  return true;
}

// 线上环境
const isProduction = () => {
  return checkEnv(currentEnv) && ENVS.PUB.includes(currentEnv);
};

// 非线上环境
const isNotProduction = () => !isProduction();

// 测试环境
const isQA = () => {
  return checkEnv(currentEnv) && currentEnv === ENVS.QA;
};

// 联调环境
const isProfile = () => {
  return checkEnv(currentEnv) && currentEnv === ENVS.PROFILE;
};

// 开发环境
// const isDev = () => !(isProfile() || isProduction() || isQA());
const isDev = () => {
  return checkEnv(currentEnv) && ENVS.DEV.includes(currentEnv);
};

/**
 * 获取所有环境变量
 * @returns ENVS_ARR
 */
function getEnvs() {
  return ENVS_ARR;
}

/**
 * 设置环境变量
 * @param {string} env
 */
function setEnv(env) {
  if (ENVS_ARR.indexOf(env) === -1) {
    throw new Error(`NODE_ENV provided must be one of ${JSON.stringify(ENVS_ARR)}，your param is：${env}`);
  }
  currentEnv = env;
  console.log(`NODE_ENV is set successfully，currentEnv is ${env}`);
}

/**
 * 设置线上环境
 */
const setProduction = () => setEnv(ENVS.PUB[0]);

/**
 * 设置测试环境
 */
const setQA = () => setEnv(ENVS.QA);

/**
 * 设置联调环境
 */
const setProfile = () => setEnv(ENVS.PROFILE);

/**
 * 设置开发环境
 */
const setDev = () => setEnv(ENVS.DEV[0]);

/**
 * 开发和线上环境配置，默认为开发环境配置，适用于前后端未分离项目（用hash做缓存）
 * @param  {*} devConfig 开发环境配置
 * @param  {*} pubConfig 线上环境配置
 * @returns (isQA() || isProduction()) ? pubConfig : devConfig
 */
function env(devConfig, pubConfig) {
  if (!pubConfig && pubConfig !== '') {
    pubConfig = devConfig;
  }

  if (isQA() || isProduction()) {
    return pubConfig;
  }

  return devConfig;
}

module.exports = {
  getEnvs,
  setEnv,
  setProduction,
  setQA,
  setProfile,
  setDev,
  env,
  isProduction,
  isNotProduction,
  isQA,
  isProfile,
  isDev,
  PUB: ENVS.PUB[0],
  QA: ENVS.QA,
  PROFILE: ENVS.PROFILE,
  DEV: ENVS.DEV[0],
};

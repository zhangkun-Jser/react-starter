// 参考：https://ykloveyxk.github.io/2017/02/25/axios%E5%85%A8%E6%94%BB%E7%95%A5/

import OriginAxios from 'axios';
import { message } from 'antd';

const axios = OriginAxios.create({
  timeout: 20000,
});

export function get(url, data) {
  return axios.get(url, {
    params: data,
  });
}

// By default, axios serializes JavaScript objects to JSON
export function post(url, data) {
  return axios({
    url,
    method: 'post',
    data,
  });
}

// By default, axios serializes JavaScript objects to JSON
export function put(url, data) {
  return axios({
    url,
    method: 'put',
    data,
  });
}

export function del(url, data) {
  return axios({
    url,
    method: 'delete',
    data,
  });
}

// Add a request interceptor
axios.interceptors.request.use(
  function config(config) {
    // Do something before request is sent
    return config;
  },
  function error(error) {
    // Do something with request error
    console.log('request error, HTTP CODE: ', error.response.status);
    return Promise.reject(error);
  },
);

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    if (res.data && res.data.flag === 1) {
      let errorMsg = res.data.msg;
      message.error(errorMsg);
      return Promise.reject(errorMsg);
    }

    return res;
  },
  error => {
    // 用户登录的时候会拿到一个基础信息,比如用户名,token,过期时间戳
    // 直接丢localStorage或者sessionStorage
    if (error.response.status === 401) {
      // 若是接口访问的时候没有发现有鉴权的基础信息,直接返回登录页
      // history.push('login');
      window.location = '/login.html';
    }
  },
);

export default axios;

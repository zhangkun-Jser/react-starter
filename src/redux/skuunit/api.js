import { get, post } from 'common/request';
import {
  SHOW_UNIT_LIST_URL,
  DELETE_UNIT_URL,
} from 'constants/url';

/**
 * 单元列表查询展示
 * @param {*} params
 */
export function showSkuunitListApi(params) {
  if (!params) {
    return Promise.reject('params is wrong');
  }
  return get(SHOW_UNIT_LIST_URL, params)
    .then(res => {
      // 开发时调试等待效果;
      return new Promise((resolve) => {
        setTimeout(() => {
          return resolve(res);
        }, 1000);
      });
    })
    .then(res => res.data);
}

/**
 * 删除单元
 * @param {} params
 */
export function deleteSkuUnitApi(params) {
  if (!params) {
    return Promise.reject('params is wrong');
  }
  return post(DELETE_UNIT_URL, params)
    .then(res => res.data);
}

/**
 * author: niuxiaoyu
 * description: 单元
 * date: 2018/6/6
 */
import { ACTION_TYPE_ADD_ERROR } from 'constants/constant';

import {
  showSkuunitListApi,
  deleteSkuUnitApi,
} from './api';

const SHOW_LOADING = 'skuunit/SHOW_LOADING';
const HIDE_LOADING = 'skuunit/HIDE_LOADING';
const SHOW_SKU_UNIT_LIST = 'skuunit/SHOW_SKU_UNIT_LIST';
const DELETE_SKUUNIT = 'skuunit/DELETE_SKUUNIT';

const initialState = {
  dataList: [],
  isLoading: false,
  error: '',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SHOW_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case HIDE_LOADING:
      return Object.assign({}, state, {
        isLoading: false,
      });
    case SHOW_SKU_UNIT_LIST:
      return Object.assign({}, state, {
        dataList: action.payload.data.dataList,
        totalNumber: action.payload.data.totalNumber,
      });
    case DELETE_SKUUNIT:
      return Object.assign({}, state, {
        dataList: _deleteskuUnits(state.dataList, action.payload),
      });
    default:
      return state;
  }
}

/**
 * 删除单元
 * @param {*} source
 * @param {*} skuUnitIdList
 */
const _deleteskuUnits = (source, params) => {
  const { skuUnitIdList } = params;
  const newSource = [];
  for (let i = 0; i < source.length; i++) {
    const target = skuUnitIdList.find(skuUnitId => skuUnitId === source[i].skuUnitId);
    if (!target) {
      newSource.push(source[i]);
    }
  }
  return newSource;
};

/**
 * 单元列表查询展示
 * @param {*} params
 */
export function showSkuunitList(planName) {
  return async dispatch => {
    try {
      dispatch({ type: SHOW_LOADING });
      const res = await showSkuunitListApi(planName);
      await dispatch({ type: SHOW_SKU_UNIT_LIST, payload: res });
      dispatch({ type: HIDE_LOADING });
    } catch (err) {
      dispatch({ type: HIDE_LOADING });
      console.log(err);
    }
  };
}

/**
 * 删除单元
 * @param {} skuUnitIdList
 */
export function deleteSkuUnit(skuUnitIdList) {
  return async dispatch => {
    try {
      const param = { skuUnitIdList };
      const res = await deleteSkuUnitApi(param);
      dispatch({ type: DELETE_SKUUNIT, payload: param, res });
    } catch (err) {
      dispatch({ type: ACTION_TYPE_ADD_ERROR, payload: { errorMsg: err } });
    }
  };
}

import { combineReducers } from 'redux';
import skuunit from './skuunit/skuunit';

const reducers = {
  skuunit,
};

export default combineReducers(reducers);

import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';

const middleware = [thunk];

const isNotProduction = process.env.NODE_ENV !== 'production';
if (isNotProduction) {
  middleware.push(logger);
}

// 判断当前浏览器是否安装了 REDUX_DEVTOOL 插件
const shouldCompose = isNotProduction
  && typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnhancers = shouldCompose
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  })
  : compose;

/*
   调用 applyMiddleware ，使用 middleware 来增强 createStore
*/
const configureStore = composeEnhancers(applyMiddleware(...middleware))(createStore);

const store = configureStore(reducer);
window.Store = store;

if (module.hot) {
  module.hot.accept('./reducers.js', () => {
    console.log('reducer changed');
    store.replaceReducer(require('./reducers').default);
  });
}

export default store;

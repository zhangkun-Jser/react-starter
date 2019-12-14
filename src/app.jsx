/*
 * 项目入口
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import '../asset/css/app.less';
import store from './redux/configureStore';
import Root from './routers';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Root />
    </HashRouter>
  </Provider>,
  document.getElementById('app'),
);

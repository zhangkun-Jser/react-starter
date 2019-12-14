/*
 * 路由主入口：可以在该页面进行登录权限控制
 */
import React from 'react';
import {
  Route, Switch, withRouter,
} from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
// UI示范，如果不需要目前的UI框架，直接替换该组件即可
import PrimaryLayout from './PrimaryLayout';

const Root = (props) => {
  // const { location, history, match } = props;
  return (
    <Switch>
      <Route path="/" render={() => <LocaleProvider locale={zhCN}><PrimaryLayout {...props} /></LocaleProvider>} />
    </Switch>
  );
};

export default hot(module)(withRouter(Root));

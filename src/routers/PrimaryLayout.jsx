import React, { Suspense, useState, lazy } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout, Spin } from 'antd';

import styles from './index.less';
import {
  Header, Sider, Footer, ErrorBoundary,
} from 'components';
const { Content } = Layout;

const Skuunit = lazy(() => import(/* webpackChunkName: "home" */ './Skuunit'));

const PrimaryLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider
        history={props.history}
        pathname={props.location.pathname}
        collapsed={collapsed}
      />
      <Layout>
        <Header
          collapsed={collapsed}
          onToggle={toggleCollapse}
        />
        <Content>
          <div className={styles['main-content']}>
            <Suspense fallback={<Spin />}>
              <ErrorBoundary>
                <Switch>
                  <Route path="/home" component={Skuunit} />
                  <Route path="/nav2" component={() => <div>nav2</div>} />
                  <Redirect to="/home" />
                </Switch>
              </ErrorBoundary>
            </Suspense>
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

PrimaryLayout.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
  location: PropTypes.objectOf(PropTypes.any),
};

export default PrimaryLayout;

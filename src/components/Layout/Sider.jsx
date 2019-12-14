import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Layout, Icon } from 'antd';

import styles from './index.css';
import LOGO from '../../../asset/img/logo.svg';

const { Sider } = Layout;

const SiderComp = ({
  history,
  pathname,
  collapsed = false,
}) => {
  const pathArr = pathname.split('/').filter(i => i);
  const homeKey = 'home';

  const getDefaultSelectedKeys = () => {
    const selectKey = pathArr.length ? pathArr[pathArr.length - 1] : '';
    return selectKey ? [selectKey] : [homeKey];
  };

  const [selectedKeys, setSelectedKeys] = useState(getDefaultSelectedKeys());

  const handleSelect = ({ selectedKeys }) => {
    setSelectedKeys(selectedKeys);
    history.push(`/${selectedKeys}`);
  };

  window.onhashchange = () => {
    setSelectedKeys(getDefaultSelectedKeys());
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className={styles['menu-logo']}>
        <Link to="/">
          <img src={LOGO} />
          {!collapsed && <h1>脚手架</h1>}
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={selectedKeys}
        onSelect={handleSelect}
      >
        <Menu.Item key="home">
          <Icon type="smile" />
          <span>欢迎</span>
        </Menu.Item>
        <Menu.Item key="nav2">
          <Icon type="video-camera" />
          <span>nav 2</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

SiderComp.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
  pathname: PropTypes.string,
  collapsed: PropTypes.bool,
};

export default SiderComp;

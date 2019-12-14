import React from 'react';
import PropTypes from 'prop-types';
import {
  Layout, Icon, Menu, Dropdown, Avatar,
} from 'antd';

import styles from './index.css';
import AVATAR from '../../../asset/img/avatar.png';

const { Header } = Layout;

const HeaderComp = ({
  collapsed = false,
  onToggle,
}) => {
  const menu = (
    <Menu className={styles['header-menu']}>
      <Menu.Item key="user"><Icon type="user" />个人中心</Menu.Item>
      <Menu.Item disabled><Icon type="setting" />设置</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout"><Icon type="logout" /> 退出登录</Menu.Item>
    </Menu>
  );

  const handleToggle = () => {
    onToggle && onToggle();
  };

  return (
    <Header className={styles.header}>
      <Icon
        className={styles.trigger}
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={handleToggle}
      />
      <div className={styles['header-right']}>
        <Dropdown overlay={menu}>
          <span className={styles['account']}>
            <Avatar size="small" src={AVATAR} />
            <span className={styles['user-name']}>dev</span>
          </span>
        </Dropdown>
      </div>
    </Header>
  );
};


HeaderComp.propTypes = {
  collapsed: PropTypes.bool,
  onToggle: PropTypes.func,
};

export default HeaderComp;

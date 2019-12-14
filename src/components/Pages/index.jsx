/**
 * 表格分页组件
 */
import React, { Component } from 'react';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';
import styles from './index.css';

class Pages extends Component {
  static propTypes = {
    pageSizeOptions: PropTypes.arrayOf(PropTypes.string),
    defaultCurrent: PropTypes.number,
    total: PropTypes.number,
    current: PropTypes.number,
    pageSize: PropTypes.number,
    loadTable: PropTypes.func,
    style: PropTypes.objectOf(PropTypes.any),
  }

  static defaultProps = {
    pageSizeOptions: ['10', '20', '30', '40'],
    defaultCurrent: 1,
    total: 0,
    current: 1,
    pageSize: 10,
    style: {
      float: 'right',
    },
  };

  state = {
    current: this.props.current,
    pageSize: this.props.pageSize,
  };

  static getDerivedStateFromProps(props) {
    return {
      current: props.current,
      pageSize: props.pageSize,
      total: props.total,
    };
  }

  handlePageChange = (page, pageSize) => {
    this.loadTable({
      page,
      pageSize,
    });
  }

  handlePageSizeChange = (current, pageSize) => {
    this.loadTable({
      page: this.props.defaultCurrent,
      pageSize,
    });
  }

  loadTable({ page, pageSize }) {
    this.setState({
      current: page,
      pageSize,
    });
    this.props.loadTable(false, {
      page,
      pageSize,
    });
  }

  reset() {
    const { current, pageSize } = this.defaultProps;
    this.setState({ current, pageSize });
  }

  render() {
    const { total, pageSizeOptions, style } = this.props;
    const { current, pageSize } = this.state;

    return (
      <div className={styles['page-wrapper']}>
        <span>共{total}条</span>
        <Pagination
          showSizeChanger
          pageSizeOptions={pageSizeOptions}
          total={total}
          current={current}
          pageSize={pageSize}
          onChange={this.handlePageChange}
          onShowSizeChange={this.handlePageSizeChange}
          style={style}
        />
      </div>
    );
  }
}

export default Pages;

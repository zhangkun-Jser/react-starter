import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Table, Modal,
} from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Pages } from 'components';
import getColumns from './columns';

import { PAGE_DATA } from 'constants/constant';
import {
  showSkuunitList,
  deleteSkuUnit,
} from 'reduxDir/skuunit/skuunit';

const confirm = (msg, onOk, onCancel) => {
  Modal.confirm({
    title: msg,
    onOk() {
      onOk && onOk();
    },
    onCancel() {
      onCancel && onCancel();
    },
  });
};

class Skuunit extends Component {
  static propTypes = {
    data: PropTypes.shape({
      dataList: PropTypes.arrayOf(PropTypes.any),
      isLoading: PropTypes.bool,
      totalNumber: PropTypes.number,
    }),
    showSkuunitList: PropTypes.func,
    deleteSkuUnit: PropTypes.func,
  };

  state = {
    pageNo: PAGE_DATA.pageNo,
    pageSize: PAGE_DATA.pageSize,
  };

  componentDidMount() {
    this.loadTable();
  }

  getFetchListParams = () => {
    const {
      page, pageSize,
    } = this.state;

    return {
      page,
      pageSize,
    };
  }

  /**
   * @resetPage: 表示是否重置Pages组件
   * @pageInfo: Pages组件的参数
   */
  loadTable = (resetPage = true, pageInfo) => {
    let pageNo;
    let pageSize;
    if (!resetPage) {
      pageNo = pageInfo ? pageInfo.page : this.state.pageNo;
      pageSize = pageInfo ? pageInfo.pageSize : this.state.pageSize;
    } else {
      pageNo = PAGE_DATA.pageNo;
      pageSize = PAGE_DATA.pageSize;
    }

    this.setState({
      pageNo,
      pageSize,
    }, () => this.props.showSkuunitList(this.getFetchListParams()));
  }

  deleteSingleUnit = (unitId, unitName) => {
    confirm(`删除单元：${unitName} ？`, () => {
      this.props.deleteSkuUnit([unitId]);
    });
  }

  render() {
    const { dataList, isLoading, totalNumber } = this.props.data;
    const {
      pageNo, pageSize,
    } = this.state;

    const columns = getColumns({
      handleDelete: this.deleteSingleUnit,
    });

    return (
      <div>
        <Table
          columns={columns}
          dataSource={dataList}
          loading={isLoading}
          bordered
          pagination={false}
          rowKey="skuUnitId"
        />
        <Pages
          total={totalNumber}
          current={pageNo}
          pageSize={pageSize}
          loadTable={this.loadTable}
        />
      </div>
    );
  }
}


export default connect(
  state => ({
    data: state.skuunit,
  }),
  dispatch => bindActionCreators({
    showSkuunitList,
    deleteSkuUnit,
  }, dispatch),
)(Skuunit);

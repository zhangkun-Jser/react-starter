import React from 'react';

const getColumns = ({
  handleDelete,
}) => {
  return [
    {
      title: '名称',
      dataIndex: 'skuUnitName',
      width: 230,
      key: 'skuUnitName',
    },
    {
      title: '集合名称',
      dataIndex: 'skuSetName',
      key: 'skuSetName',
    },
    {
      title: '操作',
      key: 'action',
      width: 100,
      render: (text, record) => (
        <span>
          <a href="javascript:;" onClick={() => handleDelete(record.skuUnitId, record.skuUnitName)}>删除</a>
        </span>
      ),
    },
  ];
};

export default getColumns;

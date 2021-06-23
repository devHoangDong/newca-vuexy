import React from 'react'
import { Table } from 'antd';
import '../../../../../scss/table.scss';

const HistoryDrawal = () => {
  const columns = [
    {
      title: 'Ngày',
      dataIndex: 'date',
    },
    {
      title: 'Số tiền',
      dataIndex: 'money',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
    }
  ];
  const data = [

  ];
  return (
    <div className="historyDrawal__container">
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default HistoryDrawal

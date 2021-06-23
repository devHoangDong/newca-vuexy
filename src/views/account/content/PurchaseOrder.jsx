import React, { useState } from 'react';
import { Table } from 'antd';
import '../../../../scss/PurchaseOrder.scss';
import MyTitle from './Title';

const PurchaseOrder = () => {
  const axios = require('axios');
  const expandedRowRender = () => {
    const columns = [
      { title: 'tên mặt hàng', dataIndex: 'orders', key: 'orders' },
      { title: 'Đơn giá', dataIndex: 'price', key: 'price' },
    ];
    const data = [];
    for (let i = 0; i < 5; ++i) {
      data.push({
        key: i,
        orders: `oder` + i
      });
    }
    return (
      <div className="purchaseOrder__table2">
        <div className="purchaseOrder__table2--titleTable">Chi tiết đơn hàng</div>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </div>
    );
  };
  const columns = [
    {
      title: "Mã đơn hàng",
      dataIndex: "",
      render: (e) => {
        if (e) {
          return e.order.code;
        }
      }
    },
    {
      title: "Ngày mua",
      dataIndex: "created_at",
    },
    {
      title: "Tổng đơn hàng",
      dataIndex: "formatted_total",
    },
    {
      title: "Trạng thái đơn hàng",
      dataIndex: "",
      render: (e) => {
        if (e) {
          //return e.order.payment_status;
          switch (e.order.payment_status) {
            case "0": return <span>Đang chờ xử lý</span>;
            case "1": return <span>Đã thanh toán</span>;
            case "2": return <span>Đã hủy</span>;
            default: return <span>Đang chờ xử lý</span>
          }
        }
      }
    },
  ];

  // const return_data = [];
  const [return_data, setReturnData] = useState([]);
  axios.get('http://test.newca.vn/api/account/affiliate/7/orders')
    .then(function (response) {
      setReturnData(response.data.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  console.log('returndata', return_data)
  return (
    <div className="purchaseOrder__container">
      <div className="purchaseOrder">
        <div className="purchaseOrder__title">
          <MyTitle title="Đơn hàng" />
        </div>
        <Table
          className="components-table-demo-nested"
          columns={columns}
          expandable={{ expandedRowRender }}
          dataSource={return_data}
        />
      </div>
    </div>
  )
}

export default PurchaseOrder

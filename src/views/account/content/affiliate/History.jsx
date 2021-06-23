import React from 'react'
import { Table } from 'antd';
import '../../../../../scss/table.scss';

const History = () => {
  const columns = [
    {
      title: 'Mã đơn hàng',
      dataIndex: 'id',
    },
    {
      title: 'Người mua',
      dataIndex: 'user',
    },
    {
      title: 'Trạng thái đơn hàng',
      dataIndex: 'status',
    },
    {
      title: 'Tổng tiền đơn hàng',
      dataIndex: 'price',
    },
    {
      title: 'Tiền hoa hồng',
      dataIndex: 'hoahong',
    },
  ];
  const data = [
    {
      key: '1',
      id: '#ORDER0017',
      user: 'Đỗ Thanh Hà',
      status: 'Đang chờ hoàn thành',
      price: '3,080,000',
      hoahong: '0'
    },
    {
      key: '2',
      id: '#ORDER0016',
      user: 'Nguyễn Văn An',
      status: 'Đang chờ hoàn thành',
      price: '8,360,000',
      hoahong: '0'
    },
    {
      key: '3',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '4',
      id: '#ORDER0012',
      user: 'Kim',
      status: 'Đang chờ hoàn thành',
      price: '15,500,000',
      hoahong: '0'
    },
    {
      key: '5',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '6',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '7',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '8',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '9',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '10',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '11',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '12',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '13',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '14',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '15',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '16',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '17',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '18',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '19',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '20',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '21',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '22',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '23',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      key: '24',
      id: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={data}/>
    </>
  )
}

export default History

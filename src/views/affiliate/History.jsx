import React from 'react'
import DataTable from 'react-data-table-component';
import "../../assets/scss/plugins/extensions/react-paginate.scss"
import "../../assets/scss/pages/data-list.scss"

const History = () => {
  const data = [
    {
      id: 1,
      key: '#ORDER0017',
      user: 'Đỗ Thanh Hà',
      status: 'Đang chờ hoàn thành',
      price: '3,080,000',
      hoahong: '0'
    },
    {
      id: 2,
      key: '#ORDER0016',
      user: 'Nguyễn Văn An',
      status: 'Đang chờ hoàn thành',
      price: '8,360,000',
      hoahong: '0'
    },
    {
      id: 3,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 4,
      key: '#ORDER0012',
      user: 'Kim',
      status: 'Đang chờ hoàn thành',
      price: '15,500,000',
      hoahong: '0'
    },
    {
      id: 5,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 6,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 7,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 8,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 9,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 10,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 11,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 12,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 13,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 14,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 15,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 16,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 17,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 18,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 19,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 20,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 21,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 22,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 23,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
    {
      id: 24,
      key: '#ORDER0013',
      user: 'Nguyen Long',
      status: 'Đang chờ hoàn thành',
      price: '3,989,000',
      hoahong: '0'
    },
  ];
const columns = [
    {
        name: 'Mã đơn hàng',
        selector: 'key',
        sortable: true,
        width: '15rem',
    },
    {
        name: 'Người mua',
        selector: 'user',
        sortable: true,
    },
    {
        name: 'Trạng thái đơn hàng',
        selector: 'status',
        sortable: true,
    },
    {
      name: 'Tổng tiền đơn hàng',
      selector: 'price',
      sortable: true,
      
  },
  {
    name: 'Tiền hoa hồng',
    selector: 'hoahong',
    sortable: true,
    width: '10rem'
   }
// },
//     {
//         name: 'Thao tác',
//         selector: 'action',
//         sortable: true,
//         right: true,
//         cell: row => (
//             <ActionsComponent
//                 row={row}
//             // getData={this.props.getData}
//             // parsedFilter={this.props.parsedFilter}
//             // currentData={this.handleCurrentData}
//             // deleteRow={this.handleDelete}
//             />
//         ),
//     },
];
const customStyles = {
    headCells: {
        style: {
            whiteSpace: "nowrap",
        },
    },
    rows: {
        style: {
            ":hover": {
                transform: "none !important",
            }, // override the row height,
        }
    },
};
  return (
    <>
      <DataTable
        noHeader
        columns={columns}
        data={data}
        customStyles={customStyles}
      />
    </>
  )
}

export default History

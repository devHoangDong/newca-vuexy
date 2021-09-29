import React from 'react';
import DataTable from "react-data-table-component";
import { Edit, Eye } from 'react-feather';
import "../../../assets/scss/pages/data-list.scss";
import "../../../assets/scss/plugins/extensions/react-paginate.scss";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";

// This sets the mock adapter on the default instance



const index = () => {
    const data = [
        { id: 1, no: '1', name: 'Chữ ký số', describe: 'Chữ ký số có giá trị pháp lý tương đương với chữ ký tay của người đó - Có hiệu lực pháp lý trong các giao dịch', action: '1982' },
        { id: 2, no: '2', name: 'Chứng thư số', describe: '' },
        { id: 3, no: '3', name: 'Hóa đơn điện tử', describe: 'Hóa đơn điện tử là giải pháp tối ưu cho doanh nghiệp trong thời đại công nghệ giúp doanh nghiệp tiết kiệm tối đa chi phí', year: '1982' },
    ];
    const columns = [
        {
            name: 'STT',
            selector: 'no',
            sortable: true,
            width: '3rem'
        },
        {
            name: 'Tên dịch vụ',
            selector: 'name',
            sortable: true,
            cell: row => (
                <span title={row.name} style={{ fontWeight: "bold" }}>
                    {row.name}
                </span>
            ),
            width: '11rem'
        },
        {
            name: 'Mô tả',
            selector: 'describe',
            sortable: true,
            width: '53rem'
        },
        {
            name: 'Thao tác',
            selector: 'action',
            sortable: true,
            right: true,
            cell: row => (
                <ActionsComponent
                    row={row}
                // getData={this.props.getData}
                // parsedFilter={this.props.parsedFilter}
                // currentData={this.handleCurrentData}
                // deleteRow={this.handleDelete}
                />
            ),
        },
    ];
    const customStyles = {
        headCells: {
            style: {
                whiteSpace: "nowrap"
            },
        },
        rows: {
            style: {
                ":hover": {
                    transform: "none !important",
                } // override the row height
            }
        },
    };
    const ActionsComponent = props => {
        return (
            <div className="data-list-action">
                <Eye
                    className="cursor-pointer mr-1"
                    size={20}
                // onClick={() => {
                //     return props.currentData(props.row)
                // }}
                />
                <Edit
                    className="cursor-pointer"
                    size={20}
                // onClick={() => {
                //     props.deleteRow(props.row)
                // }}
                />
            </div>
        )
    }
    return (
        <div>
            <Breadcrumbs
                breadCrumbTitle="Chọn mua dịch vụ"
                breadCrumbActive="Chọn mua dịch vụ"
            />
            <div
                className={`data-list "list-view"`}>
                <DataTable
                    noHeader
                    columns={columns}
                    data={data}
                    customStyles={customStyles}
                />

            </div>
        </div>
    );
};

export default index;
import React, { useState } from 'react';
import Breadcrumbs from "../../components/@vuexy/breadCrumbs/BreadCrumb"
import DataTable from "react-data-table-component"
import { Check, Edit, Eye, Settings, Trash } from 'react-feather'
import "../../assets/scss/plugins/extensions/react-paginate.scss"
import "../../assets/scss/pages/data-list.scss"
import { Input, CustomInput, Row, Col } from 'reactstrap'
import Flatpickr from "react-flatpickr"
import { useHistory } from 'react-router-dom';
import {
    Breadcrumb,
    BreadcrumbItem,
    UncontrolledButtonDropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle
} from "reactstrap"
import { NavLink } from "react-router-dom"



const General = () => {
    const [basicPicker, setBasicPicker] = useState(new Date())
    const history = useHistory()
    const data = [
        { id: 1, no: '1', name: '152', subject: 'Lỗi token chữ ký số NewCA (3)', datesend: '26/03/2021', status: 'Đang xử lý', note: '' },
        { id: 2, no: '2', name: '153', subject: 'Lỗi token chữ ký số NewCA (4)', datesend: '26/04/2021', status: 'Đã hoàn thành', note: '' },
        { id: 3, no: '3', name: '154', subject: 'Lỗi token chữ ký số NewCA (5)', datesend: '26/05/2021', status: 'Đã hoàn thành', note: '' },
    ];
    const columns = [
        {
            name: 'STT',
            selector: 'no',
            sortable: true,
            width: '5%'
        },
        {
            name: 'ID',
            selector: 'name',
            sortable: true,
            cell: row => (
                <span title={row.name} style={{ fontWeight: "bold" }}>
                    {row.name}
                </span>
            ),
            width: '10%'
        },
        {
            name: 'Subject',
            selector: 'subject',
            sortable: true,
            width: '40%'
        },
        {
            name: 'Ngày gửi',
            selector: 'datesend',
            sortable: true,
            width: '15%'
        },
        {
            name: 'Trạng thái',
            selector: 'status',
            sortable: true,
            width: '15%'
        },
        {
            name: 'Ghi chú',
            selector: 'note',
            sortable: true,
            right: true,
            width: '15%'
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
                <UncontrolledButtonDropdown>
                    <DropdownToggle
                        color="primary"
                        size="sm"
                        className="dropdown-toggle"
                    >
                        <Settings
                            size={14}
                            style={{
                                left: 0
                            }}
                        />
                    </DropdownToggle>
                    <DropdownMenu tag="ul" right>
                        <DropdownItem tag="li">
                            <NavLink className="text-dark w-100" to="/search">
                                Xem chi tiết
                                </NavLink>
                        </DropdownItem>
                        <DropdownItem tag="li">
                            <NavLink className="text-dark w-100" to='/manage-exandcts'>
                                Gia hạn
                                </NavLink>
                        </DropdownItem>
                        <DropdownItem tag="li">
                            <NavLink className="text-dark w-100" to='/manage-editcts'>
                                Chỉnh sửa
                                </NavLink>
                        </DropdownItem>
                        <DropdownItem tag="li">
                            <NavLink className="text-dark w-100" to="/manage-restorects">
                                Khôi phục
                                </NavLink>
                        </DropdownItem>
                        <DropdownItem tag="li">
                            <NavLink className="text-dark w-100" to="/manage-stopcts">
                                Tạm dừng
                                </NavLink>
                        </DropdownItem>
                        <DropdownItem tag="li">
                            <NavLink className="text-dark w-100" to="/manage-reclaimcts">
                                Thu hồi
                                </NavLink>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
                {/* <Settings
                    className="cursor-pointer mr-1"
                    size={20}
                    onClick={() => {
                        history.push("/search")
                    }}
                /> */}
                {/* <Edit
                    className="cursor-pointer"
                    size={20}
                // onClick={() => {
                //     props.deleteRow(props.row)
                // }}
                /> */}
            </div>
        )
    }
    
    const handlePick = (date) => {
        setBasicPicker(date)
    }
    return (
        <div>
            <Breadcrumbs
                breadCrumbTitle="Yêu cầu hỗ trợ"
                breadCrumbParent="Yêu cầu hỗ trợ"
            />
            {/* <Breadcrumbs
                breadCrumbTitle="Quản lý dịch vụ"
                breadCrumbParent="Quản lý dịch vụ"
                breadCrumbParent2="Chứng thư số"
                breadCrumbActive="Thông tin chi tiết"
            /> */}
            <div
                className={`data-list "list-view"`}>
                <DataTable
                    columns={columns}
                    data={data}
                    title="Danh sách yêu cầu"
                    customStyles={customStyles}
                />

            </div>
        </div>
    );
};

export default General;
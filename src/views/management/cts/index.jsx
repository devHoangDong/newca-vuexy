import React, { useState } from 'react';
import DataTable from "react-data-table-component";
import { Settings } from 'react-feather';
import { NavLink } from 'react-router-dom';
import {
    Col, DropdownItem, DropdownMenu,
    DropdownToggle, Input, Row, UncontrolledButtonDropdown,
    Card, CardBody
} from 'reactstrap';
import "../../../assets/scss/pages/data-list.scss";
import "../../../assets/scss/plugins/extensions/react-paginate.scss";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";



const General = () => {
    const [basicPicker, setBasicPicker] = useState(new Date())
    const data = [
        { id: 1, no: '1', name: 'Công ty TNHH Dr.Marie', codects: '54010163B89501F2EF4EBAA0C717BC20', datesign: '26/03/2021', dateexpire: '26/04/2021' },
        { id: 2, no: '2', name: 'Công ty TNHH Dr.Marie', codects: '54010163B89501F2EF4EBAA0C717BC20', datesign: '26/03/2021', dateexpire: '26/04/2021' },
        { id: 3, no: '3', name: 'Hoàng Ninh', codects: '54010163B89501F2EF4EBAA0C717BC20', datesign: '27/03/2021', dateexpire: '27/04/2021' },
        { id: 4, no: '4', name: 'Hoàng Ninh', codects: '54010163B89501F2EF4EBAA0C717BC20', datesign: '27/03/2021', dateexpire: '27/04/2021' },
    ];
    const columns = [
        {
            name: 'STT',
            selector: 'no',
            sortable: true,
            width: '5%'
        },
        {
            name: 'Tên giao dịch',
            selector: 'name',
            sortable: true,
            cell: row => (
                <span title={row.name} style={{ fontWeight: "bold" }}>
                    {row.name}
                </span>
            ),
            width: '31%'
        },
        {
            name: 'Mã chứng thư số',
            selector: 'codects',
            sortable: true,
            width: '30%'
        },
        {
            name: 'Ngày đăng ký',
            selector: 'datesign',
            sortable: true,
            width: '12%'
        },
        {
            name: 'Ngày hết hạn',
            selector: 'dateexpire',
            sortable: true,
            width: '12%'
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
            style: {
                whiteSpace: 'nowrap',
            },
            width: '10%'
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
                } // override the row 
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
    const CustomHeader = () => {
        return (
            <Card>
                <CardBody>
                <Row>
                    <Col lg="4" md="12" className="pb-lg-0 pb-2">
                        <Input type="text" id="name" placeholder="Tên giao dịch" />
                    </Col>
                    <Col lg="4" md="12" className="pb-lg-0 pb-2">
                        <Input required="" type="text" className="form-control" placeholder="Ngày đăng ký"
                            onFocus={(e) => (e.currentTarget.type = "date")}
                            onBlur={(e) => (e.currentTarget.type = "text")} />
                    </Col>
                    <Col lg="4" md="12" className="pb-lg-0">
                        <Input required="" type="text" className="form-control" placeholder="Ngày hết hạn"
                            onFocus={(e) => (e.currentTarget.type = "date")}
                            onBlur={(e) => (e.currentTarget.type = "text")} />
                    </Col>
                </Row>
                </CardBody>
            </Card>
        )
    }
    const handlePick = (date) => {
        setBasicPicker(date)
    }
    return (
        <div>
            <Breadcrumbs
                breadCrumbTitle="Quản lý dịch vụ"
                breadCrumbParent="Quản lý dịch vụ"
                breadCrumbActive="Chứng thư số"
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
                    noHeader
                    subHeader
                    subHeaderComponent={<CustomHeader handlePick={handlePick} basicPicker={basicPicker} />}
                    customStyles={customStyles}
                />

            </div>
        </div>
    );
};

export default General;
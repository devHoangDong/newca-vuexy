import React, { useState } from 'react';
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import DataTable from "react-data-table-component"
import { Check, Edit, Eye, Settings, Trash } from 'react-feather'
import "../../../assets/scss/plugins/extensions/react-paginate.scss"
import "../../../assets/scss/pages/data-list.scss"
import { Input, CustomInput, Row, Col } from 'reactstrap'
import Flatpickr from "react-flatpickr"
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
    const data = [
        { id: 1, no: '1', name: 'Công ty TNHH Dr.Marie', service: 'Chứng thư số', datesign: '26/03/2021', dateexpire: '26/04/2021' },
        { id: 2, no: '2', name: 'Công ty TNHH Dr.Marie', service: 'Chữ ký số', datesign: '26/03/2021', dateexpire: '26/04/2021' },
        { id: 3, no: '3', name: 'Hoàng Ninh', service: 'Chứng thư số', datesign: '27/03/2021', dateexpire: '27/04/2021' },
        { id: 4, no: '4', name: 'Hoàng Ninh', service: 'Chữ ký số', datesign: '27/03/2021', dateexpire: '27/04/2021' },
    ];
    const columns = [
        {
            name: 'STT',
            selector: 'no',
            sortable: true,
            width: '4rem'
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
            width: '26rem'
        },
        {
            name: 'Dịch vụ',
            selector: 'service',
            sortable: true,
            width: '12rem'
        },
        {
            name: 'Ngày đăng ký',
            selector: 'datesign',
            sortable: true,
            width: '12rem'
        },
        {
            name: 'Ngày hết hạn',
            selector: 'dateexpire',
            sortable: true,
            width: '12rem'
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
            width: '10rem'
        },
    ];
    const ActionsComponent = props => {
        return (
            <div className="data-list-action">
                <Settings
                    className="cursor-pointer mr-1"
                    size={20}
                // onClick={() => {
                //     return props.currentData(props.row)
                // }}
                />
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
            <div>
                <Row>
                    <Col lg="3" md="12">
                        <Input type="text" id="name" placeholder="Tên giao dịch" />
                    </Col>
                    <Col lg="3" md="12">
                        <CustomInput
                            type="select"
                            name="select"
                            id="typeservice"
                        >
                            <option>Chứng thư số</option>
                            <option>Chữ ký số</option>
                        </CustomInput>
                    </Col>
                    <Col lg="3" md="12">
                        <Input required="" type="text" class="form-control" placeholder="Ngày đăng ký"
                            onFocus={(e) => (e.currentTarget.type = "date")}
                            onBlur={(e) => (e.currentTarget.type = "text")} />
                    </Col>
                    <Col lg="3" md="12">
                        <Input required="" type="text" class="form-control" placeholder="Ngày hết hạn"
                            onFocus={(e) => (e.currentTarget.type = "date")}
                            onBlur={(e) => (e.currentTarget.type = "text")} />
                    </Col>
                </Row>



            </div>
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
            />
            <div
                className={`data-list "list-view"`}>
                <DataTable
                    columns={columns}
                    data={data}
                    noHeader
                    subHeader
                    subHeaderComponent={<CustomHeader handlePick={handlePick} basicPicker={basicPicker} />}
                />
            </div>
        </div>
    );
};

export default General;
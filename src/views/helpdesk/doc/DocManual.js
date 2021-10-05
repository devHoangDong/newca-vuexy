import React from "react"
import DataTable from "react-data-table-component"
import { Download } from "react-feather"
import {
  Col, Row
} from "reactstrap"
import "../../../assets/scss/pages/data-list.scss"
import "../../../assets/scss/pages/faq.scss"
import "../../../assets/scss/plugins/extensions/react-paginate.scss"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import BottomContent from '../common/BottomContent'
import DocSearch from "./DocSearch"

const DocManual = () => {
  const data = [
    { id: 1, name: 'Quy chế chứng thực (CP/CPS)' },
    { id: 2, name: 'Token Manager Setup v5' },
    { id: 3, name: 'Token Manager Setup v4' },
    { id: 4, name: 'Token Manager Setup v3' },
    { id: 5, name: 'Phần mềm dành cho đối tác' },
    { id: 6, name: 'Hướng dẫn sử dụng hệ thống cấp phát chứng thư số NewCA V2' },
    { id: 7, name: 'Giấy đăng ký cấp chứng thư số công cộng NewCA - Mẫu DK01' },
    { id: 8, name: 'Giấy xác nhận thông tin chứng thư số NewCA - Mẫu DK02' },
  ];
  const columns = [
    {
      name: 'STT',
      selector: 'id',
      sortable: true,
      cell: row => (
        <span title={row.id} style={{ fontWeight: "bold" }}>
          {row.id}
        </span>
      ),
      width: '5%'
    },
    {
      name: 'Tài liệu',
      selector: 'name',
      sortable: true,
      cell: row => (
        <span title={row.name} style={{ fontWeight: "bold" }}>
          {row.name}
        </span>
      ),
      width: '80%'
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
    // subHeader: {
    //   style: {
    //     minHeight: "1rem"
    //   }
    // }
  };
  const ActionsComponent = props => {
    return (
      <div className="data-list-action">
        <Download
          className="cursor-pointer mr-1"
          size={20}
        // onClick={() => {
        //     return props.currentData(props.row)
        // }}
        />Tải xuống
      </div>
    )
  }
  return (
    <React.Fragment>
      <Breadcrumbs
        breadCrumbTitle="Tài liệu hướng dẫn"
        breadCrumbParent="Hỗ trợ"
        breadCrumbActive="Tài liệu hướng dẫn"
      />
      <Row>
        <Col sm="12">
          <DocSearch />
        </Col>
      </Row>
      <div
        className={`data-list "list-view"`}>
        <DataTable
          noHeader
          // subHeader
          // subHeaderComponent="Tài liệu"
          columns={columns}
          data={data}
          customStyles={customStyles}
        />

      </div>
      <BottomContent />
    </React.Fragment>
  )
}

export default DocManual

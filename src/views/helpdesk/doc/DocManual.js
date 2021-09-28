import React from "react"
import { Col, Row } from "reactstrap"
import "../../../assets/scss/pages/faq.scss"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import BottomContent from '../common/BottomContent'
import DocSearch from "./DocSearch"


const DocManual = () => {
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
      <BottomContent />
    </React.Fragment>
  )
}

export default DocManual

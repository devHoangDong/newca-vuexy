import React from "react"
import { Info, Mail, Phone } from "react-feather"
import { Link } from "react-router-dom"
import { Card, CardBody, Col, Row, Button } from "reactstrap"
import "../../../assets/scss/pages/faq.scss"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import DocSearch from "./DocSearch"
import TopSearch from '../common/TopSearch';
import BottomContent from '../common/BottomContent';


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

import React from "react"
import { Info, Mail, Phone } from "react-feather"
import { Link } from "react-router-dom"
import { Card, CardBody, Col, Row, Button } from "reactstrap"
import "../../../assets/scss/pages/faq.scss"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import QuestionsSearch from "./QuestionsSearch"
import TopSearch from '../common/TopSearch';
import BottomContent from '../common/BottomContent';


class Faq extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Câu hỏi thường gặp"
          breadCrumbParent="Hỗ trợ"
          breadCrumbActive="Câu hỏi thường gặp"
        />
        <Row>
          <Col sm="12">
            <QuestionsSearch />
          </Col>
        </Row>
        <BottomContent />
      </React.Fragment>
    )
  }
}

export default Faq

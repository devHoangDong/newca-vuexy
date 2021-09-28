import React from "react"
import { Col, Row } from "reactstrap"
import "../../../assets/scss/pages/faq.scss"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import BottomContent from '../common/BottomContent'
import QuestionsSearch from "./QuestionsSearch"


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

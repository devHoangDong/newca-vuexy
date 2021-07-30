import React from "react";
import { Row, Col } from "reactstrap";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import KnowledgeBaseMain from "./KnowledgeBaseMain";
import "../../../assets/scss/pages/knowledge-base.scss";

class KnowledgeBase extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs breadCrumbTitle="Hỗ trợ" breadCrumbParent="Hỗ trợ" />
        <Row>
          <Col sm="12">
            <KnowledgeBaseMain />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default KnowledgeBase;
